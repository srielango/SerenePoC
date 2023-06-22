using Serenity.Services;
using MyRequest = SerenePoC.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<SerenePoC.Administration.UserRow>;
using MyRow = SerenePoC.Administration.UserRow;

namespace SerenePoC.Administration
{
    public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
    {
        public UserListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}