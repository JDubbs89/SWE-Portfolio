"use client"
import { useEffect, useState } from "react";

export default function ScrollBar(){
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
        const headerExpanded = 125; // px
        const headerCollapsed = 50; // px
        const headerDelta = headerExpanded - headerCollapsed;
        const onScroll = () => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight - headerDelta;
          const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  setScrollPercent(percent);
      setScrollPercent(percent);
        };
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
      });
  
      return(
        <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-50">
          <div
            className="h-full bg-[#8ba3f0] transition-all duration-150 ease-out"
            style={{ width: `${scrollPercent}%` }}
          />
        </div>
  );
}