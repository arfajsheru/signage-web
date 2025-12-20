"use client";

import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  text: string;
  icon?: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  containerClassName?: string;
  duration?: number;
  clockwise?: boolean;
};

export function ButtonGradienat({
  text,
  icon,
  as = "button",
  className,
  containerClassName,
  duration = 1,
  clockwise = true,
}: GradientButtonProps) {
  return (
    <HoverBorderGradient
      as={as}
      duration={duration}
      clockwise={clockwise}
      containerClassName={cn("rounded-full", containerClassName)}
      className={cn(
        "bg-background text-foreground flex items-center gap-2 px-5 py-2 text-sm font-medium",
        className
      )}
    >
      {icon && <span className="flex items-center text-primary">{icon}</span>}
      <span>{text}</span>
    </HoverBorderGradient>
  );
}
