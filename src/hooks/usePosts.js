import { useContext } from "react";
import PostContext from "../contexts/PostContext";

export const usePosts = () => {
    const context = useContext(PostContext);

    const getPostById = (id) => {
        return context.posts.find(post => post.id === parseInt(id));
    };

    return {
        ...context,
        getPostById
    };
};