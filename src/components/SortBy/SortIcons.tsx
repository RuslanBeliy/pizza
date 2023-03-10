import { FC } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

interface Props {
  order: string;
}

export const SortIcons: FC<Props> = ({ order }) => {
  return (
    <>
      {order === 'desc' && <AiOutlineArrowDown />}
      {order === 'asc' && <AiOutlineArrowUp />}
    </>
  );
};
