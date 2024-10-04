import { ApplicationProps } from ".";

const Education = ({ form, handleChange }: ApplicationProps) => {
  const {
    undergraduateInstitution,
    undergraduateDegree,
    graduateInstitution,
    graduateDegree,
    graduateYOG,
    internshipInstitution,
    internshipDegree,
    internshipYOG,
    undergraduateYOG,
    residencyInstitution,
    residencyDegree,
    residencyYOG,
    fellowshipInstitution,
    fellowshipDegree,
    fellowshipYOG,
    cmeInstitution,
    cmeDegree,
    cmeYOG,
  } = form;

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Education</p>
      <div className="space-y-10 ">
        <div className="flex flex-1 xl:flex-row flex-col gap-10">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Undergraduate</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="undergraduateInstitution">
                Institution
              </label>
              <input
                id="undergraduateInstitution"
                name="undergraduateInstitution"
                type="text"
                placeholder="University of Washington"
                value={undergraduateInstitution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="undergraduateDegree">
                Degree
              </label>
              <input
                id="undergraduateDegree"
                name="undergraduateDegree"
                type="text"
                placeholder="Bachelor of Science in Biology"
                value={undergraduateDegree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="undergraduateYOG">
                Year of Graduation
              </label>
              <input
                id="undergraduateYOG"
                name="undergraduateYOG"
                type="number"
                placeholder="1997"
                value={undergraduateYOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1  gap-3">
            <p className="font-semibold  ">Graduate/Medical School Education</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="graduateInstitution">
                Institution
              </label>
              <input
                id="graduateInstitution"
                name="graduateInstitution"
                type="text"
                placeholder="Harvard Medical School"
                value={graduateInstitution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="graduateDegree">
                Degree
              </label>
              <input
                id="graduateDegree"
                name="graduateDegree"
                type="text"
                placeholder="Doctor of Medcine MD"
                value={graduateDegree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="graduateYOG">
                Year of Graduation
              </label>
              <input
                id="graduateYOG"
                name="graduateYOG"
                type="number"
                placeholder="2000"
                value={graduateYOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1  gap-3">
            <p className="font-semibold  ">Internship</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="internshipInstitution">
                Institution
              </label>
              <input
                id="internshipInstitution"
                name="internshipInstitution"
                type="text"
                placeholder="Massachusetts General Hospital"
                value={internshipInstitution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="internshipDegree">
                Degree
              </label>
              <input
                id="internshipDegree"
                name="internshipDegree"
                type="text"
                placeholder="Internal Medicine"
                value={internshipDegree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="internshipYOG">
                Year completed
              </label>
              <input
                id="internshipYOG"
                name="internshipYOG"
                type="number"
                placeholder="2003"
                value={internshipYOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 xl:flex-row flex-col gap-10">
          <div className="flex flex-col flex-1 gap-3">
            <p className="font-semibold  ">Residency</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="residencyInstitution">
                Institution
              </label>
              <input
                id="residencyInstitution"
                name="residencyInstitution"
                type="text"
                placeholder="Massachusetts General Hospital"
                value={residencyInstitution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="residencyDegree">
                Degree
              </label>
              <input
                id="residencyDegree"
                name="residencyDegree"
                type="text"
                placeholder="Cardiology"
                value={residencyDegree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="residencyYOG">
                Year of Graduation
              </label>
              <input
                id="residencyYOG"
                name="residencyYOG"
                type="number"
                placeholder="2005"
                value={residencyYOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1  gap-3">
            <p className="font-semibold  ">Fellowship</p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="fellowshipInstitution">
                Institution
              </label>
              <input
                id="fellowshipInstitution"
                name="fellowshipInstitution"
                type="text"
                placeholder="Cleveland Clinic"
                value={fellowshipInstitution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="fellowshipDegree">
                Degree
              </label>
              <input
                id="fellowshipDegree"
                name="fellowshipDegree"
                type="text"
                placeholder="Interventional Cardiology"
                value={fellowshipDegree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="fellowshipYOG">
                Year of Graduation
              </label>
              <input
                id="fellowshipYOG"
                name="fellowshipYOG"
                type="number"
                placeholder="2000"
                value={fellowshipYOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1  gap-3">
            <p className="font-semibold  ">
              Continuing Medical Education (CME)
            </p>
            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="cmeInstitution">
                Institution
              </label>
              <input
                id="cmeInstitution"
                name="cmeInstitution"
                type="text"
                placeholder="American College of Cardiology"
                value={cmeInstitution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="cmeDegree">
                Degree
              </label>
              <input
                id="cmeDegree"
                name="cmeDegree"
                type="text"
                placeholder="ACLS"
                value={cmeDegree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 gap-5 items-center font-medium">
              <label className="w-16" htmlFor="cmeYOG">
                Year completed
              </label>
              <input
                id="cmeYOG"
                name="cmeYOG"
                type="number"
                placeholder="2003"
                value={cmeYOG}
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

export default Education;
