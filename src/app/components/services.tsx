import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { CiMicrophoneOn } from "react-icons/ci";
import { GrGamepad } from "react-icons/gr";
import { HiMiniCamera } from "react-icons/hi2";

export default function Services(){
    return(
        <section className="main">
            <div className="ser-container">
              <div className="content">
                <h2 className="ser-title">My Services</h2>
                <p className="ser-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo id culpa est,
                 reprehenderit earum vel dolores quibusdam sint libero.lorem amet adipisicing eayta vel dolores sit.</p>
              </div>
              <div className="box-con">
                <div className="ser-box">  <FaLaptopCode className="ser-icon"/> 
                <h3>Web Development</h3>
                <span>Blog, E-commerce</span>
                </div>
                <div className="ser-box"><FaDesktop className="ser-icon"/>
                <h3>UI/UX Design</h3>
                <span>Mobile App, Wesite Design</span>
                </div>
                <div className="ser-box"><CiMicrophoneOn className="ser-icon"/>
                <h3>Sound Design</h3>
                <span>Voice Over, Beat Making</span>
                </div>
                <div className="ser-box"><GrGamepad className="ser-icon"/>
                <h3>Game Design</h3>
                <span>Character Design, Props</span>
                </div>
                <div className="ser-box"><HiMiniCamera className="ser-icon"/>
                <h3>Photography</h3>
                <span>Portrait, Product Photography</span>
                </div>
                <div className="ser-box">
                <h3 className="last-icon-h3">Advertising</h3>
                <span className="last-icon">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
              </div>
            </div>
        </section>
    )
}