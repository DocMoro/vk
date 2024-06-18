import './DoubleScrollBar.css'

import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

type DoubleScrollBarProps = {
  min: number
  max: number
  name: string
  className?: string
  step: number
  query: URLSearchParams
  keyQuery: string
}

const DoubleScrollBar: FC<DoubleScrollBarProps> = ({ min, max, name, className, step, query, keyQuery }) => {
  const [inputFrom, setInputFrom] = useState(min)
  const [inputTo, setInputTo] = useState(max)

  useEffect(() => {
    const slider = document.getElementById(`slider-${name}`)
    if (!slider) {
      return
    }
    if (inputFrom > inputTo) {
      query.set(keyQuery, `${inputTo}-${inputFrom}`)
      slider.style.right = `${100 - ((inputFrom - min) / (max - min)) * 100}%`
      slider.style.left = `${((inputTo - min) / (max - min)) * 100}%`
    } else {
      query.set(keyQuery, `${inputFrom}-${inputTo}`)
      slider.style.right = `${100 - ((inputTo - min) / (max - min)) * 100}%`
      slider.style.left = `${((inputFrom - min) / (max - min)) * 100}%`
    }
  }, [inputFrom, inputTo])

  return (
    <div className={clsx(className && className)}>
      <div className="range-slider">
        <span className="range-selected" id={`slider-${name}`}></span>
      </div>
      <div className="range-input">
        <input
          type="range"
          value={inputFrom}
          onChange={e => setInputFrom(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
          defaultValue={min}
        />
        <input
          type="range"
          onChange={e => setInputTo(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
          defaultValue={max}
        />
      </div>
    </div>
  )
}

export default DoubleScrollBar
