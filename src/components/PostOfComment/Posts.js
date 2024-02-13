import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import css from "./Post.module.css"

const Posts = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);
    return (
        <div className={css.PostDiv}>
            <div>PostID: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>

        </div>
    );
};

export {Posts};