import React from "react";
import Button from "./Button";

export const Callout = () => {
  return (
    <div className="flex border-y border-y-white/10 py-[47px]">
      <h1 className="w-7/12 text-3xl font-bold leading-[48px]">
        We&apos;ve prepared everything, it&apos;s time for you to tell the
        problem
      </h1>
      <div className="flex w-5/12 items-center justify-end space-x-[10px]">
        <Button color="primary">Send Quote</Button>
        <Button color="white" style="light">
          Ask Us
        </Button>
      </div>
    </div>
  );
};
