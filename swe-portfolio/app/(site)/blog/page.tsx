import BlogCard from './blogCard';
export const metadata = {
  title: "Blog | Jonathan Warner - Software Engineer",
  description: "Hello! I'm Jonathan, a computer science student and aspiring software engineer.",
}

export default function Blog() {
  return (
    <div className="content-wrapper">
      <h1 className="page-title">Blog</h1>
      <div className="base-section">
        <h1 className="section-title">Recent Posts</h1>
        <div className="grid-2 mb-2">
          <div className="blog-card">
            <div className="blog-card-title">Understanding the WAS API</div>
            <div className="blog-card-excerpt">A comprehensive guide to understanding and implementing React Hooks in your applications. Learn about useState, useEffect, and custom hooks.</div>
            <div className="blog-card-meta">
                <span>March 15, 2024</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>Windows Audio System</span>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-card-title">Homegrown Chatbots with Markov Chains</div>
            <div className="blog-card-excerpt">A comprehensive guide to understanding and implementing React Hooks in your applications. Learn about useState, useEffect, and custom hooks.</div>
            <div className="blog-card-meta">
                <span>March 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
                <span>•</span>
                <span>AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
