using System;
using Microsoft.EntityFrameworkCore;
using Students.Api.Models;

namespace Students.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Student> Students { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        #region Student modelBuilder
        modelBuilder.Entity<Student>(student => {
            student
                .HasKey(s => s.Id);

            student
                .Property(s => s.Name)
                .IsRequired()
                .HasMaxLength(100);

            student
                .Property(s => s.Email)
                .IsRequired()
                .HasMaxLength(100);    

            student
                .HasIndex(s => s.Ra)
                .IsUnique();
            
            student
                .Property(s => s.Ra)
                .IsRequired();

            student
                .Property(s => s.Cpf)
                .IsRequired();    
        });
        #endregion

        base.OnModelCreating(modelBuilder);
    }
}
