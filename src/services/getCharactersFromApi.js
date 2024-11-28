const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            const parsedChararcters = data.results.map((character) => {
                //console.log(character);
                return {
                    photo: character.image,
                    name: character.name,
                    specie: character.species,
                    id: character.id,
                    planet: character.origin.name,
                    episodes: character.episode,
                    status: character.status,


                }
            })
            return parsedChararcters;
        })
}

export default getCharactersFromApi;