import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import {PostService} from "../../services/PostService";
const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        PostService.getAll()
            .then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) =>{
        setPostDetails(post)
    }

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)
            }
                <hr/>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export {Posts};