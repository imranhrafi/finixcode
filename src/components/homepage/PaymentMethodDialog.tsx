import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { CreditCard, DollarSign } from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface PaymentMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: (method: string) => void;
}

const paymentOptions = [
  {
    value: "bkash",
    label: "bKash",
    description:
      "Send the payment now via bKash to confirm your spot instantly.",
    icon: <CreditCard className='w-4 h-4 inline ml-1' />,
  },
  {
    value: "cash",
    label: "Cash",
    description:
      "Pay the event fee directly to the host before the game starts.",
    icon: <DollarSign className='w-4 h-4 inline ml-1' />,
  },
];

export default function PaymentMethodDialog({
  open,
  onOpenChange,
  onContinue,
}: PaymentMethodDialogProps) {
  const [method, setMethod] = React.useState("bkash");

  React.useEffect(() => {
    if (!open) setMethod("bkash");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-[90vw] w-[400px] p-0 rounded-2xl bg-[#397C6A] border-none'>
        <div className='flex flex-col items-center p-8 relative'>
          <DialogClose className='cursor-pointer' />
          <div className='mb-4'>
            <Image
              src='/icons/payment-method.svg'
              alt='payment-method'
              width={140}
              height={140}
            />
          </div>
          <DialogHeader className='text-center'>
            <DialogTitle className='text-white text-3xl font-bold mb-2 text-center'>
              Choose Payment Method
            </DialogTitle>
          </DialogHeader>
          <RadioGroup
            value={method}
            onValueChange={setMethod}
            className='flex flex-col gap-3 w-full mt-4'
          >
            {paymentOptions.map((option) => {
              const radioId = `payment-${option.value}`;
              return (
                <label
                  key={option.value}
                  htmlFor={radioId}
                  className={`flex items-start gap-3 rounded-xl px-4 py-3 w-full cursor-pointer transition-colors ${
                    method === option.value
                      ? "bg-[#E9E7D9]"
                      : "bg-[#397C6A]"
                  }`}
                >
                  <RadioGroupItem
                    id={radioId}
                    value={option.value}
                    className='mt-1 border-[#397C6A]'
                  />
                  <div className='flex-1'>
                    <span
                      className={`font-semibold text-base ${
                        method === option.value
                          ? "text-[#397C6A]"
                          : "text-[#E9E7D9]"
                      }`}
                    >
                      {option.label} {option.icon}
                    </span>
                    <div
                      className={`text-xs mt-1 ${
                        method === option.value
                          ? "text-[#397C6A]"
                          : "text-[#E9E7D9]"
                      }`}
                    >
                      {option.description}
                    </div>
                  </div>
                </label>
              );
            })}
          </RadioGroup>
          <Button
            className='w-full mt-6 rounded-xl bg-[#222] text-[#E9E7D9] font-semibold text-base py-2'
            onClick={() => onContinue(method)}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
