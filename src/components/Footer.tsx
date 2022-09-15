import { useTranslation } from "next-i18next";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    const { t } = useTranslation("common");

    return (
        <footer style={{
            background: 'rgb(11 23 38 / 100%)',
            zIndex: 11,
            position: "relative"
        }}>
            <div className="container section section-small" style={{ display: "flex", justifyContent: "space-between", padding: '15px', boxSizing: "content-box" }}>
                <div style={{ width: "56px", height: "60px" }} className="flex">
                    <Logo />
                </div>
                <div className="flex" style={{ textAlign: 'center', justifyContent: 'center', margin: '20px 0' }}>
                    <Link href={"/"} ><a style={{ textAlign: 'center', margin: '0 10px', color: '#888', textTransform: 'uppercase' }}>Home</a></Link>
                    <Link href={"/projects"}><a style={{ textAlign: 'center', margin: '0 10px', color: '#888', textTransform: 'uppercase' }}>{t('projects')}</a></Link>
                </div>
            </div>
        </footer>
    )

}