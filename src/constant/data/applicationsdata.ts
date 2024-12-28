export const ApplicationFormInitialState = {
  pageNo: 1,

  userId: "",
  applicationType: "",
  organizationApplicationId: "",
  applicationTitle: "",
  organizationName: "",

  // Personal Information

  step1: {
    personalInformation: {
      lastName: "",
      firstName: "",
      middleName: "",
      otherNames: "",
      homeMailingAddress: "",
      city: "",
      state: "",
      zip: "",
      homeTelephone: "",
      email: "",
      homeFax: "",
      cellPhone: "",
      birthdate: null,
      birthplace: "",
      SSN: "",
      gender: "Male",
      citizenship: "",
      specialty: "",
      raceEthnicity: "",
      subspecialties: "",
      NPI: "",
      cahqID: "",
      cahqPassword: "",
    },

    // Practice Information

    practiceInformation: {
      primaryOfficeName: "",
      primaryDepartmentName: "",
      primaryOfficeAddress: "",
      primaryCity: "",
      primaryState: "",
      primaryZIP: "",
      primaryTelephone: "",
      primaryFax: "",
      primaryOfficeManager: "",
      primaryOfficeManagerPhone: "",
      primaryOfficeManagerFax: "",
      primaryTaxIDName: "",
      primaryFederalTaxID: "",

      secondaryOfficeAddress: "",
      secondaryCity: "",
      secondaryState: "",
      secondaryZIP: "",
      secondaryOfficeManager: "",
      secondaryFax: "",
      secondaryTelephone: "",
      secondaryTaxIDName: "",
      secondaryFederalTaxID: "",

      tertiaryOfficeAddress: "",
      tertiaryCity: "",
      tertiaryState: "",
      tertiaryZIP: "",
      tertiaryOfficeManager: "",
      tertiaryFax: "",
      tertiaryTelephone: "",
      tertiaryTaxIDName: "",
      tertiaryFederalTaxID: "",
    },

    education: {
      premedicalInstitution: "",
      premedicalDegree: "",
      premedicalGraduationDate: new Date(Date.now()),
      premedicalMailingAddress: "",
      premedicalCity: "",
      premedicalState: "",
      premedicalZIP: "",

      medicalSchoolInstitution: "",
      medicalSchoolDegree: "",
      medicalSchoolGraduationDate: new Date(Date.now()),
      medicalSchoolMailingAddress: "",
      medicalSchoolCity: "",
      medicalSchoolState: "",
      medicalSchoolZIP: "",

      professionalSchoolInstitution: "",
      professionalSchoolDegree: "",
      professionalSchoolGraduationDate: new Date(Date.now()),
      professionalSchoolMailingAddress: "",
      professionalSchoolCity: "",
      professionalSchoolState: "",
      professionalSchoolZIP: "",

      internshipInstitution: "",
      internshipProgramDirector: "",
      internshipMailingAddress: "",
      internshipCity: "",
      internshipState: "",
      internshipZIP: "",
      internshipType: "",
      internshipSpecialty: "",
      internshipFromDate: new Date(Date.now()),
      internshipToDate: new Date(Date.now()),
      internshipPhysicianName: "",
    },
  },

  dob: new Date(Date.now()),

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

export const CreateApplicationFormTemplateInitialState = {
  // Step 1

  personalInformation: {
    // Personal Information
    fullName: "",
    sex: "male",
    dob: new Date(Date.now()),
    ssn: "",
    language: "",
    phoneNumber: "",
    email: "",
    address: "",
  },

  professionID: {
    // Profession ID
    npi: "",
    tin: "",
    deacn: "",
    medicalCareId: "",
  },

  educationInformation: {
    // Education Information

    undergraduate: {
      undergraduateInstitution: "",
      undergraduateDegree: "",
      undergraduateYOG: "",
    },

    graduate: {
      graduateInstitution: "",
      graduateDegree: "",
      graduateYOG: "",
    },

    internship: {
      internshipInstitution: "",
      internshipDegree: "",
      internshipYOG: "",
    },

    residency: {
      residencyInstitution: "",
      residencyDegree: "",
      residencyYOG: "",
    },

    fellowship: {
      fellowshipInstitution: "",
      fellowshipDegree: "",
      fellowshipYOG: "",
    },
    cme: {
      cmeInstitution: "",
      cmeDegree: "",
      cmeYOG: "",
    },
  },

  // Step 2
  practiceLocation: {
    practiceLocationI: {
      // Practice Location I
      primarypracticelocationName: "",
      primarypracticelocationOfficeAddress: "",
      primarypracticelocationContact: "",
      primarypracticelocationEmail: "",
      primarypracticelocationOfficeHours: "",
      primarypracticelocationFax: "",
    },

    practiceLocationII: {
      // Practice Location II
      primarypracticelocation2Name: "",
      primarypracticelocation2OfficeAddress: "",
      primarypracticelocation2Contact: "",
      primarypracticelocation2Email: "",
      primarypracticelocation2OfficeHours: "",
      primarypracticelocation2Fax: "",
    },
  },

  hospitalAffiliation: {
    // Hospital Affiliation
    currentHospitalAffliationHospital: "",
    currentHospitalAffliationPrivileges: "",
    previousHospitalAffliationHospital: "",
    previousHospitalAffliationPrivileges: "",
  },

  licensing: {
    // Licensing
    stateMedicalicense: "",
    stateMedicalicenseNumber: "",
    stateMedicalicenseExpirationDate: new Date(Date.now()),
    pcslicenseExpirationDate: new Date(Date.now()),
    pcslicense: "",
    pcslicenseNumber: "",
  },

  // Step 3

  workHistory: {
    // Work History
    currentEmploymentPosition: "",
    currentEmploymentStartDate: new Date(Date.now()),
    currentEmploymentEndDate: new Date(Date.now()),
    previousEmploymentPosition: "",
    previousEmploymentStartDate: new Date(Date.now()),
    previousEmploymentEndDate: new Date(Date.now()),
    previousEmploymentGAP: "",
    previousEmploymentMilitaryService: "",
  },

  malpracticeInformation: {
    // Malpractice Information

    malpracticeInsurance: {
      malpracticeInsuranceCurrentCarrier: "",
      malpracticeInsurancePolicyNumber: "",
      malpracticeInsuranceCoverageLimit: "",
      malpracticeInsuranceEffectiveDate: "",
    },

    liabilityClaims: {
      liabilityClaimsHistoryMalpracticeClaims: "",
      liabilityClaimsHistoryPendingLitigation: "",
      liabilityClaimsHistorySettlement: "",
      liabilityClaimsHistoryDisciplinaryAction: "",
    },
  },

  additionalDocuments: [],
};
