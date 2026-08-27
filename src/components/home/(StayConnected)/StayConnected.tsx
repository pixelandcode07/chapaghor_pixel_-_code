<<<<<<< HEAD
import React from 'react';
import StayConnectedHead from './components/StayConnectedHead';
import ConnectedCard from './components/ConnectedCard';
import ConnectedFeatureBar from './components/ConnectedFeatureBar';
import JoinCommunityBanner from './components/JoinCommunityBanner';

export default function StayConnected() {
  return (
    <div>
      <StayConnectedHead />
      <ConnectedCard />
      <ConnectedFeatureBar />
      <JoinCommunityBanner />
    </div>
  );
}
=======
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
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
