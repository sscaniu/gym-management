import React, { FC } from "react";
import Image from "next/image";

export interface OptionConfig {
  id: string | number;
  name: string;
  description: string;
  iconPath: string;
}

interface Props {
  active: string | number | (string | number)[];
  options: OptionConfig[];
  onSelect: React.Dispatch<
    React.SetStateAction<string | number | (string | number)[]>
  >;
  max?: number;
  multiple?: boolean;
}

const CardSelect: FC<Props> = ({
  active,
  options,
  onSelect,
  multiple = false,
  max = Infinity,
}) => {
  const isActive = (card: string | number): boolean => {
    return multiple
      ? (active as (string | number)[]).includes(card)
      : active === card;
  };

  const handleCardClick = (card: string | number) => {
    if (multiple) {
      const activeArray = active as (string | number)[];
      if (activeArray.includes(card)) {
        onSelect(activeArray.filter((c: string | number) => c !== card));
      } else if (activeArray.length < max) {
        onSelect([...activeArray, card]);
      }
    } else {
      if (active === card) {
        onSelect("");
      } else {
        onSelect(card);
      }
    }
  };

  return (
    <div className="grid grid-cols-4 items-stretch gap-12 auto-cols-min">
      {options.map((option) => (
        <div key={option.id} className="max-w-[292px] w-full min-h-[371px]">
          <div
            className={`h-full flex flex-col items-center gap-[50px] rounded-sm shadow-sm bg-black pt-12 pb-[30px] px-6 cursor-pointer border-[5px] ${
              isActive(option.id) ? `border-warning` : `border-black`
            } hover:border-warning`}
            onClick={() => handleCardClick(option.id)}
          >
            <Image
              src={option.iconPath}
              width={150}
              height={150}
              alt={option.description}
              className={"mx-auto flex-shrik-0 rounded-full"}
            />
            <div className="flex flex-col items-center gap-6">
              <h3 className="font-rubik font-bold text-2xl text-center">
                {option.name}
              </h3>
              <p className="font-jost font-semibold text-base text-center">
                {option.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSelect;
