const Stage4 = () => {
  const numPages = 100;
  const pageHeight = 650;
  const pageSpacing = 10;

  return (
    <div className="py-2 bg-slate-400 w-[500px] h-[500px] border-2 border-blue-500 flex justify-center items-center overflow-y-scroll relative">
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

export default Stage4;

// Now we've changed the styling a bit and added the page numbers based on index of the array
