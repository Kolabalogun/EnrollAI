import {
  LayoutDashboard,
  Send,
  User,
  Bell,
  Settings,
  CircleHelp,
  LogOut,
  UserRoundCheck,
  SquareKanban,
  Triangle,
  Square,
  Hexagon,
} from "lucide-react";

export const healthProviderLinks = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} className="text-secondary" />,
    iconWhite: <LayoutDashboard size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/health-provider",
  },
  {
    label: "Applications",
    icon: <Send size={20} className="text-secondary bg-se " />,
    iconWhite: <Send size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/health-provider/applications",
  },
  {
    label: "Profile",
    icon: <User size={20} className="text-secondary" />,
    iconWhite: <User size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/health-provider/profile",
  },
  {
    label: "Notification",
    icon: <Bell size={20} className="text-secondary" />,
    iconWhite: <Bell size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/health-provider/notifications",
  },
  {
    label: "Settings",
    icon: <Settings size={20} className="text-secondary" />,
    iconWhite: <Settings size={20} className="text-[#667085]" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/health-provider/settings",
  },
  {
    label: "Help Center",
    icon: <CircleHelp size={20} className="text-secondary" />,
    iconWhite: <CircleHelp size={20} className="text-[#667085]" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/health-provider/helpcenter",
  },
  {
    label: "Logout",
    icon: <LogOut size={20} className="text-secondary rotate-180" />,
    iconWhite: <LogOut size={20} className="text-[#667085] rotate-180" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/health-provider/logout",
  },
];

export const organizationLinks = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} className="text-secondary" />,
    iconWhite: <LayoutDashboard size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard",
  },
  {
    label: "Applications",
    icon: <Send size={20} className="text-secondary" />,
    iconWhite: <Send size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/credentializing-organization/incoming-applications",

    subLinks: [
      {
        label: "Incoming Applications",
        icon: <Triangle size={16} className="text-secondary" />,
        iconWhite: <Triangle size={16} className="text-[#667085]" />,
        title: "Menu",
        buttonLink:
          "/dashboard/credentializing-organization/incoming-applications",
      },
      {
        label: "All Applications",
        icon: <Square size={16} className="rotate-45 text-secondary" />,
        iconWhite: <Square size={16} className="rotate-45 text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/credentializing-organization/all-applications",
      },
      {
        label: "Approved",
        icon: <Hexagon size={18} className=" text-secondary" />,
        iconWhite: <Hexagon size={18} className=" text-[#667085]" />,
        title: "Menu",
        buttonLink:
          "/dashboard/credentializing-organization/approved-applications",
      },
    ],
  },
  {
    label: "Provider Management",
    icon: <UserRoundCheck size={20} className="text-secondary " />,
    iconWhite: <UserRoundCheck size={20} className="text-[#667085] " />,
    title: "Menu",
    buttonLink: "/dashboard/health-provider/provider-management",
  },
  {
    label: "Report & Analytics",
    icon: <SquareKanban size={20} className="text-secondary rotate-180 " />,
    iconWhite: (
      <SquareKanban size={20} className="text-[#667085] rotate-180 " />
    ),
    title: "Menu",
    buttonLink: "/dashboard/health-provider/report-analytics",
  },
  {
    label: "Notification",
    icon: <Bell size={20} className="text-secondary" />,
    iconWhite: <Bell size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/health-provider/notifications",
  },
  {
    label: "Settings",
    icon: <Settings size={20} className="text-secondary" />,
    iconWhite: <Settings size={20} className="text-[#667085]" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/health-provider/settings",
  },
  {
    label: "Help Center",
    icon: <CircleHelp size={20} className="text-secondary" />,
    iconWhite: <CircleHelp size={20} className="text-[#667085]" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/health-provider/helpcenter",
  },
  {
    label: "Logout",
    icon: <LogOut size={20} className="text-secondary rotate-180" />,
    iconWhite: <LogOut size={20} className="text-[#667085] rotate-180" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/health-provider/logout",
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
