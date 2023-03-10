import { FC, useState } from 'react';

import { Link } from 'react-router-dom';

import { AddToCart } from './AddToCart';
import { ChoiseBlock } from './ChoiseBlock';
import { IconsDecor } from './IconsDecor';
import s from './PizzaCard.module.scss';

import { Title } from '..';
import { Pizza } from '../../models/Pizza';
import { routes } from '../../router/routes';

interface Props extends Pizza {}

export const PizzaCard: FC<Props> = ({
  id,
  category,
  imageUrl,
  isNew,
  prices,
  sizes,
  title,
  types,
}) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);
  const currentPrice = prices[sizes.indexOf(activeSize)];
  const currentImage = imageUrl[types.indexOf(activeType)];

  return (
    <div className={s.card}>
      <div className={s.img}>
        <Link to={`${routes.pizza}/${id}`}>
          <IconsDecor category={category} isNew={isNew} />
          <img src={currentImage} alt={title} />
        </Link>
      </div>

      <Title variant='fz20' tag='h3' className={s.title}>
        {title}
      </Title>

      <ChoiseBlock
        activeSize={activeSize}
        activeType={activeType}
        setActiveSize={setActiveSize}
        setActiveType={setActiveType}
        sizes={sizes}
        types={types}
      />

      <AddToCart
        id={id}
        imageUrl={currentImage}
        price={currentPrice}
        size={activeSize}
        title={title}
        type={activeType}
        count={1}
      />
    </div>
  );
};
