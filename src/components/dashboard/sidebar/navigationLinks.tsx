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
  Pen,
  UserCog,
} from "lucide-react";

export const healthProviderLinks = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} className="text-secondary" />,
    iconWhite: <LayoutDashboard size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard",
  },
  {
    label: "Applications",
    icon: <Send size={20} className="text-secondary bg-se " />,
    iconWhite: <Send size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/health-provider/applications",

    subLinks: [
      {
        label: "Approved",
        icon: <Triangle size={16} className="text-secondary" />,
        iconWhite: <Triangle size={16} className="text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/health-provider/approved-applications",
      },
      {
        label: "Pending",
        icon: <Square size={16} className="rotate-45 text-secondary" />,
        iconWhite: <Square size={16} className="rotate-45 text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/health-provider/pending-applications",
      },
      {
        label: "Declined",
        icon: <Hexagon size={18} className=" text-secondary" />,
        iconWhite: <Hexagon size={18} className=" text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/health-provider/declined-applications",
      },
    ],
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
    buttonLink: "/dashboard/settings",
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
    buttonLink: "/dashboard/logout",
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
        label: "Created",
        icon: <Pen size={16} className="text-secondary" />,
        iconWhite: <Pen size={16} className="text-[#667085]" />,
        title: "Menu",
        buttonLink:
          "/dashboard/credentializing-organization/created-applications",
      },
      {
        label: "Incoming",
        icon: <Triangle size={16} className="text-secondary" />,
        iconWhite: <Triangle size={16} className="text-[#667085]" />,
        title: "Menu",
        buttonLink:
          "/dashboard/credentializing-organization/incoming-applications",
      },
      {
        label: "All",
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
    label: "Provider",
    icon: <UserRoundCheck size={20} className="text-secondary " />,
    iconWhite: <UserRoundCheck size={20} className="text-[#667085] " />,
    title: "Menu",
    buttonLink: "/dashboard/credentializing-organization/providers",
  },
  {
    label: "Report & Analytics",
    icon: <SquareKanban size={20} className="text-secondary rotate-180 " />,
    iconWhite: (
      <SquareKanban size={20} className="text-[#667085] rotate-180 " />
    ),
    title: "Menu",
    buttonLink: "/dashboard/credentializing-organization/report-analytics",
  },
  {
    label: "Notification",
    icon: <Bell size={20} className="text-secondary" />,
    iconWhite: <Bell size={20} className="text-[#667085]" />,
    title: "Menu",
    buttonLink: "/dashboard/credentializing-organization/notifications",
  },
  {
    label: "Settings",
    icon: <Settings size={20} className="text-secondary" />,
    iconWhite: <Settings size={20} className="text-[#667085]" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/settings",
  },
  {
    label: "Help Center",
    icon: <CircleHelp size={20} className="text-secondary" />,
    iconWhite: <CircleHelp size={20} className="text-[#667085]" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/credentializing-organization/help-center",
  },
  {
    label: "Logout",
    icon: <LogOut size={20} className="text-secondary rotate-180" />,
    iconWhite: <LogOut size={20} className="text-[#667085] rotate-180" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/logout",
  },
];

export const adminLinks = [
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
    buttonLink: "/dashboard/admin/all-applications",

    subLinks: [
      {
        label: "All",
        icon: <Square size={16} className="rotate-45 text-secondary" />,
        iconWhite: <Square size={16} className="rotate-45 text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/admin/all-applications",
      },

      {
        label: "Pending",
        icon: <Triangle size={16} className="text-secondary" />,
        iconWhite: <Triangle size={16} className="text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/admin/pending-applications",
      },

      {
        label: "Approved",
        icon: <Hexagon size={18} className=" text-secondary" />,
        iconWhite: <Hexagon size={18} className=" text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/admin/approved-applications",
      },
      {
        label: "Declined",
        icon: <Hexagon size={18} className=" text-secondary" />,
        iconWhite: <Hexagon size={18} className=" text-[#667085]" />,
        title: "Menu",
        buttonLink: "/dashboard/admin/declined-applications",
      },
    ],
  },
  {
    label: "Organizations",
    icon: <SquareKanban size={20} className="text-secondary rotate-180 " />,
    iconWhite: (
      <SquareKanban size={20} className="text-[#667085] rotate-180 " />
    ),
    title: "Menu",
    buttonLink: "/dashboard/admin/organizations",
  },
  {
    label: "Providers",
    icon: <UserRoundCheck size={20} className="text-secondary " />,
    iconWhite: <UserRoundCheck size={20} className="text-[#667085] " />,
    title: "Menu",
    buttonLink: "/dashboard/admin/providers",
  },
  {
    label: "Admins",
    icon: <UserCog size={20} className="text-secondary " />,
    iconWhite: <UserCog size={20} className="text-[#667085] " />,
    title: "Menu",
    buttonLink: "/dashboard/admin/all",
  },

  {
    label: "Settings",
    icon: <Settings size={20} className="text-secondary" />,
    iconWhite: <Settings size={20} className="text-[#667085]" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/settings",
  },

  {
    label: "Logout",
    icon: <LogOut size={20} className="text-secondary rotate-180" />,
    iconWhite: <LogOut size={20} className="text-[#667085] rotate-180" />,
    title: "Settings & Support",
    buttonLink: "/dashboard/logout",
  },
];
