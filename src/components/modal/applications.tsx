import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { ApplicationsData } from "@/constant/applicationsdata";
import { useNavigate } from "react-router-dom";
import { HEALTHCARE_APPLICATION_FORM } from "@/router/routes";

const ApplicationsModal = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const navigate = useNavigate();
  // State to track the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Filter applications based on search input
  const filteredApplications = ApplicationsData.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
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
          {/* Modal body containing a description */}
          <div className="flex flex-col space-y-5 bg-white">
            <div className="">
              <div className="bg-[#f9fafb] border-fade border items-center flex rounded-full w-96 py-2 px-4">
                <Search className="text-fade" size={14} />
                <input
                  type="text"
                  className="bg-transparent outline-none raleway text-xs px-2"
                  placeholder="Search Application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
                />
              </div>
            </div>

            {/* Display filtered applications */}
            <div className="flex flex-col gap-3">
              {filteredApplications.length > 0 ? (
                filteredApplications.map((app, idx) => (
                  <div
                    key={idx}
                    onClick={() => navigate(HEALTHCARE_APPLICATION_FORM)}
                    className="flex flex-col cursor-pointer gap-2 hover:bg-primary p-2"
                  >
                    <p className="font-semibold">{app.title}</p>
                    <p className="font-medium capitalize text-fade text-xs">
                      {app.desc}
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

// Export the ApplicationsModal component
export default ApplicationsModal;
