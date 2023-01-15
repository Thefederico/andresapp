import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
  <header className='flex items-center justify-between w-full h-12 px-2 bg-slate-800 text-gray-200'>
    <section className='flex items-center justify-between'>
      <figure className=''>
        <Link href='/'>
          <Image src='/headphones.png' alt='App Logo' width='40' height='40' />
        </Link>
      </figure>
      <h1>AndresApp</h1>
    </section>
    <section>
      <ul className='flex items-center justify-between'>
        <li className='about-list'>
          <a href='/about'>About</a>
        </li>
        <li className='about-list'>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </section>
  </header>
)
