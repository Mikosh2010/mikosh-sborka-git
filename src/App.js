import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Time from './components/Time';

import { MainPage } from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFound } from './pages/NotFound';
import PersonalArea from './pages/PersonalArea';
import Product from './container/product/Product';

function App() {

  let uniqueId = Date.now();

  const products = [
    {
      id: `${uniqueId}-black-capture`,
      name: 'Black Capture',
      price: '300',
      images: [
        { src: "https://i.ibb.co/R7QCmX8/Black-Capture.jpg" },
        { src: "https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
      ],
      desc: `
        КАПТ сборка для Radmir RP. С ней вы будете выигрывать все капты.
        
        Скрипты которые находятся в сборке:

        CLEO:

        1. CrosshairFix - Фиксация прицела (/cy | /cx)
        2. DMG INFORMER 2 - Информация о нанесении урона (+ колокольчик)
        3. Fast_Q - Моментальный выход из игры (/q)
        4. GammaFixByDarkP1xel - Устанавливает яркость игры на ту что была поставлена вами
        5. hnnssy_date_and_time - Точное время
        6. memory_full - Использует всю оперативную память на вашем устройстве
        7. Reconnect - перезаход без выхода из игры (/rec)
        8. TimeWeather - Установка погоды и времени (/st | /sw)
        9. WhiteNicksIds - Устанавливает ID белого цвета независимо от цвета ника
        10. AntiBH - Убирает падание при прыжке с быстрым бегом
        11. Alocker + FastRem - Позволяет открывать машину с сочетаний клавиш Alt + 1, надевает ремень
        12. безопасности
        13. автоматически при входе в транспорт
        14. DFL Editor by Dapo Show - Можно редактировать прорисовку/лоды/туман что прибавляет FPS)
        15. pricel - При наведении прицелом на игрока белые части прицела становятся красными
        16. NoAnimationMoney - отключает анимацию подсчёта денег при заходе в игру
        
        ASI:
        
        1. colormod - Устанавливает малозанимающую графику которая не забирает FPS
        2. crashes - Отключает лимит FPS
        3. MapZoomFixer - Исправляет движение карты
        4. radarrect - делает радар квадратным
        5. RefreshRateFixByDarkP1xel32 - устанавливает герцовку которая стоит на вашем мониторе
        6. SensFix - Устанавливает плавную чувствительность мыши, и при прицеливании стабилизирует
        7. чувствительность.
        8. Прочие скрипты:
        9. TimeCyc - Устанавливает красивое небо с облаками
        10. effects - Заменяет эффекты крови и выстрела 
      `,

      modsImgSrc: "https://i.ibb.co/R7QCmX8/Black-Capture.jpg",
    },
    {
      id: `${uniqueId}-cyber-radmir`,
      name: 'Cyber Radmir',
      price: '300',
      images: [
        { src: "https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg" },
        { src: "https://i.ibb.co/R7QCmX8/Black-Capture.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
      ],

      modsImgSrc: "https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg"
    },
    {
      id: `${uniqueId}-sborka-na-zakaz`,
      name: 'Сборка на заказ',
      price: '600',
      images: [
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
        { src: "https://i.imgur.com/iV2vYcE.png" },
        { src: "https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
      ],

      modsImgSrc: "https://i.ibb.co/RcQyvBn/image.jpg",
    }
  ]

  return (
    <div>
      <Helmet>
        <link rel="apple-touch-icon" sizes="144x144" href="./favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png" />
        <link rel="manifest" href="./favicons/site.webmanifest" />
      </Helmet>

      <Header />

      <Routes>
        <Route path='/' element={<MainPage products={products}/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/area' element={<PersonalArea/>} />

        <Route path='/product/:productId' element={<Product products={products} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Time />
    </div>
  );
}

export default App;
