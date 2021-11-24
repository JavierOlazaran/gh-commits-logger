using System;
using System.Collections.Generic;
using System.Linq;
using CommitsLoggerAPI.Model.DTOs.V1;

namespace CommitsLoggerAPI.Extensions
{
    public class ResponseMapper : IResponseMapper
    {
        public List<CommitToReturn> MapGithubResponseToClientResponse(IEnumerable<GithubCommitsResponseDto> githubResponse)
        {
            if (githubResponse == null) throw new ArgumentNullException(nameof(githubResponse));
            var commitsToReturn = new List<CommitToReturn>();

            return githubResponse.Select(item => new CommitToReturn
                {
                    sha = item.Sha,
                    message = item.Commit.Message,
                    author = item.Commit.Author.Name,
                    date = item.Commit.Author.Date,
                    url = item.html_url
                })
                .Aggregate(commitsToReturn, (current, newItem) => current.Append(newItem).ToList());
        }
    }
}