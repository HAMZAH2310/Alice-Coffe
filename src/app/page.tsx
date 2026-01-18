import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import PopularMenu from "./components/PopularMenu";
import Recomended from "./components/Recomended";
import ReserveTable from "./components/ReserveTable";
import Services from "./components/Services";
import Story from "./components/Story";

export default function Home() {
  return (
   <div>
     <div className="bg-primary">
      <Navbar/>
      <HeroPage/>
      <Story/>
      <Services/>
      <Offer/>
      <ReserveTable/>
      <Recomended/>
      <PopularMenu/>
     </div>
   </div>
  );
}
