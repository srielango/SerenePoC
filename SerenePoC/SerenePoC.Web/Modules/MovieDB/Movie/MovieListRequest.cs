using Serenity.Services;
using System.Collections.Generic;

namespace SerenePoC.Web.Modules.MovieDB.Movie
{
    public class MovieListRequest : ListRequest
    {
        public List<int> Genres { get; set; }
    }
}
