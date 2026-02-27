// components/MoodBadge.tsx
interface MoodBadgeProps {
  label: string;
}

export default function MoodBadge({ label }: MoodBadgeProps) {
  return (
    <div className="absolute top-3 left-3 z-10">
      <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase border border-white/20">
        {label}
      </span>
    </div>
  );
}