import React, {FC, useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer: FC = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    // const {data: posts, error, isLoading, refetch} = postAPI.useFetchPostsQuery(limit, {
    //     pollingInterval: 1000
    // })

    useEffect(() => {
        setTimeout(() => {
            setLimit(prevState => prevState - 1)
        }, 2000)
    }, [])

    const handleClick = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            {/*<button onClick={() => refetch()}>REFETCH</button>*/}
            <button onClick={handleClick}>Add post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error has occured</h1>}
            {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} post={post}/>)}
        </div>
    );
};

export default PostContainer;