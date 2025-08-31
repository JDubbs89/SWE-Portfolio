import BlogCard from './blogCard';
export const metadata = {
  title: "Blog",
}

export default function Blog() {
  return (
    <div className="content-wrapper">
      <h1 className="page-title">Blog</h1>
      <div className="base-section">
        <h1 className="section-title">Recent Posts</h1>
        <div className="grid-2 mb-2">
          <BlogCard 
            props={{ title: "Understanding the Windows Audio System API", 
            description: "Discussing how windows manages its audio routing.", 
            date: "March 15, 2025", 
            read_time: "8 min", 
            topic: "Windows Audio System",
            blogid: "/1"}} />
          <BlogCard 
            props={{ title: "Homegrown Chatbots with Markov Chains", 
            description: "How can we make our own chatbots at home?", 
            date: "March 18, 2025", 
            read_time: "5 min", 
            topic: "Artificial Intelligence",
            blogid: "/1"}} />
          <BlogCard 
            props={{ title: "Using Cloud Compute to Run Game Servers", 
            description: "How can we use Oracle Cloud's always-free tier to run our own Minecraft server?", 
            date: "March 25, 2025", 
            read_time: "10 min", 
            topic: "Custom Game Servers",
            blogid: "/1"}} />
        </div>
      </div>
    </div>
  )
}
