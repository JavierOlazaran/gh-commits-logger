export interface CommitsDTO {
  commits: Commit[];
}

export interface Commit {
  sha: string;
  author: string;
  message: string;
  url: string;
}
