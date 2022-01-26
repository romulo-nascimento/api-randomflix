import axios from 'axios';

import { Episode, Show } from '../types';
import { removeHtmlTags } from '../utils/html';
import { getRandomElement } from '../utils/random';

const tvmaze = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

class ShowService {
  async getByTerm(term: string) {
    try {
      const { data: results = [] } = await tvmaze.get(`/search/shows?q=${term}`);
      const shows = results.map(({ show }) => {
        const { id, name: title, image, genres = [], externals = {} } = show;

        return {
          id,
          title,
          image,
          genres,
          imdb: externals?.imdb
        };
      }).filter(({ image }) => image);

      return shows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRandomShowEpisode(showIds: string[]) {
    const selectedShowId = getRandomElement(showIds);

    const [showData, episodesData] = await Promise.all([
      tvmaze.get<Show>(`/shows/${selectedShowId}`),
      tvmaze.get<Episode[]>(`/shows/${selectedShowId}/episodes`)
    ]);

    const { data: { name: showTitle } } = showData;
    const { data: showEpisodes } = episodesData;

    const selectedEpisode = getRandomElement(showEpisodes);

    return {
      ...selectedEpisode,
      summary: removeHtmlTags(selectedEpisode.summary),
      showTitle
    };
  }
}

export default ShowService;