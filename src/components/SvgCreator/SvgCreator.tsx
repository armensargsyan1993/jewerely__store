import React, { useEffect, useRef, useState } from 'react'

interface SvgCreatorProps {
  clsName: string
  svgHref: string
}

export const SvgCreator: React.FC<SvgCreatorProps> = ({ clsName, svgHref }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef<any>()

  useEffect(() => {
    ref.current.onload = () => {
      const { width: w, height: h, x, y } = ref.current.getBBox()
      setWidth(() => Math.ceil(w) + Math.ceil(x))
      setHeight(() => Math.ceil(h) + Math.ceil(y))
    }
  }, [ref])
  return (
    <svg ref={ref} width={width} height={height} className={clsName}>
      <use href={svgHref} />
    </svg>
  )
}
