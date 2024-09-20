/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApplicationFormInitialState } from "@/constant/data/applicationsdata";
import { ApplicationFormInterface } from "@/lib/types";

export const reducers = {
  setFormDetails: (state: ApplicationFormInterface, action: any) => {
    state = action.payload;
  },
  setFullName: (state: any, action: any) => {
    state.fullName = action.payload;
  },
  setSex: (state: any, action: { payload: "male" | "female" | "others" }) => {
    state.sex = action.payload;
  },
  setDOB: (state: any, action: { payload: Date }) => {
    state.dob = action.payload;
  },
  setSSN: (state: any, action: any) => {
    state.ssn = action.payload;
  },
  setLanguage: (state: any, action: any) => {
    state.language = action.payload;
  },
  setPhoneNumber: (state: any, action: any) => {
    state.phoneNumber = action.payload;
  },
  setEmail: (state: any, action: any) => {
    state.email = action.payload;
  },
  setAddress: (state: any, action: any) => {
    state.address = action.payload;
  },
  setNPI: (state: any, action: any) => {
    state.npi = action.payload;
  },
  setTIN: (state: any, action: any) => {
    state.tin = action.payload;
  },
  setDEACN: (state: any, action: any) => {
    state.deacn = action.payload;
  },
  setMedicalCareID: (state: any, action: any) => {
    state.medicalCareId = action.payload;
  },

  setUndergraduateInstitution: (state: any, action: any) => {
    state.undergraduateInstitution = action.payload;
  },
  setUndergraduateDegree: (state: any, action: any) => {
    state.undergraduateDegree = action.payload;
  },
  setUndergraduateYOG: (state: any, action: any) => {
    state.undergraduateYOG = action.payload;
  },

  setGraduateInstitution: (state: any, action: any) => {
    state.graduateInstitution = action.payload;
  },
  setGraduateDegree: (state: any, action: any) => {
    state.graduateDegree = action.payload;
  },
  setGraduateYOG: (state: any, action: any) => {
    state.graduateYOG = action.payload;
  },

  setInternshipInstitution: (state: any, action: any) => {
    state.internshipInstitution = action.payload;
  },
  setInternshipDegree: (state: any, action: any) => {
    state.internshipDegree = action.payload;
  },
  setInternshipYOG: (state: any, action: any) => {
    state.internshipYOG = action.payload;
  },

  setResidencyInstitution: (state: any, action: any) => {
    state.residencyInstitution = action.payload;
  },
  setResidencyDegree: (state: any, action: any) => {
    state.residencyDegree = action.payload;
  },
  setResidencyYOG: (state: any, action: any) => {
    state.residencyYOG = action.payload;
  },

  setFellowshipInstitution: (state: any, action: any) => {
    state.fellowshipInstitution = action.payload;
  },
  setFellowshipDegree: (state: any, action: any) => {
    state.fellowshipDegree = action.payload;
  },
  setFellowshipYOG: (state: any, action: any) => {
    state.fellowshipYOG = action.payload;
  },

  setCMEInstitution: (state: any, action: any) => {
    state.cmeInstitution = action.payload;
  },
  setCMEDegree: (state: any, action: any) => {
    state.cmeDegree = action.payload;
  },
  setCMEYOG: (state: any, action: any) => {
    state.cmeYOG = action.payload;
  },

  setPrimaryPracticeLocationName: (state: any, action: any) => {
    state.primarypracticelocationName = action.payload;
  },
  setPrimaryPracticeLocationOfficeAddress: (state: any, action: any) => {
    state.primarypracticelocationOfficeAddress = action.payload;
  },
  setPrimaryPracticeLocationContact: (state: any, action: any) => {
    state.primarypracticelocationContact = action.payload;
  },
  setPrimaryPracticeLocationEmail: (state: any, action: any) => {
    state.primarypracticelocationEmail = action.payload;
  },
  setPrimaryPracticeLocationOfficeHours: (state: any, action: any) => {
    state.primarypracticelocationOfficeHours = action.payload;
  },
  setPrimaryPracticeLocationFax: (state: any, action: any) => {
    state.primarypracticelocationFax = action.payload;
  },

  setPrimaryPracticeLocation2Name: (state: any, action: any) => {
    state.primarypracticelocation2Name = action.payload;
  },
  setPrimaryPracticeLocation2OfficeAddress: (state: any, action: any) => {
    state.primarypracticelocation2OfficeAddress = action.payload;
  },
  setPrimaryPracticeLocation2Contact: (state: any, action: any) => {
    state.primarypracticelocation2Contact = action.payload;
  },
  setPrimaryPracticeLocation2Email: (state: any, action: any) => {
    state.primarypracticelocation2Email = action.payload;
  },
  setPrimaryPracticeLocation2OfficeHours: (state: any, action: any) => {
    state.primarypracticelocation2OfficeHours = action.payload;
  },
  setPrimaryPracticeLocation2Fax: (state: any, action: any) => {
    state.primarypracticelocation2Fax = action.payload;
  },

  // Step 3

  setCurrentHospitalAffliationHospital: (state: any, action: any) => {
    state.currentHospitalAffliationHospital = action.payload;
  },
  setCurrentHospitalAffliationPrivileges: (state: any, action: any) => {
    state.currentHospitalAffliationPrivileges = action.payload;
  },
  setPreviousHospitalAffliationHospital: (state: any, action: any) => {
    state.previousHospitalAffliationHospital = action.payload;
  },
  setPreviousHospitalAffliationPrivileges: (state: any, action: any) => {
    state.previousHospitalAffliationPrivileges = action.payload;
  },

  // Licensing

  setStateMedicaLicense: (state: any, action: any) => {
    state.stateMedicalicense = action.payload;
  },
  setStateMedicaLicenseNumber: (state: any, action: any) => {
    state.stateMedicalicenseNumber = action.payload;
  },
  setStateMedicaLicenseExpirationDate: (
    state: any,
    action: { payload: Date }
  ) => {
    state.stateMedicalicenseExpirationDate = action.payload;
  },
  setPCSLicenseExpirationDate: (state: any, action: { payload: Date }) => {
    state.pcslicenseExpirationDate = action.payload;
  },
  setPCSLicense: (state: any, action: any) => {
    state.pcslicense = action.payload;
  },
  setPCSLicenseNumber: (state: any, action: any) => {
    state.pcslicenseNumber = action.payload;
  },

  // Step 3:

  setCurrentEmploymentPosition: (state: any, action: any) => {
    state.currentEmploymentPosition = action.payload;
  },
  setCurrentEmploymentStartDate: (state: any, action: { payload: Date }) => {
    state.currentEmploymentStartDate = action.payload;
  },
  setCurrentEmploymentEndDate: (state: any, action: { payload: Date }) => {
    state.currentEmploymentEndDate = action.payload;
  },

  setpreviousEmploymentPosition: (state: any, action: any) => {
    state.previousEmploymentPosition = action.payload;
  },
  setpreviousEmploymentStartDate: (state: any, action: { payload: Date }) => {
    state.previousEmploymentStartDate = action.payload;
  },
  setpreviousEmploymentEndDate: (state: any, action: { payload: Date }) => {
    state.previousEmploymentEndDate = action.payload;
  },
  setpreviousEmploymentGAP: (state: any, action: any) => {
    state.previousEmploymentGAP = action.payload;
  },
  setpreviousEmploymentMilitaryService: (state: any, action: any) => {
    state.previousEmploymentMilitaryService = action.payload;
  },

  setMalpracticeInsuranceCurrentCarrier: (state: any, action: any) => {
    state.malpracticeInsuranceCurrentCarrier = action.payload;
  },
  setMalpracticeInsurancePolicyNumber: (state: any, action: any) => {
    state.malpracticeInsurancePolicyNumber = action.payload;
  },
  setMalpracticeInsuranceCoverageLimit: (state: any, action: any) => {
    state.malpracticeInsuranceCoverageLimit = action.payload;
  },
  setMalpracticeInsuranceEffectiveDate: (state: any, action: any) => {
    state.malpracticeInsuranceEffectiveDate = action.payload;
  },

  setLiabilityClaimsHistoryMalpracticeClaims: (state: any, action: any) => {
    state.liabilityClaimsHistoryMalpracticeClaims = action.payload;
  },
  setLiabilityClaimsHistoryPendingLitigation: (state: any, action: any) => {
    state.liabilityClaimsHistoryPendingLitigation = action.payload;
  },
  setLiabilityClaimsHistorySettlement: (state: any, action: any) => {
    state.liabilityClaimsHistorySettlement = action.payload;
  },
  setLiabilityClaimsHistoryDisciplinaryAction: (state: any, action: any) => {
    state.liabilityClaimsHistoryDisciplinaryAction = action.payload;
  },

  setAdditionalDocumentStateMedicaLicense: (state: any, action: any) => {
    state.additionalDocumentstateMedicalicense = action.payload;
  },
  setAdditionalDocumentStateMedicaLicenseNumber: (state: any, action: any) => {
    state.additionalDocumentstateMedicalicenseNumber = action.payload;
  },

  setAdditionalDocumentPCSLicense: (state: any, action: any) => {
    state.additionalDocumentPcslicense = action.payload;
  },
  setAdditionalDocumentPCSLicenseNumber: (state: any, action: any) => {
    state.additionalDocumentPcslicenseNumber = action.payload;
  },
  setAdditionalDocumentStateMedicaLicenseExpirationDate: (
    state: any,
    action: { payload: Date }
  ) => {
    state.additionalDocumentstateMedicalicenseExpirationDate = action.payload;
  },
  setadditionalDocumentPCSlicenseExpirationDate: (
    state: any,
    action: { payload: Date }
  ) => {
    state.additionalDocumentPcslicenseExpirationDate = action.payload;
  },

  setPageNo: (state: any, action: { payload: number }) => {
    state.pageNo = action.payload;
  },

  // RESET Compstring Info

  resetForm: () => {
    return {
      ...ApplicationFormInitialState,
      pageNo: 1,
    };
  },
};
