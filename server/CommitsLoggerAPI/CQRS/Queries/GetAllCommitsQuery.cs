using System.Collections.Generic;
using CommitsLoggerAPI.Model.DTOs.V1;
using MediatR;

namespace CommitsLoggerAPI.CQRS.Queries
{
    public class GetAllCommitsQuery : IRequest<List<CommitToReturn>>
    {
        public string Owner { get; }
        public string Repo { get; }

        public GetAllCommitsQuery(string owner, string repo)
        {
            Owner = owner;
            Repo = repo;
        }
    }
}