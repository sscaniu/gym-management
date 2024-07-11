import React, { FC } from 'react';

interface ToggleProps {
  value: boolean;
  onClick?: () => void;
  label?: string;
}

const Toggle:FC<ToggleProps> = ({ value, onClick, label }) => {
  return <div className='flex items-center gap-2'>
    <div 
      className='w-9 h-5 rounded-full relative bg-toggle shadow-inset-toggle cursor-pointer'
      onClick={onClick}
    >
      <span className={`block w-4 h-4 rounded-full bg-white absolute top-0.5 ${!value ? `left-0.5` : `left-[18px]`} transition-all`}></span>
    </div>
    {label && <span className='font-jost font-medium text-sm cursor-default'>{label}</span>}
  </div>
}

export default Toggle;