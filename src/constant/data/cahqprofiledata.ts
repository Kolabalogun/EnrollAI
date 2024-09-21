export const CAHQProfileInitialState = {
  pageNo: 1,

  // Personal Information
  fullName: "",
  gender: "male",
  dob: new Date(Date.now()),
  ssn: "",
  language: "",
  phoneNumber: "",
  email: "",
  presentPosition: "",
  npi: "",
  upin: "",
  citizenship: "",
  bop: "",
  taxID: "",
  medicaid: "",

  // Education Information
  undergraduateInstitution: "",
  undergraduateDegree: "",
  graduateInstitution: "",
  graduateDegree: "",
  graduateYOG: "",
  internshipInstitution: "",
  internshipDegree: "",
  internshipYOG: "",
  undergraduateYOG: "",
  residencyInstitution: "",
  residencyDegree: "",
  residencyYOG: "",
  fellowshipInstitution: "",
  fellowshipDegree: "",
  fellowshipYOG: "",
  cmeInstitution: "",
  cmeDegree: "",
  cmeYOG: "",

  // Practice Location

  previousEmploymentOrganization: "",
  previousEmploymentStartDate: new Date(Date.now()),
  previousEmploymentEndDate: new Date(Date.now()),

  currentEmploymentOrganization: "",
  currentEmploymentStartDate: new Date(Date.now()),
  currentEmploymentEndDate: new Date(Date.now()),

  currentHospitalAffliationHospital: "",
  currentHospitalAffliationPrivileges: "",
  currentHospitalAffliationAddress: "",

  previousHospitalAffliationHospital: "",
  previousHospitalAffliationPrivileges: "",
  previousHospitalAffliationAddress: "",

  primarypracticelocationInstitution: "",
  primarypracticelocationDegree: "",
  primarypracticelocationYOG: "",

  primarypracticelocation2Institution: "",
  primarypracticelocation2Degree: "",
  primarypracticelocation2YOG: "",

  date: new Date(Date.now()),
};

export const ApplicationsData = [
  {
    title: "Credentialing Request",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    title: "Health Plan",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    title: "Health Insurance",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    title: "Licensing",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    title: "Credentialing",
    desc: "lorem ipsum dolor sit amet",
  },
];
