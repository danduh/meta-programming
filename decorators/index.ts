

export const MagicClassDecor = (conf) => {
    return async function (target) {
        return
    };
};


export class MoviesService {

    @timer()
    @cacheIt()
    async getMovies(id: number) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Movie Data for ${id}`)
            }, 1000)
        })
    }
}


const movieService = new MoviesService();
const run = async () => {
    console.log(await movieService.getMovies(1))
    console.log(await movieService.getMovies(2))
    console.log(await movieService.getMovies(1))
}
run()
