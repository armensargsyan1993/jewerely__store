
import React from 'react';
import styles from './ImgCreator.module.scss';

interface IImgProps{
    imgArr:Array<string>,
}

const getData = (data:Array<string>) => {
        let arr = data.map(e => {
            console.log(`maping`);
            return (
                <React.Fragment key={e}>
                    <img className={styles.img} src={e} alt={e}/>
                    <span style={{color:'red'}}>{Math.random()}</span>
                </React.Fragment>
            )
        })
        return arr
    }

export const ImgCreator:React.FC<IImgProps> =({imgArr}) => {
    const arr = getData(imgArr)
    return (
        <div className={styles.root}>
            {arr}
        </div>
    )
}
