using System.Collections.Generic;
using CommitsLoggerAPI.Model.DTOs.V1;

namespace CommitsLoggerAPI.Extensions
{
    public interface IResponseMapper
    {
        public List<CommitToReturn> MapGithubResponseToClientResponse(
            IEnumerable<GithubCommitsResponseDto> githubResponse);
    }
}