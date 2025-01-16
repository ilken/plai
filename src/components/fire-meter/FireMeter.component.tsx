interface FireMeterProps {
  probability: number;
}

export const FireMeter = ({ probability }: FireMeterProps) => {
  const getBars = (probability: number) => {
    const bars = Math.ceil((probability / 100) * 3);
    return Array(3)
      .fill('▯')
      .map((bar, index) => index < bars ? '▮' : '▯')
      .join('');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-mono text-cyber-primary">{probability}%</span>
      <span className="font-mono text-lg bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
        {getBars(probability)}
      </span>
    </div>
  );
}; 