import { getCats } from './services/catService';

function generateRandom(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const catStore = {
    state: { cats: getCats(), count : 0 },
    setVotes() {
        this.state.count ++;
    },
    getVotes() {
        console.log(this.state.count)
        return {
            totalVotes: this.state.count
        }
    },
    chooseCat(id: string) {
        const index = this.state.cats.findIndex(cat => cat.id === id);
        this.state.cats[index].vote ++;
    },
    getNewCats() {
        return {
            catItemOne: this.state.cats[generateRandom(this.state.cats.length - 1)],
            catItemTwo: this.state.cats[generateRandom(this.state.cats.length - 1)],
        };
    },
};
