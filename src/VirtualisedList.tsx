import { useEffect, useRef, useState } from "react";

interface VirtualisedListProps {
  numPages: number;
  pageHeight: number;
  pageWidth: number;
  pageSpacing: number;
  viewportWidth: number;
  viewportHeight: number;
}

const VirtualisedList = ({
  numPages,
  pageHeight,
  pageWidth,
  pageSpacing,
  viewportWidth,
  viewportHeight,
}: VirtualisedListProps) => {
  const [pagesInView, setPagesInView] = useState<number[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const effectivePageHeight = pageHeight + pageSpacing;

  const handleScroll = () => {
    if (viewportRef.current) {
      const { scrollTop } = viewportRef.current;
      const pageCalc = scrollTop / effectivePageHeight;
      const newPageIndex = Math.floor(pageCalc);
      if (newPageIndex !== currentPageIndex) {
        setCurrentPageIndex(newPageIndex);
      }
    }
  };

  // loading initial 5 or less pages
  // leave this in useEffect, because numPages is going to change
  // when pdf file loaded from 0 to X
  useEffect(() => {
    setPagesInView(() => {
      const pagesInView = [];
      for (let i = 0; i < Math.min(numPages, 5); i++) {
        pagesInView.push(i);
      }
      return pagesInView;
    });
  }, [numPages]);

  // update the pagesInView array when page index change, if needed
  useEffect(() => {
    // if crossing from middle to second to last page in pagesInView
    // and last page in pagesInView does not match numPages - 1
    if (
      currentPageIndex === pagesInView[pagesInView.length - 2] &&
      pagesInView[pagesInView.length - 1] !== numPages - 1
    ) {
      setPagesInView((prevPagesInView) => {
        const newPagesInView = [...prevPagesInView];
        // remove index of first page in array
        newPagesInView.shift();
        // push index of page after last in array
        newPagesInView.push(prevPagesInView[prevPagesInView.length - 1] + 1);
        return newPagesInView;
      });
    }

    // if crossing from middle to second page in pagesInView
    // and first page in pagesInView does not match 0
    if (currentPageIndex === pagesInView[1] && pagesInView[0] !== 0) {
      setPagesInView((prevPagesInView) => {
        const newPagesInView = [...prevPagesInView];
        // remove index of last page in array
        newPagesInView.pop();
        // push index of page before first in array
        newPagesInView.unshift(prevPagesInView[0] - 1);
        return newPagesInView;
      });
    }
  }, [currentPageIndex]);

  return (
    <div
      style={{ width: `${viewportWidth}px`, height: `${viewportHeight}px` }}
      className="py-2 border-2 border-blue-500 flex justify-center items-center overflow-y-scroll relative"
      ref={viewportRef}
      onScroll={handleScroll}
    >
      <div
        style={{ top: "0px", height: `${numPages * pageHeight + (numPages + 1) * pageSpacing}px` }}
        className="absolute  bg-white w-full flex flex-col justify-center items-center"
      >
        {pagesInView.map((pageIndex) => {
          const top = pageIndex * pageHeight + pageSpacing * (pageIndex + 1);

          return (
            <div
              key={pageIndex}
              style={{
                width: `${pageWidth}px`,
                height: `${pageHeight}px`,
                top: `${top}px`,
              }}
              className="absolute border border-black bg-[#fefefe]"
            >{`page ${pageIndex + 1}`}</div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualisedList;
