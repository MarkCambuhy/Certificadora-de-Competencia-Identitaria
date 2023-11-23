import React, { useState, useEffect } from "react";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Postagens from "../../components/posts/Posts";
import logo from "../../assets/bons-fluidos-menu-bg.jpg";

const posts = [
  {
   _id:1,
   title:"NOTICIA",
   content: "TEADASKFASFAS"
  },
  {
    _id:2,
    title:"NOTICIA",
    content: "teste 1 2 3"
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