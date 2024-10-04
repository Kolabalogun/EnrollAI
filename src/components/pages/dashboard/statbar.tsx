import StatCard from "./statcard";

const StatBar = ({ applications }: { applications?: boolean }) => {
  return (
    <div className="flex w-full xl:flex-row flex-col flex-1 gap-5">
      <StatCard title="Total Applications" value={0} status={"All"} />
      <StatCard title="Active Applications" value={0} status={"Active"} />
      <StatCard
        title={applications ? "In Draft" : "Pending Applications"}
        value={0}
        status={"Pending"}
      />
      {applications && (
        <StatCard title="Pending Applications" value={0} status={"Completed"} />
      )}
    </div>
  );
};

export default StatBar;
