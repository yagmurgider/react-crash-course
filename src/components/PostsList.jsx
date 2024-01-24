import {useEffect, useState} from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {

    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body}/>)}
                </ul>
            )}
            {posts.length === 0 && <div style={{ textAlign: 'center', color: 'white'}}>
                <h2>There ara no posts yet.</h2>
                <p>Star adding some!</p>
            </div>
            }
        </>
    );
    
}

export default PostsList;