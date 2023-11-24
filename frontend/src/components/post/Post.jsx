import "./Post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="picture">
        <span className="postImage">{post.image}</span>
      </div>
      <div className="textContent">
        <span className="postTitle">{post.title}</span>
        <span className="postContent">{post.content}</span>
        <a href="#" className="verMais">
          Continue lendo...
        </a>
      </div>
    </div>
  );
}