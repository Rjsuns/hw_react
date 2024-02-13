import {Outlet} from "react-router-dom";
import {Albums} from "../../components/AlbumsContainer/Albums";
import css from "../../components/AlbumsContainer/Album.module.css"
const AlbumsPage = () => {
    return (
        <div className={css.Container}>
            <Albums/>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};