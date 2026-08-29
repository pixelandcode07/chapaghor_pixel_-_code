import ConnectedCard from './components/ConnectedCard';
import ConnectedFeatureBar from './components/ConnectedFeatureBar';
import JoinCommunity from './components/JoinCommunity';
import StayConnectedHead from './components/StayConnectedHead';

export default function StayConnected() {
  return (
    <div className="container-custom px-5 md:px-0">
      <StayConnectedHead />
      <ConnectedCard />
      <ConnectedFeatureBar />
      <JoinCommunity />
    </div>
  );
}
