const Stage2 = () => {
  const numPages = 8;
  const pageHeight = 650;
  const pageSpacing = 10;
  return (
    <div className="p-2 bg-slate-400 w-[500px] h-[500px] border-2 border-blue-500 flex justify-center items-center">
      <div className="relative border-2 border-red-500 bg-white h-[450px] w-[90%] overflow-y-scroll">
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

export default Stage2;

// Add container div to viewport
