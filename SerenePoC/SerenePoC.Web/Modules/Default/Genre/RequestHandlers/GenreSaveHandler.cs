using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SerenePoC.Default.GenreRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenePoC.Default.GenreRow;

namespace SerenePoC.Default;

public interface IGenreSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class GenreSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreSaveHandler
{
    public GenreSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}