import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => { //Don't use async on useEffect
    const fetchPosts = async () => { //use async here
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []); //Empty brakets after so it runs only when mount


  
  return (
    <div className="container mt-5">
      <h1 className="text-primaty-mb-3">My Blog</h1>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
