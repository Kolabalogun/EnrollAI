import StatCard from "./statcard";

const StatBar = () => {
  return (
    <div className="flex w-full flex-1 gap-5">
      <StatCard title="Total Applications" value={0} status={"All"} />
      <StatCard title="Active Applications" value={0} status={"Active"} />
      <StatCard title="Pending Applications" value={0} status={"Pending"} />
    </div>
  );
};

export default StatBar;
