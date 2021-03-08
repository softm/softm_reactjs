import "./Home.css";
import React from "react";
import axios from "axios";
import Movie from "../componets/Movie";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //this.setState({movies:movies});
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    console.log("render");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map((movie) => {
            console.log(movie);
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
            </div>
        )}
      </section>
    );
  }
}

export default Home;
