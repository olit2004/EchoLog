interface StatCardProps {
  title: string;
  value: string | number;
  subValue?: string;
}

export default function StatCard({ title, value, subValue }: StatCardProps) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-[10px] font-bold text-gray-400 tracking-widest mb-1">
          {title}
        </h3>
        
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight text-[#1A1A1A]">
            {value}
          </span>
          
          {subValue && (
            <span className="text-[11px] font-semibold text-[#A32A2A] bg-[#A32A2A]/5 px-2 py-0.5 rounded-full">
              {subValue}
            </span>
          )}
        </div>
      </div>
      
      {/* Optional: Subtle background decoration or progress bar could go here */}
    </div>
  );
}