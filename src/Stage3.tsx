const Stage3 = () => {
  const numPages = 8;
  const pageHeight = 650;
  const pageSpacing = 10;
  return (
    <div className="py-2 bg-slate-400 w-[500px] h-[500px] border-2 border-blue-500 flex justify-center items-center overflow-y-scroll relative">
      <div
        style={{ top: "0px", height: `${numPages * pageHeight + (numPages + 1) * pageSpacing}px` }}
        className="absolute border-2 border-red-500 bg-white w-[90%]"
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
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Stage3;

// Now we've defined the height of the viewport child as being the height of pages * pageHeight.
// We've made it absolute and positioned it top 0
