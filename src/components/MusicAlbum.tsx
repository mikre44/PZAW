import Song from "./Song";

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
}

function MusicAlbum({musicAlbums}:props) {
    return (
        <div className="component">
            {musicAlbums.map(album => 
                <div>
                    <img src={album.img} alt={album.title} />
                    <p>{album.title}</p>
                    <p>Wykonawca: {album.band}</p>
                    <p>Gatunek: {album.type}</p>
                    <p>Rok wydania: {album.year}</p>
                    
                    <h3>Lista utworów:</h3>
                    <div className="component">
                    {album.songs.map((s, index) => (
                        <Song key={index} title={s.title} length={s.length} />
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MusicAlbum;
