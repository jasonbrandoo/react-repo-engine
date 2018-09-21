import React, { Component } from 'react';
import axios from 'axios';
import './RepoDescription.css';

class RepoDescription extends Component {
  state = {
    description: [],
    url: this.props.match.url,
  }

  componentDidMount() {
    const api = 'https://api.github.com/repos';
    const { url } = this.state;
    axios.get(api + url)
      .then(({ data }) => {
        this.setState({
          description: [data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { description } = this.state;
    const renderDescription = description.map(info => (
      <React.Fragment key={info.id}>
        <div className="description-panel">
          <h2 className="description-heading">{info.name}</h2>
          <small>{info.owner.type}</small>
          <img src={info.owner.avatar_url} alt="freecodeCamp" className="description-image" />
          <p>{info.description}</p>
        </div>
        <div className="description-panel">
          <h2 className="description-heading">{info.full_name}</h2>
          <p>
            Language :
            <span>{info.language}</span>
          </p>
          <p>
            Stars :
            <span>{info.stargazers_count}</span>
          </p>
          <p>
            Forks :
            <span>{info.forks}</span>
          </p>
          <p>
            Watchers :
            <span>{info.watchers}</span>
          </p>
          <p>
            License :
            <span>{info.license.name}</span>
          </p>
        </div>
      </React.Fragment>
    ));
    if (description.length === 0) {
      return <p>Loading...</p>;
    } return (
      <div className="description-container">
        {renderDescription}
      </div>
    );
  }
}

export default RepoDescription;
