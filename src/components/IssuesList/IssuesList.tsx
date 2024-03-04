import { getIssues } from "../../api/issues";

export const IssuesList = () => {
  getIssues('octocat/hello-world')
    .then(data => console.log(data));

  return (
    <div>
      issues list
    </div>
  );
};
