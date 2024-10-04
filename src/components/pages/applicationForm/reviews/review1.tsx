import { formatDateTime } from "@/utils/formatDateTime";
import { ApplicationProps } from "../step1";

const Review1 = ({ form }: ApplicationProps) => {
  const {
    // Personal Information
    fullName,
    sex,
    dob,
    ssn,
    language,
    phoneNumber,
    email,
    address,

    // Profession ID
    npi,
    tin,
    deacn,
    medicalCareId,

    // Education Information
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

    primarypracticelocationName,
    primarypracticelocationOfficeAddress,
    primarypracticelocationContact,
    primarypracticelocationEmail,
    primarypracticelocationOfficeHours,
    primarypracticelocationFax,

    // Practice Location II
    primarypracticelocation2Name,
    primarypracticelocation2OfficeAddress,
    primarypracticelocation2Contact,
    primarypracticelocation2Email,
    primarypracticelocation2OfficeHours,
    primarypracticelocation2Fax,
  } = form;

  return (
    <div className="bg-white p-5 space-y-6">
      <div className="space-y-1">
        <p className="font-semibold text-base ">Health Plan</p>
        <p className="text-[12px] font-medium text-[#667085]">
          Lorem Ipsum Organization
        </p>
      </div>

      <div className="space-y-9">
        <div className="">
          <p className="text-[#667085] text-lg underline text-center font-semibold ">
            Application Summary
          </p>
        </div>

        <div className="flex xl:flex-row flex-col  justify-between xl:gap-20 gap-8 border-b-2 pb-10">
          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Personal Information</p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Full Name:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {fullName}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Sex:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {sex}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Date of Birth:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {formatDateTime(dob, false)}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Social Security Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {ssn}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Language Spoken:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {language}
                </p>
              </div>
            </div>
          </div>

          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Contact Information</p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Phone Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {phoneNumber}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Email Address:
                </p>
                <p className="text-xs text-[#667085] font-medium lowercase ">
                  {email}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Address:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {address}
                </p>
              </div>
            </div>
          </div>

          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Professional IDs</p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  National Provider Identifier (NPI):
                </p>
                <p className="text-xs text-[#667085] font-medium   ">{npi}</p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Tax Identification Number (TIN):
                </p>
                <p className="text-xs text-[#667085] font-medium   ">{tin}</p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Medical Care ID:
                </p>
                <p className="text-xs text-[#667085] font-medium  ">
                  {medicalCareId}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  DEA Certificate Number:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">{deacn}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16 border-b-2 pb-10">
          <div className="flex xl:flex-row flex-col  justify-between xl:gap-20 gap-8  ">
            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-xl">Education</p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Undergraduate
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {undergraduateInstitution}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {undergraduateDegree}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {undergraduateYOG}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-white text-xl">
                Contact Information
              </p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Graduate/Medical School Education
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {graduateInstitution}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {graduateDegree}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {graduateYOG}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-white text-xl">
                Contact Information
              </p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Internship</p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipInstitution}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipDegree}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipYOG}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col  justify-between xl:gap-20 gap-8   ">
            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Residency</p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residencyInstitution}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residencyDegree}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {residencyYOG}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Fellowship</p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {fellowshipInstitution}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {fellowshipDegree}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {fellowshipYOG}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Continuing Medical Education (CME)
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {cmeInstitution}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {cmeDegree}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {cmeYOG}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col  justify-between xl:gap-20 gap-8   border-b-2 pb-10  ">
          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Practice Locations</p>

            <div className="flex xl:flex-row flex-col  justify-between xl:gap-20 gap-8  ">
              <div className="space-y-3 flex-1">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Primary Practice Location
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Name:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocationName}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Office Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocationOfficeAddress}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Contact:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocationContact}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Email Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium lowercase ">
                    {primarypracticelocationEmail}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Office Hours:
                  </p>

                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocationOfficeHours}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Fax:</p>

                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocationFax}
                  </p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Additional Practice Location
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Name:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocation2Name}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Office Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocation2OfficeAddress}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Contact:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocation2Contact}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Email Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium lowercase ">
                    {primarypracticelocation2Email}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Office Hours:
                  </p>

                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocation2OfficeHours}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Fax:</p>

                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {primarypracticelocation2Fax}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review1;
