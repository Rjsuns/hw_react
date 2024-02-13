import {Todos} from "../../components/TodosContainer/Todos";
import {Outlet} from "react-router-dom";
import css from "../../components/TodosContainer/Todo.module.css"

const TodosPage = () => {
    return (
        <div className={css.Container}>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export {TodosPage};