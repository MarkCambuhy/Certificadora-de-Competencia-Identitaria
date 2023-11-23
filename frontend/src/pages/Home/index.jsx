import React, { useState, useEffect } from "react";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Postagens from "../../components/posts/Posts";
import picture from "../../components/posts/Posts";
import logo from "../../assets/bons-fluidos-menu-bg.png";

const posts = [
  {
    _id:1,
    title:"Lorem ipsum dolor sit amet consectetur. Odio aenean amet risus et lectus.",
    content: "Lorem ipsum dolor sit amet consectetur. Lorem non vel diam lectus. Pellentesque egestas purus nullam velit lacus. Velit cursus commodo habitasse vivamus mattis aliquam sociis duis. Augue felis adipiscing semper cursus aliquam vestibulum. Facilisi pellentesque elementum dictum mattis ut condimentum."
  },
  {
    _id:2,
    title:"Lorem ipsum dolor sit amet consectetur. Odio aenean amet risus et lectus.",
    content: "Lorem ipsum dolor sit amet consectetur. Lorem non vel diam lectus. Pellentesque egestas purus nullam velit lacus. Velit cursus commodo habitasse vivamus mattis aliquam sociis duis. Augue felis adipiscing semper cursus aliquam vestibulum. Facilisi pellentesque elementum dictum mattis ut condimentum."
  },
  {
    _id:3,
    title:"Lorem ipsum dolor sit amet consectetur. Odio aenean amet risus et lectus.",
    content: "Lorem ipsum dolor sit amet consectetur. Lorem non vel diam lectus. Pellentesque egestas purus nullam velit lacus. Velit cursus commodo habitasse vivamus mattis aliquam sociis duis. Augue felis adipiscing semper cursus aliquam vestibulum. Facilisi pellentesque elementum dictum mattis ut condimentum."
  }
]

const Home = () => {
  return(
    <>
    <Header />
    <div className="container">
      <div className="content">
        <div className="background">
          <img src={logo}/>
        </div>
        <div className="noticias">
          <p>Noticias</p>
          <hr></hr>
        </div>
        <Postagens posts={posts}/>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;