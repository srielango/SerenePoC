using FluentMigrator;
using System;

namespace SerenePoC.Migrations.DefaultDB
{
    [Migration(0230622_110300)]
    public class DefaultDB_20230622_110300_SampleGenres : AutoReversingMigration
    {
        public override void Up()
        {
            Insert.IntoTable("Genre").InSchema("mov")
                .Row(new
                {
                    Name = "Action"
                })
                .Row(new
                {
                    Name = "Drama"
                })
                .Row(new
                {
                    Name = "Comedy"
                })
                .Row(new
                {
                    Name = "Sci-fi"
                })
                .Row(new
                {
                    Name = "Fantasy"
                })
                .Row(new
                {
                    Name = "Documentary"
                });
        }
    }
}