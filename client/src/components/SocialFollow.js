import React from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (  
    <footer class="footer text-center">
    <div class="container">
      <ul class="list-inline mb-5">
        <li class="list-inline-item"> 
        <h3>Connect with Us!</h3>   
         <a href="" 
        className="facebook social"> 
        <FontAwesomeIcon icon={faFacebook} size="2x" /> 
        </a> 
        <a href="" className="twitter social"> 
        <FontAwesomeIcon icon={faTwitter} size="2x" /> 
        </a> 
        <a href="" 
        className="instagram social"> 
        <FontAwesomeIcon icon={faInstagram} size="2x" /> 
        </a> 
        <a href="" 
        className="github"> 
        <FontAwesomeIcon icon={faGithub} size="2x" /> 
        </a> 
        </li>
      </ul>
      <p className="text-muted small mb-0">Copyright &copy; BetterBiz 2020</p>
    </div>
  </footer>

  );
}