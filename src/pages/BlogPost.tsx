import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { posts } from "../data/posts";
import { ArrowLeft, Calendar, Clock, User, Eye } from "lucide-react";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import ScrollReveal from "../components/ScrollReveal";
import { incrementPostViews, getPostViews } from "../utils/views";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    if (post) {
      // Check if we've already viewed this post in this session to avoid double counting on strict mode
      const sessionKey = `viewed_${post.id}`;
      if (!sessionStorage.getItem(sessionKey)) {
        const newViews = incrementPostViews(post.id, post.views);
        setViews(newViews);
        sessionStorage.setItem(sessionKey, "true");
      } else {
        setViews(getPostViews(post.id, post.views));
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="bg-[#D9F99D] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black pt-24 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#D9F99D]/10 text-[#D9F99D] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Eye className="w-4 h-4" /> {views} views
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tighter mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <User className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <div className="font-bold text-lg">{post.author}</div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-3xl overflow-hidden mb-12 border border-white/10">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[500px]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[#D9F99D] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.div>
      </article>

      {/* Newsletter Section */}
      <section className="mt-24 py-16 px-6 bg-[#111] border-y border-white/5 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4">Enjoyed this article?</h2>
            <p className="text-gray-400 mb-8">Subscribe to our newsletter for more student finance tips and updates.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9F99D] w-full sm:w-64" 
              />
              <button type="button" className="bg-[#D9F99D] text-black px-6 py-3 rounded-xl font-bold hover:bg-white transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
