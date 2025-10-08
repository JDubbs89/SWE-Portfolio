import BaseSection from "./baseSection";
import PositionContainer from "@components/containers/default/positionContainer";
//import Image from "next/image";

export default function EduExpSection(){
    return(
        <BaseSection className="flex justify-center my-5">
            <div className="flex flex-col w-fit h-full justify-between"> {/* col container for containers */}
                <PositionContainer/>
                <PositionContainer/>
                <PositionContainer/>
            </div>
        </BaseSection>
    )
}