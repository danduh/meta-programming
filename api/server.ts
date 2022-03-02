import App from './app';
import { PostsController } from "./controllers/posts-scontroller";

const app = new App(
    [
        PostsController
    ],
    3000,
);

app.listen();
