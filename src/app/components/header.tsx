import "../style/header.css";
import Link from "next/link";



export default function Header(){
    return(
        <header className="header">
            <h1 className="logo">SR</h1>
            <div className="header-right-div">
                <ul className="header-link">
                    <li>
                        <Link className="nav-links" href={"/"}><b>Home</b></Link>
                    </li>
                    <li>
                        <Link className="nav-links" href={"/about"}><b>About</b></Link>
                    </li>
                    <li>
                        <Link className="nav-links"  href={"/contact"}><b>Contact</b></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}