import { ApplicationProps } from "../step1";

const HospitalAffiliations = ({ form, handleChange }: ApplicationProps) => {
  const {
    currentHospitalAffliationHospital,
    currentHospitalAffliationPrivileges,
    previousHospitalAffliationHospital,
    previousHospitalAffliationPrivileges,
  } = form;

  return (
    <div className="border rounded-lg pt-5 px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Hospital Affiliations</p>
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-24">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Current Hospital Affiliation</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-16"
                htmlFor="currentHospitalAffliationHospital"
              >
                Hospital
              </label>
              <input
                id="currentHospitalAffliationHospital"
                name="currentHospitalAffliationHospital"
                type="text"
                placeholder="New York Presbyterian Hospital"
                value={currentHospitalAffliationHospital}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-16"
                htmlFor="currentHospitalAffliationPrivileges"
              >
                Privileges
              </label>
              <input
                id="currentHospitalAffliationPrivileges"
                name="currentHospitalAffliationPrivileges"
                type="text"
                placeholder="Full Privileges in Cardiology"
                value={currentHospitalAffliationPrivileges}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Previous Hospital Affiliation</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-16"
                htmlFor="previousHospitalAffliationHospital"
              >
                Hospital
              </label>
              <input
                id="previousHospitalAffliationHospital"
                name="previousHospitalAffliationHospital"
                type="text"
                placeholder="New York Presbyterian Hospital"
                value={previousHospitalAffliationHospital}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label
                className="w-16"
                htmlFor="previousHospitalAffliationPrivileges"
              >
                Privileges
              </label>
              <input
                id="previousHospitalAffliationPrivileges"
                name="previousHospitalAffliationPrivileges"
                type="text"
                placeholder="Full Privileges in Cardiology"
                value={previousHospitalAffliationPrivileges}
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

export default HospitalAffiliations;
