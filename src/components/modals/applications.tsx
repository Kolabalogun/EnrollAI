/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useToast,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAllApplicationsForProviders } from "@/services/applications";
import showToast from "../common/showtoast";
import {
  HEALTHCARE_APPLICATION_FORM,
  ORGANIZATION_CREATE_APPLICATION_FORM,
} from "@/router/routes";

const ApplicationsModal = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const navigate = useNavigate();
  const { accountType } = useSelector((state: any) => state.auth);
  const toast = useToast();
  // State for search input and fetched applications
  const [searchQuery, setSearchQuery] = useState("");
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch applications when the modal is opened
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAllApplicationsForProviders();
        setApplications(response?.data?.applications);
        console.log(response);

        if (!response.success)
          return showToast(
            toast,
            "Enroll AI",
            "error",
            `${response.message || "Failed to fetch applications."}`
          );
      } catch (err: any) {
        showToast(
          toast,
          "Enroll AI",
          "error",
          `${err.message || "Failed to fetch applications."}`
        );
        setError(err.message || "Failed to fetch applications.");
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchApplications();
    }
  }, [isOpen]);

  // Filter applications based on the search input
  const filteredApplications = applications?.filter(
    (app) =>
      app?.applicationTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app?.applicationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app?.organization?.organizationName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      blockScrollOnMount={false}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent paddingLeft={5} paddingRight={5}>
        <ModalBody
          paddingLeft={0}
          paddingRight={0}
          paddingBottom={10}
          paddingTop={5}
        >
          {/* Modal body */}
          <div className="flex flex-col space-y-5 bg-white">
            <div className="">
              <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full w-96 py-2 px-4">
                <Search className="text-fade" size={14} />
                <input
                  type="text"
                  className="bg-transparent outline-none raleway text-xs px-2"
                  placeholder="Search Application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Display applications */}
            <div className="flex flex-col gap-3">
              {loading ? (
                <p className="text-fade text-xs">Loading applications...</p>
              ) : error ? (
                <p className="text-red-500 text-xs">{error}</p>
              ) : filteredApplications?.length > 0 ? (
                filteredApplications?.map((app) => (
                  <div
                    key={app._id}
                    onClick={
                      accountType !== "provider"
                        ? () => navigate(ORGANIZATION_CREATE_APPLICATION_FORM)
                        : () =>
                            navigate(HEALTHCARE_APPLICATION_FORM, {
                              state: JSON.stringify(app),
                            })
                    }
                    className="flex flex-col cursor-pointer gap-2 hover:bg-primary p-2"
                  >
                    <p className="font-semibold">{app?.applicationName}</p>
                    <p className="font-semibold text-sm text-gray-600">
                      {app?.applicationTitle}
                    </p>
                    <p className="font-medium capitalize text-fade text-xs">
                      {app?.organization?.organizationName}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-fade text-xs">No applications found</p>
              )}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationsModal;
