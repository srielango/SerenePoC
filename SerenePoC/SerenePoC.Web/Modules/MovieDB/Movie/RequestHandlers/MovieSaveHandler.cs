using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SerenePoC.MovieDB.MovieRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenePoC.MovieDB.MovieRow;

namespace SerenePoC.MovieDB;

public interface IMovieSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class MovieSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieSaveHandler
{
    public MovieSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}