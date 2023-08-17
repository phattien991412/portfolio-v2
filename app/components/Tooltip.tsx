import React from "react";

interface ToolTipProps {
  children: React.ReactNode;
  label: string;
}

const Tooltip: React.FC<ToolTipProps> = ({ children, label }) => {
  return (
    <div className="relative cursor-pointer group/tooltip w-auto">
      {children}

      <div className="z-50 absolute top-10 right-3 px-2 py-1 w-auto bg-slate-400 rounded text-white text-xs opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 ">
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Tooltip;
