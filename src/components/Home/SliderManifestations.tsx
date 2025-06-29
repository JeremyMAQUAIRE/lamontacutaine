import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import testImage from '../../assets/test_image.jpg';
import coffre from '../../assets/coffre.jpg';

const manifestations = [
  {
    id: 1,
    title: 'Festival de la Montagne',
    date: '12 juillet 2025',
    image: testImage,
  },
  {
    id: 2,
    title: 'Marché Artisanal',
    date: '20 juillet 2025',
    image: coffre,
  },
  {
    id: 3,
    title: 'Concert en plein air',
    date: '27 juillet 2025',
    image: testImage,
  },
];

const SliderManifestations = () => {
  return (
    <div className="w-full h-[60vh] lg:h-[90vh] lg:p-6 top-20 relative overflow-hidden">
      <h1 className="text-center text-xl p-2 lg:p-0 lg:text-4xl font-bold text-blue-900 lg:mb-6">
        🎉 Découvrez nos événements à ne pas manquer ! 🎊
      </h1>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full h-full"
      >
        {manifestations.map((event) => (
          <SwiperSlide
            key={event.id}
            className="w-[300px] h-[400px] relative overflow-hidden lg:rounded-3xl shadow-lg"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[85%] lg:h-[95%] object-cover lg:rounded-3xl"
            />
            <div className="absolute bottom-18 lg:bottom-10 text-center w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white lg:rounded-b-3xl">
              <h3 className="text-2xl lg:text-5xl font-bold text-blue-200 drop-shadow-sm mb-2">
                {event.title}
              </h3>
              <p className="text-xl font-medium text-yellow-300">
                {event.date}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderManifestations;
