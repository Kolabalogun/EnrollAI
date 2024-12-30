import { useEffect, useState } from "react";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import ApplicationsPageLayout from "@/layout/applicationsPage";
import axios from "axios";

const IncomingApplications = () => {
  const [applications, setApplications] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/organizations/applications",
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setApplications(response.data.groupedApplications);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  console.log(applications, "application");

  if (isLoading) return <p>Loading applications...</p>;
  if (error) return <p>Error fetching applications: {error}</p>;

  return (
    <ApplicationsPageLayout title="Incoming Applications">
      <OrganizationApplicationLists data={[]} />
    </ApplicationsPageLayout>
  );
};

export default IncomingApplications;
