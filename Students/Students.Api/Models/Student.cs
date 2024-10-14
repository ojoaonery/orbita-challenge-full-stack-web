using System;
using System.ComponentModel.DataAnnotations;

namespace Students.Api.Models;

public class Student
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    public string Ra { get; private set; }

    [Required(ErrorMessage = "O nome é obrigatório.")]
    [StringLength(100, ErrorMessage = "O nome deve ter no máximo 100 caracteres.")]
    public string Name { get; set; }

    [Required(ErrorMessage = "O email é obrigatório.")]
    [EmailAddress(ErrorMessage = "O email deve ser válido.")]
    public string Email { get; set; }

    [Required(ErrorMessage = "O CPF é obrigatório.")]
    [StringLength(11, ErrorMessage = "O CPF deve ter 11 caracteres.")]
    public string Cpf { get; private set; }

    public Student (string ra, string name, string email, string cpf)
    {
        Ra = ra;
        Name = name;
        Email = email;
        Cpf = cpf;
    }   
}
