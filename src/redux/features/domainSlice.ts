/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domains: [] as string[],
  selectedDomain: null as string | null,
  domainsInformations: [] as any[],
  violationInformations: [] as any[],
  contentSummaryInformations: [] as any[],
  aiInnsightDomainList: [] as any[],
  adsSlotDomainList: [] as any[],
  ipDetectionList: [] as any[],
  contentAnalysisList: [] as any[],

  recentActivityList: [] as any[],
};

export const addDomainsSlice = createSlice({
  name: "addDomains",
  initialState,
  reducers: {
    setCurrentDomain: (state, action) => {
      state.selectedDomain = action.payload;
    },

    setDomainsList: (state, action) => {
      const newDomain = action.payload;

      const domainExists = state.domains.some(
        (existingDomain: string) =>
          existingDomain?.toLowerCase() === newDomain?.toLowerCase()
      );

      if (newDomain && !domainExists) {
        state.domains.push(newDomain);
      }
    },

    setDomainsInformations: (state, action) => {
      const data = action.payload;
      state.domainsInformations = data;
    },

    setViolationInformations: (state, action) => {
      const data = action.payload;
      state.violationInformations = data;
    },

    setContentSummaryInformations: (state, action) => {
      const data = action.payload;
      state.contentSummaryInformations = data;
    },

    setAIInnsightDomainList: (state, action) => {
      const data = action.payload;
      state.aiInnsightDomainList = data;
    },

    setAdsSlotDomainList: (state, action) => {
      const data = action.payload;
      state.adsSlotDomainList = data;
    },

    setIPDetectionList: (state, action) => {
      const data = action.payload;
      state.ipDetectionList = data;
    },

    setContentAnalysisList: (state, action) => {
      const data = action.payload;
      state.contentAnalysisList = data;
    },

    setRecentActivityList: (state, action) => {
      const data = action.payload;
      state.recentActivityList = data;
    },

    resetDomainForm: (state) => {
      state.contentSummaryInformations = [];
      state.violationInformations = [];
      state.domainsInformations = [];
      state.domains = [];
      state.selectedDomain = null;
      state.aiInnsightDomainList = [];
      state.adsSlotDomainList = [];
      state.ipDetectionList = [];
      state.contentAnalysisList = [];
      state.recentActivityList = [];
    },
  },
});

export const {
  setCurrentDomain,
  setDomainsList,
  setDomainsInformations,
  resetDomainForm,
  setViolationInformations,
  setContentSummaryInformations,
  setAIInnsightDomainList,
  setAdsSlotDomainList,
  setIPDetectionList,
  setContentAnalysisList,
  setRecentActivityList,
} = addDomainsSlice.actions;

export default addDomainsSlice.reducer;
