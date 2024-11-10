import "../style/education.css";


export default function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
            <h1>Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ex, aliquid,
             facilis rerum officia itaque eaque asperiores error iusto quidem consectetur adipisci
             vitae quibusdam doloremque commodi, architecto numquam...</p>
            </div>
            <div className="box-cont-edu">
                <div>
                  <h1 className="uni-name">University of Karachi</h1>
                  <span>Student</span>
                </div>
                <div className="sci">
                    <h1>Bachelor in Political Science</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat
                       provident dolore, fugit asperiores, quisquam at illo in quia non ex eaque,
                       perspiciatis culpa delectus mollitia.Suscipit blanditiis veniam vitae!</p>
                </div>
            </div>
             { /*box-2*/}

            <div className="box-cont-edu">
                <div>
                  <h1 className="uni-name">Governor IT Initiative</h1>
                  <span>Student</span>
                </div>
                <div className="sci">
                    <h1>Generative AI</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat
                       provident dolore, fugit asperiores, quisquam at illo in quia non ex eaque,
                       perspiciatis culpa delectus mollitia.Suscipit blanditiis veniam vitae!</p>
                </div>
            </div>
             
             {/*box-3*/}
            <div className="box-cont-edu">
                <div>
                  <h1 className="uni-name">Web Development</h1>
                  <span>Student</span>
                </div>
                <div className="sci">
                    <h1>Certificate of web training</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat
                       provident dolore, fugit asperiores, quisquam at illo in quia non ex eaque,
                       perspiciatis culpa delectus mollitia.Suscipit blanditiis veniam vitae!</p>
                </div>
            </div>
        </main>
    )
}