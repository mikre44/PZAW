import { useState } from "react";

function CharacterForm() {

    const [formData, setFormData] = useState({
        characterName: "",
        race: "",
        characterClass: "",
        level: 1,
        description: "",
        isPublic: true
    });

    const [characterNameError, setCharacterNameError] = useState("");
    const [raceError, setRaceError] = useState("");
    const [characterClassError, setCharacterClassError] = useState("");
    const [levelError, setLevelError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    function ValidateForm(){

        let error = false;

        if (formData.characterName === ""){
            setCharacterNameError("Nazwa jest wymagana")
            error = true;
        }
        else if (formData.characterName.length > 20 || formData.characterName.length < 3){
            setCharacterNameError("Nazwa musi mieć od 3 do 20 liter");
            error = true;
        }
        else setCharacterNameError("")

        if (formData.race == ""){
            setRaceError("Rasa jest wymagana")
            error = true;
        }
        else setRaceError("")

        if (formData.characterClass == ""){
            setCharacterClassError("Klasa jest wymagana")
            error = true;
        }
        else setCharacterClassError("")

        if (!Number.isInteger(formData.level)){
            setLevelError("Poziom musi być liczbą całkowitą")
            error = true;
        }
        else if (formData.level < 1 || formData.level > 100){
            setLevelError("Poziom musi być w zakresie od 1 do 100")
            error = true;
        }
        else setLevelError("")

        if (formData.description.length > 200){
            setDescriptionError("Opis może mieć maksymalnie 200 liter")
            error = true;
        }
        else setDescriptionError("")

        if (error == true) return
        
    }

    return (
        <>
            <div className="card shadow-sm p-3 text-center m-2 col">
                <form onSubmit={() => ValidateForm()} noValidate>
                    <label htmlFor="characterName">Nazwa: </label>
                    <input id="characterName"
                        type="text" minLength={3} maxLength={20}
                        value={formData.characterName}
                        onChange={(event) => setFormData({...formData, characterName: event.target.value})}
                        className={characterNameError != "" ? "alert alert-danger" : ""}>
                    </input>
                    <label htmlFor="characterName">{characterNameError}</label>


                    <label htmlFor="race">Rasa: </label>
                    <select id="race"
                        value={formData.race}
                        onChange={(event) => setFormData({...formData, race: event.target.value})}
                        className={raceError != "" ? "alert alert-danger" : ""}
                    >
                        <option value={""}>Wybierz</option>
                        <option value={"Człowiek"}>Człowiek</option>
                        <option value={"Elf"}>Elf</option>
                        <option value={"Krasnolud"}>Krasnolud</option>
                        <option value={"Ork"}>Ork</option>
                    </select>
                    <label htmlFor="race">{raceError}</label>


                    <label htmlFor="characterClass">Klasa: </label>
                    <select id="characterClass"
                        value={formData.characterClass}
                        onChange={(event) => setFormData({...formData, characterClass: event.target.value})}
                        className={characterClassError != "" ? "alert alert-danger" : ""}
                    >
                        <option value={""}>Wybierz</option>
                        <option value={"Wojownik"}>Wojownik</option>
                        <option value={"Mag"}>Mag</option>
                        <option value={"Łucznik"}>Łucznik</option>
                    </select>
                    <label htmlFor="characterClass">{characterClassError}</label>


                    <label htmlFor="level">Poziom: </label>
                    <input id="level" type="number" min={1} max={100}
                        value={formData.level}
                        onChange={(event) => setFormData({...formData, level: event.target.value == "" ? 1 : Number(event.target.value)})}
                        className={levelError != "" ? "alert alert-danger" : ""}
                    ></input>
                    <label htmlFor="level">{levelError}</label>


                    <label htmlFor="description">Opis: </label>
                    <textarea id="description" maxLength={200}
                        value={formData.description}
                        onChange={(event) => setFormData({...formData, description: event.target.value})}
                        className={descriptionError != "" ? "alert alert-danger" : ""}
                    ></textarea>
                    <label htmlFor="description">{descriptionError}</label>


                    <label htmlFor="public">Postać publiczna: </label>
                    <input id="public" type="checkbox" checked={formData.isPublic}
                        onChange={(event) => setFormData({...formData, isPublic: event.target.checked})}
                    ></input>

                    <button type="submit">Utwórz</button>
                </form>
            </div>
        </>
    );
}

export default CharacterForm;