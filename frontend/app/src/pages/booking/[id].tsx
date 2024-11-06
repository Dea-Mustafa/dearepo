import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getBooking } from '../../utils/api';
import Link from 'next/link';
import Header from '../../components/header';

interface BookingProps {
  id: string;
}

interface BookingData {
  id: number;
  doctor_name: string;
  service: string;
  end_time: string;
}

const Booking = () => {
  const router = useRouter();
  const { id } = router.query;

  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      if (id) {
        const data = await getBooking(id as string);
        setBooking(data);
      }
    };
    fetchBooking();
  }, [id]);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <h1>This Booking is with {booking.doctor_name} For {booking.service}</h1>
      <p>It ends on {booking.end_time}</p>
      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Booking;