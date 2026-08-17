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
