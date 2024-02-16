import css from "./User.module.css"
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();
    return (
        <div className={css.userDiv}>
            <div> {id} - {name}</div>
            <button onClick={()=> navigate(`/users/${id}`)}> get Details </button>
        </div>
    );
};

export {User};