import useHttpHook from "../components/hooks/HttpHook";

const RickAndMortyService = () => {

    const _apiBase = "https://rickandmortyapi.com/api";
    const {error, loading, httpRequest} = useHttpHook();

    const getAllCharacters = async (page = 0, filter) => {
        const resFilter = _getFilterRequest(filter);
        const chars = await httpRequest(_apiBase + "/character/?page=" + page + resFilter);

        console.log(chars)

        return chars.results.map(char => _transformData(char));
    }

    const getCharacter = async (id) => {
        const char = await httpRequest(_apiBase + "/character/" + id)
        return _transformData(char);
    }

    const getMultipleCharacters = async (idList) => {
        if(idList.length == 1){
            return  [await getCharacter(idList[0])];
        } else if(idList.length == 0){
            return [];
        } else {
            const chars = await httpRequest(_apiBase + "/character/" + idList.join(","));
            console.log(chars)
            return chars.map(char => _transformData(char));
        }

    }


    const _getFilterRequest = (filter) => {
        let res = "";

        for(let key in filter){
            if(filter[key] != "none")
                res += "&" + key + "=" + filter[key];
        }

        return res;
    }

    const _transformData = (data) => {
        const char = data

        return {
            "id": char.id,
            "name": char.name,
            "status": char.status,
            "species": char.species,
            "type": "",
            "gender": char.gender,
            "origin": char.origin.name,
            "location": char.location.name,
            "image": char.image,
            "episodes": char.episodes,
        }
    }

    return {loading, error, getAllCharacters, getCharacter, getMultipleCharacters};

}

export default RickAndMortyService;