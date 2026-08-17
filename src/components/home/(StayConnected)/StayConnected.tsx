import React from 'react';
import StayConnectedHead from './components/StayConnectedHead';
import ConnectedCard from './components/ConnectedCard';
import ConnectedFeatureBar from './components/ConnectedFeatureBar';

export default function StayConnected() {
  return (
    <div>
      <StayConnectedHead />
      <ConnectedCard />
      <ConnectedFeatureBar />
    </div>
  );
}
