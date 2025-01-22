import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = ({ unavailableDates, onDateSelect, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD format
    if (!unavailableDates.includes(formattedDate)) {
      setSelectedDate(date); // Set the selected date, but do not call onDateSelect yet
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD format
      if (unavailableDates.includes(formattedDate)) {
        return 'highlight-unavailable'; // Custom CSS class for unavailable dates
      }
    }
    return null;
  };

  const handleConfirmAppointment = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]; // Format the selected date
      onDateSelect(formattedDate); // Now call onDateSelect only when the user confirms
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h3 className="text-xl font-semibold mb-4">Select a Date for Your Tour</h3>
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate || new Date()}
        tileClassName={tileClassName}
      />
      <div className="mt-6 flex justify-between">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
          onClick={handleConfirmAppointment}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;
