interface songProps{
    title: string
    length: string
    albumTitle: string
}

function Song({title, length, albumTitle}: songProps){

    function HandleSongClick(album: string, title: string){
        console.log("Wybrano piosenkę: " + title + " z albumu " + album)    
    }
    return(
        <div className="container-fluid d-flex flex-row justify-content-between" onClick={() => HandleSongClick(albumTitle, title)}>
            <p>{title}</p>
            <p className="">{length}</p>
        </div>
    )
}
export default Song