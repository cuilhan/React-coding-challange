// NextJS Components
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <a
        href="https://www.techguilds.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created for{' '}
        <span className={'logo'}>
          <Image
            src="/techguilds-logo.webp"
            alt="Techguilds Logo"
            width={120}
            height={21}
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
