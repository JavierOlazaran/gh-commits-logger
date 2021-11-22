export interface CommitsDTO {
  commits: Commit[];
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: string;
  name: string;
}
