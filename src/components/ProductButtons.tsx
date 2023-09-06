import React, { useContext, CSSProperties, useCallback} from 'react';
import { ProductContext} from './ProductCard';
import styles from "../styles/styles.module.css";

export interface Props  {
    className?:string,
    style?: CSSProperties 
}

export const ProductButtons =({className, style}:Props) => {
    const {handleIncreaseBy, counter, maxCount} = useContext(ProductContext);
    
    const isMaxReach = useCallback(() => !!maxCount && maxCount === counter, [counter, maxCount]);

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
                <button
                    className={styles.buttonMinus}
                    onClick={() => handleIncreaseBy(-1)}
                >-</button>
                <div className={styles.countLabel}>{counter}</div>
                <button
                    className={`${styles.buttonAdd}  ${isMaxReach() && styles.disabled}`}
                    disabled={isMaxReach()}
                    onClick={() => handleIncreaseBy(+1)}
                >+</button>
            </div>
    )
}