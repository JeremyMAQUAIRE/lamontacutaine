import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

import fetchFlyerHomeThunks from '../store/thunks/flyerHomeThunks';
import HomeButton from './HomeButton/HomeButton';

import './Home.scss';

interface IFlyer {
  id: number;
  url: string;
  title: string;
  cover_media: boolean;
  home_slider: boolean;
  preview_order: null | number;
  type: string;
}

const Home = () => {
  const link = 'https://admin.lamontacutaine.fr/';
  const dispatch: AppDispatch = useDispatch();
  const flyersList = useSelector(
    (state: RootState) => state.flyerHomeReducer.flyers
  );
  useEffect(() => {
    dispatch(fetchFlyerHomeThunks());
  }, [dispatch]);
  return (
    <div className="home-content">
      <Carousel autoPlay interval={3000} infiniteLoop>
        {flyersList.map((flyer: IFlyer) => (
          <div key={flyer.id} className="carouselSlide">
            <img src={link + flyer.url} alt={flyer.title} />
          </div>
        ))}
      </Carousel>
      <HomeButton />
    </div>
  );
};

export default Home;
