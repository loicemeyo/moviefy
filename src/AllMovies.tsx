import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieDetail from './MovieDetail';
import NoMovie from './NoMovie';

interface Rating {
    Source: string;
    Value: string;
}

export interface Movie {
    Title: string;
    Rated: string;
    Year: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

interface State {
    movies: Movie | null;
    title: string;
    showDetail: boolean;
}

class AllMovies extends React.Component<{}, State>{

    state:State = {
        movies: null,
        title: '',
        showDetail: false,
    };

    getMovies = async() => {
        const response = await axios.get(`http://www.omdbapi.com/?t=${this.state.title}=&apikey=40f8d155`);
        console.log(response);
        this.setState({
            movies: response.data
        })
    }

    handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render(){
        const { movies } = this.state; 
        return (
         <React.Fragment>
            <Header>MOVIEFY</Header>
            <HeaderII>...find your favorite movie and tv series</HeaderII>
            <Container>
            <Area>
            <Title><b>Movie Title:</b></Title>
            <Input type="text" onChange={this.handleOnChange}></Input>
            </Area>
            </Container>
            <Search onClick={this.getMovies}>Search</Search>
            {movies && <MovieDetail movieData={movies}></MovieDetail>}
        </React.Fragment>
       )
       
    }

}

    const Header = styled.h1`
    text-align: center;
    font-size: 4.5em;
    font-family: 'Indie Flower', cursive;
    color: #D0CCCC;
    margin: 0 2px 2px 2px;
    background:
    /* top, transparent black, faked with gradient */ 
    linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.7)
        ),
    /* bottom, image */
        url(http://fc02.deviantart.net/fs71/i/2011/274/6/f/ocean__sky__stars__and_you_by_muddymelly-d4bg1ub.png);
        }
    `;
    
    const HeaderII = styled.h2`
    text-align: center;
    font-size: 1.5em;
    font-family: 'Indie Flower', cursive;
    color: #555555;
    margin: 0 2px 2px 2px;
    `;


    export const Poster = styled.section`
    padding: 2px 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
    `;
    
    const Container = styled.section`
    margin: 8px 24px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

    const Area = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;


    const Title = styled.div`
    font-size: 30px
    font-family: 'Indie Flower', cursive;
    margin-right: 8px;
    `;

    const Input = styled.input`
    width: 50%;
    height: 25%
    padding: 8px 20px;
    margin-top: 0px;
    box-sizing: border-box;
    border-style: solid;
    `;

    const Search = styled.button`
    background-color: #555555;
    border-radius: 8px;
    margin-top: 5px;
    // margin-right: 2px;
    border: none;
    color: white;
    padding: 8px 24px;
    text-align: center;
    align-items: center
    text-decoration: none;
    display: inline-block;
    font-size: 14px
    `;


export default AllMovies;