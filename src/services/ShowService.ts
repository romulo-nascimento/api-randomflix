import axios, { AxiosRequestConfig } from 'axios';

const defaultOptions: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    headers: {
        'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        'x-rapidapi-key': '4b2a7f5a5fmsh1c77735e557868dp1338b5jsn045093321f35'
    }
};

class ShowService {
    async getByTerm(term: string, country: string) {
        var requestOptions = {
            ...defaultOptions,
            params: { term, country }
        };

        try {
            const { data: { results = [] } } = await axios.request(requestOptions);
            const shows = results.map(show => {
                const { name, picture, external_ids: { imdb } } = show;

                return {
                    name,
                    pictureSrc: picture,
                    imdbId: imdb?.id
                };
            }).filter(({ imdbId }) => imdbId)

            return shows;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default ShowService