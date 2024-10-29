import { useRef } from "react";

const Stage5 = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const numPages = 100;
  const pageHeight = 650;
  const pageSpacing = 10;
  const effectivePageHeight = pageHeight + pageSpacing;

  const handleScroll = () => {
    if (viewportRef.current) {
      const { scrollTop } = viewportRef.current;
      const pageCalc = scrollTop / effectivePageHeight;
      const currentPage = Math.ceil(pageCalc);
      console.log("page calc ", pageCalc.toFixed(3));
      console.log("page ", currentPage);
    }
  };

  return (
    <div
      className="py-2 bg-slate-400 w-[500px] h-[500px] border-2 border-blue-500 flex justify-center items-center overflow-y-scroll relative"
      ref={viewportRef}
      onScroll={handleScroll}
    >
      <div
        style={{ top: "0px", height: `${numPages * pageHeight + (numPages + 1) * pageSpacing}px` }}
        className="absolute  bg-white w-full"
      >
        {Array.from({ length: numPages }, (_, index) => {
          const top = index * pageHeight + pageSpacing * (index + 1);

          return (
            <div
              key={index}
              style={{
                width: "300px",
                height: `${pageHeight}px`,
                top: `${top}px`,
              }}
              className="absolute border border-black bg-[#fefefe] -translate-x-1/2 left-1/2"
            >{`page ${index + 1}`}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Stage5;

// Now we're tracking which page we're in with scrollTop
// It's important to use effectivePageHeight, because we're taking into account the pageSpacing between pages
