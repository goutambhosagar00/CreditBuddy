import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, User, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import ScrollReveal from "../components/ScrollReveal";
import { getAllPostViews } from "../utils/views";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [postsWithViews, setPostsWithViews] = useState(posts);

  useEffect(() => {
    // Update views from localStorage when component mounts
    setPostsWithViews(getAllPostViews(posts));
  }, []);

  // Get all unique categories from posts
  const allCategories = Array.from(new Set(posts.map(post => post.category)));
  const categories = ["All", ...allCategories];

  // Find the most popular post (highest views)
  const mostPopularPost = useMemo(() => {
    return [...postsWithViews].sort((a, b) => (b.views || 0) - (a.views || 0))[0];
  }, [postsWithViews]);

  const filteredPosts = selectedCategory === "All" 
    ? postsWithViews 
    : postsWithViews.filter(post => post.category === selectedCategory);

  // The featured post is always the most popular one
  const featuredPost = mostPopularPost;
  
  // The grid posts are the filtered posts, excluding the featured post so it doesn't duplicate
  const gridPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter mb-6">
            The <span className="text-[#D9F99D]">CreditBuddy</span> Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Insights, guides, and news to help you master your finances and build a secure future.
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <ScrollReveal>
            <Link to={`/blog/${featuredPost.id}`} className="block bg-[#111] border border-white/5 rounded-3xl overflow-hidden group cursor-pointer hover:border-white/20 transition-colors">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Most Popular
                    </span>
                    <button 
                      onClick={(e) => handleCategoryClick(e, featuredPost.category)}
                      className="bg-[#D9F99D]/10 text-[#D9F99D] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#D9F99D]/20 transition-colors"
                    >
                      {featuredPost.category}
                    </button>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {featuredPost.readTime}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Eye className="w-4 h-4" /> {featuredPost.views} views
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-[#D9F99D] transition-colors line-clamp-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{featuredPost.author}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {featuredPost.date}
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D9F99D] group-hover:text-black transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </section>
      )}

      {/* Latest Posts */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <h3 className="text-3xl font-display font-bold">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category 
                      ? "bg-white/10 text-white" 
                      : "bg-transparent border border-white/10 text-gray-400 hover:bg-white/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <Link to={`/blog/${post.id}`} className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group cursor-pointer hover:border-white/20 transition-colors flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <button 
                      onClick={(e) => handleCategoryClick(e, post.category)}
                      className="text-[#7C3AED] text-xs font-bold uppercase tracking-wider hover:text-[#D9F99D] transition-colors"
                    >
                      {post.category}
                    </button>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {post.views} views
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-[#D9F99D] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-sm text-gray-300">{post.author}</div>
                      <span className="text-gray-600">•</span>
                      <div className="text-xs text-gray-500">{post.date}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal>
          <div className="text-center mt-16">
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Load More Articles
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-[#7C3AED] text-center text-white">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Never Miss an Update</h2>
            <p className="text-lg mb-10 text-white/80">
              Get the latest student finance tips, earning opportunities, and CreditBuddy news delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white placeholder:text-white/50" 
              />
              <button type="button" className="bg-white text-[#7C3AED] px-8 py-3 rounded-xl font-bold hover:bg-[#D9F99D] hover:text-black transition-all">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-white/50">We respect your privacy. No spam, ever.</p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
