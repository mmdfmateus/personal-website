import { type NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>hey</title>
        <meta name="description" content="Mateus Mourão's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-3">
        <Image 
          className='rounded-full'
          src={`/profile-pic2.jpg`}
          alt='profile-pic' 
          height={200}
          width={200} />
        <h1 className='uppercase font-bold text-2xl'>Mateus Mourão</h1>
        <h3 className='text-lg'>i write code. sometimes.</h3>
        <h3 className='text-base'>from 🇧🇷.</h3>
        <ul className='flex justify-center items-center gap-4'>
          <a href={'https://linkedin.com/in/mateusmourao'} target='_blank'>
            <FaLinkedin size={30} />
          </a>
          <a href={'https://github.com/mmdfmateus'} target='_blank'>
            <FaGithub size={30} />
          </a>
        </ul>
      </main>
    </>
  );
};

export default Home;
