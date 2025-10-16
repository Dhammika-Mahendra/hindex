import React from 'react'
import { useAppContext } from '../../context/AppContext';

export default function Slider() {

    const { scale, setScale } = useAppContext()

    return (
        <div className="w-32">
            <input
                type="range"
                min={1}
                max={15}
                value={scale}
                step={1}
                onChange={(e) => setScale(Number(e.target.value))}
                style={{ width: '140px', height: '2px' }}
            />
        </div>
    )
}
