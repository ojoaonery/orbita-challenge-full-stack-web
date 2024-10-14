using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Students.Api.Migrations
{
    public partial class UpdateStudentModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Students",
                newName: "Name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Students",
                newName: "Nome");
        }
    }
}
