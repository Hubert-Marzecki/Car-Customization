import reactCSS from "reactcss";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./_color-picker.scss";
import { useDispatch, useSelector } from "react-redux";
import { getFinalCar, state } from "../../app/slices/state";

export function ColorPicker(): JSX.Element {
  const [isVisible, setVisible] = useState<boolean>(false);
  const finalCar = useSelector(getFinalCar);
  const dispatch = useDispatch();

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${finalCar.color.r}, ${finalCar.color.g}, ${finalCar.color.b}, ${finalCar.color.a})`,
      },
    },
  });

  const handleClick : () => void = () => {
    setVisible(!isVisible);
  };
  const handleClose : () => void = () => {
    setVisible(false);
  };

  const handleChange = (color: any) => {
    dispatch(state.actions.setFinalColor({ color: color.rgb }));
  };

  return (
    <div className="color__picker">
      <div className="swatch" onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {isVisible ? (
        <div className="popover">
          <div className="cover" onClick={handleClose} />
          <SketchPicker color={finalCar.color} onChange={handleChange} />
        </div>
      ) : null }
    </div>
  );
}
  