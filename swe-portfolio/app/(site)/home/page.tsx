import ImageContainer from '../../_components/containers/default/imageContainer';

export const metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div className="content-wrapper">
      <h1 className="page-title">Home</h1>
      <div className="base-section">
        <ImageContainer props={{caption: "Hello", imageURL: "/assets/Headshot.jpg", width: 400, height: 400, use_caption: false }}/>
        <h1 className="section-title">Hey there!</h1>
        <p className="body-text">Sit down, grab a snack.</p>
      </div>
    </div>
  )
}
