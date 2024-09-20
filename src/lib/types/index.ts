export interface ApplicationFormInterface {
  form: {
    // Step 1

    // Personal Information
    fullName: string;
    sex: "male" | "female" | "others";
    dob: Date;
    ssn: string;
    language: string;
    phoneNumber: string;
    email: string;
    address: string;

    // Profession ID
    npi: string;
    tin: string;
    deacn: string;
    medicalCareId: string;

    // Education Information
    undergraduateInstitution: string;
    undergraduateDegree: string;
    graduateInstitution: string;
    graduateDegree: string;
    graduateYOG: string;

    internshipInstitution: string;
    internshipDegree: string;
    internshipYOG: string;
    undergraduateYOG: string;

    residencyInstitution: string;
    residencyDegree: string;
    residencyYOG: string;

    fellowshipInstitution: string;
    fellowshipDegree: string;
    fellowshipYOG: string;

    cmeInstitution: string;
    cmeDegree: string;
    cmeYOG: string;

    //   Step 2

    // Practice Location I
    primarypracticelocationName: string;
    primarypracticelocationOfficeAddress: string;
    primarypracticelocationContact: string;
    primarypracticelocationEmail: string;
    primarypracticelocationOfficeHours: string;
    primarypracticelocationFax: string;

    // Practice Location II
    primarypracticelocation2Name: string;
    primarypracticelocation2OfficeAddress: string;
    primarypracticelocation2Contact: string;
    primarypracticelocation2Email: string;
    primarypracticelocation2OfficeHours: string;
    primarypracticelocation2Fax: string;

    // Hospital Affiliation
    currentHospitalAffliationHospital: string;
    currentHospitalAffliationPrivileges: string;
    previousHospitalAffliationHospital: string;
    previousHospitalAffliationPrivileges: string;

    // Licensing
    stateMedicalicense: string;
    stateMedicalicenseNumber: string;
    stateMedicalicenseExpirationDate: Date;
    pcslicenseExpirationDate: Date;
    pcslicense: string;
    pcslicenseNumber: string;

    // Step 3

    // Work History
    currentEmploymentPosition: string;
    currentEmploymentStartDate: Date;
    currentEmploymentEndDate: Date;
    previousEmploymentPosition: string;
    previousEmploymentStartDate: Date;
    previousEmploymentEndDate: Date;
    previousEmploymentGAP: string;
    previousEmploymentMilitaryService: string;

    // Malpractice Information
    malpracticeInsuranceCurrentCarrier: string;
    malpracticeInsurancePolicyNumber: string;
    malpracticeInsuranceCoverageLimit: string;
    malpracticeInsuranceEffectiveDate: string;
    liabilityClaimsHistoryMalpracticeClaims: string;
    liabilityClaimsHistoryPendingLitigation: string;
    liabilityClaimsHistorySettlement: string;
    liabilityClaimsHistoryDisciplinaryAction: string;

    // Additional Documents
    additionalDocumentstateMedicalicense: string;
    additionalDocumentstateMedicalicenseNumber: string;
    additionalDocumentPcslicense: string;
    additionalDocumentPcslicenseNumber: string;
    additionalDocumentstateMedicalicenseExpirationDate: Date;
    additionalDocumentPcslicenseExpirationDate: Date;

    //
    pageNo: number;
  };
}
