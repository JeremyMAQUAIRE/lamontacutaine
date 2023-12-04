import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Report = {
  date: string;
  type: string;
  url: string;
};

type ReportParams = { type: string; year: number };

const fetchReport = createAsyncThunk(
  'FETCH_REPORT',
  async ({ type, year }: ReportParams) => {
    const result = await axios.get(
      'https://admin.lamontacutaine.fr/api/v1/documents/public'
    );
    // on filtre par année
    const filterYearReport = result.data.documents.filter((report: Report) => {
      const yearOfItem = new Date(report.date).getFullYear();
      return yearOfItem === year;
    });

    // Filtrer par type
    const filterTypeReport = filterYearReport.filter((report: Report) => {
      if (type.includes('moral')) {
        return report.type.includes('moral');
      }
      if (type.includes('activité')) {
        return report.type.includes('activite');
      }
      if (type.includes('financier')) {
        return report.type.includes('financier');
      }
      return false; // Ajoutez une gestion par défaut si aucun cas ne correspond
    });

    // Retourner le tableau résultant
    return filterTypeReport.map((report: Report) => report.url); // Correction ajoutant le type
  }
);

export default fetchReport;
