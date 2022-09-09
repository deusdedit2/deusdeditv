import React, { HTMLAttributes } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion"

import classNames from "classnames";
import { useEffect, useState } from "react"
// import Logo from "./Logo";
// import i18n from '../i18n'
import { t } from "i18next";
import Logo from "./Logo";
// import { useTranslation } from "react-i18next";

const langs = [
    { code: 'en', nativeName: 'English 🇺🇸', flag: '&#127463;&#127479;' },
    { code: 'pt_BR', nativeName: `Portuguese 🇧🇷`, flag: '&#127463;&#127479;' },
];

export default function Header() {

    const [active, setActive] = useState(false)
    const { t } = useTranslation();

    const router = useRouter();

    useEffect(() => {
        window.onscroll = () => {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            top > 10 ? setActive(true) : setActive(false)
        }
    }, [])

    function changeLocale(lang: React.MouseEvent<HTMLButtonElement>) {
        router.push(router.route, router.asPath, {
            locale: lang.currentTarget.value,
        });
    }

    return (
        <motion.header initial={{opacity: 0}} whileInView={{opacity: 1, transition: {opacity: {delay:0.4}}}} className={classNames('header', {
            'scrolled': active,
        })} >
            <div className="container flex flex-align-center flex-between header_container">

                <Link href="/" >
                    <a style={{ width: "55px", height: "58px" }}>
                        <Logo style={{ width: "55px", height: "58px" }}/>
                    </a>
                </Link>

                <div className="dropdown-container">
                    <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                    <label className="for-dropdown" htmlFor="dropdown">{router.locale === 'en' ? 'English 🇺🇸' : 'Portuguese 🇧🇷'} <i className="uil uil-arrow-down"></i></label>
                    <div className="section-dropdown">
                        {langs.map((lang) => {
                            return (
                                <button key={lang.code} onClick={changeLocale} value={lang.code} >{lang.nativeName} </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.header>
    )
}