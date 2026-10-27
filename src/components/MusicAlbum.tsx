import Song from "./Song";
import { useState } from "react";

interface songProps {
    title: string
    length: string
}

interface musicAlbumProps {
    img: string
    title: string
    band: string
    type: string
    year: number
    songs: songProps[]
}

interface props{
    musicAlbums: musicAlbumProps[]
    showHighestSongNumber?: boolean;
}

function MusicAlbum({musicAlbums, showHighestSongNumber}:props) {
    const [isOpen, setIsOpen] = useState(true);
    
    function ToggleOpen(){
        setIsOpen(!isOpen);
    }


    const displayedAlbums = showHighestSongNumber === true ?  // normalnie slice zmieniało to co się wyświetlało w obu użyciach komponentu
    musicAlbums.sort((a, b) => b.songs.length - a.songs.length).slice(0, 1) : // human generated!
    musicAlbums.sort((a, b) => a.title.localeCompare(b.title));

    return (

        <>
            <div onClick={ToggleOpen} className="d-flex flex-row align-items-center justify-content-center gap-2 py-3">
                <p className="h4">Muzyka</p><span>{isOpen ? "⏷" : "⏵"}</span>
            </div>
                
            <div className="container-fluid d-flex flex-row flex-wrap align-items-stretch justify-content-center gap-4 row">

                {isOpen && displayedAlbums.map(album => // użyłem słowa album poniewarz "a" by się pokrywało z funkcją sort
                    <div className="card shadow-sm p-3 text-center m-2 col" style={{ width: '300px' }}>
                        <img src={album.img} alt={album.title} className="card-img-top rounded mb-3" style={{ height: '250px', width: '100%', objectFit: 'contain' }}/>
                        <p className="card-title fw-bold mb-2">{album.title}</p>
                        <p className="card-text mb-2">Wykonawca: {album.band}</p>
                        <p className="card-text mb-2">Gatunek: {album.type}</p>
                        <p className="card-text mb-2">Rok wydania: {album.year}</p>
                        
                        <h3 className="h5 mt-3 mb-2">Lista utworów:</h3>
                        <div className="d-flex flex-column gap-2 music-list">
                        {album.songs.length != 0 && album.songs.sort((a, b) => a.title.localeCompare(b.title))// ta linijka mapuje odrazu posortowane piosenki
                        .map((s) => (// ^ na sprawdzenie czy długość songs nie równa się 0 wpadłem dodając napis "Brak utworów" (trochę wygląda jak ai ale nauczyłem się by sprawdzać takie rzeczy z innych projektów)
                            <Song title={s.title} length={s.length} />
                        ))}
                        </div>
                        {album.songs.length === 0 && <p className="align-self-center p-1 alert alert-warning ">Brak utworów</p>}
                    </div>
                )}
            </div>
        </>
    );
}

export default MusicAlbum;