import React from "react";
import blogs from "../data/blogs.json";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <div className="blog-page container-section animate-fadeup-sm">
      <header className="blog-header">
        <h1 className="blog-title">📚 Blog & Insights</h1>
        <p className="blog-subtitle">
          Explore tips, guides, and real stories to help you grow smarter with money.
        </p>
      </header>

      <div className="blog-grid">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
