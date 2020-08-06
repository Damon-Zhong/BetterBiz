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
        <h3>Find us on Github</h3>   
        <a href="https://github.com/Damon-Zhong/BetterBiz" 
        className="github social"> 
        <FontAwesomeIcon icon={faGithub} size="2x" /> 
        </a> 
        </li>
      </ul>
      <p className="text-muted small mb-0">Built with ❤️ in Toronto</p>
      <p className="text-muted small mb-0">Copyright &copy; BetterBiz 2020</p>
    </div>
  </footer>

  );
}