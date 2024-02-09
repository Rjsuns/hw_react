import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UsersForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm()

    const save = (item) => {
        userService.create(item).then(({data}) => setUsers(prev=>[...prev, data]))
        console.log(item)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button> save </button>
            </form>
        </div>
    );
};

export {UsersForm};