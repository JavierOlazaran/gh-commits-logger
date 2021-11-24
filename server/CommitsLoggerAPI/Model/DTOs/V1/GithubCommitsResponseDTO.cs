using System;
using System.Collections.Generic;

namespace CommitsLoggerAPI.Model.DTOs.V1
{
    public class GithubCommitsResponseDto
    {
        public string Sha { get; set; }
        public string node_id { get; set; }
        public Commit Commit { get; set; }
        public Uri Url { get; set; }
        public Uri html_url { get; set; }
        public Uri comments_url { get; set; }
        public GithubCommitsResponseDtoAuthor Author { get; set; }
        public GithubCommitsResponseDtoAuthor Committer { get; set; }
        public List<Parent> Parents { get; set; }
    }

    public class GithubCommitsResponseDtoAuthor
    {
        public string Login { get; set; }
        public long Id { get; set; }
        public string NodeId { get; set; }
        public Uri AvatarUrl { get; set; }
        public string GravatarId { get; set; }
        public Uri Url { get; set; }
        public Uri html_url { get; set; }
        public Uri FollowersUrl { get; set; }
        public string FollowingUrl { get; set; }
        public string GistsUrl { get; set; }
        public string StarredUrl { get; set; }
        public Uri SubscriptionsUrl { get; set; }
        public Uri OrganizationsUrl { get; set; }
        public Uri ReposUrl { get; set; }
        public string EventsUrl { get; set; }
        public Uri ReceivedEventsUrl { get; set; }
        public string Type { get; set; }
        public bool SiteAdmin { get; set; }
    }

    public class Commit
    {
        public CommitAuthor Author { get; set; }
        public CommitAuthor Committer { get; set; }
        public string Message { get; set; }
        public Tree Tree { get; set; }
        public Uri Url { get; set; }
        public long CommentCount { get; set; }
        public Verification Verification { get; set; }
    }

    public class CommitAuthor
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTimeOffset Date { get; set; }
    }

    public class Tree
    {
        public string Sha { get; set; }
        public Uri Url { get; set; }
    }

    public class Verification
    {
        public bool Verified { get; set; }
        public string Reason { get; set; }
        public string Signature { get; set; }
        public string Payload { get; set; }
    }

    public class Parent
    {
        public string Sha { get; set; }
        public Uri Url { get; set; }
        public Uri html_url { get; set; }
    }
}