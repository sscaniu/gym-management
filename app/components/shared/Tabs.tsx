import React, { FC } from "react";

export interface TabType {
  id: number | string;
  label: number | string;
}

interface TabsProps {
  active: number | string;
  items: TabType[];
  onChange: (e: string | number) => void;
}

const Tabs: FC<TabsProps> = ({ active, items, onChange }) => {
  return (
    <ul className="flex border-b-2 border-b-[#192239]">
      {items.map((item: TabType) => {
        const isActive = item.id === active;

        return (
          <li
            key={item.id}
            className={`flex items-center relative h-12 px-4 font-jost font-medium text-base cursor-pointer hover:bg-dark ${
              isActive ? `text-warning` : `text-white`
            }`}
            onClick={() => onChange(item.id)}
          >
            <span>{item.label}</span>
            {isActive && (
              <span className="w-full h-0.5 absolute -bottom-0.5 left-0 bg-warning" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
