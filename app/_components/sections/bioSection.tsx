import BaseSection from "./baseSection";

export default function BioSection (){
  return (
    <BaseSection className="flex justify-center my-5">
      <div className="content-wrapper flex">
        <div className="flex-2">
          Test 1
        </div>
        <div className="flex-2">
          Test 2
        </div>
      </div>
    </BaseSection>
  )
}