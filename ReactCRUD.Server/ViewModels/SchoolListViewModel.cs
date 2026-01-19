using System.Reflection.Metadata;

namespace ReactCRUD.Server.ViewModels
{
    public class SchoolListViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string StudentCount { get; set; } = string.Empty;
    }
}
