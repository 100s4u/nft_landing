import { About } from "./components/about_block/About";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Introduce } from "./components/introduce/Introduce";
import { ListBlock } from "./components/list_block/ListBlock";
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
      <ListBlock />
      <Footer />
    </div>
  );
}

export default App;
