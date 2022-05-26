import Link from 'next/link'
import {useEffect, useState} from "react";

export default function Navbar() {
    const [active, setActive] = useState('none')

    useEffect(() => {
        if (window.location.pathname === "/") {
            setActive('about')
        } else if (window.location.pathname === "/skills") {
            setActive('skills')
        } else if (window.location.pathname === "/portfolio") {
            setActive('blog')
        } else if (window.location.pathname === "/contact") {
            setActive('contact')
        }
    })

    return (
        <>
            <nav className="flex justify-between font-bold text-xl text-hugh-grey">
                <Link href="/">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'about') ? "text-hugh-black" : "text-hugh-grey")} >About</a>
                </Link>
                <Link href="/skills">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'skills') ? "text-hugh-black" : "text-hugh-grey")}>Skills</a>
                </Link>
                <Link href="/portfolio">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'portfolio') ? "text-hugh-black" : "text-hugh-grey")}>Portfolio</a>
                </Link>
                <Link href="/contact">
                    <a className={"ease-in duration-100 hover:text-hugh-black " + ((active === 'contact') ? "text-hugh-black" : "text-hugh-grey")}>Contact</a>
                </Link>
            </nav>
            <hr></hr>
        </>
    )
}