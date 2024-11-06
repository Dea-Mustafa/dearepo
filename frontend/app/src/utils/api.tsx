const api = 'http://localhost:5000/api';

const getBookings = async () => {
  const response = await fetch(`${api}/bookings`);
  const data = await response.json();
  return data;
};


const getBooking = async (id) => {
  const response = await fetch(`${api}/bookings/${id}`);
  const data = await response.json();
  return data;
};

export { getBookings, getBooking };