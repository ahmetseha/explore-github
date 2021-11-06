import { useState } from "react";
// import { FormattedMessage } from "react-intl";

import getUserRepos from "../api";

const Explore = () => {
  const [name, setName] = useState("");
  const [repos, setRepos] = useState([]);

  const getUserRepo = (e) => {
    e.preventDefault();
    getUserRepos
      .get(`${name}/repos?sort=created&direction=desc&per_page=300`)
      .then((res) => {
        console.log(res.data);
        setRepos(res.data);
      });
  };
  return (
    <div>
      <form onSubmit={getUserRepo}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {repos ? (
        repos.map((repo, id) => {
          return (
            <div key={id}>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </div>
          );
        })
      ) : (
        <p>Naber</p>
      )}
    </div>
  );
};

export default Explore;
