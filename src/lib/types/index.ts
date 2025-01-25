export interface ApplicationFormInterface {
  _id: string;
  createdAt: string;
  applicationType: string;
  organizationApplicationId: string;
  applicationTitle: string;
  organizationName: string;
  applicationName: string;
  status: string;
  updatedAt: string;
  userId: {
    _id: string;
    accountType: string;
    fullName: string;
    professionalTitle: string;
    email: string;
  };
  organizationApplication: {
    accountType: string;
    administratorFullName: string;
    createdAt: string;
    organizationName: string;
    password: string;
    workEmail: string;

    _id: string;
  };

  step1: {
    personalInformation: {
      lastName: string;
      firstName: string;
      middleName: string;
      otherNames: string;
      homeMailingAddress: string;
      cellPhone: string;
      homeTelephone: string;
      email: string;
      birthdate: string | null;
      SSN: string;
      gender: string;
      NPI: string;
      city: string;
      state: string;
      zip: string;
      homeFax: string;
      birthplace: string;
      citizenship: string;
      specialty: string;
      raceEthnicity: string;
      subspecialties: string;
      cahqID: string;
      cahqPassword: string;
    };
    practiceInformation: {
      primaryOfficeName: string;
      primaryDepartmentName: string;
      primaryOfficeAddress: string;
      primaryCity: string;
      primaryState: string;
      primaryZIP: string;
      primaryTelephone: string;
      primaryFax: string;
      primaryOfficeManager: string;
      primaryOfficeManagerPhone: string;
      primaryOfficeManagerFax: string;
      primaryTaxIDName: string;
      primaryFederalTaxID: string;
      secondaryOfficeAddress: string;
      secondaryCity: string;
      secondaryState: string;
      secondaryZIP: string;
      secondaryOfficeManager: string;
      secondaryFax: string;
      secondaryTelephone: string;
      secondaryTaxIDName: string;
      secondaryFederalTaxID: string;
      tertiaryOfficeAddress: string;
      tertiaryCity: string;
      tertiaryState: string;
      tertiaryZIP: string;
      tertiaryOfficeManager: string;
      tertiaryFax: string;
      tertiaryTelephone: string;
      tertiaryTaxIDName: string;
      tertiaryFederalTaxID: string;
    };
    education: {
      premedicalInstitution: string;
      premedicalDegree: string;
      premedicalGraduationDate: string | null;
      premedicalMailingAddress: string;
      premedicalCity: string;
      premedicalState: string;
      premedicalZIP: string;
      medicalSchoolInstitution: string;
      medicalSchoolDegree: string;
      medicalSchoolGraduationDate: string | null;
      medicalSchoolMailingAddress: string;
      medicalSchoolCity: string;
      medicalSchoolState: string;
      medicalSchoolZIP: string;
      professionalSchoolInstitution: string;
      professionalSchoolDegree: string;
      professionalSchoolGraduationDate: string | null;
      professionalSchoolMailingAddress: string;
      professionalSchoolCity: string;
      professionalSchoolState: string;
      professionalSchoolZIP: string;
      internshipInstitution: string;
      internshipProgramDirector: string;
      internshipMailingAddress: string;
      internshipCity: string;
      internshipState: string;
      internshipZIP: string;
      internshipType: string;
      internshipSpecialty: string;
      internshipFromDate: string | null;
      internshipToDate: string | null;
      internshipPhysicianName: string;
    };
  };
  step2: {
    residencies: [
      {
        residency1Institution: string;
        residency1ProgramDirector: string;
        residency1MailingAddress: string;
        residency1City: string;
        residency1State: string;
        residency1ZIP: string;
        residency1Type: string;
        residency1Specialty: string;
        residency1FromDate: string | null;
        residency1ToDate: string | null;
        residency1Completed: boolean;
      },
      {
        residency2Institution: string;
        residency2ProgramDirector: string;
        residency2MailingAddress: string;
        residency2City: string;
        residency2State: string;
        residency2ZIP: string;
        residency2Type: string;
        residency2Specialty: string;
        residency2FromDate: string | null;
        residency2ToDate: string | null;
        residency2Completed: boolean;
      },
      {
        residency3Institution: string;
        residency3ProgramDirector: string;
        residency3MailingAddress: string;
        residency3City: string;
        residency3State: string;
        residency3ZIP: string;
        residency3Type: string;
        residency3Specialty: string;
        residency3FromDate: string | null;
        residency3ToDate: string | null;
        residency3Completed: boolean;
      }
    ];
    medicalLicenses: {
      deaRegistrationNumber: string;
      deaExpirationDate: string | null;
      deaExpirationFile: File | string;
      controlledSubstanceCertificate: File | string;
      controlledSubstanceExpirationDate: string | null;
      controlledSubstanceExpirationFile: File | string;
      ECFMGNumber: string;
      ecfmIssueDate: string | null;
      ecfmValidThrough: string | null;
      ECFMGFile: File | string;
      medicaidIDNumber: string;
      medicaidCertificate: File | string | null;
    };
    otherMedLicenses: {
      stateMedicalLicense1: string;
      stateMedicalLicenseNumber1: string;
      stateMedicalLicenseExpirationDate1: string | null;
      stateMedicalLicensefile1: File | string;
      stateMedicalLicense2: string;
      stateMedicalLicenseNumber2: string;
      stateMedicalLicenseExpirationDate2: string | null;
      stateMedicalLicensefile2: File | string;
      stateMedicalLicense3: string;
      stateMedicalLicenseNumber3: string;
      stateMedicalLicenseExpirationDate3: string | null;
      stateMedicalLicensefile3: File | string;
    };
  };
  step3: {
    carriers: {
      currentCarrierName: string;
      currentPolicyNumber: string;
      currentEffectiveDate: string | null;
      currentExpirationDate: string | null;
      currentMailingAddress: string;
      currentCity: string;
      currentState: string;
      currentZIP: string;
      currentPerClaimAmount: number;
      currentAggregateAmount: number;
      previousCarrier1Name: string;
      previousCarrier1PolicyNumber: string;
      previousCarrier1FromDate: string | null;
      previousCarrier1ToDate: string | null;
      previousCarrier1MailingAddress: string;
      previousCarrier1City: string;
      previousCarrier1State: string;
      previousCarrier1ZIP: string;
      currentPerClaim1Amount: number;
      currentAggregate1Amount: number;
      previousCarrier2Name: string;
      previousCarrier2PolicyNumber: string;
      previousCarrier2FromDate: string | null;
      previousCarrier2ToDate: string | null;
      previousCarrier2MailingAddress: string;
      previousCarrier2City: string;
      previousCarrier2State: string;
      previousCarrier2ZIP: string;
      currentPerClaim2Amount: number;
      currentAggregate2Amount: number;
    };
    boards: {
      boardCertification1Board: string;
      boardCertification1Specialty: string;
      boardCertification1CertifiedDate: string | null;
      boardCertification1ExpirationDate: string | null;
      certificationfile1: File | string;
      boardCertification2Board: string;
      boardCertification2Specialty: string;
      boardCertification2CertifiedDate: string | null;
      boardCertification2ExpirationDate: string | null;
      certificationfile2: File | string;
      boardCertification3Board: string;
      boardCertification3Specialty: string;
      boardCertification3CertifiedDate: string | null;
      boardCertification3ExpirationDate: string | null;
      certificationfile3: File | string;
      appliedForOtherBoardCertification: boolean;
      additionalBoardCertificationIntent: string;
    };
  };
  termsAndConditionsOne: boolean;
  termsAndConditionsTwo: boolean;
}

export type ApplicationStatType = {
  activeApplications: number;
  pendingApplications: number;
  totalApplications: number;
  pending: number;
  approved: number;
  declined: number;
};

export type Organization = {
  _id: string;
  accountType:
    | "credentialing_organization"
    | "organization"
    | "credential specialist";
  organizationName: string;
  administratorFullName: string;
  workEmail: string;
  profileStatus: number;
  createdAt: string;
  __v: number;
  profilePicture: string;
};

export type Provider = {
  _id: string;
  accountType: "provider" | string;
  fullName: string;
  professionalTitle: string;
  email: string;
  isVerified: boolean;
  groups: any[];
  __v: number;
  otp: string;
  otpCreatedAt: string;
  profilePicture: string;
  profileStatus: number;
  deleted: boolean;
  createdAt: string;
};

export type ProviderAndApplications = {
  provider: Provider;
  applications: ApplicationFormInterface[];
};

export type CreatedApplicationType = {
  _id: string;
  organization: Organization;
  applicationName: string;
  applicationTitle: string;
  createdAt: string;
  __v: number;
};
