import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/Home/HomePage";
import {CommentsPage} from "./pages/Comments/CommentsPage";
import {AlbumsPage} from "./pages/Albums/AlbumsPage";
import {TodosPage} from "./pages/Todos/TodosPage";
import {PostByComment} from "./pages/PostComment/PostByComment";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index:true, element: <Navigate to={'home'}/>
            },
            {
                path: 'home', element: <HomePage/>
            },
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children:[
                    {
                        path: ':postId', element: <PostByComment/>
                    }
                ]
            }
        ]
    }
]);

export {
    router
}