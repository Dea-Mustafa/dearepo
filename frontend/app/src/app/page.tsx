"use client"; // This marks the component as a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBookings } from '../utils/api';
import Header from '../components/header';

// Define the Booking type
interface Booking {
  id: number;
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}

export default function Home() {
  const [bookings, setBookings] = useState<Booking[]>([]); // Type the state as an array of Booking objects

  useEffect(() => {
    async function fetchBookings() {
      const bookingsData = await getBookings();
      setBookings(bookingsData);
      console.log(bookingsData)
    }

    fetchBookings();
  }, []);

  return (
    <div>
      <Header />
      <h1>Current booking count: {bookings.length}</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <Link href={`/booking/${booking.id}`}>
              A Booking for {booking.service} with {booking.doctor_name} on {new Date(booking.date).toLocaleDateString()} 
              starting at {booking.start_time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
