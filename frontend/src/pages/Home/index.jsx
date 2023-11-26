import React, { useState, useEffect } from "react";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Postagens from "../../components/posts/Posts";
import picture from "../../components/posts/Posts";
import logo from "../../assets/bons-fluidos-menu-bg.png";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/post/all");
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <div className="background">
            <img src={logo} />
          </div>
          <div className="noticias">
            <span>Noticias</span>
            <hr></hr>
          </div>
          <Postagens posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
