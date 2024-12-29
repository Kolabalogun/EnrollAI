import { formatDateTime } from "@/utils/formatDateTime";
import { ApplicationProps } from "../step1";

const Review1 = ({ form }: ApplicationProps) => {
  const {
    step1: {
      personalInformation: {
        lastName,
        firstName,
        middleName,
        otherNames,
        homeMailingAddress,
        city,
        state,
        zip,
        homeTelephone,
        email,
        homeFax,
        cellPhone,
        birthdate,
        birthplace,
        SSN,
        gender,
        citizenship,
        specialty,
        raceEthnicity,
        subspecialties,
        NPI,
        cahqID,
        cahqPassword,
      },
      practiceInformation: {
        primaryOfficeName,
        primaryDepartmentName,
        primaryOfficeAddress,
        primaryCity,
        primaryState,
        primaryZIP,
        primaryTelephone,
        primaryFax,
        primaryOfficeManager,
        primaryOfficeManagerPhone,
        primaryOfficeManagerFax,
        primaryTaxIDName,
        primaryFederalTaxID,

        secondaryOfficeAddress,
        secondaryCity,
        secondaryState,
        secondaryZIP,
        secondaryOfficeManager,
        secondaryFax,
        secondaryTelephone,
        secondaryTaxIDName,
        secondaryFederalTaxID,

        tertiaryOfficeAddress,
        tertiaryCity,
        tertiaryState,
        tertiaryZIP,
        tertiaryOfficeManager,
        tertiaryFax,
        tertiaryTelephone,
        tertiaryTaxIDName,
        tertiaryFederalTaxID,
      },
      education: {
        premedicalInstitution,
        premedicalDegree,
        premedicalGraduationDate,
        premedicalMailingAddress,
        premedicalCity,
        premedicalState,
        premedicalZIP,

        medicalSchoolInstitution,
        medicalSchoolDegree,
        medicalSchoolGraduationDate,
        medicalSchoolMailingAddress,
        medicalSchoolCity,
        medicalSchoolState,
        medicalSchoolZIP,

        professionalSchoolInstitution,
        professionalSchoolDegree,
        professionalSchoolGraduationDate,
        professionalSchoolMailingAddress,
        professionalSchoolCity,
        professionalSchoolState,
        professionalSchoolZIP,

        internshipInstitution,
        internshipProgramDirector,
        internshipMailingAddress,
        internshipCity,
        internshipState,
        internshipZIP,
        internshipType,
        internshipSpecialty,
        internshipFromDate,
        internshipToDate,
        internshipPhysicianName,
      },
    },
  } = form;

  return (
    <div className="bg-white p-5 space-y-6">
      <div className="space-y-1">
        <p className="font-semibold text-base ">{form?.applicationType}</p>
        <p className="text-[12px] font-medium text-[#667085]">
          {form?.organizationName} - {form?.applicationTitle}
        </p>
      </div>

      <div className="space-y-9">
        <div className="">
          <p className="text-[#667085] text-lg underline text-center font-semibold ">
            Application Summary
          </p>
        </div>

        <div className="grid xl:grid-cols-3 flex-col  justify-between  0 gap-8 border-b-2 pb-10">
          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Personal Information</p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Full Name:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {lastName} {firstName} {middleName} {otherNames}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Gender:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {gender}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Date of Birth:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {formatDateTime(birthdate, true) ?? "N/A"}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Place of Birth:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {birthplace}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Social Security Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {SSN}
                </p>
              </div>{" "}
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Specialty:</p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {specialty}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Subspecialties:
                </p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {subspecialties}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Race / Ethnicity:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {raceEthnicity}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Citizenship:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {citizenship}
                </p>
              </div>
            </div>
          </div>

          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Contact Information</p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Home Telephone:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {homeTelephone}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Cell Phone:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {cellPhone}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Home Fax Number:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {homeFax}
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
                  {homeMailingAddress}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">City:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {city}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">State:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {state}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Zip:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {zip}
                </p>
              </div>
            </div>
          </div>

          <div className="    flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Professional IDs</p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  National Provider Identifier (NPI I):
                </p>
                <p className="text-xs text-[#667085] font-medium   ">{NPI}</p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">CAHQ ID:</p>
                <p className="text-xs text-[#667085] font-medium   ">
                  {cahqID}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  CAHQ Password:
                </p>
                <p className="text-xs text-[#667085] font-medium  ">
                  {cahqPassword}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16 border-b-2 pb-10">
          <div className="grid xl:grid-cols-3 flex-col  justify-between   gap-x-8  ">
            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-xl">Education</p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-black text-xl">
                    Premedical School
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {premedicalInstitution || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {premedicalDegree || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(premedicalGraduationDate, true) ?? "N/A"}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Mailing Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {premedicalMailingAddress || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">City:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {premedicalCity || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">State:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {premedicalState || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">ZIP:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {premedicalZIP || ""}
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
                  <p className="font-semibold text-black text-xl">
                    Medical School
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {medicalSchoolInstitution || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {medicalSchoolDegree || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(medicalSchoolGraduationDate, true) ?? "N/A"}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Mailing Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {medicalSchoolMailingAddress || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">City:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {medicalSchoolCity || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">State:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {medicalSchoolState || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">ZIP:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {medicalSchoolZIP || ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="    flex w-full flex-1 flex-col gap-5    ">
              <p className="font-semibold text-white text-xl">
                Professional School
              </p>

              <div className="space-y-3">
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-black text-xl">
                    Professional School
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {professionalSchoolInstitution || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Degree:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {professionalSchoolDegree || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(professionalSchoolGraduationDate, true) ??
                      "N/A"}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Mailing Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {professionalSchoolMailingAddress || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">City:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {professionalSchoolCity || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">State:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {professionalSchoolState || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">ZIP:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {professionalSchoolZIP || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Specialty:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipSpecialty || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Type:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipType || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Physician Name:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipPhysicianName || ""}
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
                  <p className="font-semibold text-black text-xl">Internship</p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Institution:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipInstitution || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Program Director:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipProgramDirector || ""}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Start Year:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(internshipFromDate, true) ?? "N/A"}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Year of Graduation:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {formatDateTime(internshipToDate, true) ?? "N/A"}
                  </p>
                </div>

                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Mailing Address:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipMailingAddress || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">City:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipCity || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">State:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipState || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">ZIP:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipZIP || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Specialty:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipSpecialty || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">Type:</p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipType || ""}
                  </p>
                </div>
                <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                  <p className="font-semibold text-xs text-black">
                    Physician Name:
                  </p>
                  <p className="text-xs text-[#667085] font-medium capitalize ">
                    {internshipPhysicianName || ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col  justify-between xl:gap-20 gap-8  ">
          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-xl">Practice Information</p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-black text-xl">
                  Primary Office
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Name:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryOfficeName || ""}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Department Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryDepartmentName || ""}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Address:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryOfficeAddress || ""}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">City:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryCity || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">State:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryState || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">ZIP:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryZIP || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Telephone:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryTelephone || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Fax:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryFax || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Manager:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryOfficeManager || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Manager Phone:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryOfficeManagerPhone || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Manager Fax:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryOfficeManagerFax || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Primary Tax ID Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryTaxIDName || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Primary Federal Tax ID:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {primaryFederalTaxID || ""}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white text-xl">
              Contact Information
            </p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-black text-xl">
                  Secondary Office
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Address:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryOfficeAddress || ""}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">City:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryCity || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">State:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryState || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">ZIP:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryZIP || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Telephone:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryTelephone || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Fax:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryFax || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Manager:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryOfficeManager || ""}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Manager Fax:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryFax || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Secondary Tax ID Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryTaxIDName || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Secondary Federal Tax ID:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {secondaryFederalTaxID || ""}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5    ">
            <p className="font-semibold text-white text-xl">
              Contact Information
            </p>

            <div className="space-y-3">
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-black text-xl">
                  Tertiary Office
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Address:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryOfficeAddress || ""}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">City:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryCity || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">State:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryState || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">ZIP:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryZIP || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Telephone:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryTelephone || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">Fax:</p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryFax || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Manager:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryOfficeManager || ""}
                </p>
              </div>

              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Office Manager Fax:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryFax || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Tertiary Tax ID Name:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryTaxIDName || ""}
                </p>
              </div>
              <div className="flex xl:space-x-2 space-y-1 flex-col xl:flex-row xl:items-center">
                <p className="font-semibold text-xs text-black">
                  Tertiary Federal Tax ID:
                </p>
                <p className="text-xs text-[#667085] font-medium capitalize ">
                  {tertiaryFederalTaxID || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review1;
