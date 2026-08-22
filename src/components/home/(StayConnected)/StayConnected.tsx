import ConnectedCard from "./components/ConnectedCard";
import ConnectedFeatureBar from "./components/ConnectedFeatureBar";
import JoinCommunity from "./components/JoinCommunity";
import StayConnectedHead from "./components/StayConnectedHead";


export default function StayConnected() {
  return (
    <div className="container-custom">
      <StayConnectedHead />
      <ConnectedCard />
      <ConnectedFeatureBar />
      <JoinCommunity />
    </div>
  );
}