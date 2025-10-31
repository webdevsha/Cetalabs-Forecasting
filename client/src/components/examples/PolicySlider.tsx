import { useState } from 'react';
import PolicySlider from '../PolicySlider';

export default function PolicySliderExample() {
  const [value, setValue] = useState(50);
  
  return (
    <div className="p-6 max-w-md">
      <PolicySlider
        label="ASEAN Investment"
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        unit="B"
        description="Total investment in billions USD"
      />
    </div>
  );
}
