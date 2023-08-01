import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Time from './components/Time';

import { MainPage } from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFound } from './pages/NotFound';
import Products from './pages/Products';

function App() {

  const products = [
    {
      id: 'black-capture',
      name: 'Black Capture',
      price: '300',
      images: [
        { src: "https://i.ibb.co/R7QCmX8/Black-Capture.jpg" },
        { src: "https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
        { src: "https://i.ibb.co/RcQyvBn/image.jpg" },
      ],
      desc: `
        КАПТ сборка для Radmir RP. С ней вы будете выигрывать все капты.\nСкрипты которые находятся в сборке:
        CLEO:
        CrosshairFix - Фиксация прицела (/cy | /cx)
        DMG INFORMER 2 - Информация о нанесении урона (+ колокольчик)
        Fast_Q - Моментальный выход из игры (/q)
        GammaFixByDarkP1xel - Устанавливает яркость игры на ту что была поставлена вами
        hnnssy_date_and_time - Точное время
        memory_full - Использует всю оперативную память на вашем устройстве
        Reconnect - перезаход без выхода из игры (/rec)
        TimeWeather - Установка погоды и времени (/st | /sw)
        WhiteNicksIds - Устанавливает ID белого цвета независимо от цвета ника
        AntiBH - Убирает падание при прыжке с быстрым бегом
        Alocker + FastRem - Позволяет открывать машину с сочетаний клавиш Alt + 1, надевает ремень
        безопасности
        автоматически при входе в транспорт
        DFL Editor by Dapo Show - Можно редактировать прорисовку/лоды/туман что прибавляет FPS)
        pricel - При наведении прицелом на игрока белые части прицела становятся красными
        NoAnimationMoney - отключает анимацию подсчёта денег при заходе в игру
        ASI:
        colormod - Устанавливает малозанимающую графику которая не забирает FPS
        crashes - Отключает лимит FPS
        MapZoomFixer - Исправляет движение карты
        radarrect - делает радар квадратным
        RefreshRateFixByDarkP1xel32 - устанавливает герцовку которая стоит на вашем мониторе
        SensFix - Устанавливает плавную чувствительность мыши, и при прицеливании стабилизирует
        чувствительность.
        Прочие скрипты:
        TimeCyc - Устанавливает красивое небо с облаками
        effects - Заменяет эффекты крови и выстрела 
      `,

      modsImgSrc: "https://i.ibb.co/R7QCmX8/Black-Capture.jpg",
    },
    {
      id: "Cyber-Radmir",
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
      id: "sborka-na-zakaz",
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




        <Route path='/products' element={<Products products={products} />}></Route>
        {/* <Route path='/products/black-capture' element={<BlackCapture />} />
          <Route path='/products/cyber-radmir' element={<CyberRadmir />} />
          <Route path='/products/sborka-na-zakaz' element={<SborkaNaZakaz />} /> */}

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Time />
    </div>
  );
}

export default App;
