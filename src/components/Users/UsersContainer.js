import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Users} from "./Users";
import {UsersForm} from "./UsersForm";

const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {
    UsersContainer
}