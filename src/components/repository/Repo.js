import React from 'react';
import { NavLink } from 'react-router-dom';
import './Repo.css';

const Repo = ({ repo }) => {
  console.log(repo);
  return (
    <React.Fragment>
      <div className="repo-heading">
        <NavLink to={`/${repo.owner.login}/${repo.name}`} id="router-link">
          <h3 className="repo-text-heading">{repo.full_name}</h3>
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Repo;
