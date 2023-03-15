import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Row from './components/Row'
import requests from './requests'
// import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'

function App() {
  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // }
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        isLargeRow={true}
        title="NETFLEX ORIGNAL"
        fetchUrl={requests.fetchNetFlixOriginals}
      />
      {/* <YouTube videoId="d9MyW72ELq0" opts={opts} /> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
