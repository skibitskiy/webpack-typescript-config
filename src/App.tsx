import React, { useState } from 'react';

function App() {
    const [multipliers, setMultipliers] = useState([0, 0]);

    const onChangeHandler = ({ target }) => {
        const { index } = target.dataset;
        const { value } = target;
        const res = [...multipliers];
        res[index] = value;
        setMultipliers(res);
    }

    return (
        <div className='app'>
            <div>
            {
                multipliers.map((value, index) =>
                    <input data-index={index} value={value} onChange={onChangeHandler}/>
                )
            }
            </div>
            <div className='answer'>
                { multipliers.reduce((res, next) => res * next) }
            </div>
        </div>
    )
}

export default App;
