import SlideUpElement from "@components/containers/default/slideUpElement";

type CertProps = {
  title: string;
  src: string;
  org: string;
  date: string;
}

export default function certContainer(
  { title, src, org, date }: CertProps
) {
  return(
    <SlideUpElement className="cert-card overflow-clip flex flex-col justify-center">
      <img src={src} className="mx-auto w-auto h-auto max-h-[30vh]"/>
      <div className="flex flex-col m-4">
        <div className="text-[1.5rem] font-medium mb-1">{title}</div>
        <div className="text-[1rem]">{org}</div>
        <div className="text-[0.8rem] text-gray-400">{date}</div>
      </div>
    </SlideUpElement>
  )
}