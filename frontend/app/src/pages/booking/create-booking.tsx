'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/header';

const CreateBooking = () => {
  const [service, setService] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      service,
      doctor_name: doctorName,
      start_time: startTime,
      end_time: endTime,
      date,
    };

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        router.push("/")
      } else {
        setError('Failed to create booking. Please try again.');
        setSuccess(false);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div>
      <Header />
      <h1>Create a New Booking</h1>
      {success && <p>Booking created successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="service">Service</label>
          <input
            type="text"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="doctorName">Doctor Name</label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="startTime">Start Time</label>
          <input
            type="datetime-local"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endTime">End Time</label>
          <input
            type="datetime-local"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
};

export default CreateBooking;