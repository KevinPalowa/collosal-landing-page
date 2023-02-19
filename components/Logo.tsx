import React from "react";
import { Facebook, Forbes, Github, Google, Microsoft } from "./logo";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-11 sm:px-32 justify-center border-y border-y-white/10 py-8">
      <Github />
      <Forbes />
      <Google />
      <Microsoft />
      <Facebook />
    </div>
  );
};
