import React from 'react';
import styled from 'styled-components';
import { Poster,Movie } from './AllMovies';
import star from './star.svg'

const MovieDetail = (props: {movieData: Movie}) => {
    const { movieData } = props;
    return(
     <Detail>
         <Poster>
             <img src={movieData.Poster} />
         </Poster>
         <Info>
             <Title>
                 <b>{`${movieData.Title}`}</b> {`(${movieData.Year})`}  <img src={star} height={40} width={40} alt="logo" /> {`${movieData.imdbRating}`}
             </Title>
             <Row>
                 {`${movieData.Runtime} | ${movieData.Genre} | ${movieData.Released}`}
             </Row>
             <Plot>
                 {`${movieData.Plot}`}
             </Plot>
             <LastRow><b>Director:</b> {`${movieData.Director}`}</LastRow>
             <LastRow><b>Writer(s):</b> {`${movieData.Writer}`}</LastRow>
             <LastRow><b>Actors:</b> {`${movieData.Actors}`}</LastRow>
        </Info>
     </Detail>
    )
}

export default MovieDetail;

const Detail = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`;

const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: start;
    padding: 5px;

    @media (max-width: 768px) {
        padding: 30px;
    }
`;

const Title = styled.div`
    font-size: 32px;
    display: flex;
    align-items: center;
    text-align: start;
`;
const Row = styled.div`
    font-size: 12px;
    color: gray;
    text-align: start;
`;
const LastRow = styled.div`
    font-size: 14px;
    text-align: start;
`;

const Plot = styled.p`
    text-align: start;
`;

