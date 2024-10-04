type Props = {
  title: string;
  selectedTab: number;
  idx: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const AnalysisTab = ({ title, selectedTab, setSelectedTab, idx }: Props) => {
  return (
    <div
      onClick={() => setSelectedTab(idx)}
      className={` flex cursor-pointer gap-2 ${
        selectedTab === idx ? "text-dark-200 bg-fade" : "text-[#5a5a5a] "
      } font-semibold inter text-sm  items-center  xl:justify-center p-3 rounded-md  `}
    >
      <p className="  text-[13px] ">{title}</p>
    </div>
  );
};

export default AnalysisTab;
