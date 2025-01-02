import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ communications }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <div>
        <h3>Communications on {date.toDateString()}</h3>
        {communications
          .filter((com) => new Date(com.date).toDateString() === date.toDateString())
          .map((com, index) => (
            <div key={index}>
              {com.type} - {com.notes}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CalendarView;
