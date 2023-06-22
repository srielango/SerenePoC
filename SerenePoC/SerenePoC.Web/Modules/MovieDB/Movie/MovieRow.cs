using SerenePoC.Web.Modules.MovieDB.Movie;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace SerenePoC.MovieDB;

[ConnectionKey("Default"), Module("MovieDB"), TableName("[mov].[Movie]")]
[DisplayName("Movies"), InstanceName("Movie")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class MovieRow : Row<MovieRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Movie Id"), Identity, IdProperty]
    public int? MovieId
    {
        get => fields.MovieId[this];
        set => fields.MovieId[this] = value;
    }

    [DisplayName("Title"), Size(200), NotNull, QuickSearch, NameProperty]
    public string Title
    {
        get => fields.Title[this];
        set => fields.Title[this] = value;
    }

    [DisplayName("Description"), Size(1000), QuickSearch]
    public string Description
    {
        get => fields.Description[this];
        set => fields.Description[this] = value;
    }

    [DisplayName("Storyline"), QuickSearch]
    public string Storyline
    {
        get => fields.Storyline[this];
        set => fields.Storyline[this] = value;
    }

    [DisplayName("Year")]
    public int? Year
    {
        get => fields.Year[this];
        set => fields.Year[this] = value;
    }

    [DisplayName("Release Date")]
    public DateTime? ReleaseDate
    {
        get => fields.ReleaseDate[this];
        set => fields.ReleaseDate[this] = value;
    }

    [DisplayName("Runtime (mins)")]
    public int? Runtime
    {
        get => fields.Runtime[this];
        set => fields.Runtime[this] = value;
    }

    [DisplayName("Kind"), NotNull, DefaultValue(MovieKind.Film)]
    public MovieKind? Kind
    {
        get => fields.Kind[this];
        set => fields.Kind[this] = value;
    }

    [DisplayName("Genre"), ForeignKey("[mov].Genre", "GenreId"), LeftJoin("g")]
    public int? GenreId
    {
        get => fields.GenreId[this];
        set => fields.GenreId[this] = value;
    }

    [DisplayName("Genre"), Expression("g.Name")]
    public string GenreName
    {
        get => fields.GenreName[this];
        set => fields.GenreName[this] = value;
    }
    public class RowFields : RowFieldsBase
    {
        public Int32Field MovieId;
        public StringField Title;
        public StringField Description;
        public StringField Storyline;
        public Int32Field Year;
        public DateTimeField ReleaseDate;
        public Int32Field Runtime;
        public EnumField<MovieKind> Kind;
        public Int32Field GenreId;
        public StringField GenreName;

    }
}