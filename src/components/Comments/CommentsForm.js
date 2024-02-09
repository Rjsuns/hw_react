import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";

const CommentsForm = ({setComments}) => {
    const {reset, register, handleSubmit} = useForm()

    const save = (item) => {
        commentService.create(item).then(({data}) => setComments(prev=>[...prev, data]))
        console.log(item)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button> save </button>
            </form>
        </div>
    );
};

export {CommentsForm};