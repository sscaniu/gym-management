/* This component is used at the top of pages that are used to gather input like adding gyms or trainers */
"use client";

import React, { FC } from "react";
import Button from "@/app/components/shared/Button";

interface Props {
  name: string;
  description: string;
  buttonLeftLabel?: string;
  buttonRightLabel?: string;
  hrefLeft?: string;
  disableLeft?: boolean;
  hrefRight?: string;
  disableRight?: boolean;
}

const WizardHeader: FC<Props> = ({
  name,
  description,
  buttonLeftLabel = "Previous",
  buttonRightLabel = "Next",
  hrefLeft,
  disableLeft,
  hrefRight,
  disableRight
}) => {
  return (
    <div className="flex justify-between">
      <div className="grid gap-2">
        <h2 className="font-rubik font-bold text-[40px]">{name}</h2>
        <p className="font-jost font-semibold text-base">{description}</p>
      </div>
      <div className="flex gap-5">
        <Button
          href={hrefLeft}
          size="sm"
          variant="outlined"
          className="w-[200px]"
          color="warning"
          disabled={disableLeft}
        >
          {buttonLeftLabel}
        </Button>
        <Button
          href={hrefRight}
          size="sm"
          className="w-[200px]"
          color="warning"
          disabled={disableRight}
        >
          {buttonRightLabel}
        </Button>
      </div>
    </div>
  );
};

export default WizardHeader;
