import "../style/hero.css";
import Image from "next/image";


export default function Hero(){
    return(
        <main className="header-container">
          <div className="header-box-con">
           { /* left */}
             <div>
              <Image src="/images/dp.png" width={500} height={500} alt="profile"
              className="header-image"/>
             </div>
          {/*right*/}
          <div className="hero-right-div">
            <h1 className="title-head">
                 I'm Syeda Rubab <br/>
                 Front-end Developer
            </h1>
            <p className="des-head">
                I believe that a website is the foundation of a successful <br/>
                online presence, and our goal is to help businesses establish <br/>
                a strong digital presence. Our process begins with understanding<br/>
                your business goals.
            </p>
          </div>
          </div>
        </main>
    )
}