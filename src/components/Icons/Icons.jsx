import React, {useState} from 'react';
import Button from "../Button/Button";
import styles from './Icons.module.scss'
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);
library.add(...iconList);

const Icon = () => {
    const [index,setIndex] = useState(1)
    const [disabled,setDisabled] = useState(false)
    return (
        <div className={styles.wrapper}>
            {disabled
                ? <FontAwesomeIcon size='6x' icon="arrow-rotate-forward" spin/>
                : <FontAwesomeIcon size='6x' icon={iconList[index].iconName}/>}
            <Button disabled={disabled}
            onClick={()=>{
                setDisabled(true)
                setTimeout(()=>{
                setIndex(Math.floor(Math.random()*iconList.length))
                setDisabled(false)
            },3000)

                }}
            >Change icon</Button>
        </div>
    );
};

export default Icon;