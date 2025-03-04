import React from 'react';
// import homeBg from '../assets/images/home-bg.jpg'; // Предположим, у тебя есть такая картинка
// import CommonImage from '../components/CommonImage';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Добро пожаловать в Matcha</h1>
            <p>Найди свою идеальную пару в нашем приложении для знакомств.</p>
            {/* Пример использования компонента для изображений с дополнительным классом для домашней страницы */}
            {/*<CommonImage src={homeBg} alt="Home Background" customClass="home-image" />*/}
        </div>
    );
};

export default Home;
