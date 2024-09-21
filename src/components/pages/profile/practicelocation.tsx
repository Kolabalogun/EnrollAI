import { ApplicationProps } from "../applicationForm/step1";
import { Calendar } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PraticeLocation = ({
  form,
  handleChange,
  handleDateChange,
}: ApplicationProps) => {
  const {
    previousEmploymentOrganization,
    previousEmploymentStartDate,
    previousEmploymentEndDate,

    currentEmploymentOrganization,
    currentEmploymentStartDate,
    currentEmploymentEndDate,

    currentHospitalAffliationHospital,
    currentHospitalAffliationPrivileges,
    currentHospitalAffliationAddress,

    previousHospitalAffliationHospital,
    previousHospitalAffliationPrivileges,
    previousHospitalAffliationAddress,

    primarypracticelocationInstitution,
    primarypracticelocationDegree,
    primarypracticelocationYOG,

    primarypracticelocation2Institution,
    primarypracticelocation2Degree,
    primarypracticelocation2YOG,
  } = form;

  return (
    <div className="  pb-10 space-y-5">
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-10">
          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Previous Employment</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="previousEmploymentOrganization"
              >
                Organization
              </label>
              <input
                id="previousEmploymentOrganization"
                name="previousEmploymentOrganization"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={previousEmploymentOrganization}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="previousEmploymentStartDate"
              >
                Start Date
              </label>

              <div
                id="previousEmploymentStartDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={previousEmploymentStartDate}
                  onChange={(date) =>
                    handleDateChange("previousEmploymentStartDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="previousEmploymentEndDate"
              >
                End Date
              </label>

              <div
                id="previousEmploymentEndDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={previousEmploymentEndDate}
                  onChange={(date) =>
                    handleDateChange("previousEmploymentEndDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Current Employment</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="currentEmploymentOrganization"
              >
                Organization
              </label>
              <input
                id="currentEmploymentOrganization"
                name="currentEmploymentOrganization"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={currentEmploymentOrganization}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="currentEmploymentStartDate"
              >
                Start Date
              </label>

              <div
                id="currentEmploymentStartDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={currentEmploymentStartDate}
                  onChange={(date) =>
                    handleDateChange("currentEmploymentStartDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="currentEmploymentEndDate"
              >
                End Date
              </label>

              <div
                id="currentEmploymentEndDate"
                className="border flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full"
              >
                <div className="ml-2">
                  <Calendar size={15} />
                </div>

                <ReactDatePicker
                  selected={currentEmploymentEndDate}
                  onChange={(date) =>
                    handleDateChange("currentEmploymentEndDate", date)
                  }
                  dateFormat={"dd/MM/yyyy"}
                  wrapperClassName="date-picker"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Previous Hospital Affiliation</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="previousHospitalAffliationHospital"
              >
                Hospital
              </label>
              <input
                id="previousHospitalAffliationHospital"
                name="previousHospitalAffliationHospital"
                type="text"
                placeholder="Massachusetts General Hospital"
                value={previousHospitalAffliationHospital}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="previousHospitalAffliationAddress"
              >
                Address
              </label>
              <input
                id="previousHospitalAffliationAddress"
                name="previousHospitalAffliationAddress"
                type="text"
                placeholder="5678 Oak Avenue, Suite 210, New York, NY 10022"
                value={previousHospitalAffliationAddress}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="previousHospitalAffliationPrivileges"
              >
                Privileges
              </label>
              <input
                id="previousHospitalAffliationPrivileges"
                name="previousHospitalAffliationPrivileges"
                type="text"
                placeholder="University of Washington"
                value={previousHospitalAffliationPrivileges}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-10">
          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Current Hospital Affiliation</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="currentHospitalAffliationHospital"
              >
                Hospital
              </label>
              <input
                id="currentHospitalAffliationHospital"
                name="currentHospitalAffliationHospital"
                type="text"
                placeholder="Massachusetts General Hospital"
                value={currentHospitalAffliationHospital}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="currentHospitalAffliationAddress"
              >
                Address
              </label>
              <input
                id="currentHospitalAffliationAddress"
                name="currentHospitalAffliationAddress"
                type="text"
                placeholder="5678 Oak Avenue, Suite 210, New York, NY 10022"
                value={currentHospitalAffliationAddress}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="currentHospitalAffliationPrivileges"
              >
                Privileges
              </label>
              <input
                id="currentHospitalAffliationPrivileges"
                name="currentHospitalAffliationPrivileges"
                type="text"
                placeholder="University of Washington"
                value={currentHospitalAffliationPrivileges}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1  gap-6">
            <p className="font-semibold  ">Practice Location 1</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="primarypracticelocationInstitution"
              >
                Institution
              </label>
              <input
                id="primarypracticelocationInstitution"
                name="primarypracticelocationInstitution"
                type="text"
                placeholder="Cleveland Clinic"
                value={primarypracticelocationInstitution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="primarypracticelocationDegree"
              >
                Degree
              </label>
              <input
                id="primarypracticelocationDegree"
                name="primarypracticelocationDegree"
                type="text"
                placeholder="Interventional Cardiology"
                value={primarypracticelocationDegree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="primarypracticelocationYOG"
              >
                Year of Graduation
              </label>
              <input
                id="primarypracticelocationYOG"
                name="primarypracticelocationYOG"
                type="number"
                placeholder="2000"
                value={primarypracticelocationYOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1  gap-6">
            <p className="font-semibold  ">Practice Location 2</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="primarypracticelocation2Institution"
              >
                Institution
              </label>
              <input
                id="primarypracticelocation2Institution"
                name="primarypracticelocation2Institution"
                type="text"
                placeholder="American College of Cardiology"
                value={primarypracticelocation2Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="primarypracticelocation2Degree"
              >
                Degree
              </label>
              <input
                id="primarypracticelocation2Degree"
                name="primarypracticelocation2Degree"
                type="text"
                placeholder="Interventional Cardiology"
                value={primarypracticelocation2Degree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="primarypracticelocation2YOG"
              >
                Year of Graduation
              </label>
              <input
                id="primarypracticelocation2YOG"
                name="primarypracticelocation2YOG"
                type="number"
                placeholder="2000"
                value={primarypracticelocation2YOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PraticeLocation;
