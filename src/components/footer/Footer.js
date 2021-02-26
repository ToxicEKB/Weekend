import "../../tailwind.output.css";
import "./Footer.css";
import Vector from "./footerImg/Vector.svg";
import Vector_1 from "./footerImg/Vector_1.svg";
import Vector_2 from "./footerImg/Vector_2.svg";
import Vector_3 from "./footerImg/Vector_3.svg";

function Footer() {
  return (
    <div className="footer mx-auto">
        <div className="footer_icon mx-auto flex justify-between bg-black items-center mb-4">
            <a href="https://www.instagram.com/" target="_blank"><img src={Vector} alt=""></img></a>
          <a href="https://vk.com/" target="_blank"><img src={Vector_1} alt=""></img></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={Vector_2} alt=""></img></a>
            <a href="https://ok.ru/" target="_blank"><img src={Vector_3} alt=""></img></a>
        </div>
        <p className="leading-3 ml-2.5 text-left"><a href="" target="_blank" className="font-sans text-xs text-black font-medium">Сотрудничество</a></p>
        <p className="leading-3 ml-2.5 text-left"><a href="" target="_blank" className="font-sans text-xs text-black font-medium">Контакты</a></p>
        <p className="leading-3 ml-2.5 text-left"><a href="" target="_blank" className="font-sans text-xs text-black font-medium">Политика конфиденциальности и обработки данных</a></p>
        <p className="footer_copyright my-4 font-sans font-medium leading-3 text-black text-center">All rights reserved &copy; 2021 Sdetmi.org</p>
    </div>
  );
}

export default Footer;
