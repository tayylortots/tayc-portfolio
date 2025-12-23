import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const SnakeGame = forwardRef<{
  up: () => void;
  down: () => void;
  left: () => void;
  right: () => void;
  retry: () => void;
  getGameOver: () => boolean;
}, {}>((_props, ref) => {
  const GRID_SIZE = 12;
  const CELL_SIZE = 16;
  
  const [snake, setSnake] = useState<Position[]>([{ x: 6, y: 6 }]);
  const [food, setFood] = useState<Position>({ x: 3, y: 3 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Generate random food position
  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  // Handle direction changes
  const handleDirectionChange = useCallback((newDirection: Direction) => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    setDirection(current => {
      // Prevent reversing direction
      if (newDirection === 'UP' && current === 'DOWN') return current;
      if (newDirection === 'DOWN' && current === 'UP') return current;
      if (newDirection === 'LEFT' && current === 'RIGHT') return current;
      if (newDirection === 'RIGHT' && current === 'LEFT') return current;
      return newDirection;
    });
  }, [gameStarted]);

  // Expose control methods to parent via ref
  useImperativeHandle(ref, () => ({
    up: () => handleDirectionChange('UP'),
    down: () => handleDirectionChange('DOWN'),
    left: () => handleDirectionChange('LEFT'),
    right: () => handleDirectionChange('RIGHT'),
    retry: () => restartGame(),
    getGameOver: () => gameOver,
  }), [handleDirectionChange, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(currentSnake => {
        const head = currentSnake[0];
        let newHead: Position;

        switch (direction) {
          case 'UP':
            newHead = { x: head.x, y: head.y - 1 };
            break;
          case 'DOWN':
            newHead = { x: head.x, y: head.y + 1 };
            break;
          case 'LEFT':
            newHead = { x: head.x - 1, y: head.y };
            break;
          case 'RIGHT':
            newHead = { x: head.x + 1, y: head.y };
            break;
        }

        // Check wall collision
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          setGameOver(true);
          return currentSnake;
        }

        // Check self collision
        if (currentSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameOver, gameStarted, generateFood]);

  // Restart game
  const restartGame = () => {
    setSnake([{ x: 6, y: 6 }]);
    setFood({ x: 3, y: 3 });
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Score Header */}
      <div className="flex justify-between items-center mb-2">
        <p 
          className="text-[#0f380f]"
          style={{ 
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '8px'
          }}
        >
          SCORE: {score}
        </p>
      </div>

      {/* Game Grid */}
      <div className="flex-1 flex items-center justify-center">
        <div 
          className="relative bg-[#9baa72] border-2 border-[#0f380f]"
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
          }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent ${CELL_SIZE - 1}px, rgba(15, 56, 15, 0.1) ${CELL_SIZE - 1}px, rgba(15, 56, 15, 0.1) ${CELL_SIZE}px),
              repeating-linear-gradient(90deg, transparent, transparent ${CELL_SIZE - 1}px, rgba(15, 56, 15, 0.1) ${CELL_SIZE - 1}px, rgba(15, 56, 15, 0.1) ${CELL_SIZE}px)
            `
          }}></div>

          {/* Snake */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute bg-[#0f380f]"
              style={{
                left: segment.x * CELL_SIZE + 1,
                top: segment.y * CELL_SIZE + 1,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                opacity: index === 0 ? 1 : 0.8,
              }}
            />
          ))}

          {/* Food */}
          <div
            className="absolute bg-[#5a3a3a] animate-pulse"
            style={{
              left: food.x * CELL_SIZE + 1,
              top: food.y * CELL_SIZE + 1,
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
            }}
          />

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 bg-[#0f380f] bg-opacity-70 flex items-center justify-center">
              <div className="text-center">
                <p 
                  className="text-[#8a9a5b] mb-2"
                  style={{ 
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '10px',
                    lineHeight: '1.8'
                  }}
                >
                  GAME OVER
                </p>
                <p 
                  className="text-[#8a9a5b] mb-3"
                  style={{ 
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '8px',
                    lineHeight: '1.8'
                  }}
                >
                  Score: {score}
                </p>
                <button
                  onClick={restartGame}
                  className="bg-[#8a9a5b] px-3 py-1 hover:brightness-110 transition-all"
                >
                  <p 
                    className="text-[#0f380f]"
                    style={{ 
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '7px'
                    }}
                  >
                    A: RETRY
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Start Screen */}
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 bg-[#0f380f] bg-opacity-50 flex items-center justify-center">
              <p 
                className="text-[#8a9a5b] text-center px-2 animate-pulse"
                style={{ 
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '7px',
                  lineHeight: '1.8'
                }}
              >
                USE D-PAD
                <br />
                TO START
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

SnakeGame.displayName = 'SnakeGame';

export default SnakeGame;