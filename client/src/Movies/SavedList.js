import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory();

  const routeToHome = (event) => {
    history.push('/');
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => {
        return (
          <Link to={`/movies/${movie.id}`}>
            <span className="saved-movie">{movie.title}</span>
          </Link>
        );
      })}
      <div className="home-button" onClick={routeToHome}>Home</div>
    </div>
  );
}

export default SavedList;
