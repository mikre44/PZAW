import { useState } from "react";

interface BookProps {
    img: string;
    title: string;
    author: string;
    pages: number;
    year: number;
}

interface BooksProp {
    books: BookProps[];
    sortByDate?: boolean;
}

function Book({books, sortByDate}: BooksProp) {
    const [isOpen, setIsOpen] = useState(true);

    function ToggleOpen(){
        setIsOpen(!isOpen);
    }

    if(sortByDate === true)
        books.sort((a, b) => b.year - a.year);
    else
        books.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <>
        
            <div onClick={ToggleOpen} className="d-flex flex-row align-items-center justify-content-center gap-2 py-3">
                <p className="h4">Książki</p><span>{isOpen ? "⏷" : "⏵"}</span>
            </div>
            
            <div className="container-fluid d-flex flex-row flex-wrap align-items-stretch justify-content-center gap-4 row">

                {isOpen && books.map((b) => (// a tu nie ma potrzeby innej niż jednakowość kodu by urzyć słowa "book" (odnośnik do komentarza w MusicAlbum.tsx 25)
                    <div className="card shadow-sm text-center m-2 col" style={{ width: '300px' }}>
                        <img src={b.img} alt={b.title} className="card-img-top rounded mb-3" style={{ height: '250px', width: '100%', objectFit: 'contain' }}/>
                        <p className="card-title fw-bold mb-2">{b.title}</p>
                        <p className="card-text mb-2">{b.author}</p>
                        <p className="card-text mb-2">pages: {b.pages}</p>
                        <p className="card-text mb-2">{b.year}</p>
                        {b.year < 2000 && <p className="badge bg-success align-self-center">Klasyka</p>}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Book;