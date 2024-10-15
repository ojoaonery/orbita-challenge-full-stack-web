namespace Students.Api.Models;

public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public int Ra { get; private set; }
    public string Cpf { get; private set; }

    public Student (string name, string email, int ra, string cpf)
    {
        Name = name;
        Email = email;
        Ra = ra;
        Cpf = cpf;
    }   
}
