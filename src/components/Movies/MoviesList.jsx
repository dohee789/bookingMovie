import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import classes from './MoviesList.module.css'
import Card from '../Commons/Card';

const MOVIES = [
    {   
        id: "movie1",
        img: <img src="https://movie-phinf.pstatic.net/20140721_186/1405911310756Tt2X1_JPEG/movie_image.jpg" alt="" />,
        name: "명량", 
        director: "김한민",
        actor: "최민식, 류승룡, 조진웅",
        price: 15000,
        age: "15세",
        date: "2014.07.30.",
        runningtime: "128m",
       
    },
    {
        id: "movie2",
        img: <img src="https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg?type=m203_290_2" alt="" />,
        name: "극한직업", 
        director: "이병헌",
        actor: "류승룡, 이하늬, 진선규",
        price: 13000,
        age: "15세",
        date: "2019.01.23.",
        runningtime: "111m",
    },
    {
        id: "movie3",
        img: <img src="https://movie-phinf.pstatic.net/20201230_252/1609304926719vwxpF_JPEG/movie_image.jpg?type=m203_290_2" alt="" />,
        name: "신과함께-죄와 벌", 
        director: "김용화",
        actor: "하정우, 차태현, 주지훈",
        price: 16000,
        age: "12세",
        date: "2017.12.20.",
        runningtime: "139m",
    },
    {
        id: "movie4",
        img: <img src="https://movie-phinf.pstatic.net/20141124_107/141679124450580TTS_JPEG/movie_image.jpg?type=m203_290_2" alt="" />,
        name: "국제시장", 
        director: "윤제균",
        actor: "황정민, 김윤진, 오달수",
        price: 11000,
        age: "12세",
        date: "2014.12.17.",
        runningtime: "126m",
    },
    {
        id: "movie5",
        img: <img src="https://movie-phinf.pstatic.net/20150622_131/14349365467550iQnC_JPEG/movie_image.jpg?type=m203_290_2" alt="" />,
        name: "베테랑", 
        director: "류승완",
        actor: "황정민, 유아인, 유해진",
        price: 20000,
        age: "15세",
        date: "2015.08.05.",
        runningtime: "123m",
    },
    {   id: "movie6",
        img: <img src="https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg?type=m203_290_2" alt="" />,
        name: "도둑들", 
        director: "최동훈",
        actor: "김윤석, 김혜수, 전지현",
        price: 19000,
        age: "15세",
        date: "2012.07.25.",
        runningtime: "135m",
    }      
];

const MoviesList = () => {

    const [movies, setMovies] = useState(MOVIES);

    const moviesList = movies.map(movie =>
            <Movie
                key={movie.id}
                img={movie.img}
                id={movie.id}
                name={movie.name}
                director={movie.director}
                actor={movie.actor}
                price={movie.price}
                age={movie.age}
                date={movie.date}
                runningtime={movie.runningtime}
            />
    );

  return (
    <section className={classes.movie}>
        <Card>
            <ul>
                {moviesList}
            </ul>
        </Card>    
    </section>
  )
};

export default MoviesList