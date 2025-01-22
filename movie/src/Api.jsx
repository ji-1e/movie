import axios from "axios"

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

//axios.create 사용
//axios 인스턴스를 만들어 API 요청 시 마다 공통으로 사용가능 
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`
    }
})

const getPopularMovies = async () => {
    let test = ''
    //get으로 api 불러옴
    await api.get("/movie/popular")
    //인기 영화 목록애서 성인영화 필터
    .then((res) => test = res.data.results.filter((movie) => !movie.adult))
    .catch((error) => {
        console.error("에러가 날 경우", error) 
        return [];
    })
    return test
}

export { api, getPopularMovies }
