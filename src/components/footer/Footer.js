import React from "react";
import "./Footer.css";

import logo from "./footerImg/Weekend лого Heart W 1.png";
import Vector from "./footerImg/Vector_11.svg";
import Vector_1 from "./footerImg/Vector_22.svg";
import Vector_2 from "./footerImg/Vector_33.svg";
import Vector_3 from "./footerImg/Vector_44.svg";

const Footer = () => {
  return (
    <div className="footer mx-auto">
        <div className="flex pb-5 footer_bg">
          <div className="pt-10">
            <img src={logo}></img>
          </div>
          <div className="ml-3 pt-5">
            <div className="footer_icon flex justify-between items-center mb-4">
                <a href="https://www.instagram.com/" target="_blank"><img src={Vector} alt=""></img></a>
                <a href="https://vk.com/" target="_blank"><img src={Vector_1} alt=""></img></a>
                <a href="https://www.facebook.com/" target="_blank"><img src={Vector_2} alt=""></img></a>
                <a href="https://ok.ru/" target="_blank"><img src={Vector_3} alt=""></img></a>
            </div>
            <p className="leading-3 mb-2 text-left"><a href="" target="_blank" className="text-xs font-sans font-semibold text-gray-400">Контакты</a></p>
            <p className="leading-3 mb-2 text-left"><a href="" target="_blank" className="text-xs font-sans font-semibold text-gray-400">Сотрудничество</a></p>
            <p className="leading-3 text-left"><a href="" target="_blank" className="text-xs font-sans font-semibold text-gray-400">Политика конфиденциальности<br /> и обработки данных</a></p>
          </div>
        </div>
        <p className="mb-4 mt-4 font-sans font-normal text-base leading-5 text-gray-400 text-center">All rights reserved &copy; 2021 Sdetmi.org</p>
    </div>
  );
}

export default Footer;
