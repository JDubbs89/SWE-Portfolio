export default function BlogCard(/*title:string, description:string, date:string, read_time:string, topic:string*/){
    const title = "Hello World"
    const description = "Hello World"
    const date = "Hello World"
    const read_time = "Hello World"
    const topic = "Hello World"
    
    return (
        <div className="blog-card">
            <div className="blog-card-title">{title}</div>
            <div className="blog-card-excerpt">{description}</div>
            <div className="blog-card-meta">
                <span>{date}</span>
                <span>•</span>
                <span>{read_time} read</span>
                <span>•</span>
                <span>{topic}</span>
            </div>
        </div>
    )
}