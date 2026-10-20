interface BookProps {
    img: string;
    title: string;
    author: string;
    pages: number;
    releaseDate: number;
}

interface BooksProp {
    books: BookProps[];
}

function Book({ books }: BooksProp) {
    return (
        <div className="component">
            {books.map((b, index) => (
                <div key={index}>
                    <img src={b.img} alt={b.title} />
                    <p>{b.title}</p>
                    <p>{b.author}</p>
                    <p>pages: {b.pages}</p>
                    <p>{b.releaseDate}</p>
                </div>
            ))}
        </div>
    );
}

export default Book;
