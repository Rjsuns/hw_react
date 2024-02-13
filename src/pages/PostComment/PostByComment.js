import {Outlet} from "react-router-dom";
import {Posts} from "../../components/PostOfComment/Posts";
import css from "../../components/PostOfComment/Post.module.css"

const PostByComment = () => {
    return (
        <div className={css.PostPage}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostByComment};