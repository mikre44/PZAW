function Characters({character}){

    if (character == null) return null;

    return (
        <>
            <div className="card shadow-sm p-3 text-center m-2 col">
                <h2>{character.characterName}</h2>
                <p>Rasa: {character.race}</p>
                <p>Klasa: {character.characterClass}</p>
                <p>Poziom: {character.level}</p>
                <p>Opis: {character.description}</p>
                <p>Publiczna: {character.isPublic ? "Tak" : "Nie"}</p>
            </div>
        </>
    );
}

export default Characters;