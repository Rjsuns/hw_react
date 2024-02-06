import {Posts} from "./components/Posts/Posts";
import './App.css'

const App = () => {
    return (
        <div className={"App"}>
            <div className={"info-block"}>
            <Posts/>
            </div>
        </div>
    );
};


export {App};