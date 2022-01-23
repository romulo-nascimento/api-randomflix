interface ShowImage {
    medium: string
    original: string
}

export interface Show {
  id: number
  name: string
  genres: string[]
  externals: {
    imdb: string
  }
  image: ShowImage
  summary: string
}

export interface Episode {
    id: number
    name: string
    season: number
    number: number
    airdate: string
    image: ShowImage
    summary: string
}

export interface RandomEpisodeResponse extends Episode {
    show: Show
}