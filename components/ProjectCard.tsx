import React from "react";
import Button from "./Button";

type Props = { title: string; description: string; href?: string };
export const ProjectCard = (props: Props) => {
  return (
    <div>
      <div className="h-[25rem] rounded-[3px] bg-slate-900" />
      <div className="mt-10 text-center">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <h3 className="mt-[0.625rem] text-white/60">{props.description}</h3>
        <Button
          style="outline"
          radius="pill"
          size="sm"
          color="white"
          className="mt-[2.375rem]"
        >
          Detail
        </Button>
      </div>
    </div>
  );
};
