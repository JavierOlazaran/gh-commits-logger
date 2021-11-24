using System.Linq;
using System.Threading.Tasks;
using CommitsLoggerAPI.CQRS.Queries;
using Microsoft.AspNetCore.Mvc;
using CommitsLoggerAPI.Routes.V1;
using MediatR;

namespace CommitsLoggerAPI.Controllers
{

    public class GetCommits : ControllerBase
    {
        
        private readonly IMediator _mediator;

        public GetCommits(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet(ApiRoutesV1.CommitsEndpoints.GetAll)]
        public async Task<IActionResult> GetAll([FromRoute] string owner, [FromRoute] string repo)
        {
            var query = new GetAllCommitsQuery(owner, repo);
            var result = await _mediator.Send(query);
            return result.Any() ? Ok(result) : NoContent();
        }
    }
}