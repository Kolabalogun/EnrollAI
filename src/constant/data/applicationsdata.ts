export const ApplicationFormInitialState = {
  id: new Date(Date.now()).toISOString(),
  pageNo: 1,
  // Step 1

  // Personal Information
  fullName: "",
  sex: "male",
  dob: new Date(Date.now()),
  ssn: "",
  language: "",
  phoneNumber: "",
  email: "",
  address: "",

  // Profession ID
  npi: "",
  tin: "",
  deacn: "",
  medicalCareId: "",

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

  // Step 2

  // Practice Location I
  primarypracticelocationName: "",
  primarypracticelocationOfficeAddress: "",
  primarypracticelocationContact: "",
  primarypracticelocationEmail: "",
  primarypracticelocationOfficeHours: "",
  primarypracticelocationFax: "",

  // Practice Location II
  primarypracticelocation2Name: "",
  primarypracticelocation2OfficeAddress: "",
  primarypracticelocation2Contact: "",
  primarypracticelocation2Email: "",
  primarypracticelocation2OfficeHours: "",
  primarypracticelocation2Fax: "",

  // Hospital Affiliation
  currentHospitalAffliationHospital: "",
  currentHospitalAffliationPrivileges: "",
  previousHospitalAffliationHospital: "",
  previousHospitalAffliationPrivileges: "",

  // Licensing
  stateMedicalicense: "",
  stateMedicalicenseNumber: "",
  stateMedicalicenseExpirationDate: new Date(Date.now()),
  pcslicenseExpirationDate: new Date(Date.now()),
  pcslicense: "",
  pcslicenseNumber: "",

  // Step 3

  // Work History
  currentEmploymentPosition: "",
  currentEmploymentStartDate: new Date(Date.now()),
  currentEmploymentEndDate: new Date(Date.now()),
  previousEmploymentPosition: "",
  previousEmploymentStartDate: new Date(Date.now()),
  previousEmploymentEndDate: new Date(Date.now()),
  previousEmploymentGAP: "",
  previousEmploymentMilitaryService: "",

  // Malpractice Information
  malpracticeInsuranceCurrentCarrier: "",
  malpracticeInsurancePolicyNumber: "",
  malpracticeInsuranceCoverageLimit: "",
  malpracticeInsuranceEffectiveDate: "",
  liabilityClaimsHistoryMalpracticeClaims: "",
  liabilityClaimsHistoryPendingLitigation: "",
  liabilityClaimsHistorySettlement: "",
  liabilityClaimsHistoryDisciplinaryAction: "",

  // Additional Documents
  additionalDocumentstateMedicalicense: "",
  additionalDocumentstateMedicalicenseNumber: "",
  additionalDocumentPcslicense: "",
  additionalDocumentPcslicenseNumber: "",
  additionalDocumentstateMedicalicenseExpirationDate: new Date(Date.now()),
  additionalDocumentPcslicenseExpirationDate: new Date(Date.now()),

  // Terms and Conditions

  termsAndConditionsOne: true,
  termsAndConditionsTwo: false,

  //Submission

  status: "Under review",
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
