import React from 'react';
import { useState } from 'react';

const Date = () => {
    const [months, setMonths] = useState([
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'November',
        'December',
    ]);

    return (
        <>
            {months.map((month, i) => (
                <option key={i} value={month}>
                    {month}
                </option>
            ))}
        </>
    );
};

export default Date;
