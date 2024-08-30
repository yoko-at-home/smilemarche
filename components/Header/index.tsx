import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
