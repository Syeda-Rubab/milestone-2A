import "../style/contact.css";


export default function Contact(){
    return(
        <main className="contact-main">
        <div className="form-cont">
            <h1 className="cont-title">Contact Us</h1>
            <form action="" className="form">
                <input type="text" placeholder="Enter Your Name"/>
                <input type="email" placeholder="abc@gmail.com"/>
                <input className="msg" type="text" placeholder="your message"/>
            </form>
            <button className="sub-btn">Submit</button>
        </div>
        </main>
    )
}