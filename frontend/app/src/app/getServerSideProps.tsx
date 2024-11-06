import { getBooking } from '../utils/api';

export const getServerSideProps = async ({ params }) => {
  const booking = await getBooking(params.id);
  return {
    props: {
      id: params.id,
    },
  };
};