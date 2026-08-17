import BrowseBtn from './components/BrowseBtn';
import GraphicCard from './components/GraphicCard';
import GraphicCategory from './components/GraphicCategory';
import GraphicHead from './components/GraphicHead';

export default function GraphicResources() {
  return (
    <div className=" mt-8 bg-[linear-gradient(180deg,rgba(229,238,249,0.6)_0%,rgba(255,255,255,0)_100%)]">
      <div className="container-custom  ">
        <GraphicHead />
        <GraphicCategory />
        <GraphicCard />
        <BrowseBtn />
      </div>
    </div>
  );
}
