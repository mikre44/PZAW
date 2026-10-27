import './App.css'
import Books from './components/Books';
import Movies from './components/Movies'
import MusicAlbum from './components/MusicAlbum'

import "./bootstrap.min.css";

function App() {


  const setMovies = [// zmienna wygenerowana prze ai
    {
      img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      title: "Incepcja",
      year: 2010,
      rating: 8.5
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      title: "Interstellar",
      year: 2014,
      rating: 9
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
      title: "Diuna",
      year: 2021,
      rating: 7.5
    }
  ];

  const setBooks = [// zmienna wygenerowana przez ai
    {
      img: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      pages: 180,
      year: 2004
    },
    {
      img: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      pages: 214,
      year: 1991
    },
    {
      img: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      pages: 336,
      year: 2006
    }
  ];

  const setMusicAlbums = [// zmienna wygenerowana przez ai
    {
      img: "https://upload.wikimedia.org/wikipedia/en/2/2d/Blackstar_%28Front_Cover%29.svg",
      title: "Blackstar",
      band: "David Bowie",
      type: "Art rock / Jazz rock",
      year: 2016,
      songs: []
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png",
      title: "Back in Black",
      band: "AC/DC",
      type: "Hard rock",
      year: 1980,
      songs: [
        { title: "Hells Bells", length: "5:10" },
        { title: "Shoot to Thrill", length: "5:17" },
        { title: "What Do You Do for Money Honey", length: "3:33" },
        { title: "Givin the Dog a Bone", length: "3:30" },
        { title: "Let Me Put My Love into You", length: "4:16" },
        { title: "Back in Black", length: "4:15" },
        { title: "You Shook Me All Night Long", length: "3:30" },
        { title: "Have a Drink on Me", length: "3:57" },
        { title: "Shake a Leg", length: "4:06" },
        { title: "Rock and Roll Ain't Noise Pollution", length: "4:15" }
      ]
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png",
      title: "Random Access Memories",
      band: "Daft Punk",
      type: "Disco / Funk / Electronic",
      year: 2013,
      songs: [
        { title: "Give Life Back to Music", length: "4:34" },
        { title: "The Game of Love", length: "5:22" },
        { title: "Giorgio by Moroder", length: "9:04" },
        { title: "Within", length: "3:48" },
        { title: "Instant Crush", length: "5:37" },
        { title: "Lose Yourself to Dance", length: "5:53" },
        { title: "Touch", length: "8:19" },
        { title: "Get Lucky", length: "6:09" },
        { title: "Beyond", length: "4:50" },
        { title: "Motherboard", length: "5:41" },
        { title: "Fragments of Time", length: "4:39" },
        { title: "Doin' It Right", length: "4:11" },
        { title: "Contact", length: "6:23" }
      ]
    }
  ];


  return (
    <>
      <Movies movies={setMovies}/>
      <Books books={setBooks} />
      <MusicAlbum musicAlbums={setMusicAlbums}/>
      <Movies movies={setMovies} since={2010}/>
      <Books books={setBooks} sortByDate={true}/>
      <MusicAlbum musicAlbums={setMusicAlbums} showHighestSongNumber={true}/>
    </>
  )
}

export default App
