import { FC, useState } from 'react';

import s from './FullPizzaCard.module.scss';

import { Title } from '..';
import { Pizza } from '../../models/Pizza';
import { AddToCart, ChoiseBlock } from '../PizzaCard';

interface Props extends Pizza {}

export const FullPizzaCard: FC<Props> = ({
  id,
  title,
  description,
  sizes,
  types,
  prices,
  imageUrl,
}) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);
  const currentImage = imageUrl[types.indexOf(activeType)];
  const currentPrice = prices[sizes.indexOf(activeSize)];

  return (
    <div className={s.fullPizzaCard}>
      <div className={s.img}>
        <img src={currentImage} alt={title} />
      </div>
      <div className={s.info}>
        <Title className={s.title} tag='h2' variant='fz32'>
          {title}
        </Title>

        <div className={s.descr}>{description}</div>
        <div className={s.choise}>
          <ChoiseBlock
            activeSize={activeSize}
            activeType={activeType}
            setActiveSize={setActiveSize}
            setActiveType={setActiveType}
            sizes={sizes}
            types={types}
          />
        </div>
        <AddToCart
          count={1}
          id={id}
          imageUrl={currentImage}
          price={currentPrice}
          size={activeSize}
          title={title}
          type={activeType}
        />
      </div>
    </div>
  );
};
