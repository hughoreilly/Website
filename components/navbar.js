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
            setActive('portfolio')
        } else if (window.location.pathname === "/contact") {
            setActive('contact')
        }
    })

    return (
        <>
            <div className={"w-11/12 sm:w-9/12 mx-auto max-w-7xl fixed top-0 left-0 right-0"}>
                <nav className="flex justify-between font-bold text-xl text-hugh-grey bg-white">
                    <Link href="/">
                        <a className={"ease-in duration-100 hover:text-blue-400 " + ((active === 'about') ? "text-blue-400" : "text-hugh-grey")} >About</a>
                    </Link>
                    <Link href="/skills">
                        <a className={"ease-in duration-100 hover:text-blue-400 " + ((active === 'skills') ? "text-blue-400" : "text-hugh-grey")}>Skills</a>
                    </Link>
                    <Link href="/portfolio">
                        <a className={"ease-in duration-100 hover:text-blue-400 " + ((active === 'portfolio') ? "text-blue-400" : "text-hugh-grey")}>Portfolio</a>
                    </Link>
                    <Link href="/contact">
                        <a className={"ease-in duration-100 hover:text-blue-400 " + ((active === 'contact') ? "text-blue-400 " : "text-hugh-grey")}>Contact</a>
                    </Link>
                </nav>
                <hr></hr>
            </div>
        </>
    )
}