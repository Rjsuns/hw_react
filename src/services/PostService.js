import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

const PostService = {
    getAll:() => axiosService(urls.posts.base),
    getById: (id) => axiosService(urls.posts.byId(id))
}

export{
    PostService
}