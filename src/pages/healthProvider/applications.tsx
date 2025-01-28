/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { SubmitButton } from "@/components/common";
import ApplicationsModal from "@/components/modals/applications";

import Notifications from "@/components/pages/dashboard/notifications";
import StatBar from "@/components/pages/dashboard/statbar";
import { useDisclosure, useToast } from "@chakra-ui/react";

import { Pen, PlusIcon } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { getApplicationsFromProvidersBaseonStatus } from "@/services/org/applications";
import { getAllApplicationsBasedOnStatus } from "@/services/admin/applications";
import showToast from "@/components/common/showtoast";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { getUsersApplicationsByStatus } from "@/services/applications";

const Appications = () => {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalPages, setTotalPages] = useState(1);
  const toast = useToast();

  const fetchApplications = async (page: number = 1, size: number = 5) => {
    if (!user) return;
    setIsLoading(true);
    try {
      let res;

      if (user?.accountType === "provider") {
        res = await getUsersApplicationsByStatus(
          user?.userId,
          "pending",
          page,
          size
        );
      } else if (user?.accountType === "organization") {
        res = await getApplicationsFromProvidersBaseonStatus(
          user?.id,
          "pending",
          page,
          size
        );
      } else {
        res = await getAllApplicationsBasedOnStatus(page, size, "pending");
      }

      if (res.success) {
        setData(res?.data?.applications);

        setTotalPages(res?.data?.pagination?.totalPages);
      }
    } catch (error: any) {
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchApplications(currentPage, itemsPerPage);
  }, [user, currentPage]);

  return (
    <section className="flex space-y-6 mb-20 flex-col">
      <ApplicationsModal isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-3xl">Applications</p>
      </div>

      <div
        style={{ flex: 2 }}
        className="flex flex-col w-full flex-1 space-y-9 "
      >
        <StatBar applications />

        <div className="flex xl:flex-row flex-col gap-5 xl:gap-8">
          <div onClick={() => onOpen()}>
            <SubmitButton
              type="button"
              className=" border-0 px-6 py-4 rounded-lg"
            >
              <div
                className="flex items-center
                 gap-4"
              >
                <p className="text-xs font-semibold">Start New Application </p>
                <PlusIcon size={16} />
              </div>
            </SubmitButton>
          </div>

          <div
            onClick={() =>
              navigate("/dashboard/health-provider/pending-applications")
            }
            className="border-secondary text-secondary bg-transparent border-2 hover:bg-secondary transition duration-500 hover:text-white py-2 gap-3 px-10 cursor-pointer flex items-center justify-center rounded-lg"
          >
            <p className="text-xs font-semibold">Pending Applications</p>
            <Pen size={14} />
          </div>
        </div>

        <div className="flex xl:flex-row flex-col gap-10">
          <div
            style={{ flex: 2 }}
            className="bg-white rounded-lg flex-1 h-full w-full flex flex-col p-5 space-y-3"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base">
                {user?.accountType === "organization"
                  ? "Incoming Applications"
                  : "Pending Applications"}
              </p>
              {/* {data?.length > 3 && (
                <p
                  onClick={() => navigate(HEALTHCARE_APPLICATIONS_FULL_LIST)}
                  className="font-semibold cursor-pointer text-xs text-fade"
                >
                  View All
                </p>
              )} */}
            </div>

            <OrganizationApplicationLists
              data={data || []}
              fetchFunction={fetchApplications}
              isLoading={isLoading}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>

          <div className="flex-1">
            <Notifications />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appications;
