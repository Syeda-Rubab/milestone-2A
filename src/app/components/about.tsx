import "../style/hero.css";
import "../style/about.css"
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function About(){
    return(
        <section className="header-container">
          <div className="header-box-con">
           { /* left */}
             <div>
              <Image src="/images/dp.png" width={500} height={500} alt="profile"
              className="header-image"/>

              <div className="social-icon">
              <Link href={""}  className="s-icon1"><FaYoutube/></Link>
              <Link href={""} className="s-icon2"><FaFacebook/></Link>
              <Link href={""} className="s-icon3"><FaInstagram/></Link>
              </div>

             </div>

          {/*right*/}
          <div className="hero-right-div">
            <h1 className="title-head2">
                About Us
            </h1>
            <p className="des-head2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum laboriosam sed quos voluptas.Cupiditate vel cum nesciunt laudantium veniam dolore corrupti exercitationem impedit, repudiandae laboriosam eveniet tempora blanditiis voluptatem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa suscipit aut, hic magnam voluptatem debitis dolor vel optio earum, eos est alias iusto. Eligendi excepturi obcaecati id modi culpa.
            </p>
          </div>
          </div>
        </section>
    )
}