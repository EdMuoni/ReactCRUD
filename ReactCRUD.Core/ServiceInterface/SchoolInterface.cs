using ReactCRUD.Core.Domain;

namespace ReactCRUD.Core.ServiceInterface
{
    public interface SchoolInterface
    {
        Task<School> SchoolDetailsView(Guid id);
    }
}
