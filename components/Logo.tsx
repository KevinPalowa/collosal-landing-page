import React from "react";
import { Facebook, Forbes, Github, Google, Microsoft } from "./logo";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-11 border-y border-y-white/10 py-8 sm:px-32">
      <Github />
      <Forbes />
      <Google />
      <Microsoft />
      <Facebook />
    </div>
  );
};
