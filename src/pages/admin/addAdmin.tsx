/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitButton } from "@/components/common";
import showToast from "@/components/common/showtoast";
import { adminRegister } from "@/services/admin/auth";
import { useToast } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const toggleCurrentPasswordVisibility = () =>
    setShowCurrentPassword(!showCurrentPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${"Full name, email, and password are required!"}`
      );

      return;
    }
    setLoading(true);
    try {
      const response = await adminRegister(formData);
      if (response.success) {
        showToast(
          toast,
          "Enroll AI",
          "success",
          `${"Admin account created successfully!"}`
        );

        setFormData({
          fullName: "",
          email: "",
          password: "",
        });

        navigate("/dashboard/admin/all");
      } else {
        showToast(
          toast,
          "Enroll AI",
          "success",
          `${response.message || "Admin account created successfully!"}`
        );
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${
          error.message || "An error occurred while creating the admin account"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex space-y-9 mb-20 flex-col">
      <div className="flex lg:flex-row flex-col justify-between xl:items-center gap-4">
        <p className="font-semibold text-3xl">Create New Admin</p>
      </div>

      <div className="p-5 rounded-lg bg-white space-y-5 shadow">
        <p className="font-semibold text-xl">Admin Information</p>

        <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex xl:flex-row flex-col justify-between gap-8">
              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>

              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>
            </div>

            <div className="flex xl:flex-row flex-col justify-between gap-8">
              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showCurrentPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary w-full"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={toggleCurrentPasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                  >
                    {showCurrentPassword ? (
                      <Eye className="text-fade h-4 w-4" />
                    ) : (
                      <EyeOff className="text-fade h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <SubmitButton
              isLoading={loading}
              className="w-auto py-3 rounded-md"
            >
              Create Admin
            </SubmitButton>
          </form>
        </section>
      </div>
    </section>
  );
};

export default AddAdmin;
