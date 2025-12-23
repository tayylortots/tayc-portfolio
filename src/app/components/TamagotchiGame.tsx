import { useEffect, useState, useCallback } from 'react';
import { tamagotchi } from '../../assets/images';

interface TamagotchiGameProps {
  onBack: () => void;
  dpadInput: string | null;
  aPressed: boolean;
}

type Action = 'feed' | 'play' | 'clean' | 'sleep';

export function TamagotchiGame({ onBack, dpadInput, aPressed }: TamagotchiGameProps) {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [cleanliness, setCleanliness] = useState(80);
  const [energy, setEnergy] = useState(70);
  const [selectedAction, setSelectedAction] = useState<Action>('feed');
  const [breathing, setBreathing] = useState(true);
  const [isDead, setIsDead] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isEating, setIsEating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCleaning, setIsCleaning] = useState(false);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [age, setAge] = useState(0);

  const actions: Action[] = ['feed', 'play', 'clean', 'sleep'];

  // Breathing animation
  useEffect(() => {
    const breathInterval = setInterval(() => {
      setBreathing(prev => !prev);
    }, 500);
    return () => clearInterval(breathInterval);
  }, []);

  // Age increment
  useEffect(() => {
    const ageInterval = setInterval(() => {
      setAge(prev => prev + 1);
    }, 10000); // Age increases every 10 seconds
    return () => clearInterval(ageInterval);
  }, []);

  // Stats decay over time
  useEffect(() => {
    if (isDead || isSleeping) return;

    const decayInterval = setInterval(() => {
      setHunger(prev => Math.max(0, prev - 1));
      setHappiness(prev => Math.max(0, prev - 0.5));
      setCleanliness(prev => Math.max(0, prev - 0.3));
      setEnergy(prev => Math.max(0, prev - 0.5));
    }, 2000);

    return () => clearInterval(decayInterval);
  }, [isDead, isSleeping]);

  // Check for death
  useEffect(() => {
    if (hunger <= 0 || happiness <= 0 || energy <= 0) {
      setIsDead(true);
    }
  }, [hunger, happiness, energy]);

  // D-pad navigation
  useEffect(() => {
    if (!dpadInput) return;

    if (dpadInput === 'left') {
      setSelectedAction(prev => {
        const currentIndex = actions.indexOf(prev);
        return actions[(currentIndex - 1 + actions.length) % actions.length];
      });
    } else if (dpadInput === 'right') {
      setSelectedAction(prev => {
        const currentIndex = actions.indexOf(prev);
        return actions[(currentIndex + 1) % actions.length];
      });
    }
  }, [dpadInput]);

  // Action execution
  useEffect(() => {
    if (!aPressed || isDead) return;

    if (selectedAction === 'feed') {
      setHunger(prev => Math.min(100, prev + 30));
      setShowMessage('Yum!');
      setIsEating(true);
      setTimeout(() => setIsEating(false), 1000);
    } else if (selectedAction === 'play') {
      setHappiness(prev => Math.min(100, prev + 25));
      setHunger(prev => Math.max(0, prev - 10));
      setEnergy(prev => Math.max(0, prev - 15));
      setShowMessage('Wheee!');
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 1000);
    } else if (selectedAction === 'clean') {
      setCleanliness(prev => Math.min(100, prev + 40));
      setShowMessage('Sparkly!');
      setIsCleaning(true);
      setTimeout(() => setIsCleaning(false), 1000);
    } else if (selectedAction === 'sleep') {
      setIsSleeping(true);
      setEnergy(prev => Math.min(100, prev + 50));
      setShowMessage('Zzz...');
      setTimeout(() => {
        setIsSleeping(false);
        setShowMessage('Refreshed!');
      }, 3000);
    }

    // Clear message after 2 seconds
    setTimeout(() => setShowMessage(null), 2000);
  }, [aPressed]);

  const resetGame = useCallback(() => {
    setHunger(50);
    setHappiness(50);
    setCleanliness(80);
    setEnergy(70);
    setIsDead(false);
    setIsSleeping(false);
    setShowMessage(null);
    setAge(0);
  }, []);

  useEffect(() => {
    if (aPressed && isDead) {
      resetGame();
    }
  }, [aPressed, isDead, resetGame]);

  const getStatColor = (value: number) => {
    if (value > 60) return '#0f380f';
    if (value > 30) return '#8a7a0f';
    return '#8a0f0f';
  };

  const executeAction = (action: Action) => {
    if (isDead || isSleeping) return;

    if (action === 'feed') {
      setHunger(prev => Math.min(100, prev + 30));
      setShowMessage('Yum!');
      setIsEating(true);
      setTimeout(() => setIsEating(false), 1000);
    } else if (action === 'play') {
      setHappiness(prev => Math.min(100, prev + 25));
      setHunger(prev => Math.max(0, prev - 10));
      setEnergy(prev => Math.max(0, prev - 15));
      setShowMessage('Wheee!');
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 1000);
    } else if (action === 'clean') {
      setCleanliness(prev => Math.min(100, prev + 40));
      setShowMessage('Sparkly!');
      setIsCleaning(true);
      setTimeout(() => setIsCleaning(false), 1000);
    } else if (action === 'sleep') {
      setIsSleeping(true);
      setEnergy(prev => Math.min(100, prev + 50));
      setShowMessage('Zzz...');
      setTimeout(() => {
        setIsSleeping(false);
        setShowMessage('Refreshed!');
      }, 3000);
    }

    // Clear message after 2 seconds
    setTimeout(() => setShowMessage(null), 2000);
  };

  return (
    <div className="relative w-full h-full flex flex-col p-3">
      {/* Header - Age and Status */}
      <div className="pb-2 mb-2">
        <div className="flex justify-between items-center">
          <p 
            className="text-[#0f380f]"
            style={{ 
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '6px'
            }}
          >
            AGE: {age}
          </p>
          <p 
            className="text-[#0f380f]"
            style={{ 
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '6px'
            }}
          >
            {isSleeping ? 'SLEEPING' : isDead ? 'DECEASED' : 'ALIVE'}
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#0f380f] mt-2"></div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative min-h-0">
        {/* Character Display */}
        <div className="relative">
          {/* Death overlay */}
          {isDead && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p 
                className="text-[#0f380f]"
                style={{ 
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '20px'
                }}
              >
                X_X
              </p>
            </div>
          )}
          
          {/* Sleep overlay */}
          {isSleeping && !isDead && (
            <div className="absolute -top-6 -right-6">
              <p 
                className="text-[#0f380f] animate-pulse"
                style={{ 
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '10px'
                }}
              >
                Zzz
              </p>
            </div>
          )}

          {/* Character sprite */}
          <img 
            src={
              isEating 
                ? (breathing ? tamagotchi.eatingFrame1 : tamagotchi.eatingFrame2)
                : isPlaying
                  ? (breathing ? tamagotchi.playingFrame1 : tamagotchi.playingFrame2)
                  : isCleaning
                    ? (breathing ? tamagotchi.cleaningFrame1 : tamagotchi.cleaningFrame2)
                    : isSleeping
                      ? (breathing ? tamagotchi.sleepingFrame1 : tamagotchi.sleepingFrame2)
                      : (breathing ? tamagotchi.characterFrame1 : tamagotchi.characterFrame2)
            }
            alt="Pet character"
            className="w-24 h-24 image-rendering-pixelated"
            style={{ 
              imageRendering: 'pixelated',
              opacity: isDead ? 0.3 : 1,
              filter: isSleeping ? 'brightness(0.7)' : 'none'
            }}
          />

          {/* Message bubble */}
          {showMessage && !isDead && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div 
                className="bg-[#9baa72] px-2 py-1"
                style={{
                  boxShadow: '0 0 0 1px #0f380f'
                }}
              >
                <p 
                  className="text-[#0f380f]"
                  style={{ 
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '6px'
                  }}
                >
                  {showMessage}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Death screen */}
        {isDead && (
          <div className="mt-2 text-center">
            <p 
              className="text-[#0f380f] mb-1"
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '7px',
                lineHeight: '1.8'
              }}
            >
              YOUR PET DIED
            </p>
            <p 
              className="text-[#0f380f]"
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '5px',
                lineHeight: '1.8'
              }}
            >
              A: RESTART
            </p>
          </div>
        )}
      </div>

      {/* Action Menu */}
      {!isDead && (
        <div className="pt-2">
          <div className="w-full h-[2px] bg-[#0f380f] mb-2"></div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {actions.map((action) => (
              <button
                key={action}
                className={`px-2 py-1 cursor-pointer hover:brightness-110 transition-all ${
                  selectedAction === action 
                    ? 'bg-[#8a9a5b]' 
                    : 'bg-[#9baa72]'
                }`}
                style={{ 
                  boxShadow: '0 0 0 1px #0f380f, inset 0 0 0 1px #0f380f'
                }}
                onClick={() => executeAction(action)}
              >
                <p 
                  className="text-[#0f380f] uppercase"
                  style={{ 
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '5px'
                  }}
                >
                  {action}
                </p>
              </button>
            ))}
          </div>
          <p 
            className="text-[#0f380f] text-center"
            style={{ 
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '6px'
            }}
          >
            D-Pad + A to select
          </p>
        </div>
      )}
    </div>
  );
}