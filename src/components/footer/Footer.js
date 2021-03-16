import React from "react";

import logo from "./footerImg/Weekend лого Heart W 1.png";
import Vector from "./footerImg/Vector_11.svg";
import Vector_1 from "./footerImg/Vector_22.svg";
import Vector_2 from "./footerImg/Vector_33.svg";
import Vector_3 from "./footerImg/Vector_44.svg";

const Footer = () => {
  return (
    <div className="w-96 md:w-full xl:w-full mx-auto text-center">
        <div className="bg-footer sm:bg-lightGreen bg-cover bg-no-repeat pb-5">
          <div className="flex justify-center">
            <div className="pt-10">
              <a href="/"><img src={logo}></img></a>
            </div>
            <div className="ml-3 pt-5 md:ml-12 md:flex md:flex-row-reverse md:pt-10">
              <div className="w-44 flex justify-between items-center mb-4 md:ml-12">
                  <a href="https://www.instagram.com/" target="_blank"><img src={Vector} alt="instagram"></img></a>
                  <a href="https://vk.com/" target="_blank"><img src={Vector_1} alt="vk"></img></a>
                  <a href="https://www.facebook.com/" target="_blank"><img src={Vector_2} alt="facebook"></img></a>
                  <a href="https://ok.ru/" target="_blank"><img src={Vector_3} alt="ok"></img></a>
              </div>
             <div>
             <p className="leading-3 mb-2 text-left"><a href="/contacts" target="_blank" className="text-xs font-sans font-semibold text-gray-400">Контакты</a></p>
              <p className="leading-3 mb-2 text-left"><a href="/collaboration" target="_blank" className="text-xs font-sans font-semibold text-gray-400">Сотрудничество</a></p>
              <p className="leading-3 text-left"><a href="/politics" target="_blank" className="text-xs font-sans font-semibold text-gray-400">Политика конфиденциальности<br /> и обработки данных</a></p>
             </div>
            </div>
          </div>
          <p className="mt-4 font-sans font-normal text-base leading-5 text-gray-400 text-center">All rights reserved &copy; 2021 Sdetmi.org</p>
        </div>
    </div>
  );
}

export default Footer;
