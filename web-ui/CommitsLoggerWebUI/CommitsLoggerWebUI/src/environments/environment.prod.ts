// in a productive app this configs should be included in a config file that is set per env in the CI/CD pipeline,

export const apiRoot: string = 'https://localhost:5001';
export const apiBase: string = '/api/v1';

export const environment = {
  production: false,
  commitLoggerEndpoints: {
    getAllCommits: apiRoot + apiBase + '/commits',
  }
};
