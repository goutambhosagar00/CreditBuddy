import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs.json";

export default function BlogArticle() {
  const { id } = useParams();
  const post = blogs.find(b => b.id === id);

  if (!post)
    return (
      <div className="page container-section">
        <h2>Article not found</h2>
      </div>
    );

  return (
    <article className="blog-article page container-section">
      <h1 className="blog-article-title">{post.title}</h1>
      <div className="blog-article-meta">{post.date} • {post.author}</div>

     {post.thumbnail && (
  <img
    src={import.meta.env.BASE_URL + post.thumbnail}
    alt={post.title}
    className="blog-article-thumb"
  />
)}


      <div
        className="blog-article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Optional CTA Section */}
      {post.cta && (
        <div className="blog-article-cta">
          <p>{post.cta.text}</p>
          <a href={post.cta.link} className="btn btn-primary">
            {post.cta.buttonText}
          </a>
        </div>
      )}
    </article>
  );
}
