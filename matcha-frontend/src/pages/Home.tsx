import React from 'react';
// import homeBg from '../assets/images/home-bg.jpg'; // Предположим, у тебя есть такая картинка
// import CommonImage from '../components/CommonImage';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Matcha</h1>
            <p>Find your soulmate here!</p>
            {/* Пример использования компонента для изображений с дополнительным классом для домашней страницы */}
            {/*<CommonImage src={homeBg} alt="Home Background" customClass="home-image" />*/}
        </div>
    );
};

export default Home;
