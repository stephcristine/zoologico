import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [grupos, setGrupos] = useState({});

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const response = await axios.get('https://aes.shenlu.me/api/v1/species');
        const animais = response.data;

        const agrupado = animais.reduce((acc, animal) => {
          const status = animal.conservation_status || 'Desconhecido';
          if (!acc[status]) {
            acc[status] = [];
          }
          acc[status].push(animal);
          return acc;
        }, {});

        setGrupos(agrupado);
      } catch (error) {
        console.error('Erro ao buscar: ', error);
      }
    };

    getAnimals();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Animais em Extinção</h1>

      {Object.entries(grupos).map(([status, animais], index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <h2 style={{ marginLeft: '16px' }}>{status}</h2>
          <div className="carrossel-container">
            {animais.map((animal) => (
              <div className="card" key={animal.id}>
                <img
                  src={`https://aes.shenlu.me/images/${animal.id}.jpg`}
                  alt={animal.common_name}
                />
                <p>{animal.common_name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
