interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  read_time: string;
  topic: string;
}

export default function BlogCard(
    { props }: { props: BlogCardProps }, 
){
    
    return (
        <div className="blog-card">
            <div className="blog-card-title">{props.title}</div>
            <div className="blog-card-excerpt">{props.description}</div>
            <div className="blog-card-meta">
                <span>{props.date}</span>
                <span>•</span>
                <span>{props.read_time} read</span>
                <span>•</span>
                <span>{props.topic}</span>
            </div>
        </div>
    )
}