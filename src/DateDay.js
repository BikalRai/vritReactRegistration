import React, { useState } from 'react';

const DateDay = () => {
    const days = [];

    for (let i = 1; i !== 32; i++) {
        days.push(i);
    }

    const [allDays, setAllDays] = useState(days);
    return (
        <>
            {allDays.map((day, i) => (
                <option key={i} value={day}>
                    {day}
                </option>
            ))}
        </>
    );
};

export default DateDay;
