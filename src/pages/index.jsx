import Head from 'next/head';
import Link from 'next/link';

import Conti from 'components/Conti';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="plus_btn">
        <Link href="/">+</Link>
      </div>

      <div className="index_container">
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
        <Conti />
      </div>
    </>
  );
}