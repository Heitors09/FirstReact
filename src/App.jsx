import "./App.css";
import { Name } from "./name";
import { ImgGenerator } from "./imgGenerator";
import { QuoteGenerator } from "./QuoteGenerator";

function App() {
  return (
    <>
      <ImgGenerator number={1} />
      <Name nomeUm={"Heitor"} />
      <QuoteGenerator />
    </>
  );
}

export default App;
