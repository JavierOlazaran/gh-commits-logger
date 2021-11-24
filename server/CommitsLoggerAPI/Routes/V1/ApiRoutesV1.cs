using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CommitsLoggerAPI.Routes.V1
{
    public static class ApiRoutesV1
    {
        public const string Root = "api";
        public const string Version = "/v1";
        public const string Base = Root + Version;

        public static class CommitsEndpoints
        {
            public const string GetAll = Base + "/commits/{owner}/{repo}";
        }
        
    }
}