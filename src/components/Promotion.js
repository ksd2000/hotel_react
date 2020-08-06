import React from 'react';

function Promotion() {
  return (
    <div className="promotion">
      <p>Наши преимущества</p>
      <h2> Почему Aktis</h2>
      <div className="promotion_column promotion_column__col1">
        <h1>15</h1>
        <h3>стран обслуживания</h3>
        <h1>200+</h1>
        <h3>локальных компаний работают с нами</h3>
      </div>
      <div className="promotion_column">
        
        <h1>2000+</h1>
        <h3>корпоративных клиентов</h3>
        <h1>4000+</h1>
        <h3>доверяют сервису ежемесячно</h3>
      </div>
      <div className="promotion_column promotion_column__col3">
        <h3>Мы работаем по строгим регламентам стандартов качества</h3>
        <h3>Специальные условия сотрудничества</h3>
      </div>
    </div>
  );
}

export default Promotion;