interface props{

    img: string
    title: string
    date: number
    pages?: number
}
interface moviesProp{
    movies: props[];
}



function Movie({movies}: moviesProp){

    return(
        <div className="component">
        {movies.map(m => 
            <div>
                <img src={m.img}/>
                <p>{m.title}</p>
                <p>{m.date}</p>
                <p>{m.pages}</p>
            </div>
        )};
        </div>

    )
}
export default Movie