// JuegoContador - Solución basada en la consigna

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('idle'); // 'idle', 'countdown', 'playing', 'finished'
  const [countdown, setCountdown] = useState(3); // Cuenta regresiva inicial
  const [score, setScore] = useState(0); // Puntaje actual
  const [maxScore, setMaxScore] = useState(0); // Puntaje máximo
  const [timeLeft, setTimeLeft] = useState(5); // Tiempo restante durante el juego

  // Manejar el inicio del juego
  const startGame = () => {
    setGameState('countdown');
    setCountdown(3);
  };

  // Lógica de la cuenta regresiva
  useEffect(() => {
    if (gameState === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'countdown' && countdown === 0) {
      setGameState('playing');
      setTimeLeft(5);
    }
  }, [gameState, countdown]);

  // Lógica del tiempo restante durante el juego
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'playing' && timeLeft === 0) {
      setGameState('finished');
      if (score > maxScore) {
        setMaxScore(score);
      }
    }
  }, [gameState, timeLeft]); // Eliminado 'score' y 'maxScore' para evitar reiniciar el temporizador al clickear

  // Manejar clics durante el juego
  const handleClick = () => {
    if (gameState === 'playing') {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Reiniciar el juego
  const resetGame = () => {
    setGameState('idle');
    setScore(0);
  };

  return (
    <div className="app">
      <h1>Juego Contador</h1>
      <p>Puntaje Máximo: {maxScore}</p>

      {gameState === 'idle' && (
        <button onClick={startGame} className='iniciar-juego'>Iniciar Juego</button>
      )}

      {gameState === 'countdown' && (
        <p>{countdown === 3 ? 'Preparados' : countdown === 2 ? 'Listos' : 'Ya'}</p>
      )}

      {gameState === 'playing' && (
        <div>
          <p>Tiempo Restante: {timeLeft}s</p>
          <p>Puntaje Actual: {score}</p>
          <button onClick={handleClick} className='clickeame'>¡Clickéame!</button>
        </div>
      )}

      {gameState === 'finished' && (
        <div>
          <p>¡Tiempo terminado!</p>
          <p>Puntaje Final: {score}</p>
          <button onClick={resetGame} className='reiniciar-juego'>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default App;