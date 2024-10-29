const Stage1 = () => {
  const numPages = 8;
  const pageHeight = 650;
  const pageSpacing = 10;

  return (
    <div className="relative border-2 border-red-500 h-[500px] w-[500px] overflow-y-scroll">
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
  );
};

export default Stage1;

// This would be our viewer if we rendered all pages.
