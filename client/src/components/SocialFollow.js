import React from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (  
    <footer class="footer text-center">
    <div class="container">
      <ul class="list-inline mb-5">
        <li class="list-inline-item">
          <a className="facebook social" href="#!" > 
          <FontAwesomeIcon icon={faFacebook} size="4x" /> 
            <i class="icon-social-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a className="twitter social" href="#!"> 
          <FontAwesomeIcon icon={faTwitter} size="4x" />
            <i class="icon-social-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a className="instagram social" href="#!" > 
          <FontAwesomeIcon icon={faInstagram} size="4x" /> 
            <i class="icon-social-github"></i>
          </a>
        </li>
      </ul>
      <p class="text-muted small mb-0">Copyright &copy; BetterBiz 2020</p>
    </div>
  </footer>
    // <footer class="footer text-center">
    //   <h3>Connect with Us!</h3>   
    //   <a href="" 
    //     className="facebook social"> 
    //     <FontAwesomeIcon icon={faFacebook} size="2x" /> 
    //     </a> 
    //     <a href="" className="twitter social"> 
    //     <FontAwesomeIcon icon={faTwitter} size="2x" /> 
    //     </a> 
    //     <a href="" 
    //     className="instagram social"> 
    //     <FontAwesomeIcon icon={faInstagram} size="2x" /> 
    //     </a> 
    
    //  </footer>

  );
}