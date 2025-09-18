
type ContentContainerProps = {
  title: string;
  header: string;
  content: string;
};

export default function ContentContainer(
  { title, header, content}: ContentContainerProps
){
  return (
    <div className="content-wrapper">
      {(title == "" ? <h1 className="page-title">{title}</h1> : <div className="collapsed"></div>)}
      <div className="base-section base-section-style">
        {(header == "" ? <h1 className="section-title">{header}</h1> : <div className="collapsed"></div>)}
        <p className="body-text whitespace-normal">{content}</p>
      </div>
    </div>
  )
}