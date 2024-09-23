import { Header } from "./componenents/Header";
import { Catogory } from "./componenents/Catogory";
import { TopRest } from "./componenents/TopRest";
import {OnlineDelivery} from "./componenents/OnlineDelivery";
import {AreaRest} from "./componenents/AreaRest";
import { Footer } from "./componenents/Footer";

function App() {
  return (
    <>
      <div className="mx-1 ">
        <Header />
        <Catogory />
        <TopRest />
        <OnlineDelivery />
        <AreaRest />
        <Footer />
      </div>
    </>
  );
}

export default App;
