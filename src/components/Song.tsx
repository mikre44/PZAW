interface songProps{
    title: string
    length: string
}

function Song({title, length}: songProps){

    return(
        <div>
            <p>{title}</p>
            <p>{length}</p>
        </div>
    )
}
export default Song