import React from "react";
import Button from "./Button";
import useWindowSize from "@/hooks/useWindowSize";

export const Callout = () => {
  const { width } = useWindowSize();
  return (
    <div className="flex flex-col border-y border-y-white/10 py-[47px] text-center sm:flex-row sm:text-left">
      <h1 className="text-3xl font-bold leading-[48px] sm:w-7/12">
        We&apos;ve prepared everything, it&apos;s time for you to tell the
        problem
      </h1>
      <div className="mt-12 flex items-center justify-center space-x-[10px] sm:mt-0 sm:w-5/12 sm:justify-end">
        <Button color="primary" size={width > 671 ? "normal" : "sm"}>
          Send Quote
        </Button>
        <Button
          color="white"
          style="light"
          size={width > 671 ? "normal" : "sm"}
        >
          Ask Us
        </Button>
      </div>
    </div>
  );
};
