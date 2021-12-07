export interface Cats {
    url: string;
    id: string;
    vote: number;
}

export const getCats = (): Cats[] => {
    const cats: Cats[] = require('./cats.json').images;
    return cats.map(({ url, id }) => ({ url, id, vote: 0 }));
};
