interface songProps{
    title: string
    length: string
}

function Song({title, length}: songProps){

    return(
        <div className="container-fluid d-flex flex-row justify-content-between">
            <p>{title}</p>
            <p className="">{length}</p>
        </div>
    )
}
export default Song