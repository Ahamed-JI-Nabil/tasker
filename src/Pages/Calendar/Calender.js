import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className='text-black flex justify-center mt-40 h-screen'>
            <div>
                <DatePicker
                    className='rounded-xl p-2 text-center mx-auto'
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                />

            </div>
        </div>
    );
};

export default Calendar;