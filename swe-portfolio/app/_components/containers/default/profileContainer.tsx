import ImageContainer from './imageContainer';

type ProfileContainerProps = {
  collapsed: boolean;
  isMobile: boolean;
  name: string;
  jobTitle: string;
  description: string;
};

export default function ProfileContainer(
  { collapsed, isMobile, name, jobTitle, description }: ProfileContainerProps
){
    // Desktop Layout First
      return(
        <div className="relative w-min h-auto">
        <div className={`dt-profile-container fade-container  backdrop-blur rounded-full overflow-clip
          ${collapsed ? "mr-0" : "mr-12"} 
          ${!isMobile ? "opacity-100" : "opacity-0 pointer-events-none h-0"}`}>

            <ImageContainer props={{
            className: `profile-image rounded-full border-2 border-gray-100 shadow-sm dt ${collapsed ? "w-16 h-16" : "w-32 h-32"}`, 
            caption: `${name}`, imageURL: "/assets/Headshot.jpg", width: 400, height: 400, use_caption: false}}/>

          <div className="dt-profile-info">
            <p className="profile-name whitespace-nowrap mr-6 dt">{name}</p>
            <div className={`dt ${collapsed ? "opacity-0 -translate-x-full font-stretch-condensed whitespace-nowrap max-w-0 max-h-0" : "max-h-40 opacity-100 mr-6 mb-2"}`}>
              <p className="profile-job-title duration-100">{jobTitle}</p>
              <p className="profile-bio duration-75">{description}</p>
            </div>
          </div>
        </div>

        <div className={`m-profile-container fade-container dt ${isMobile ? "opacity-100" : "opacity-0 pointer-events-none h-0"}`}>
              <ImageContainer props={{
              className: `profile-image rounded-full border-2 border-gray-100 shadow-sm dt ${collapsed ? "w-12 h-12" : "w-24 h-24"}`, 
              caption: `${name}`, imageURL: "/assets/Headshot.jpg", width: 400, height: 400, use_caption: false}}/>

            <div className={`m-profile-info my-auto dt ${collapsed ? "flex-row items-start" : "flex-col"}`}>
              <p className="profile-name dt">{name}</p>
              <div className={`dt ${collapsed ? "max-h-0 opacity-0" : "max-h-40 opacity-100"}`}>
                <p className="profile-job-title">{jobTitle}</p>
                <p className="profile-bio">{description}</p>
              </div>
            </div>
        </div>
        </div>
      )













  return (
    <div className={`profile card flex items-center transition-all duration-300
        ${collapsed && isMobile ? "gap-2" : "flex-col gap-2"}`}>
      
      <ImageContainer 
      props={{className: `profile-image ${collapsed ? "w-12 h-12" : "w-32 h-32"}` ,
      caption: "My Headshot", imageURL: "/assets/Headshot.jpg", width: 400, height: 400, use_caption: false }}/>
        
        <div className={`profile-name font-semibold transition-all duration-300
          ${collapsed && isMobile ? "text-lg" : "text-[clamp(1.125rem,3vw,1.5rem)]"}`}>
            Jonathan Warner
        </div>
        {!collapsed && (
        <>
        <p
        className={`accent-text transition-all duration-300 overflow-hidden 
        ${collapsed ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`}>
          Software Engineer
        </p>

        <p
        className={`text-sm text-gray-400 transition-all duration-300 overflow-hidden
        ${collapsed ? "max-h-0 opacity-0" : "max-h-20 opacity-100"}`}>
          Passionate about building multiplayer games and scalable web apps.
        </p>
        </>
        )}
    </div>

  )
}