import { About } from "./components/about_block/About";
import { Header } from "./components/header/Header";
import { MainBlock } from "./components/main_page/MainBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <div className="row">
        <About />
      </div>
    </div>
  );
}

export default App;
