import { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="carolina-scudeler.svg" />
        <title>Portfólio | Carolina Scudeler</title>
      </Head>

      <Navbar />

      <main>
        <h1>Hello World</h1>
      </main>
    </>
  );
};

export default Home;
