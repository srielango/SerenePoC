using FluentMigrator;
using System;

namespace SerenePoC.Migrations.DefaultDB
{
    [Migration(20230622_105000)]
    public class DefaultDB_20230622_105000_MovieKind : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Movie").InSchema("mov")
                .AddColumn("Kind").AsInt32().NotNullable()
                    .WithDefaultValue(1);
        }
    }
}