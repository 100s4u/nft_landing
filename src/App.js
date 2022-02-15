import { About } from "./components/about_block/About";
import { Header } from "./components/header/Header";
import { Introduce } from "./components/introduce/Introduce";
import { MainBlock } from "./components/main_page/MainBlock";
import { MoreAbout } from "./components/more_about/MoreAbout";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <About />
      <Introduce />
      <MoreAbout />
    </div>
  );
}

export default App;
