'use client';
import { IButton } from '@/components/button/types';
import classNames from 'classnames';

export const Button = ({ id, text, className, onClick }: IButton) => {
  return (
    <button
      id={id}
      className={classNames(
        'block bg-blue text-white rounded-md py-1 px-5',
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
