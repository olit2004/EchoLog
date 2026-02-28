import React from "react";

interface PreviewCardProps {
        title: string;
        description: string;
        tag: string;
        bgColor?: string;       
        featured?: boolean;     
}

const PreviewCard: React.FC<PreviewCardProps> = ({
            title,
            description,
            tag,
            bgColor = "bg-gray-800",
            featured = false,
}) => {
  return (
        <div
        className={`group relative aspect-16/10 rounded-xl overflow-hidden shadow-2xl bg-black/90 
        ${featured ? "md:scale-110 md:z-10" : ""}`}
        >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10" />
            <div className="absolute bottom-0 z-20 p-4 sm:p-6 space-y-2 sm:space-y-3 text-left">
                <h4 className="font-serif text-xl sm:text-2xl text-white">{title}</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{description}</p>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D32F2F]">
                {tag}
                </span>
            </div>
      <div
        className={`absolute inset-0 ${bgColor} group-hover:scale-105 transition-transform duration-700`}
      />
    </div>
  );
};

export default PreviewCard;