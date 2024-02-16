import css from "../components/UsersContainer/User.module.css"
import {Users} from "../components";

const UsersPage = () => {
    return (
        <div className={css.userContainer}>
            <Users/>
        </div>
    );
};

export {UsersPage};