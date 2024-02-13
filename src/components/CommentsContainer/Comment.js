import {useNavigate} from "react-router-dom";
import css from "./Comment.module.css"
const Comment = ({comment}) => {
    const {postId, id, name} = comment;

    const navigate = useNavigate()
    return (
        <div className={css.Comment}>
            <div>Id: {id}</div>
            <div>PostId: {postId}</div>
            <div>Name: {name}</div>
            <button onClick={() => navigate(postId.toString())}> Get post </button>
        </div>
    );
};

export {Comment};