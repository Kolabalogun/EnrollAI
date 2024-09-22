/* eslint-disable @typescript-eslint/no-explicit-any */
import { CashIcon, StripeIcon } from "@/assets/icon";
import { SubmitButton } from "@/components/common";
import ConfirmationModal from "@/components/modals/confirmationModal";
import { Checkbox, useDisclosure, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import showToast from "@/components/common/showtoast";
import { useDispatch, useSelector } from "react-redux";
import { setBillingInfo } from "@/redux/features/billingInfoSlice";
import SuccessModal from "@/components/modals/success";
import { HEALTHCARE_SETTINGS } from "@/router/routes";
import { useNavigate } from "react-router-dom";

const AddBillingPayment = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: successisOpen,
    onClose: successonClose,
    onOpen: successonOpen,
  } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { billingsInfos } = useSelector((state: any) => state.billingInfo);
  const FormSchema = z
    .object({
      fullName: z.string().min(1, "Full Name is required"),
      businessName: z.string().optional(),
      billingOption: z.enum(["monthly", "yearly"]),
      paymentMethod: z.enum(["creditcard", "stripe"]),
      cardName: z.string().optional(),
      cardNumber: z.string().optional(),
      cardExpiry: z.string().optional(),
      cardCvv: z.string().optional(),
      termsAndConditions: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
          message: "You must accept our terms and conditions to proceed",
        }),
    })
    .refine(
      (data) => {
        if (data.paymentMethod === "creditcard") {
          return (
            data.cardName && data.cardNumber && data.cardExpiry && data.cardCvv
          );
        }
        return true;
      },
      {
        message: "Please fill in all credit card details",
      }
    );
  console.log(billingsInfos, "billingInfos");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      billingOption: "monthly",
      paymentMethod: "stripe",
      termsAndConditions: false,
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    if (Object.keys(errors).length === 0) {
      onOpen();
    } else {
      showToast(
        toast,
        "Validation",
        "error",
        "Please fill all required fields"
      );
    }
  };

  const handleConfirmSubmit = async () => {
    setIsLoading(true);
    try {
      dispatch(setBillingInfo([...(billingsInfos || []), getValues()]));

      // Show success toast after dispatch
      showToast(
        toast,
        "Billing",
        "success",
        "Billing Information Successfully Added"
      );
      onClose();
      successonOpen();
    } catch (error) {
      console.log(error);
      showToast(toast, "Billing", "error", "Error adding billing information");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow flex-1 h-full w-full px-10 py-16 flex flex-col items-center">
      <ConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        title="Confirm Payment"
        onConfirm={handleConfirmSubmit}
      />
      <SuccessModal
        onClose={successonClose}
        isOpen={successisOpen}
        title="Payment Successful"
        desc="Congratulations! Your subscription has been activated. You now have access to all features."
        handleClick={() => navigate(HEALTHCARE_SETTINGS)}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[500px] gap-2"
      >
        {/* Full Name Field */}
        <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5  font-medium">
          <label className=" raleway font-semibold " htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            type="text"
            placeholder="Enter your Full Name"
            className="border rounded-md px-3 py-3.5 outline-[0.5px] outline-secondary flex-1"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        {/* Business Name Field */}
        <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5  font-medium">
          <label className=" raleway font-semibold " htmlFor="businessName">
            Business Name (Optional)
          </label>
          <input
            id="businessName"
            {...register("businessName")}
            type="text"
            placeholder="Enter your Business Name"
            className="border rounded-md px-3 py-3.5 outline-[0.5px] outline-secondary flex-1"
          />
        </div>

        {/* Billing Option */}
        <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5  font-medium">
          <label className=" raleway font-semibold " htmlFor="billingOption">
            Billing Option
          </label>
          <div className="flex flex-col space-y-3">
            <div
              onClick={() => setValue("billingOption", "monthly")}
              className="flex cursor-pointer items-center gap-4 border rounded-lg px-3 py-3.5 "
            >
              <div className="cursor-pointer">
                <div
                  className={`p-0.5 rounded-full ${
                    watch("billingOption") === "monthly"
                      ? "border-secondary"
                      : "border-fade2"
                  } border-2 `}
                >
                  <div
                    className={`p-1 rounded-full ${
                      watch("billingOption") === "monthly"
                        ? "border-secondary bg-secondary"
                        : "border-none"
                    } border-2 `}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-dark-200 font-semibold text-sm  ">
                  Pay Monthly
                </p>
                <p className="text-sm text-dark-200 ">$20/ month/member </p>
              </div>
            </div>
            <div
              onClick={() => setValue("billingOption", "yearly")}
              className="flex cursor-pointer items-center gap-4 border rounded-lg px-3 py-3.5 "
            >
              <div className="cursor-pointer">
                <div
                  className={`p-0.5 rounded-full ${
                    watch("billingOption") === "yearly"
                      ? "border-secondary"
                      : "border-fade2"
                  } border-2 `}
                >
                  <div
                    className={`p-1 rounded-full ${
                      watch("billingOption") === "yearly"
                        ? "border-secondary bg-secondary"
                        : "border-none"
                    } border-2 `}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-dark-200 font-semibold text-sm  ">
                  Pay Yearly
                </p>
                <p className="text-sm text-dark-200 ">$200/ year/member </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5  font-medium">
          <label className=" raleway font-semibold " htmlFor="paymentMethod">
            Payment Method
          </label>
          <div className="flex flex-col space-y-3">
            <div
              onClick={() => setValue("paymentMethod", "creditcard")}
              className="flex cursor-pointer items-center gap-4 border rounded-lg px-3 py-5  "
            >
              <div className="cursor-pointer">
                <div
                  className={`p-0.5 rounded-full ${
                    watch("paymentMethod") === "creditcard"
                      ? "border-secondary"
                      : "border-fade2"
                  } border-2 `}
                >
                  <div
                    className={`p-1 rounded-full ${
                      watch("paymentMethod") === "creditcard"
                        ? "border-secondary bg-secondary"
                        : "border-none"
                    } border-2 `}
                  ></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col space-y-2">
                <p className="text-dark-200 font-semibold text-sm  ">
                  Credit Card
                </p>
              </div>
              <div className="">
                <img src={CashIcon} alt="" />
              </div>
            </div>

            {paymentMethod === "creditcard" && (
              <div className="">
                <div className="flex gap-4 items-start">
                  {/* Credit Card Name */}
                  <div
                    style={{ flex: 2 }}
                    className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5 font-medium"
                  >
                    <label className="raleway font-semibold" htmlFor="cardName">
                      Card Name
                    </label>
                    <input
                      id="cardName"
                      {...register("cardName")}
                      type="text"
                      placeholder="Enter your card Name"
                      className="border rounded-md px-3 py-3.5 outline-[0.5px] outline-secondary flex-1"
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-xs">
                        {errors.cardName.message}
                      </p>
                    )}
                  </div>
                  {/* Expiry Date */}
                  <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5 font-medium">
                    <label
                      className="raleway font-semibold"
                      htmlFor="cardExpiry"
                    >
                      Expiry Date (MM/YY)
                    </label>
                    <input
                      id="cardExpiry"
                      {...register("cardExpiry")}
                      type="text"
                      placeholder="MM/YY"
                      className="border rounded-md px-3 py-3.5 outline-[0.5px] outline-secondary flex-1"
                    />
                    {errors.cardExpiry && (
                      <p className="text-red-500 text-xs">
                        {errors.cardExpiry.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  {/* Credit Card Number */}
                  <div
                    style={{ flex: 2 }}
                    className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5 font-medium"
                  >
                    <label
                      className="raleway font-semibold"
                      htmlFor="cardNumber"
                    >
                      Card Number
                    </label>
                    <input
                      id="cardNumber"
                      {...register("cardNumber")}
                      type="text"
                      placeholder="Enter your card number"
                      className="border rounded-md px-3 py-3.5 outline-[0.5px] outline-secondary flex-1"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-xs">
                        {errors.cardNumber.message}
                      </p>
                    )}
                  </div>

                  {/* CVV */}
                  <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 py-3.5 font-medium">
                    <label className="raleway font-semibold" htmlFor="cardCvv">
                      CVV
                    </label>
                    <input
                      id="cardCvv"
                      {...register("cardCvv")}
                      type="text"
                      placeholder="CVV"
                      className="border rounded-md px-3 py-3.5 outline-[0.5px] outline-secondary flex-1"
                    />
                    {errors.cardCvv && (
                      <p className="text-red-500 text-xs">
                        {errors.cardCvv.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div
              onClick={() => setValue("paymentMethod", "stripe")}
              className="flex cursor-pointer items-center gap-4 border rounded-lg px-3 py-5  "
            >
              <div className="cursor-pointer">
                <div
                  className={`p-0.5 rounded-full ${
                    watch("paymentMethod") === "stripe"
                      ? "border-secondary"
                      : "border-fade2"
                  } border-2 `}
                >
                  <div
                    className={`p-1 rounded-full ${
                      watch("paymentMethod") === "stripe"
                        ? "border-secondary bg-secondary"
                        : "border-none"
                    } border-2 `}
                  ></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col space-y-2">
                <p className="text-dark-200 font-semibold text-sm  ">Stripe</p>
              </div>
              <div className="">
                <img src={StripeIcon} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex gap-4 items-center">
          <Checkbox
            colorScheme="purple"
            {...register("termsAndConditions", {
              onChange: (e) => setValue("termsAndConditions", e.target.checked),
            })}
          />

          <p className="text-xs font-medium">
            {" "}
            By submitting this form, you confirm that you agree to our{" "}
            <span className="text-secondary">Terms of Service</span> and{" "}
            <span className="text-secondary">Privacy Policy</span>.
          </p>
        </div>

        {errors.termsAndConditions && (
          <p className="text-red-500 text-xs">
            {errors.termsAndConditions.message}
          </p>
        )}

        <SubmitButton type="submit" isLoading={isLoading}>
          Proceed
        </SubmitButton>
      </form>
    </section>
  );
};

export default AddBillingPayment;
