export const ApplicationFormInitialState = {
  pageNo: 1,

  userId: "",
  applicationType: "",
  organizationApplicationId: "",
  applicationTitle: "",
  organizationName: "",
  status: "pending",

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

  step2: {
    residencies: [
      {
        residency1Institution: "",
        residency1ProgramDirector: "",
        residency1MailingAddress: "",
        residency1City: "",
        residency1State: "",
        residency1ZIP: "",
        residency1Type: "",
        residency1Specialty: "",
        residency1FromDate: null,
        residency1ToDate: null,
        residency1Completed: false,
      },
      {
        residency2Institution: "",
        residency2ProgramDirector: "",
        residency2MailingAddress: "",
        residency2City: "",
        residency2State: "",
        residency2ZIP: "",
        residency2Type: "",
        residency2Specialty: "",
        residency2FromDate: null,
        residency2ToDate: null,
        residency2Completed: false,
      },
      {
        residency3Institution: "",
        residency3ProgramDirector: "",
        residency3MailingAddress: "",
        residency3City: "",
        residency3State: "",
        residency3ZIP: "",
        residency3Type: "",
        residency3Specialty: "",
        residency3FromDate: null,
        residency3ToDate: null,
        residency3Completed: false,
      },
    ],

    medicalLicenses: {
      deaRegistrationNumber: "",
      deaExpirationDate: null,
      deaExpirationFile: "",

      controlledSubstanceCertificate: "",
      controlledSubstanceExpirationDate: null,
      controlledSubstanceExpirationFile: "",

      ECFMGNumber: "",
      ecfmIssueDate: null,
      ecfmValidThrough: null,
      ECFMGFile: "",

      medicaidIDNumber: "",
      medicaidCertificate: null,
    },

    otherMedLicenses: {
      stateMedicalLicense1: "",
      stateMedicalLicenseNumber1: "",
      stateMedicalLicenseExpirationDate1: null,
      stateMedicalLicensefile1: "",

      stateMedicalLicense2: "",
      stateMedicalLicenseNumber2: "",
      stateMedicalLicenseExpirationDate2: null,
      stateMedicalLicensefile2: "",

      stateMedicalLicense3: "",
      stateMedicalLicenseNumber3: "",
      stateMedicalLicenseExpirationDate3: null,
      stateMedicalLicensefile3: "",
    },
  },

  step3: {
    carriers: {
      currentCarrierName: "",
      currentPolicyNumber: "",
      currentEffectiveDate: null,
      currentExpirationDate: null,
      currentMailingAddress: "",
      currentCity: "",
      currentState: "",
      currentZIP: "",
      currentPerClaimAmount: 0,
      currentAggregateAmount: 0,

      previousCarrier1Name: "",
      previousCarrier1PolicyNumber: "",
      previousCarrier1FromDate: null,
      previousCarrier1ToDate: null,
      previousCarrier1MailingAddress: "",
      previousCarrier1City: "",
      previousCarrier1State: "",
      previousCarrier1ZIP: "",
      currentPerClaim1Amount: 0,
      currentAggregate1Amount: 0,

      previousCarrier2Name: "",
      previousCarrier2PolicyNumber: "",
      previousCarrier2FromDate: null,
      previousCarrier2ToDate: null,
      previousCarrier2MailingAddress: "",
      previousCarrier2City: "",
      previousCarrier2State: "",
      previousCarrier2ZIP: "",
      currentPerClaim2Amount: 0,
      currentAggregate2Amount: 0,
    },

    boards: {
      boardCertification1Board: "",
      boardCertification1Specialty: "",
      boardCertification1CertifiedDate: null,
      boardCertification1ExpirationDate: null,
      certificationfile1: "",

      boardCertification2Board: "",
      boardCertification2Specialty: "",
      boardCertification2CertifiedDate: null,
      boardCertification2ExpirationDate: null,
      certificationfile2: "",

      boardCertification3Board: "",
      boardCertification3Specialty: "",
      boardCertification3CertifiedDate: null,
      boardCertification3ExpirationDate: null,
      certificationfile3: "",

      appliedForOtherBoardCertification: false,

      additionalBoardCertificationIntent: "",
    },
  },

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
