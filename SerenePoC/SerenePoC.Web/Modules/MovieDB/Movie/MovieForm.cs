using SerenePoC.Web.Modules.MovieDB.Movie;
using Serenity.ComponentModel;
using System;

namespace SerenePoC.MovieDB.Forms;

[FormScript("MovieDB.Movie")]
[BasedOnRow(typeof(MovieRow), CheckNames = true)]
public class MovieForm
{
    public string Title { get; set; }
    [TextAreaEditor(Rows = 3)]
    public string Description { get; set; }
    [TextAreaEditor(Rows = 5)]
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }
    public int Runtime { get; set; }
    public MovieKind Kind { get; set; }
    public int GenreId { get; set; }
}