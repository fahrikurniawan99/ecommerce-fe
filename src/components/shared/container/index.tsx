import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type ContainerProps = {
  className?: string;
};

export const Container = ({
  children,
  className,
}: PropsWithChildren<ContainerProps>) => {
  return <div className={cn("max-w-6xl mx-auto w-[90%]", className)}>{children}</div>;
};
