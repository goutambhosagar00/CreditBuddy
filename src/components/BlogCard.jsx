import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="blog-card animate-fadeup-sm">
      {post.thumbnail && (
        <img src={post.thumbnail} alt={post.title} className="blog-thumb" />
      )}
      <div className="blog-body">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="link-cta btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}
