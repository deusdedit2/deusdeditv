import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {

    return (
        <footer style={{
            background: 'rgb(11 23 38 / 100%)',
            zIndex: 11,
            position: "relative"
        }}>
            <div className="container section section-small" style={{ display: "flex", justifyContent: "space-between", padding: '15px' }}>
                <div style={{ width: "56px", height: "61px" }}>
                    <Logo />
                </div>
                <div className="flex" style={{ textAlign: 'center', justifyContent: 'center', margin: '20px 0' }}>
                    <Link href={"/"} ><a style={{ textAlign: 'center', margin: '0 10px', color: '#888', textTransform: 'uppercase' }}>Home</a></Link>
                    <Link href={"/projects"}><a style={{ textAlign: 'center', margin: '0 10px', color: '#888', textTransform: 'uppercase' }}>Projetos</a></Link>
                </div>
            </div>
        </footer>
    )

}