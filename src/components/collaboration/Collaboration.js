import React, { useState } from 'react';
import "../../tailwind.output.css";
import "./Collaboration.css";
import { CollaborationText } from "./CollaborationText";

export const Collaboration = () => {
    const [ isShown, setIsShown ] = useState(true);
    const [ check, setCheck ] = useState(false);
    const [ form, setForm ] = useState({
		yourCompanyName: '',
		name: '',
        phone: '',
        email: '',
	});

    const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};
    const toSend = () => {
        setIsShown(!isShown);
    };
    const getChecked = (e) => {
        setCheck(!check);
        document.getElementById('submit').disabled = check
    };
    const getSamples = () => {
        window.open('https://drive.google.com/drive/folders/1Xrv5Qx3vHwxVVMOr69ma6Scw4KHdA30h', '_blank');
    }; 

    return (
        <div className="collaboration mx-auto text-left">
           <CollaborationText />
            <button onClick={getSamples}>Получить образцы документов</button>             
            <h1>Начать сотрудничество</h1>
           { isShown &&
            <form>
                <p><input 
                    type="text" 
                    name="yourCompanyName" 
                    value={form.yourCompanyName}
                    onChange={changeHandler} 
                    placeholder="Название Вашей компании">
                </input></p>
                <p><input 
                    type="text" 
                    name="name" 
                    value={form.name}
                    onChange={changeHandler} 
                    placeholder="Имя">
                </input></p>
                <p><input
                    type="tel" 
                    name="phone" 
                    value={form.phone}
                    onChange={changeHandler} 
                    placeholder="Телефон">
                </input></p>
                <p><input
                    type="email" 
                    name="email" 
                    value={form.email}
                    onChange={changeHandler} 
                    placeholder="e-mail" 
                    className="email">
                </input></p>
                <p><input 
                    id="submit"
                    disabled={!check}
                    type="submit" 
                    onClick={toSend}
                    value="Отправить">
                </input></p> 
                <p><input 
                    type="checkbox" 
                    name="checkbox" 
                    onChange={getChecked}
                    checked={check}
                    >   
                    </input><a href="" target="_blank">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</a></p>   
            </form>
            }
            { !isShown &&
            <p>Спасибо, ваша заявка отправлена. Свяжемся с Вами в ближайшее время.</p>
            }
            </div>
    )
};


