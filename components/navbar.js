import Link from 'next/link'
import {useEffect, useState} from "react";

export default function Navbar() {
    const [active, setActive] = useState('none')

    useEffect(() => {
        if (window.location.pathname === "/") {
            setActive('home')
        } else if (window.location.pathname === "/about") {
            setActive('about')
        } else if (window.location.pathname === "/blog") {
            setActive('blog')
        } else if (window.location.pathname === "/contact") {
            setActive('contact')
        }
    })

    return (
        <div className={"text-hugh-grey sm:w-9/12 mx-auto max-w-7xl"}>
            <nav className="flex  font-bold text-xl justify-between">
                <Link href="/">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'home') ? "text-hugh-black" : "text-hugh-grey")} >Home</a>
                </Link>
                <Link href="/about">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'about') ? "text-hugh-black" : "text-hugh-grey")}>About</a>
                </Link>
                <Link href="/blog">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'blog') ? "text-hugh-black" : "text-hugh-grey")}>Blog</a>
                </Link>
                <Link href="/contact">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'contact') ? "text-hugh-black" : "text-hugh-grey")}>Contact</a>
                </Link>
            </nav>
            <hr></hr>
        </div>
    )
}