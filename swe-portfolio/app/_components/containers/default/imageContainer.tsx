import Image from "next/image";

interface ImageProps{
    caption: string;
    imageURL: string;
    width?: number;
    height?: number;
    use_caption?: boolean;
}

export default function ImageContainer(
    { props }: { props: ImageProps },
){
    const DEFAULT_WIDTH = 400;
    const DEFAULT_HEIGHT = 400;
    let width = props.width;
    let height = props.height;
    if (props.width === undefined){
        width = DEFAULT_WIDTH;
    }
    if (props.height === undefined){
        height = DEFAULT_HEIGHT;
    }

    let caption = null;
    if (props.use_caption === undefined || props.use_caption){
        caption = <div className="image-caption">{props.caption}</div>;
    }

    return (
        <div className="image-container" >
            <Image className="featured-image max-w-96" alt={props.caption} src={props.imageURL} width={width} height={height} />
            {caption}
        </div>
    )
}