import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import './CardEvent.scss';

interface CardEventProps {
  imageUrl: string;
  title: string;
  date: string;
  eventId: number;
  description: string;
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const CardEvent = ({
  imageUrl,
  title,
  date,
  eventId,
  description,
}: CardEventProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Link to={`/event-detail/${eventId}`} className="cardEvent-link">
        <Card
          className="cardEvent-content"
          image={imageUrl}
          header={title}
          meta={date}
          description={description}
        />
      </Link>
    </motion.div>
  );
};

export default CardEvent;
