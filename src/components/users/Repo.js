import React from 'react';
import { Link } from 'react-router-dom';
import './Repo.css';

const User = ({ repo }) => {
  const encURI = encodeURIComponent(repo.url);
  const decURI = decodeURIComponent(encURI);
  return (
    <React.Fragment>
      <div className="repo-heading">
        <Link to={`/${decURI}`} id="router-link">
          <h3 className="repo-text-heading">{repo.full_name}</h3>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default User;
