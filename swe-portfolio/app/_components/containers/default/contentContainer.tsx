
type ContentContainerProps = {
  title: string;
  header: string;
  content: string;
};

export default function ContentContainter(
  { title, header, content}: ContentContainerProps
){
  return (
    <div className="content-wrapper">
      <h1 className="page-title">{title}</h1>
      <div className="base-section">
        {/*<ProfileContainer/>*/}
        <h1 className="section-title">{header}</h1>
        <p className="body-text">{content}</p>
      </div>
    </div>
  )
}