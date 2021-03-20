import React, { useState } from "react"
import "./style.css"
import IconCheckbox from "./icons/IconCheckbox.js"

const Order = (props) => {
    const {} = props

    const [checked, setChecked] = useState(false)
    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div className="flex flex-col  box-border items-center mb-4">
            <div className="order-titleblock">
                <h2 className="order__title">Форма заявки</h2>
                <h3 className="order__subtitle">
                    Забронировать время и получить обратный звонок можно прямо
                    сейчас
                </h3>
            </div>
            <form className="flex flex-col box-border order-form">
                <label className="flex flex-col">
                    <span className="order-label__text">имя</span>
                    <input
                        placeholder="Введите имя"
                        className="box-border rounded-10px border order__input"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="order-label__text">телефон</span>
                    <input
                        placeholder="+7 - (xxx) - xxx - xx - xx"
                        className="box-border rounded-10px border order__input"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="order-label__text">дата и время</span>
                    <input
                        placeholder="Например: 19.03.2021 в 14:00"
                        className="box-border rounded-10px border order__input"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="order-label__text">адрес</span>
                    <input
                        placeholder="Введите адрес"
                        className="box-border rounded-10px border order__input"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="order-label__text">
                        количество и возраст детей
                    </span>
                    <input
                        placeholder="Например: 2 детей, 8 и 10 лет"
                        className="box-border rounded-10px border order__input"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="order-label__text">
                        количество взрослых
                    </span>
                    <input
                        placeholder="Например: 2"
                        className="box-border rounded-10px border order__input"
                    />
                </label>
                <input
                    type="submit"
                    value="Оставить заявку"
                    className={
                        checked
                            ? "order-form__button"
                            : "order-form__button disabled"
                    }
                    disabled={!checked}
                />
            </form>
            <div className="order-checkbox">
                <label htmlFor="checkbox" onClick={handleCheck}>
                    <IconCheckbox checked={checked} />
                </label>
                <input type="checkbox" id="checkbox" className="hidden" />
                <span className="order-checkbox__text">
                    Ваши данные защищены. Нажимая на кнопку, вы даете согласие
                    на обработку персональных данных и соглашаетесь с политикой
                    конфиденциальности.
                </span>
            </div>
        </div>
    )
}

export default Order
