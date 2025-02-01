import { z } from "zod";

const domainRegex =
  /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|localhost)(:[0-9]{1,5})?(\/.*)?$/;

export const DomainNameValidation = z.object({
  domain: z.string().regex(domainRegex, "Invalid domain name"),
});

export const ForgetPasswordFormValidation = z.object({
  email: z.string().email("Invalid email address"),
});

export const ForgetPasswordCodeFormValidation = z.object({
  code: z
    .string()
    .min(6, "Code must be at least 6 characters")
    .max(6, "Code must be at least 6 characters"),
});

export const ForgetPasswordUnionValidation = z.union([
  ForgetPasswordFormValidation,
  ForgetPasswordCodeFormValidation,
]);

export const CreateNewPasswordFormValidation = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long") // Minimum length
      .max(32, "Password must be at most 32 characters long") // Maximum length
      .refine(
        (password) => /[a-z]/.test(password),
        "Password must contain at least one lowercase letter"
      ) // Lowercase letter
      .refine(
        (password) => /[A-Z]/.test(password),
        "Password must contain at least one uppercase letter"
      ) // Uppercase letter
      .refine(
        (password) => /[0-9]/.test(password),
        "Password must contain at least one number"
      ) // Number
      .refine(
        (password) => /[!@#$%^&*()[\]_+\-=\\|;:',.<>/?`~]/.test(password),
        "Password must contain at least one special character"
      ), // Special character
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const LoginFormValidation = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") // Minimum length
    .max(32, "Password must be at most 32 characters long"), // Maximum length
});

export const RegisterFormValidation = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be at most 50 characters"),
    professionalTitle: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long") // Minimum length
      .max(32, "Password must be at most 32 characters long") // Maximum length
      .refine(
        (password) => /[a-z]/.test(password),
        "Password must contain at least one lowercase letter"
      ) // Lowercase letter
      .refine(
        (password) => /[A-Z]/.test(password),
        "Password must contain at least one uppercase letter"
      ) // Uppercase letter
      .refine(
        (password) => /[0-9]/.test(password),
        "Password must contain at least one number"
      ) // Number
      .refine(
        (password) => /[!@#$%^&*()[\]_+\-=\\|;:',.<>/?`~]/.test(password),
        "Password must contain at least one special character"
      ), // Special character

    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),

    termsAndConditions: z
      .boolean()
      .default(false)
      .refine((value) => value === true, {
        message: "You must accept our terms and conditions in order to proceed",
      }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const ProfileFormValidation = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name must be at most 50 characters"),
  username: z
    .string()
    .min(2, "UserName must be at least 2 characters")
    .max(50, "UserName must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  aboutme: z
    .string()
    .min(2, "Message must be at least 2 characters")
    .max(500, "Message must be at most 500 characters"),
  country: z.string().min(2, "Please select a country"),
  language: z.string().optional(),
});

export const OrganizationRegisterFormValidation = z
  .object({
    organizationName: z
      .string()
      .min(2, "Organization Name must be at least 2 characters")
      .max(50, "Organization Name must be at most 50 characters"),
    adminFullName: z
      .string()
      .min(2, "Admin Name must be at least 2 characters")
      .max(50, "Admin Name must be at most 50 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long") // Minimum length
      .max(32, "Password must be at most 32 characters long") // Maximum length
      .refine(
        (password) => /[a-z]/.test(password),
        "Password must contain at least one lowercase letter"
      ) // Lowercase letter
      .refine(
        (password) => /[A-Z]/.test(password),
        "Password must contain at least one uppercase letter"
      ) // Uppercase letter
      .refine(
        (password) => /[0-9]/.test(password),
        "Password must contain at least one number"
      ) // Number
      .refine(
        (password) => /[!@#$%^&*()[\]_+\-=\\|;:',.<>/?`~]/.test(password),
        "Password must contain at least one special character"
      ), // Special character

    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),

    termsAndConditions: z
      .boolean()
      .default(false)
      .refine((value) => value === true, {
        message: "You must accept our terms and conditions in order to proceed",
      }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
