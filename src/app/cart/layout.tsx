import { PropsWithChildren, ReactNode } from "react";

const CartLayout = ({
  children,
  modal,
}: { modal: ReactNode } & PropsWithChildren) => {
  return (
    <section className="">
      {modal}
      {children}
    </section>
  );
};

export default CartLayout;
