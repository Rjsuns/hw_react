import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "./Character";
import {characterService} from "../../services/characterService";

const Characters = () => {
    const {ids} = useParams();
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};