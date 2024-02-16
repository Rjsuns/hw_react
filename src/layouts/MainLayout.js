import {Outlet, useNavigate} from "react-router-dom";
import css from './button.module.css'
const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div className={css.button}>
            <button onClick={()=> navigate(-1)}> prev </button>
            <button onClick={()=> navigate(1)}> prev </button>
            <Outlet/>
        </div>
    );
};

export {MainLayout};