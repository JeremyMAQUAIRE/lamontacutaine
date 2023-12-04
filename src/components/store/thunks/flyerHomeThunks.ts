import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IFlyer {
  id: number;
  url: string;
  title: string;
  cover_media: boolean;
  home_slider: boolean;
  preview_order: null | number;
  type: string;
}

const fetchFlyerHomeThunks = createAsyncThunk('FETCH_HOMEFLYER', async () => {
  const result = await axios.get(
    'https://admin.lamontacutaine.fr/api/v1/flyerslider'
  );
  // vérification du support pour le choix des flyer (paysage pour PC, portrait pour MObile)
  const agent = navigator.userAgent;
  const support = 'Mobi';
  let flyerSort = [];
  if (agent.includes(support)) {
    // Nous somme sur un support mobile
    flyerSort = result.data.flyers.filter((item: IFlyer) =>
      item.url.includes('mobile')
    );
  } else {
    // Nous somes sur un support grand ecran
    flyerSort = result.data.flyers.filter(
      (item: IFlyer) => !item.url.includes('mobile')
    );
  }
  return flyerSort;
});

export default fetchFlyerHomeThunks;
