// NextJS Components
import Head from 'next/head';

const Header = ({ data }) => {
  return (
    <Head>
      {data.title && <title>{data.title}</title>}
      {data.description && (
        <meta name="description" content={data.description} />
      )}
      {data.icon && <link rel="icon" href={data.icon} />}
    </Head>
  );
};

export default Header;