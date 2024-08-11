"use client";
import { SiAdguard } from "react-icons/si";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MdVerifiedUser } from "react-icons/md";
import { useForm } from "react-hook-form";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css";
import { CheckoutFormValues } from "@/types/form";

export const FormCheckout = () => {
  const { register, setValue } = useForm<CheckoutFormValues>();
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

  return (
    <>
      <h1 className="font-bold text-lg">Checkout</h1>
      <div className="space-y-5">
        <Input {...register("name")} placeholder="Nama Pemesan" />
        <PhoneInput
          onChange={(val) =>
            setValue("phoneNumber", formatPhoneNumber(val ?? "") ?? "")
          }
          placeholder="Nomor Handphone"
          defaultCountry="ID"
          limitMaxLength={true}
          inputComponent={Input}
          //   className="border text-sm text-gray-800 py-3   px-4 rounded"
        />
        {/* <Input placeholder="Nomor Handphone" /> */}
        <Input {...register("password")} placeholder="Password" />
        <Textarea {...register("name")} placeholder="Alamat Pengiriman" />
        <Button disabled={true} className="w-full gap-2" {...register("name")}>
          Proses Pesanan <MdVerifiedUser />
        </Button>
      </div>
    </>
  );
};
