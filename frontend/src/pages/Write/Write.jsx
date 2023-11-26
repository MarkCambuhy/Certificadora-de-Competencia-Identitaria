import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./write.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  let user = localStorage.getItem("user");

  const [imgURL, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
      await axios.post("http://localhost:3000/post", {
        title: title,
        content: value,
        image: imgURL,
        authorId: JSON.parse(user).id,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (file) {
      setName(new Date().getTime() + file.name);
      const storageRef = ref(storage, `images/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImgURL(url);
          });
        }
      );
    }
  }, [file]);

  return (
    <div id={styles.root}>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.sub}>
            <label id={styles.upload} htmlFor={styles.image}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={20}
                id={styles.test}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </label>
            <input
              type="file"
              name="image"
              id={styles.image}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              id={styles.title}
              placeholder="Type your title..."
            />
          </div>
          {imgURL && (
            <div className={styles.imageContainer}>
              <img id={styles.imageContent} src={imgURL} alt="" />
            </div>
          )}

          <div id={styles.quillConainer}>
            <ReactQuill
              id={styles.editor}
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
          <button onClick={handleSubmit} id={styles.publish}>
            Publicar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Write;
