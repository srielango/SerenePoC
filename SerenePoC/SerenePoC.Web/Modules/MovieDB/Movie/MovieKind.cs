using Serenity.ComponentModel;
using System.ComponentModel;

namespace SerenePoC.Web.Modules.MovieDB.Movie
{
    [EnumKey("MovieDB.MovieKind")]
    public enum MovieKind
    {
        [Description("Film")]
        Film = 1,
        [Description("TV Series")]
        TvSeries = 2,
        [Description("Mini Series")]
        MiniSeries = 3
    }
}
