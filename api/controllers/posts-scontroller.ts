import { Controller, Get, } from "../common/decors";

@Controller('/posts')
export class PostsController {

    @Get('')
    getListPosts(request, response) { // TODO change it to 'return' if time left...
        response.send(['Post One', 'Post Two'])
    }

    @Get('/:id')
    getOnePost(request, response) {
        // return 'Single Post' + id // TODO fix this if we still have time left...
    }
}
