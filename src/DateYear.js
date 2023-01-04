import React, { useState } from 'react';

const DateYear = () => {
    const years = [];

    for (let i = 2023; i !== 1964; i--) {
        years.push(i);
    }
    const [allYears, setAllYears] = useState(years);
    return (
        <>
            {allYears.map((year, i) => (
                <option key={i} value={year}>
                    {year}
                </option>
            ))}
        </>
    );
};

export default DateYear;
