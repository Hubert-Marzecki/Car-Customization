import reactCSS from "reactcss";
import React, {useState} from 'react'
import {ChromePicker, CirclePicker, SketchPicker} from "react-color";
import "./_color-picker.scss"

interface ColorPickerComponent {
    displayColorPicker: boolean,
    color: {
        r: number,
        g: number,
        b: number,
        a: number,
    }
}
export function ColorPicker() {
    const [colorPicker, setColorPicker] = useState<ColorPickerComponent>({
        displayColorPicker: false,
        color: {
            r: 241,
            g: 112,
            b: 19,
            a: 1,
        }
    })
  const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${ colorPicker.color.r }, ${ colorPicker.color.g }, ${ colorPicker.color.b }, ${ colorPicker.color.a })`,
            },
        },
    });
    const handleClick = () => {
        setColorPicker(s => ({...s, displayColorPicker: !colorPicker.displayColorPicker }))
    };
    const  handleClose = () => {
        setColorPicker(s => ({ ...s, displayColorPicker: false }))
    };
    const handleChange = (color:any) => {
        setColorPicker(s => ({...s, color: color.rgb }))
    };

return (
    <div className="color__picker">

        <div className="swatch" onClick={ handleClick }>
            <div style={ styles.color } />
        </div>
        { colorPicker.displayColorPicker ? <div className="popover" >
            <div className="cover" onClick={ handleClose }/>
            <SketchPicker color={ colorPicker.color } onChange={ handleChange } />
        </div> : null }

    </div>
)
}

