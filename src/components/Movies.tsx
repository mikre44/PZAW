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

    function ToggleOpen(){
        setIsOpen(!isOpen);
    }

    movies.sort((a, b) => a.title.localeCompare(b.title));
    return(
        <>
            <div onClick={ToggleOpen} className="container-fluid d-flex flex-row align-items-center justify-content-center gap-2 py-3">
                <p className="h4">Filmy</p><span>{isOpen ? "⏷" : "⏵"}</span>
            </div>

            <div className="container-fluid d-flex flex-row flex-wrap align-items-stretch justify-content-center gap-4 row">
                
                {isOpen && movies.map(m => ((since == null || since < m.year) && // jeżeli data jest większa niż warunek "since" to wyświetli się "film"
                    
                    <div className="card shadow-sm p-3 text-center col" style={{ width: '300px' }}>
                        <img src={m.img} className="card-img-top rounded mb-3" style={{ height: '250px', width: '100%', objectFit: 'contain' }}/>
                        <p className="card-title fw-bold mb-2">Tytuł: {m.title}</p>
                        <p className="card-text mb-2">Rok wyjścia: {m.year}</p>
                        <p className="card-text mb-2">Ocena {m.rating}</p>
                        {m.rating >= 8 && <p className="badge bg-success align-self-center">Polecany</p>}
                    </div>))
                }
            </div>
        </>
    )
}
export default Movie