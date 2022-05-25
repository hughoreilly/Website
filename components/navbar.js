import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={"text-gray-700 w-9/12 mx-auto"}>
            <nav className="flex  font-bold text-xl justify-between">
                <Link href="/">
                    <a className={"ease-in duration-100 hover:text-hugh-black hover:scale-105"}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={"ease-in duration-100 hover:text-hugh-black hover:scale-105"}>About</a>
                </Link>
                <Link href="/blog">
                    <a className={"ease-in duration-100 hover:text-hugh-black hover:scale-105"}>Blog</a>
                </Link>
                <Link href="/contact">
                    <a className={"ease-in duration-100 hover:text-hugh-black hover:scale-105"}>Contact</a>
                </Link>
            </nav>
            <hr></hr>
        </div>
    )
}