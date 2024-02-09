import {User} from "./User";

const Users = ({users}) => {
    return (
        <div>
            {
                users.map(user=> <User key={users.id} user={user} />)
            }
        </div>
    );
};

export {Users};