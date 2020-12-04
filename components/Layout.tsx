import Link from 'next/link';
import Image from 'next/image';

export function Layout({ children }) {
    return (
        <>
          <nav className="flex mt-10 flex-col w-1/2 m-auto">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <Image
                  src="/logo.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Link href="/build">
                  <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow m-2 bg-gray-300">Build community →</a>
                </Link>
              </div>
              <div>
                <Link href="/login">
                  <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow m-2 bg-gray-300">Get started →</a>
                </Link>
              </div>
            </div>
          </nav>
            <main>
                { children } 
            </main>
        </>
    )
}