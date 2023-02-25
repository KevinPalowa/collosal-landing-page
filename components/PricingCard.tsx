import { features } from "process";
import React from "react";
import Button from "./Button";

type Props = {
  name: string;
  price: string;
  features: string[];
  color?: string;
};
export const PricingCard = (props: Props) => {
  return (
    <div
      className={`rounded-[10px] py-[3.625rem] px-[2.9375rem] pb-[1.8125rem] ${
        props.color ? props.color : "bg-white/10"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="font-bold">{props.name}</h3>
        <div>
          <span className="text-white/60 text-xs">Starting From</span>
          <h2 className="text-4xl font-bold">{props.price}</h2>
        </div>
      </div>
      <hr className="border border-white/5 my-[2.3125rem]" />
      <ul className="text-center font-medium space-y-[1.25rem] mb-[3.125rem]">
        {props.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <Button color="white" className="w-full">
        Button
      </Button>
    </div>
  );
};
