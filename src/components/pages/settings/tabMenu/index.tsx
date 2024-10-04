import AnalysisTab from "./tab";

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  selectedTab: number;
};

const tabs = [
  {
    title: "Profile",
  },
  {
    title: "System",
  },
  {
    title: "Billing & Invoice",
  },
  // {
  //   title: "Security Settings",
  // },
];

const TabMenu = ({ setSelectedTab, selectedTab }: Props) => {
  return (
    <div className="bg-[#d7dae1] rounded-md px-6 py-2 my-2 flex justify-between items-center">
      <div className="flex flex-1  flex-row justify-between lg:justify-normal   gap-3  lg:gap-8">
        {tabs.map((tab, idx) => (
          <AnalysisTab
            key={idx}
            idx={idx}
            title={tab.title}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
