import ImageContainer from './imageContainer';
import SocialsContainer from "@components/containers/default/socialsContainer";

type ProfileContainerProps = {
  collapsed: boolean;
  name: string;
  jobTitle: string;
  hamburger_button: React.ReactNode;
};

export default function ProfileContainer(
  { collapsed, name, jobTitle, hamburger_button }: ProfileContainerProps
){
    // Desktop Layout First
      return(
      <div className={`profile`}>
        <div className={`dt-profile-container fade-container  backdrop-blur rounded-full dt
          ${collapsed ? "mr-0" : "mr-12"} `}>

          <ImageContainer props={{
          className: `profile-image z-10 rounded-full border-2 shadow-sm dt ${collapsed ? "w-16 h-16" : "w-32 h-32"}`, 
          caption: `${name}`, imageURL: "/assets/Headshot.jpg", width: 400, height: 400, use_caption: false}}/>

          <div className="dt-profile-info dt">
            <div className="flex m-0 gap-1">
            <p className={`profile-name whitespace-nowrap ${collapsed ? "mr-6" : "mr-2"} dt`}>{name}</p>
            <p className={`dt mb-2 mt-auto profile-bio overflow-x-clip ${collapsed ? "opacity-0 z-0 -translate-x-full font-stretch-condensed whitespace-nowrap max-w-0 max-h-0" : "max-h-40 opacity-100"}`}>{jobTitle}</p>
            </div>
            <div className={`dt overflow-x-clip ${collapsed ? "opacity-0 z-0 -translate-x-full font-stretch-condensed whitespace-nowrap max-w-0 max-h-0" : "max-h-40 opacity-100"}`}>
              <SocialsContainer/>
            </div>
          </div>
        </div>

        <div className={`m-profile-container fade-container dt`}>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-row mr-auto bg-[rgba(10,10,10,0.85)] bg-linear-0  border-[rgba(83,134,228,0.2)] border rounded-full">
              <ImageContainer props={{
              className: `profile-image rounded-full border-2 border-blue-400 shadow-sm dt ${collapsed ? "w-12 h-12" : "w-18 h-18"}`, 
              caption: `${name}`, imageURL: "/assets/Headshot.jpg", width: 400, height: 400, use_caption: false}}/>
            
              <div className="dt flex flex-col justify-start">
                <p className={`profile-name mt-auto ml-2 mr-4 dt ${collapsed ? "mb-auto" : "mb-0"}`}>{name}</p>
                <p className={`profile-bio overflow-x-clip ${collapsed ? "opacity-0 z-0 -translate-y-full font-stretch-condensed whitespace-nowrap w-0 h-0 p-0 m-0" : "translate-y-0 max-h-10 ml-2 mb-2 opacity-100"} dt`}>{jobTitle}</p>
              </div>
            </div>
            {hamburger_button}
          </div>

          <div className={`m-profile-info dt ${collapsed ? "flex-row items-start" : "flex-col"}`}>
            <div className={`dt ${collapsed ? "opacity-0 -translate-y-full font-stretch-condensed whitespace-nowrap max-w-0 max-h-0" : "opacity-100 mt-2"}`}>
              <SocialsContainer/>
            </div>
          </div>
        </div>
      </div>
      )
}