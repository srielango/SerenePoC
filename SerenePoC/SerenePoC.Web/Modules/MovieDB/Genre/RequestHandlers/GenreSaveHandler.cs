using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SerenePoC.MovieDB.GenreRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenePoC.MovieDB.GenreRow;

namespace SerenePoC.MovieDB;

public interface IGenreSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class GenreSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreSaveHandler
{
    public GenreSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}