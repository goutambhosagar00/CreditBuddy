import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import StudentStories from "./pages/StudentStories";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import JoinWaitList from "./pages/JoinWaitList";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/stories" element={<StudentStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogArticle />} />
            <Route path="/join-waitlist" element={<JoinWaitList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
