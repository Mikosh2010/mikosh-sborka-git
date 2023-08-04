import React, {useState} from 'react';
import './UI/Edge.css';

const Edge = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i)
    }

    return (
        <div className="edge__content">
            {data.map((item, i) => (
                <div className="edge__item" id="edge-item" key={item.number}>
                    <div className="edge__header" onClick={() => toggle(i)}>
                        <li className="edge__text"><span>{item.number}</span>{item.title}</li><i className={selected === i ? "ri-arrow-down-s-line edge__arrow arrow-active" : "ri-arrow-down-s-line edge__arrow"}></i>
                    </div>
                    <div className={selected === i ? "edge__desc animated" : "edge__desc"} style={{maxHeight: selected === i ? "170px" : '0px'}}>{item.desc}</div>
                </div>
            ))}
        </div>
        
    );
};

const data = [
    {
        number: '01. ',
        title: 'Высокий сервис обслуживания',
        desc: 
        `
            При ошибках с нашей стороны, администрация всегда вам поможет с ошибкой, для этого обратитесь в лс группы, и там вам ответят и помогут.
        `
    },
    {
        number: '02. ',
        title: 'Обеспечение работы сборок',
        desc: 
        `
            Наши сборки стабильно будут работать на обновлениях RADMIR CRMP, но если же будут моменты с неисправностями, мы сразу же возьмёмся за это. Также сборку можно будет сразу обновить в нашем лаунчере Mikosh Launcher.
        `
    },
    {
        number: '03. ',
        title: 'Удобный сервис покупки',
        desc: 
        `
            У нас покупка производится очень удобно и быстро. При покупке товара вас перекидывает на сайт оплаты где вы сразу же можете оплатить, и данная сборка добавиться к вам на аккаунт.
        `
    },
    {
        number: '04. ',
        title: 'Качество модификаций',
        desc: 
        ` 
            В наших сборках  очень качественный и уникальный игровой интерфейс, а также присутствует множество скриптов. Также эти скрипты сортируются по компонентам, тоесть в лаунчере вы можете выбирать что вам нужно а что не нужно.
        `
    },
    {
        number: '05. ',
        title: 'Mikosh Launcher',
        desc: 
        `
            У нас имеется удобный и качественный лаунчер для установки и запуска наших модификаций. Скачать его можно в шапке сайта или тут. Установка сборки производится через компоненты. Тоесть вы сами сможете выбрать что вам нужно из элементов сборки, а что нет. Также через сам лаунчер можно будет сразу же запустить игру вместе со сборкой.
        `
    }
]

export default Edge;