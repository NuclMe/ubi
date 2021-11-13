import React, { useState, useRef } from 'react';

import PostItem from './PostItem';

export default function PostList(name) {
    const [posts, setPosts] = useState([
        {id:1,title:'title',description:"Description"},
        {id:2,title:'title',description:"Description"},
        {id:3,title:'title',description:"Description"}
      ])
    return (
        <div>
            <h1> {name.name}</h1>
             {posts.map(post=>
                <PostItem post={post} key={post.id} />

            )}
        </div>
    )
}
