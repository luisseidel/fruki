import Link from './link';

export default function header() {
    return (
        <header className="flex flex-wrap justify-around items-center pt-3 px-5 bg-black text-gray-100">
            <Link href={'/'} >
                <span className="flex justify-center site-name text-4xl font-extrabold uppercase leading-none text-center pb-3 px-2">
                    Luis<br />Seidel
                </span>
            </Link>
            <nav className="pb-3">
                <ul className="grid grid-flow-col items-center gap-10 text-sm font-bold uppercase tracking-wider">
                    <li className="button border py-2 px-4 rounded-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-black">
                        <Link href={'/details'} >
                            Details
                        </Link>
                    </li>
                    <li className="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:underline">
                        <Link href={'/contact'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}