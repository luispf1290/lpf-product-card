import { useEffect, useState, useRef } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product:Product;
    onChange?:(args: onChangeArgs) => void,
    value?:number,
    initialValues?:InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues} :useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    //*usar useref para ver si el componente ya fue montado
    const isMounted = useRef(false);
    
    const handleIncreaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        isMounted.current = true
    }, []);
    
    useEffect(() => {
        if(!isMounted.current) return;

        setCounter(initialValues?.count || value);
    }, [value, initialValues]);

    
    

    return {
        counter,
        handleIncreaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        reset, 
        maxCount: initialValues?.maxCount
    }
};
