import Billing from "@/components/pages/settings/billing";
import Profile from "@/components/pages/settings/profile";
import System from "@/components/pages/settings/system";
import TabMenu from "@/components/pages/settings/tabMenu";
import { useState } from "react";

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="flex space-y-9   flex-col">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">
          {selectedTab === 2 ? "Subscription" : "Settings"}
        </p>
        <p className="font-medium text-fade text-xs">
          Manage your profile settings
        </p>
      </div>

      <TabMenu setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

      <div className="  rounded-lg flex-1 h-full w-full flex flex-col     space-y-9">
        <div className="space-y-5">
          {selectedTab === 1 ? (
            <System />
          ) : selectedTab === 2 ? (
            <Billing />
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </section>
  );
};

export default Settings;
