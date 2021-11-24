export interface CommitsDTO {
  commits: Commit[];
}

export interface Commit {
  sha: string;
  author: string;
  message: string;
  date: string;
  url: string;
}
