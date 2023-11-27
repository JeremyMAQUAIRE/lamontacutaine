import { createReducer } from '@reduxjs/toolkit';
import fetchReport from '../thunks/reportThunk';
import {
  actionChangeYearActivityReport,
  actionChangeYearCountReport,
  actionChangeYearMoralReport,
} from '../actionscreator';

interface ReportState {
  yearMoralReport: number;
  yearActivityReport: number;
  yearCountReport: number;
}

const initialState: ReportState = {
  yearMoralReport: new Date().getFullYear(),
  yearActivityReport: new Date().getFullYear(),
  yearCountReport: new Date().getFullYear(),
};

const reportReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeYearMoralReport, (state, action) => {
      state.yearMoralReport = action.payload;
    })
    .addCase(actionChangeYearActivityReport, (state, action) => {
      state.yearActivityReport = action.payload;
    })
    .addCase(actionChangeYearCountReport, (state, action) => {
      state.yearCountReport = action.payload;
    })
    .addCase(fetchReport.fulfilled, (state, action) => {
      const url = `https://admin.lamontacutaine.fr/${action.payload[0]}`;
      window.open(url, '_blank');
    });
});

export default reportReducer;
