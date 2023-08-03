import React from 'react';
import './UI/showDesc.css'

const ShowDesc = ({product, active, setActive}) => {
    return (
        <div>
            <div className={active ? "descModal active" : "descModal"} onClick={() => setActive(false)}>
                <div className={active ? "descModal__wrapper active" : "descModal__wrapper"} onClick={e => e.stopPropagation()}>
                    <i className="ri-close-line descModal__close" onClick={() => setActive(false)}></i>

                    <h3 className="descModal__title">{product.name}</h3>
                    <div className="descModal__desc">
                        <div className="title">КАПТ сборка для Radmir RP. С ней вы будете выигрывать все капты.</div>
                        <br/>
                        <div className="title">Скрипты которые находятся в сборке:</div>
                        <br/>
                        <div className="title">CLEO:</div>
                        <br/>
                        CrosshairFix - Фиксация прицела (/cy | /cx)
                        <br/>
                        DMG INFORMER 2 - Информация о нанесении урона (+ колокольчик)
                        <br/>
                        Fast_Q - Моментальный выход из игры (/q)
                        <br/>
                        GammaFixByDarkP1xel - Устанавливает яркость игры на ту что была поставлена вами
                        <br/>
                        hnnssy_date_and_time - Точное время
                        <br/>
                        memory_full - Использует всю оперативную память на вашем устройстве
                        <br/>
                        Reconnect - перезаход без выхода из игры (/rec)
                        <br/>
                        TimeWeather - Установка погоды и времени (/st | /sw)
                        <br/>
                        WhiteNicksIds - Устанавливает ID белого цвета независимо от цвета ника
                        <br/>
                        AntiBH - Убирает падание при прыжке с быстрым бегом
                        <br/>
                        Alocker + FastRem - Позволяет открывать машину с сочетаний клавиш Alt + 1, надевает ремень
                        безопасности
                        автоматически при входе в транспорт
                        <br/>
                        DFL Editor by Dapo Show - Можно редактировать прорисовку/лоды/туман что прибавляет FPS)
                        <br/>
                        pricel - При наведении прицелом на игрока белые части прицела становятся красными
                        <br/>
                        NoAnimationMoney - отключает анимацию подсчёта денег при заходе в игру
                        <br/>
                        <div className="title">ASI:</div>
                        <br/>
                        colormod - Устанавливает малозанимающую графику которая не забирает FPS
                        <br/>
                        crashes - Отключает лимит FPS
                        <br/>
                        MapZoomFixer - Исправляет движение карты
                        <br/>
                        radarrect - делает радар квадратным
                        <br/>
                        RefreshRateFixByDarkP1xel32 - устанавливает герцовку которая стоит на вашем мониторе
                        <br/>
                        SensFix - Устанавливает плавную чувствительность мыши, и при прицеливании стабилизирует
                        чувствительность.
                        <br/>
                        <br/>
                        <div className="title">Прочие скрипты:</div>
                        <br/>
                        TimeCyc - Устанавливает красивое небо с облаками
                        <br/>
                        effects - Заменяет эффекты крови и выстрела
                        <br/>
                    </div>
                    <div className='indent'></div>
                </div>
            </div>
        </div>
    );
}

export default ShowDesc;
