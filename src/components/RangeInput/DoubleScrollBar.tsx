import clsx from 'clsx'
import { FC, useEffect, useMemo, useState } from 'react'

import s from './DoubleScrollBar.module.css'

type DoubleScrollBarProps = {
  min: number
  max: number
  name: string
  className?: string
  step: number
  query: URLSearchParams
  keyQuery: string
  len: number
}

const DoubleScrollBar: FC<DoubleScrollBarProps> = ({ min, max, name, className, step, query, keyQuery, len }) => {
  const startValue = query.get(keyQuery)?.split('-')
  const [inputFrom, setInputFrom] = useState(startValue ? parseFloat(startValue[0]) : min)
  const [inputTo, setInputTo] = useState(startValue ? parseFloat(startValue[1]) : max)

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

  const ruler = useMemo(
    () =>
      Array(len)
        .fill(min)
        .map((value, index) => value + Math.ceil(index * ((max - min) / 10))),
    [min, len, max]
  )

  return (
    <div className={clsx(className && className)}>
      <div className={s.Slider}>
        <span className={s.Selected} id={`slider-${name}`}></span>
      </div>
      <div className={s.RangeInput}>
        <input
          type="range"
          value={inputFrom}
          onChange={e => setInputFrom(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
        />
        <input
          type="range"
          value={inputTo}
          onChange={e => setInputTo(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
        />
      </div>
      <ul className={s.Range}>
        {ruler.map(value => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default DoubleScrollBar
