import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/booking/create-booking">
              <button className={styles.button}>Create Booking</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;