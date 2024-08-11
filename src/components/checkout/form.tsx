import { SiAdguard } from "react-icons/si";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MdVerifiedUser } from "react-icons/md";

export const FormCheckout = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Checkout</h1>
      <div className="space-y-5">
        <Input placeholder="Nama Pemesan" />
        <Input placeholder="Nomor Handphone" />
        <Input placeholder="Password" />
        <Textarea placeholder="Alamat Pengiriman" />
        <Button className="w-full gap-2">
          Proses Pesanan <MdVerifiedUser />
        </Button>
      </div>
    </>
  );
};
