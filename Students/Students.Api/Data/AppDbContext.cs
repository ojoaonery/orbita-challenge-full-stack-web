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
        // Configurações de modelo
        modelBuilder.Entity<Student>()
            .HasIndex(s => s.Ra)
            .IsUnique();

        base.OnModelCreating(modelBuilder);
    }
}
