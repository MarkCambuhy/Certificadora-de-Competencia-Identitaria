import styles from "./index.module.css";
import pencil from "../../assets/pencil-alt.png";
import share from "../../assets/share.png";
import trash from "../../assets/trash.png";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const postId = location.pathname.split("/")[2];

  const fetchAuthorNames = async (comments) => {
    const authorPromises = comments.map(async (comm) => {
      const res = await axios.get(`http://localhost:3000/${comm.authorId}`);
      return { ...comm, author: res.data.firstName };
    });
    return Promise.all(authorPromises);
  };

  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:3000/comment/${postId}`);
    setComments(res.data);
  };

  const fetchPost = async () => {
    const res = await axios.get(`http://localhost:3000/post/${postId}`);
    setPost(res.data);
  };

  const handleComment = async () => {
    console.log(comment);
    axios.defaults.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
    const res = await axios.post(`http://localhost:3000/comment`, {
      content: value,
      authorId: JSON.parse(user).id,
      postId: postId,
    });
    fetchComments();
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
    if (comments.length > 0) {
      fetchAuthorNames(comments).then((commentsWithAuthors) => {
        setComments(commentsWithAuthors);
      });
    }
  }, [postId]);

  const toDate = (dataString) => {
    const data = new Date(dataString);
    const dia = data.getDate();
    const mes = month[data.getMonth()];
    const ano = data.getFullYear();
    const dataFormatada = `${mes} ${dia}, ${ano}`;
    return dataFormatada;
  };

  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.conteiner}>
          <div className={styles.bodyTitle}>{post.title}</div>
          <div className={styles.bodyPost}>
            <div className={styles.bodyPostText}>
              Mark Cambuhy • 5 min read • Nov 12, 2023
            </div>
            <div className={styles.bodyPostIcon}>
              <img src={share} />
              <img src={pencil} />
              <img src={trash} />
            </div>
          </div>
          <div className={styles.imgPost}>
            <img id={styles.img} src={post.image} />
          </div>
          <div
            className={styles.textPost}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className={styles.linhaPost}>
            <span className={styles.spanPost}>Cometários</span>
          </div>
          <div>
            {comments.map((post) => (
              <div className={styles.coteinerComentario} key={post.id}>
                <div className={styles.comentarioPost}>
                  <div className={styles.postContent}>
                    <span className={styles.info}>{post.author}</span>
                    <span className={styles.infoTime}>
                      • {toDate(post.updatedAt)}
                    </span>
                    <p className={styles.postContentText}>{post.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.conteinerInput}>
              <input
                type="text"
                className={styles.input}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Digite seu comentário..."
              ></input>
              <button onClick={handleComment} id={styles.botao}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2417 0.147688L0.609861 12.3715C-0.273928 12.8469 -0.161624 13.9989 0.717283 14.3463L5.90771 16.3851L19.936 4.81046C20.2046 4.58647 20.5854 4.92932 20.356 5.18988L8.59326 18.6068V22.2867C8.59326 23.3656 9.98486 23.7907 10.6685 23.009L13.769 19.4753L19.853 21.8616C20.5464 22.1359 21.3374 21.729 21.4644 21.0296L24.98 1.28138C25.146 0.35797 24.0864 -0.309447 23.2417 0.147688Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Post;
