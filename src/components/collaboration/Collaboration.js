import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { CollaborationText } from "./CollaborationText";

export const Collaboration = () => {
    const [ isShown, setIsShown ] = useState(true);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        setIsShown(!isShown);
        console.log(data)};

    const getSamples = () => {
        window.open('https://drive.google.com/drive/folders/1Xrv5Qx3vHwxVVMOr69ma6Scw4KHdA30h', '_blank');
    }; 

    return (
        <div className="text-left md:px-9 px-6">
           <CollaborationText />
            <button onClick={getSamples}>Получить образцы документов</button>             
            <h1>Начать сотрудничество</h1>
           { isShown &&
            <form onSubmit={handleSubmit(onSubmit)}> 
                <p><input 
                    type="text" 
                    name="yourCompanyName" 
                    ref={register({ required: true })}
                    placeholder="Название Вашей компании">
                </input></p>
                <p><input 
                    type="text" 
                    name="name" 
                    ref={register({ required: true })}
                    placeholder="Имя">
                </input></p>
                <p><input
                    type="tel" 
                    name="phone"
                    ref={register({ required: true })}
                    placeholder="Телефон">
                </input></p>
                <p><input
                    type="email" 
                    name="email" 
                    ref={register({ required: true })}
                    placeholder="e-mail" 
                    className="email">
                </input></p>
                <p><input 
                    id="submit"
                    type="submit"
                    value="Отправить">
                </input></p> 
                <p><input 
                    type="checkbox" 
                    name="checkbox" 
                    ref={register({ required: true })}
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

export default Collaboration;
