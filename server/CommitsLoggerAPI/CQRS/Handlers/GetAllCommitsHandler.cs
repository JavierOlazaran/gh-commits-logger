using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using CommitsLoggerAPI.CQRS.Queries;
using CommitsLoggerAPI.Extensions;
using CommitsLoggerAPI.Model.DTOs.V1;
using CommitsLoggerAPI.Repositories;
using MediatR;

namespace CommitsLoggerAPI.CQRS.Handlers
{
    public class GetAllCommitsHandler : IRequestHandler<GetAllCommitsQuery, List<CommitToReturn>>
    {
        private readonly IGithubRequests _githubRequests;
        private readonly IResponseMapper _responseMapper;
        
        public GetAllCommitsHandler(IGithubRequests githubRequests, IResponseMapper responseMapper)
        {
            _githubRequests = githubRequests;
            _responseMapper = responseMapper;
        }
        
        public async Task<List<CommitToReturn>> Handle(GetAllCommitsQuery request, CancellationToken cancellationToken)
        {
            var commitsResult = await _githubRequests.GetCommitsFromGithub(request.Owner, request.Repo);
            return _responseMapper.MapGithubResponseToClientResponse(commitsResult);
        }
    }
}