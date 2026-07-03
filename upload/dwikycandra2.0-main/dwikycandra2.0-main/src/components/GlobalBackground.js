import LiquidEther from './LiquidEther';
import './globalBackground.css';

export default function GlobalBackground() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={12}
        cursorSize={70}
        isViscous={false}
        viscous={30}
        iterationsViscous={16}
        iterationsPoisson={16}
        resolution={0.25}
        isBounce={true}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
}
