import './Footer.css'
const Footer = () => {
    return ( 
        <footer className="pagefooter">
        <div className="container">
            <div className="row">
                <div className="footertext">
                    <div className="textbox">
                    <h2>Student Welfare Group</h2>
                    <h4>Indian Institute of Technology, Kharagpur</h4>
                    </div>
                </div>
                <div className="footerlinks">
                    <div className="linksbox">
                        <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.swg.swg_app&fbclid=IwAR1C4zpX98KXWpCg7T6R9Bsg85ssDs91cYkGfpVaRZ9t-KMOdj1yzVy-EYg">SWG App</a></li>
                        <li><a href="/about">Our Team</a></li>
                    </ul>
                    </div>                    
                </div>
                
                <div className="footeremail">
                <div className="resoucesbox">
                        <h2>Resources</h2>
                    <ul>
                        <li><a href="/resources2">Study Material</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1kHOCcFcWkncHaAPZtzOCHUDn4aKQ84KV?usp=sharing" target='_blank' >Fundae Docs</a></li>
                        <li><a href="/internblogs">Internship Blogs</a></li>
                        <li><a href="/placementblogs">Placement Blogs</a></li>
                    </ul>
                    </div> 
                </div>
                <div className="mobilebox">
                    <div className="contactbox">
                        <h2>Contact Us</h2>
                    <ul>
                        <li><a href="#">info.swgiitkgp@gmail.com</a></li>
                    </ul>
                    </div>     
                    <div className="followbox">
                        <h2>Follow Us</h2>
                    <ul>
                    <a href="https://www.facebook.com/SWGIITKGP" target="_blank" className="facebook"><i className="smlinks fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/swg.iit_kgp/" target="_blank" className="instagram"><i className="smlinks fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/student-welfare-group-iit-kharagpur" target="_blank" className="linkedin"><i className="smlinks fa fa-linkedin"></i></a>
              <a href="https://medium.com/@swgiitkgp" target="_blank" className='medium'><i className="smlinks fa-brands fa-medium"></i></a>
              <a href="https://www.youtube.com/@studentwelfaregroupiitkhar9316" target="_blank" className="youtube"><i className="smlinks fa fa-youtube"></i></a>
                    </ul>
                    </div> 
                    </div>
                <div className="footercontact">
                    <div className="contactbox">
                        <h2>Contact Us</h2>
                    <ul>
                        <li><a href="mailto: info.swgiitkgp@gmail.com" target="_blank">info.swgiitkgp@gmail.com</a></li>
                    </ul>
                    </div>     
                    <div className="followbox">
                        <h2>Follow Us</h2>
                    <ul>

                    <a href="https://www.facebook.com/SWGIITKGP" target="_blank" className="facebook"><i className="smlinks fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/swg.iit_kgp/" target="_blank" className="instagram"><i className="smlinks fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/student-welfare-group-iit-kharagpur" target="_blank" className="linkedin"><i className="smlinks fa fa-linkedin"></i></a>
              <a href="https://medium.com/@swgiitkgp" target="_blank" className='medium'><i className="smlinks fa-brands fa-medium"></i></a>

              <a href="https://www.youtube.com/@studentwelfaregroupiitkhar9316" target="_blank" className="youtube"><i className="smlinks fa fa-youtube"></i></a>

                    </ul>
                    </div>                
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;