import React, { useState, useCallback } from 'react';
import {
    StyledUserInput,
    StyledResult,
    StyledOperation
} from './styledApp.ts';

export interface OperationProps {
    operation: Function;
    title: string;
}

const Operation: React.FC<OperationProps> = ({operation, title}) => {
    const [nums, setNums] = useState(['0', '0']);
    const cleanNums: Array<number> = nums.map((num: string) => {
        const res = parseInt(num);
        return isNaN(res) ? 0 : res;
    });
    const result: number = operation(cleanNums);

    const onChangeHandler = useCallback(({ target }) => {
        const { index }: { index: number } = target.dataset;
        const { value }: {value: string} = target;
        
        setNums((state) => {
            const res: Array<string> = [...state];
            res[index] = value;
            return res;
        });
    }, []);

    return (
        <StyledOperation onChange={onChangeHandler}>
            <h2>{title}</h2>
            <div>
                { nums.map((value, index) => <StyledUserInput data-index={index} value={value}/>) }
            </div>
            <StyledResult>
                Ответ: { isNaN(result) ? '--' : result }
            </StyledResult>
        </StyledOperation>
    )
}

export default React.memo(Operation);
