import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IPostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<IPostItemProps> = ({post, remove, update}) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = () => {
        const title = prompt() || ''
        update({...post, title})
    }

    return (
        <div onClick={handleUpdate}>
            <h3>{post.id} - {post.title}</h3>
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;