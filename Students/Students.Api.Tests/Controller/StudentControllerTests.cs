using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Students.Api.Controllers;
using Students.Api.Data;
using Students.Api.Models;

namespace Students.Api.Tests.Controllers
{
    public class StudentControllerTests
    {
        private readonly AppDbContext _context;
        private readonly StudentController _controller;

        public StudentControllerTests()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            _context = new AppDbContext(options);
            _controller = new StudentController(_context);
        }

        [Fact]
        public async Task CreateStudent_ReturnsCreatedStudent()
        {
            var student = new Student("John Doe", "john@example.com", 123, "12345678901");

            var result = await _controller.CreateStudent(student);

            var actionResult = Assert.IsType<CreatedAtActionResult>(result);
            var createdStudent = Assert.IsType<Student>(actionResult.Value);
            Assert.Equal("John Doe", createdStudent.Name);
            Assert.Equal("john@example.com", createdStudent.Email);
        }

        [Fact]
        public async Task GetStudents_ReturnsAllStudents()
        {
            var students = new Student("Jane Doe", "jane@example.com", 456, "09876543210");

            await _context.Students.AddRangeAsync(students);
            await _context.SaveChangesAsync();

            var result = await _controller.GetStudents();

            var actionResult = Assert.IsType<ActionResult<IEnumerable<Student>>>(result);
            var studentList = Assert.IsType<List<Student>>(actionResult.Value);
            Assert.Equal(2, studentList.Count);
        }

        [Fact]
        public async Task GetStudent_ReturnsStudentById()
        {
            var student = new Student("John Doe", "john@example.com", 123, "12345678901");
            await _context.Students.AddAsync(student);
            await _context.SaveChangesAsync();

            var result = await _controller.GetStudent(student.Id);

            var actionResult = Assert.IsType<ActionResult<Student>>(result);
            var retrievedStudent = Assert.IsType<Student>(actionResult.Value);
            Assert.Equal("John Doe", retrievedStudent.Name);
        }

        [Fact]
        public async Task UpdateStudent_UpdatesExistingStudent()
        {
            var student = new Student("John Doe", "john@example.com", 789, "12345678901");
            await _context.Students.AddAsync(student);
            await _context.SaveChangesAsync();

            var existingStudent = await _context.Students.FindAsync(student.Id);
            existingStudent.Name = "Jane Doe";
            existingStudent.Email = "jane@example.com";

            var result = await _controller.UpdateStudent(existingStudent.Id, existingStudent);

            Assert.IsType<NoContentResult>(result);

            var updatedStudent = await _controller.GetStudent(existingStudent.Id);
            Assert.Equal("Jane Doe", updatedStudent.Value.Name);
        }

        [Fact]
        public async Task DeleteStudent_RemovesStudentById()
        {
            var student = new Student("John Doe", "john@example.com", 123, "12345678901");
            await _context.Students.AddAsync(student);
            await _context.SaveChangesAsync();

            var result = await _controller.DeleteStudent(student.Id);

            Assert.IsType<NoContentResult>(result);

            var notFoundResult = await _controller.GetStudent(student.Id);
            Assert.IsType<NotFoundResult>(notFoundResult.Result);
        }
    }
}