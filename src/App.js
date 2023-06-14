import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Layout/Header';
import Hero from './Components/Elements/Hero'
// import BrandIntegration from './Components/Elements/BrandIntegration'
// import TrendingNfts from './Components/Elements/TrendingNfts'
// import InfoSection from './Components/Elements/InfoSection'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      {/* <BrandIntegration/>
      <TrendingNfts/>
      <InfoSection/> */}
    </>
  );
}

export default App;
