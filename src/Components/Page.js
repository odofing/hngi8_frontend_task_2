import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Posts from '../Components/Posts'
import Pagination from './Pagination';

const Page = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(3);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const url = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(url)
            setPosts(res.data);
            setLoading(false)
        }
        fetchPosts();
       
    }, [])

    // get current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // change page 
    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <h1 className="text-primary">Pagination with React</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </>
    )
}

export default Page
