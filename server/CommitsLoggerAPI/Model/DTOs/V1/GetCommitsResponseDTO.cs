using System;
using System.Collections.Generic;

namespace CommitsLoggerAPI.Model.DTOs.V1
{
    public class CommitToReturn {
        public string sha { get; set; }
        public string author { get; set; }
        public string message { get; set; }
        public DateTimeOffset date { get; set; }
        public Uri url { get; set; }
    }
}