import { useEffect, useRef, useState } from "react";

const Stage6 = () => {
  const [pagesInView, setPagesInView] = useState<number[]>([]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const numPages = 6;
  const pageHeight = 650;
  const pageSpacing = 10;
  const effectivePageHeight = pageHeight + pageSpacing;

  const handleScroll = () => {
    if (viewportRef.current) {
      const { scrollTop } = viewportRef.current;
      const pageCalc = scrollTop / effectivePageHeight;
      const currentPageIndex = Math.floor(pageCalc);
      console.log("page calc ", pageCalc.toFixed(3));
      console.log("page ", currentPageIndex);
    }
  };

  // loading initial 5 or less pages
  useEffect(() => {
    setPagesInView(() => {
      const pagesInView = [];
      for (let i = 0; i < Math.min(numPages, 5); i++) {
        pagesInView.push(i);
      }
      return pagesInView;
    });
  }, [numPages]);

  return (
    <div
      className="py-2 w-[500px] h-[500px] border-2 border-blue-500 flex justify-center items-center overflow-y-scroll relative"
      ref={viewportRef}
      onScroll={handleScroll}
    >
      <div
        style={{ top: "0px", height: `${numPages * pageHeight + (numPages + 1) * pageSpacing}px` }}
        className="absolute  bg-white w-full"
      >
        {pagesInView.map((pageIndex) => {
          const top = pageIndex * pageHeight + pageSpacing * (pageIndex + 1);

          return (
            <div
              key={pageIndex}
              style={{
                width: "300px",
                height: `${pageHeight}px`,
                top: `${top}px`,
              }}
              className="absolute border border-black bg-[#fefefe] -translate-x-1/2 left-1/2"
            >{`page ${pageIndex + 1}`}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Stage6;

// We've changed to pageIndex and in our pageCalc we're using Math.floor()
// This is to avoid the first page being offset by 650px
// We're loading the initial 5 or less pages (even if pageNum > 5)
