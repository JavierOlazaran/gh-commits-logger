using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using CommitsLoggerAPI.Model.DTOs.V1;

namespace CommitsLoggerAPI.Repositories
{
    public class GithubRequests: IGithubRequests
    {
        private readonly IHttpClientFactory _httpClientFactory;
        
        public GithubRequests(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        
        public async Task<List<GithubCommitsResponseDto>> GetCommitsFromGithub(string owner, string repository) {

            var githubApiUrl = $"repos/{owner}/{repository}/commits";

            var client = _httpClientFactory.CreateClient("github");

            var response = await client.GetFromJsonAsync<List<GithubCommitsResponseDto>>(githubApiUrl);

            return response;
        }
    }
}