import { useState } from "react";


interface props{
    img: string
    title: string
    year: number
    rating: number
}
interface moviesProp{
    movies: props[];
    since?: number;
}



function Movie({movies, since}: moviesProp){
    const [isOpen, setIsOpen] = useState(true);
    const [search, setSearch] = useState("");

    function ToggleOpen(){
        setIsOpen(!isOpen);
    }

    function HandleClick(message: string) {
        console.log(message);
    }

    function HandleSearch(e: React.ChangeEvent<HTMLInputElement>){
        setSearch(e.currentTarget.value);
        console.log(search);
    }

    movies.sort((a, b) => a.title.localeCompare(b.title));
    return(
        <>
            <div onClick={ToggleOpen} className="container-fluid d-flex flex-row align-items-center justify-content-center gap-2 py-3">
                <p className="h4">Filmy</p><span>{isOpen ? "⏷" : "⏵"}</span>
            </div>

                
            <div className="container-fluid d-flex flex-row flex-wrap align-items-stretch justify-content-center gap-4 row">
                <input
                type="text"
                className="form-control"
                placeholder="Wpisz tytuł"
                id="movie-search"
                onChange={HandleSearch}
                />
                <p className="alert alert-info">{search}</p>
                {isOpen && movies.map(m => ((since == null || since < m.year) && (search == "" || m.title.includes(search)) && 
                // jeżeli data jest większa niż warunek "since" to wyświetli się "film"
                        
                    <div className="card shadow-sm p-3 text-center col" style={{ width: '300px' }} 
                        onClick={e => {e.stopPropagation(); HandleClick("Wybrano film:" + m.title);}}>

                        <img src={m.img} className="card-img-top rounded mb-3" style={{ height: '250px', width: '100%', objectFit: 'contain' }}/>
                        <p className="card-title fw-bold mb-2">Tytuł: {m.title}</p>
                        <p className="card-text mb-2">Rok premiery: {m.year}</p>
                        <button className="btn btn-primary" 
                        onClick={e => {e.stopPropagation(); HandleClick("Pokaż szczegóły dla " + m.title);}}>Pokaż szczegóły</button>

                        <p className="card-text mb-2">Ocena {m.rating}</p>
                        {m.rating >= 8 && <p className="badge bg-success align-self-center">Polecany</p>}
                    </div>))
                }
            </div>
        </>
    )
}
export default Movie