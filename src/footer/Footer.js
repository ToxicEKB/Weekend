import "./Footer.css";
import Vector from "./footerImg/Vector.svg";
import Vector_1 from "./footerImg/Vector_1.svg";
import Vector_2 from "./footerImg/Vector_2.svg";
import Vector_3 from "./footerImg/Vector_3.svg";

function Footer() {
  return (
    <div className="footer">
        <div className="footer_icon">
            <a href="https://www.instagram.com/" target="_blank"><img src={Vector} alt=""></img></a>
          <a href="https://vk.com/" target="_blank"><img src={Vector_1} alt=""></img></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={Vector_2} alt=""></img></a>
            <a href="https://ok.ru/" target="_blank"><img src={Vector_3} alt=""></img></a>
        </div>
        <p className="footer_text"><a href="" target="_blank" className="footer_contact">Сотрудничество</a></p>
        <p className="footer_text"><a href="" target="_blank" className="footer_contact">Контакты</a></p>
        <p className="footer_text"><a href="" target="_blank" className="footer_contact">Политика конфиденциальности и обработки данных</a></p>
        <p className="footer_copyright">All rights reserved &copy; 2021 Sdetmi.org</p>
    </div>
  );
}

export default Footer;
