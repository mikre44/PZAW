import './App.css'
import Books from './components/Books';
import Movies from './components/Movies'
import MusicAlbum from './components/MusicAlbum'
function App() {


  const setMovies = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjv1slLSC06_v7bow8DGdMW0SyzVywT2IrdpL580AqWg&s=10",
    title: "harry potter", 
    date: 1999, 
    pages: 5003
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0AxApa1ret4SC4faVvR5LRdoamU-gVM4uRAStN2vpA&s=10" ,
      title: "akademia pana kleksa",
      date: 1299, 
      pages: 1232
    },
    {
      img: "https://fwcdn.pl/fpo/94/76/469476/8030930_1.3.jpg", 
      title: "dune", 
      date: 1999, 
      pages: 1232
    }
  ]

  const setBooks = [ // Zmienna wygenerowana przez ai
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjv1slLSC06_v7bow8DGdMW0SyzVywT2IrdpL580AqWg&s=10",
      title: "Harry Potter i Kamień Filozoficzny",
      author: "J.K. Rowling",
      pages: 328,
      releaseDate: 1997
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0AxApa1ret4SC4faVvR5LRdoamU-gVM4uRAStN2vpA&s=10",
      title: "Akademia pana Kleksa",
      author: "Jan Brzechwa",
      pages: 160,
      releaseDate: 1946
    },
    {
      img: "https://fwcdn.pl/fpo/94/76/469476/8030930_1.3.jpg",
      title: "Diuna",
      author: "Frank Herbert",
      pages: 680,
      releaseDate: 1965
    }
  ];

  const setMusicAlbums = [ // Zmienna wygenerowana przez ai

    {
      img: "https://wikimedia.org",
      title: "★ (Blackstar)",
      band: "David Bowie",
      type: "Art Rock / Avant-jazz",
      year: 2016,
      songs: [
        { title: "Blackstar", length: "9:57" },
        { title: "Tis a Pity She Was a Whore", length: "4:52" },
        { title: "Lazarus", length: "6:22" },
        { title: "Sue (Or in a Season of Crime)", length: "4:40" },
        { title: "Girl Loves Me", length: "4:51" },
        { title: "Dollar Days", length: "4:44" },
        { title: "I Can't Give Everything Away", length: "5:45" }
      ]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0AxApa1ret4SC4faVvR5LRdoamU-gVM4uRAStN2vpA&s=10",
      title: "Akademia Pana Kleksa (Ścieżka dźwiękowa)",
      band: "Andrzej Korzyński",
      type: "Soundtrack / Muzyka filmowa",
      year: 1983,
      songs: [
        { title: "Witajcie w naszej bajce", length: "2:20" },
        { title: "Kaczka dziwaczka", length: "2:05" },
        { title: "Kwoka", length: "2:15" },
        { title: "Na wyspach Bergamutach", length: "2:35" },
        { title: "Pieśń o kosmicznym statku", length: "3:10" }
      ]
    },
    {
      img: "https://fwcdn.pl/fpo/94/76/469476/8030930_1.3.jpg",
      title: "Dune (Original Motion Picture Soundtrack)",
      band: "Hans Zimmer",
      type: "Soundtrack / Ambient",
      year: 2021,
      songs: [
        { title: "Dream of Arrakis", length: "3:08" },
        { title: "Herald of the Change", length: "5:01" },
        { title: "Leaving Caladan", length: "1:55" },
        { title: "Bene Gesserit", length: "3:54" },
        { title: "Gom Jabbar", length: "2:00" },
        { title: "Ripples in the Sand", length: "5:14" }
      ]
    }
  ];


  return (
    <>
      <Movies movies={setMovies}/>
      <Books books={setBooks} />

      <MusicAlbum musicAlbums={setMusicAlbums}/>
    </>
  )
}

export default App
