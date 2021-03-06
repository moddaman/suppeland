import React, { useRef, useEffect, useState } from "react";
import style from "./funnyText.module.css";
import classNames from "classnames";

interface IProps {
  text: string;
}

type FontSize = "5vh" | "7vh" | "10vh";

interface IText {
  symbol: string;
  fontsize: FontSize;
}

const toText = (symbol: string): IText => {
  return {
    symbol,
    fontsize: "5vh"
  };
};

const FunnyText = ({ text }: IProps) => {
  const title = "S u p p e l a n d";
  const textArray = title.split(" ").map(toText);

  const [symbols, setSymbols] = useState(textArray);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useInterval(
    function() {
      if (currentIndex <= textArray.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    },
    200,
    textArray.length + 1
  );

  const defaultText = () => {
    const newSymbols = symbols.map<IText>((s, i) => {
      return {
        ...s,
        fontsize: "5vh"
      };
    });
    setSymbols(newSymbols);
  };

  const enlargeFont = (symbol: IText, index: number) => {
    const newSymbols = symbols.map<IText>((s, i) => {
      if (i === index) {
        return {
          ...s,
          fontsize: "10vh"
        };
      }
      if (i === index - 1 || i === index + 1) {
        return {
          ...s,
          fontsize: "7vh"
        };
      }
      return {
        ...s,
        fontsize: "5vh"
      };
    });

    setSymbols(newSymbols);
  };
  return (
    <div className={style.basic} onMouseOut={defaultText}>
      {symbols.map((symbol, index) => {
        const currentStyle = classNames({
          [style.show]: index < currentIndex,
          [style.hide]: index >= currentIndex
        });
        const divStyle = {
          fontSize: symbol.fontsize
        };
        return (
          <div
            onMouseOver={() => enlargeFont(symbol, index)}
            key={index}
            style={divStyle}
            className={classNames(currentStyle)}
          >
            {index < currentIndex ? symbol.symbol : ""}
          </div>
        );
      })}
    </div>
  );
};

function useInterval(callback: () => void, delay: number, numberOfTicks = 100) {
  const savedCallback = useRef<any>();
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      setTicks(ticks + 1);
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      if (ticks === numberOfTicks) {
        clearInterval(id);
      }
      return () => clearInterval(id);
    }
  }, [delay, ticks]);
}

export default FunnyText;
