import Link from "next/link";

export default function Header() {
    return(
        <header className="fixed p-8">
            <nav>
                <ul className="flex gap-x-4">
                    <li>
                        <Link href={"/"}>home</Link>
                    </li>
                    <li>
                       <Link href={"/travel"}>travel</Link>
                    </li>
                    <li>
                        <Link href={"/rsvp"}>rsvp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}