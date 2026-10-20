interface props{

    name: string
    age: number
}




function Greeter({age, name}: props){

    if (age > 30)
        return (<p>{name}</p>)
    else return( <p>{age}</p>)
}
export default Greeter