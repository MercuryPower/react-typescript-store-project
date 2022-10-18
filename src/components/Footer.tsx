import React from "react";
import VKLogo from "../images/VK.svg"
import TelegramLogo from "../images/Telegram.svg"
import WhatsappLogo from "../images/Whatsapp.svg"
import LangLogo from "../images/Lang.svg"
import { Link } from "react-router-dom";

export function Footer(){
    return(
        <div className="w-[1110px] mx-4 my-4 border-2 justify-between rounded-3xl items-center shadow-2xl flex h-40">
            <h1 className="flex px-4 py-2 font-bold pt-2 text-2xl mb-12 ml-4">QPICK</h1>
            <div className="ml-4">
            <p>Избранное</p>
            <Link to="/cart">Корзина</Link>
            <p>Контакты</p>
            </div>
            <div>
                <p className="mb-6">Условия сервиса</p>
                <div className="flex">
                <img src={LangLogo} alt="Language" />
                <p className="font-bold text-sm text-yellow-400 pl-4">Рус</p>
                <p className="font-medium text-sm pl-4">Eng</p>
                </div>
            </div>
            <div className="flex px-4 mb-8">
                <img src={VKLogo} className="px-2" alt="VK" />
                <img src={TelegramLogo} className="px-2" alt="Telegram" />
                <img src={WhatsappLogo} className="px-2" alt="Whatapp" />
            </div>
        </div>
    )
}