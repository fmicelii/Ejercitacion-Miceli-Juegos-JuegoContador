// JuegoContador - Implementación Claude Sonnet 4.5
// Componente principal que gestiona el juego de clicks contra el tiempo

import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// Constantes de configuración del juego
const GAME_DURATION = 5; // Duración del juego en segundos
const COUNTDOWN_MESSAGES = ['Preparados', 'Listos', 'Ya']; // Mensajes del countdown

function App() {
  // ============ ESTADOS DEL JUEGO ============
  
  // Fase actual del juego: 'idle' | 'countdown' | 'playing' | 'finished'
  const [gamePhase, setGamePhase] = useState('idle');
  
  // Puntaje de la ronda actual
  const [currentScore, setCurrentScore] = useState(0);
  
  // Récord histórico del jugador
  const [maxScore, setMaxScore] = useState(0);
  
  // Tiempo restante durante la fase de juego (en segundos)
  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION);
  
  // Índice del mensaje de countdown actual (0, 1, 2)
  const [countdownIndex, setCountdownIndex] = useState(0);
  
  // Flag para indicar si se logró un nuevo récord
  const [isNewRecord, setIsNewRecord] = useState(false);

  // ============ HANDLERS DE EVENTOS ============
  
  /**
   * Inicia el juego, comenzando con el countdown
   */
  const handleStartGame = useCallback(() => {
    setGamePhase('countdown');
    setCountdownIndex(0);
    setCurrentScore(0);
    setIsNewRecord(false);
  }, []);

  /**
   * Incrementa el contador cuando el usuario clickea durante el juego
   */
  const handleClick = useCallback(() => {
    if (gamePhase === 'playing') {
      setCurrentScore(prevScore => prevScore + 1);
    }
  }, [gamePhase]);

  /**
   * Reinicia el juego al estado inicial
   */
  const handleRestart = useCallback(() => {
    setGamePhase('idle');
    setCurrentScore(0);
    setTimeRemaining(GAME_DURATION);
    setCountdownIndex(0);
    setIsNewRecord(false);
  }, []);

  // ============ EFECTOS DEL JUEGO ============
  
  /**
   * Efecto: Gestiona la secuencia de countdown
   * Avanza por los mensajes "Preparados", "Listos", "Ya" cada segundo
   */
  useEffect(() => {
    if (gamePhase !== 'countdown') return;

    const timer = setTimeout(() => {
      if (countdownIndex < COUNTDOWN_MESSAGES.length - 1) {
        // Avanzar al siguiente mensaje
        setCountdownIndex(countdownIndex + 1);
      } else {
        // Countdown terminado, iniciar el juego
        setGamePhase('playing');
        setTimeRemaining(GAME_DURATION);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [gamePhase, countdownIndex]);

  /**
   * Efecto: Gestiona el temporizador durante la fase de juego
   * Decrementa el tiempo cada segundo hasta llegar a 0
   * NOTA: No incluye currentScore/maxScore en dependencias para evitar
   * reiniciar el timer cada vez que el usuario hace click
   */
  useEffect(() => {
    if (gamePhase !== 'playing') return;

    if (timeRemaining <= 0) {
      // Tiempo agotado, finalizar el juego
      setGamePhase('finished');
      
      // Verificar y actualizar récord si se superó
      if (currentScore > maxScore) {
        setMaxScore(currentScore);
        setIsNewRecord(true);
      } else {
        setIsNewRecord(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gamePhase, timeRemaining]); // eslint-disable-line react-hooks/exhaustive-deps

  // ============ RENDERIZADO ============
  
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="game-title">🎯 Juego Contador</h1>
        <p className="game-subtitle">¡Haz click lo más rápido posible!</p>
      </header>

      <main className="game-container">
        {/* Indicador de récord - Siempre visible */}
        <div className="max-score-container">
          <span className="max-score-label">Récord:</span>
          <span className="max-score-value">{maxScore}</span>
        </div>

        {/* FASE: Estado inicial / Esperando inicio */}
        {gamePhase === 'idle' && (
          <div className="game-content">
            <p className="instructions">
              Presiona el botón para comenzar. Tendrás 5 segundos para hacer click tantas veces como puedas.
            </p>
            <button 
              onClick={handleStartGame} 
              className="btn btn-primary btn-start"
            >
              Iniciar Juego
            </button>
          </div>
        )}

        {/* FASE: Countdown antes del juego */}
        {gamePhase === 'countdown' && (
          <div className="game-content">
            <div className="countdown-display">
              <p className="countdown-message">
                {COUNTDOWN_MESSAGES[countdownIndex]}
              </p>
            </div>
          </div>
        )}

        {/* FASE: Jugando */}
        {gamePhase === 'playing' && (
          <div className="game-content playing">
            <div className="game-stats">
              <div className="stat-item">
                <span className="stat-label">Tiempo restante:</span>
                <span className="stat-value timer">{timeRemaining}s</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Puntaje actual:</span>
                <span className="stat-value score">{currentScore}</span>
              </div>
            </div>
            
            <button 
              onClick={handleClick} 
              className="btn btn-game btn-click"
            >
              ¡Clickéame!
            </button>
          </div>
        )}

        {/* FASE: Juego terminado */}
        {gamePhase === 'finished' && (
          <div className="game-content">
            <div className="results">
              <h2 className="results-title">¡Tiempo terminado!</h2>
              
              <div className="final-score">
                <span className="final-score-label">Puntaje final:</span>
                <span className="final-score-value">{currentScore}</span>
              </div>

              {isNewRecord && (
                <p className="new-record">🎉 ¡Nuevo récord!</p>
              )}
              
              {!isNewRecord && currentScore === maxScore && maxScore > 0 && (
                <p className="tied-record">⭐ ¡Igualaste tu récord!</p>
              )}
            </div>

            <button 
              onClick={handleRestart} 
              className="btn btn-primary btn-restart"
            >
              Jugar de Nuevo
            </button>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p className="footer-text">
          Desarrollado con React | Claude Sonnet 4.5
        </p>
      </footer>
    </div>
  );
}

export default App;
