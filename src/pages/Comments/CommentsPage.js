import {Comments} from "../../components/CommentsContainer/Comments";
import {Outlet} from "react-router-dom";
import css from "../../components/CommentsContainer/Comment.module.css"

const CommentsPage = () => {
    return (
        <div className={css.CommentPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};