'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

const NavLinks = [
	{ id: 2, name: 'travel', path: '/travel' },
	{ id: 3, name: 'schedule', path: '/schedule' },
    { id: 4, name: 'faq', path: '/faq' },
];

export default function Header() {
    const pathname = usePathname();
	const isActive = (path : any) => path === pathname;
    const isFirst = (index : number) => index === 1;
    return(
        <header className="fixed p-10 w-screen">
            <nav className="flex justify-between w-full">
            <ul className="flex gap-4 items-center">
                <li>
					<Link className="font-sans text-2xl leading-[0.2]" href="/">j+n</Link>
				</li>
				{NavLinks.map((link, index) => {
					return (
						<li className={isFirst(link.id) ? 'font-sans' : ''} key={link.id}>
							<Link
								href={link.path}
								className={isActive(link.path) ? 'underline' : ''}
							>
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
                <ul>
                    <li>
                        <Link className="px-4 py-2 bg-black rounded-full text-white" href={"/rsvp"}>rsvp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}