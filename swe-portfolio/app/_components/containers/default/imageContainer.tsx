import Image from "next/image";

interface ImageProps{
    caption: string;
    imageURL: string;
    width?: number;
    height?: number;
    use_caption?: boolean;
    className?: string;
}

export default function ImageContainer(
    { props }: { props: ImageProps },
){
    const DEFAULT_WIDTH = 400;
    let width = props.width;
    if (props.width === undefined){
        width = DEFAULT_WIDTH;
    }
    
    const DEFAULT_HEIGHT = 400;
    let height = props.height;
    if (props.height === undefined){
        height = DEFAULT_HEIGHT;
    }
    
    const DEFAULT_CLASSNAME = "image-container";
    let className = props.className;
    if (props.className === undefined){
        className = DEFAULT_CLASSNAME;
    }


    let caption = null;
    if (props.use_caption === undefined || props.use_caption){
        caption = <div className="image-caption">{props.caption}</div>;
    }

    return (
        <div className={className} >
            <Image className="featured-image max-w-96" alt={props.caption} src={props.imageURL} width={width} height={height} />
            {caption}
        </div>
    )
}