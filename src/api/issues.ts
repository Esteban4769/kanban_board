export const getIssues = (name: string) => {
  return fetch(`https://api.github.com/repos/${name}/issues`)
    .then(resp => resp.json());
};