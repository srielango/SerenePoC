using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SerenePoC.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenePoC.Administration.LanguageRow;


namespace SerenePoC.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}