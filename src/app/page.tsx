import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import OurBlog from "./components/OurBlog";
import PopularMenu from "./components/PopularMenu";
import Recomended from "./components/Recomended";
import ReserveTable from "./components/ReserveTable";
import CustomerReview from "./components/Review";
import Services from "./components/Services";
import Story from "./components/Story";
import Subscribe from "./components/Subscribe";

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
      <OurBlog/>
      <CustomerReview/>
      <Subscribe/>
      <Footer/>
     </div>
   </div>
  );
}
