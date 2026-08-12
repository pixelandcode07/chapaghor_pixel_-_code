import GraphicCard from './components/GraphicCard';
import GraphicHead from './components/GraphicHead';

export default function GraphicResources() {
  return (
    // <div className="container-custom bg-[linear-gradient(180deg,rgba(229,238,249,0.6)_0%,rgba(255,255,255,0)_100%)]">
    <div className="container-custom  ">
      <GraphicHead />

      <GraphicCard />
    </div>
  );
}
