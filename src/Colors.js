import React, { useState } from 'react'
import AddColor from './AddColor'

const Colors = () => {
    const [color, setColor] = useState('')
    const [bgColor, setBgColor] = useState('#F6C39A')
    const [colorText, setColorText] = useState('Default')
    const [textColor, setTextColor] = useState('#5C1F4B')
    const changeBgColor = (color) => {
        setBgColor(color)
    }

    const changeText = (color) => {
        setColorText(color)
    }

    const changeTextColor = (color) => {
        let invertedColor;

        // Check if the color is a hex code
        if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
            color = color.replace(/^#/, '');
            invertedColor = (parseInt(color, 16) ^ 0xFFFFFF).toString(16).padStart(6, '0');
        } else {

            const rgbToHex = (rgb) => {
                // Extract the RGB components
                const rgbArray = rgb.match(/\d+/g).map(Number);

                // Convert each component to a two-digit hexadecimal number
                const hexArray = rgbArray.map(component => component.toString(16).padStart(2, '0'));

                // Combine the components into a hexadecimal color code
                const hexColor = `#${hexArray.join('')}`;

                return hexColor;
            }

            // If it's not a hex code, try to parse it as a color name
            const tempDiv = document.createElement('div')
            tempDiv.style.color = color
            document.body.appendChild(tempDiv)
            let currColor = rgbToHex(getComputedStyle(tempDiv).color)
            currColor = currColor.replace(/^#/, '');
            invertedColor = (parseInt(currColor, 16) ^ 0xFFFFFF).toString(16).padStart(6, '0');
            document.body.removeChild(tempDiv);
            
        }
        setTextColor("#" + invertedColor);
    }

    const handleColorSubmit = (e) => {
        (e).preventDefault()
        changeBgColor(color)
        changeText(color)
        changeTextColor(color)
        setColor('')
    }

    return (
        <section>
            <AddColor
                color={color}
                handleColorSubmit={handleColorSubmit}
                setColor={setColor}
            />
            <div style={{ backgroundColor: bgColor }} className='colorBox'>
                <h2 style={{ color: textColor }}>{colorText}</h2>
            </div>
        </section>
    )
}

export default Colors