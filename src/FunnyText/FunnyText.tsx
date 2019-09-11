import React, { useRef, useEffect, useState } from 'react';
import style from './FunnyText.module.scss';
import classNames from 'classnames';

interface IProps {
  text: string;
  type?: TYPE;
  repeat?: REPEAT;
}

type TYPE = 'DEFAULT' | 'BOOGEY' | 'WAVE';

type REPEAT = 'ONETIME' | 'LOOP';

const FunnyText = ({ text, type = 'BOOGEY', repeat = 'ONETIME' }: IProps) => {
  const textArray = text.split('');

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useInterval(function() {
    if (currentIndex < textArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, 200);

  return (
    <div className={style.basic}>
      {textArray.map((t, index) => {
        const currentStyle = classNames({
          [style.hardChange]: index === currentIndex && type === 'DEFAULT',
          [style.smoothChange]: index === currentIndex && type === 'BOOGEY',
          [style.waveChange]: index === currentIndex && type === 'WAVE'
        });
        return (
          <span key={index} className={currentStyle}>
            {t}
          </span>
        );
      })}
    </div>
  );
};

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default FunnyText;
