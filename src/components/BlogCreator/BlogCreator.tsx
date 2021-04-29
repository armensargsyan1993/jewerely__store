
import React from 'react'
import { Blog, IBlogProps } from '../Blog/Blog'
import { Button } from '../Button/Button'
import styles from './BlogCreator.module.scss'

interface IBlogCreatorProps{
    blogs:Array<IBlogProps>
}

export const BlogCreator:React.FC<IBlogCreatorProps> = ({blogs}) => {
    return (
        <div className={styles.root}>
            <div className="container">
                {blogs.map(e => {
                    return <Blog key={e.src} {...e}/>
                })}
            </div>
            <Button
            btnText={`read our blog`}
            btnLink={`blogs`}
            clsName={styles.button}
            />
        </div>
    )
}
