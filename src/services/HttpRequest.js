

class RickAndMortyService {

    _apiBase = "https://rickandmortyapi.com/api";

    doRequest = async (url) => {
        const req = await fetch(url);
        return req.json();
    }

    getAllCharacters = async (page = 0, filter) => {
        const resFilter = this._getFilterRequest(filter);
        const chars = await this.doRequest(this._apiBase + "/character/?page=" + page + resFilter);
        return chars.results.map(char => this._transformData(char));
    }

    getCharacter = async (id) => {
        const char = await this.doRequest(this._apiBase + "/character/" + id)
        return this._transformData(char);
    }


    _getFilterRequest = (filter) => {
        let res = "";

        for(let key in filter){
            if(filter[key] != "none")
                res += "&" + key + "=" + filter[key];
        }

        return res;
    }

    _transformData = (data) => {
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

}

export default RickAndMortyService;