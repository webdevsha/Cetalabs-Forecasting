import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PolicySliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  description?: string;
}

export default function PolicySlider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = "",
  description
}: PolicySliderProps) {
  return (
    <div className="space-y-3" data-testid={`slider-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between items-baseline">
        <Label className="text-sm font-medium">{label}</Label>
        <span className="text-lg font-semibold tabular-nums text-primary">
          {value}{unit}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
