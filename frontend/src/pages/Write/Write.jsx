import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./write.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <label id={styles.upload} htmlFor={styles.image}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={20}
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
            id={styles.title}
            placeholder="Type your title..."
          />
          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <button>Publicar</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Write;
