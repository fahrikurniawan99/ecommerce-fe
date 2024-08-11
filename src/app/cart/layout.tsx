import { PropsWithChildren, ReactNode } from "react";

const CartLayout = ({
  children,
}: { } & PropsWithChildren) => {
  return (
    <section className="">
      {children}
    </section>
  );
};

export default CartLayout;
