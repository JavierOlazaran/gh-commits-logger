using System.Collections.Generic;
using System.Threading.Tasks;
using CommitsLoggerAPI.Model.DTOs.V1;

namespace CommitsLoggerAPI.Repositories
{
    public interface IGithubRequests
    {
        public Task<List<GithubCommitsResponseDto>> GetCommitsFromGithub(string owner, string repository);
    }
}