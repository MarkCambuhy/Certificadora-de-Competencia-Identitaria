import styles from "./index.module.css";
import pencil from "../../assets/pencil-alt.png";
import share from "../../assets/share.png";
import trash from "../../assets/trash.png";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  let user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);

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

  const authorPost = async (authorId) => {
    const res = await axios.get(`http://localhost:3000/${authorId}`);
    setName(res.data.firstName);
  };

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
    authorPost(res.data.authorId);
    setPost(res.data);
  };

  const handleComment = async () => {
    if (comment != "") {
      axios.defaults.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
      await axios.post(`http://localhost:3000/comment`, {
        content: comment,
        authorId: JSON.parse(user).id,
        postId: postId,
      });
      setComment("");
      fetchComments();
    }
  };

  const handleDelete = async (id) => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
      await axios.delete(`http://localhost:3000/comment/${id}`);
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPost();
        await fetchComments();

        if (comments.length > 0) {
          const commentsWithAuthors = await fetchAuthorNames(comments);
          setComments(commentsWithAuthors);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [postId]);

  useEffect(() => {
    if (comments.length > 0) {
      fetchAuthorNames(comments).then((postsWithAuthors) => {
        setComments(postsWithAuthors);
      });
    }
  }, [comments]);

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
              {name} • {toDate(post.updatedAt)}
            </div>
            <div className={styles.bodyPostIcon}>
              {/* <img src={share} /> */}

              {parsedUser &&
                parsedUser.id != null &&
                parsedUser.id == post.authorId && (
                  <>
                    <img src={pencil} />
                    <img src={trash} />
                  </>
                )}
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
                    {parsedUser &&
                      parsedUser.id != null &&
                      post.authorId == parsedUser.id &&
                      post.authorId == JSON.parse(user).id && (
                        <span onClick={() => handleDelete(post.id)}>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
                              stroke="#111827"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    <p className={styles.postContentText}>{post.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {parsedUser && parsedUser.id != null && (
              <div className={styles.conteinerInput}>
                <input
                  type="text"
                  className={styles.input}
                  value={comment}
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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Post;
