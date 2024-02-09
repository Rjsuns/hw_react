import {UsersContainer} from "./components/Users/UsersContainer";
import {CommentsContainer} from "./components/Comments/CommentsContainer";

const App = () => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}> User Form</h2>
            <UsersContainer/>
            <h2 style={{textAlign: "center"}}> Comments Form</h2>
            <CommentsContainer/>
        </div>
    );
};

export {App};