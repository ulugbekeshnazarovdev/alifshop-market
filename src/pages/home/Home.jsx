import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import "./Home.css";
import data from "../../static/alldata";
import Carts from "../../components/Carts/Carts";
import CatalogCarousel from "../../components/CatalogCarousel/CatalogCarousel";
import Container from "../../components/Container/Container";


function Home() {
  let Smartfon = data.filter((i) => i.type === "Smartfon va gadjetlar");
  let Noutbuklar = data.filter((i) => i.type === "Noutbuklar, kompyuterlar");
  let Uy = data.filter((i) => i.type === "Uy uchun texnika");
  let Soglik = data.filter((i) => i.type === "Go'zallik va sog'liq");
  let Aqlli = data.filter((i) => i.type === "Aqlli uy");
  let Oshxona = data.filter((i) => i.type === "Oshxona uchun texnika");
  let texnika = data.filter((i) => i.type === "Uy uchun texnika");



  return (
    <div className="Home">
      <HomeCarousel />
      <CatalogCarousel />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Chegirmalar 🔥"}
        data={Smartfon}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Sizni qiziqtirishi mumkin "}
        data={Noutbuklar}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Uy uchun texnika "}
        data={Uy}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Aqlli uy"}
        data={Aqlli}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Go'zallik va sog'liq "}
        data={Soglik}
      />
     
     <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Oshxona uchun texnika"}
        data={Oshxona}
      />
       <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Uy uchun texnika"}
        data={texnika}
      />
  <Container/>
    </div>
  );
}

export default Home;
