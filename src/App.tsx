import Stage1 from "./Stage1.tsx";
import Stage2 from "./Stage2.tsx";
import Stage3 from "./Stage3.tsx";
import Stage4 from "./Stage4.tsx";
import Stage5 from "./Stage5.tsx";
import Stage6 from "./Stage6.tsx";
import Stage7 from "./Stage7.tsx";
import Stage8 from "./Stage8.tsx";
import VirtualisedList from "./VirtualisedList.tsx";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <VirtualisedList
        viewportWidth={500}
        viewportHeight={500}
        numPages={20}
        pageHeight={600}
        pageWidth={300}
        pageSpacing={10}
      />
    </div>
  );
};

export default App;
