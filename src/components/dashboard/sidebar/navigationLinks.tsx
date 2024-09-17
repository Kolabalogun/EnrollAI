/**
 * Navigation Links Configuration
 *
 * The usersLinks array contains the configuration for navigation links in the application.
 * Each link object includes a label, an icon component from the Tabler Icons library, and
 * a corresponding route (buttonLink).
 *
 * @constant
 * @type {Array}
 */

import {
  Analysis,
  AnalysisWhite,
  Home,
  HomeWhite,
  Insight,
  InsightWhite,
  LoginIcon,
  LoginIconWhite,
  Setting,
  SettingWhite,
  Support,
  SupportWhite,
} from "@/assets/icon";

export const usersLinks = [
  {
    label: "Overview",
    icon: Home,
    iconWhite: HomeWhite,
    buttonLink: "/dashboard",
  },
  {
    label: "Website Analysis",
    icon: Analysis,
    iconWhite: AnalysisWhite,
    buttonLink: "/dashboard/website-analysis",
  },
  {
    label: "AI Insights",
    icon: Insight,
    iconWhite: InsightWhite,
    buttonLink: "/dashboard/ai-insights",
  },
  {
    label: "Settings",
    icon: Setting,
    iconWhite: SettingWhite,
    buttonLink: "/dashboard/settings",
  },
  {
    label: "Support",
    icon: Support,
    iconWhite: SupportWhite,
    buttonLink: "/dashboard/support",
  },
  {
    label: "Logout",
    icon: LoginIcon,
    iconWhite: LoginIconWhite,
    buttonLink: "/dashboard/logout",
  },
];

// export const suspendedLinks = [
//   { label: "Dashboard", icon: IconHome, buttonLink: "/dashboard" },
//   {
//     label: "Help",
//     icon: IconHelp,
//     buttonLink: "/dashboard/help",
//   },
// ];

// export const adminLinks = [
//   {
//     label: "Dashboard",
//     icon: IconHome,
//     buttonLink: "/dashboard/admin",
//     title: "Dashboard",
//   },

//   {
//     label: "Task Post",
//     icon: IconChecklist,
//     buttonLink: "/dashboard/admin/task-post",
//     title: "Control",
//   },
//   {
//     label: "Contest",
//     icon: IconRecharging,
//     buttonLink: "/dashboard/admin/contest",
//     title: "Control",
//   },
//   {
//     label: "Payout",
//     icon: IconCreditCardPay,
//     buttonLink: "/dashboard/admin/payout",
//     title: "Control",
//   },
//   {
//     label: "Users",
//     icon: IconUser,
//     buttonLink: "/dashboard/admin/users",
//     title: "Control",
//   },
//   {
//     label: "Sporty Must Bleed",
//     icon: IconBallFootball,
//     buttonLink: "/dashboard/admin/sporty-must-bleed",
//     title: "Control",
//   },

//   {
//     label: "Annoucement",
//     icon: IconSpeakerphone,
//     buttonLink: "/dashboard/admin/annoucement",
//     title: "Visual",
//   },
//   {
//     label: "Testimonies",
//     icon: IconMessage,
//     buttonLink: "/dashboard/admin/testimonies",
//     title: "Visual",
//   },
//   {
//     label: "How it Works",
//     icon: IconHelp,
//     buttonLink: "/dashboard/admin/how-it-works",
//     title: "Visual",
//   },

//   {
//     label: "Coupon Codes",
//     icon: IconBoxPadding,
//     buttonLink: "/dashboard/admin/coupon-codes",
//     title: "Management",
//   },
//   {
//     label: "Bizboost",
//     icon: IconChartHistogram,
//     buttonLink: "/dashboard/admin/bizboost",
//     title: "Management",
//   },
//   {
//     label: "Admission G&C",
//     icon: IconSchool,
//     buttonLink: "/dashboard/admin/admission-gc",
//     title: "Management",
//   },
//   {
//     label: "Market Place",
//     icon: IconBuildingWarehouse,
//     buttonLink: "/dashboard/admin/market-place",
//     title: "Management",
//   },
//   {
//     label: "Plans",
//     icon: IconTemplate,
//     buttonLink: "/dashboard/admin/plans",
//     title: "Management",
//   },
//   {
//     label: "Digital Courses",
//     icon: IconVocabulary,
//     buttonLink: "/dashboard/admin/digital-courses",
//     title: "Management",
//   },
//   {
//     label: "Help",
//     icon: IconHelp,
//     buttonLink: "/dashboard/admin/help",
//     title: "Management",
//   },
//   // {
//   //   label: "Settings",
//   //   icon: IconSettings,
//   //   buttonLink: "/dashboard/admin/settings",
//   //   title: "Management",
//   // },
// ];
