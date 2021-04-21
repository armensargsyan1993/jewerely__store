import React from 'react'
import useResizeObserver from "use-resize-observer";

interface SvgCreatorProps{
    clsName:string,
    svgHref:string
}

export const SvgCreator:React.FC<SvgCreatorProps> = ({clsName,svgHref}) => {
    const { ref, width = 1, height = 1 } = useResizeObserver<any>();
    return (
        <svg width={width} height={height} className={clsName}>
                <use ref={ref} href={svgHref} />
        </svg>
    )
}
