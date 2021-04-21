import React from 'react'

interface SvgCreatorProps{
    clsName:string,
    svgHref:string
}

export const SvgCreator:React.FC<SvgCreatorProps> = ({clsName,svgHref}) => {
    return (
            <svg width="auto" height="auto" className={clsName}>
                <use href={svgHref} />
            </svg>
    )
}
