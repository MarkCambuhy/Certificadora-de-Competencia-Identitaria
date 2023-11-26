import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="post">
      <div className="picture">
        <img className="postImage" src={post.image} alt="" />
      </div>
      <div className="textContent">
        <h2 className="postTitle">{post.title}</h2>
        <div className="postContent">{getText(post.content)}</div>
        <Link className="verMais" to={`/post/${post.id}`}>
          Continue lendo...
        </Link>
      </div>
    </div>
  );
}
