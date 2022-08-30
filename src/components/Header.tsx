import React, { HTMLAttributes } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// const Header = () => {
//     const router = useRouter();

//     const { t } = useTranslation("home");

//     const handleLocaleChange = (event: any) => {
//         const value = event.target.value;

//         router.push(router.route, router.asPath, {
//             locale: value,
//         });
//     };

//     return (
//         <header>
//             <nav>
//                 <Link href="/">
//                     <a className={router.asPath === "/" ? "active" : ""}>{t("home")}</a>
//                 </Link>
//                 <Link href="/about">
//                     <a className={router.asPath === "/about" ? "active" : ""}>
//                         {t("about")}
//                     </a>
//                 </Link>
//             </nav>

//             <select onChange={handleLocaleChange} value={router.locale}>
//                 <option value="en">🇺🇸 English</option>
//                 <option value="pt_BR">🇧🇷 Portugues - BR</option>
//             </select>

//             <style jsx>{`
//         a {
//           margin-right: 0.5rem;
//         }

//         a.active {
//           color: blue;
//         }

//         nav {
//           margin-bottom: 0.5rem;
//         }
//       `}</style>
//         </header>
//     );
// };

// export default Header;


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
        <header className={classNames('header', {
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
                    <label className="for-dropdown" htmlFor="dropdown">{router.locale === 'en' ? 'English' : 'Portuguese'} <i className="uil uil-arrow-down"></i></label>
                    <div className="section-dropdown">
                        {langs.map((lang) => {
                            return (
                                <button key={lang.code} onClick={changeLocale} value={lang.code} >{lang.nativeName} </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </header>
    )
}