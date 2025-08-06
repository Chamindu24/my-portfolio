"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Command = {
  cmd: string;
  output: string;
  delay?: number;
};

type TerminalProps = {
  commands: Command[];
  typingSpeed?: number;
  blinkSpeed?: number;
  prompt?: string;
  className?: string;
};

const Terminal = ({
  commands,
  typingSpeed = 30,
  blinkSpeed = 600,
  prompt = "$",
  className = "",
}: TerminalProps) => {
  const [displayedOutputs, setDisplayedOutputs] = useState<string[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Handle the typing animation
  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsComplete(true);
      return;
    }

    const command = commands[currentCommandIndex];
    const isTypingCommand = currentTypingIndex <= command.cmd.length;
    const isTypingOutput = currentTypingIndex > command.cmd.length;

    if (isTypingCommand) {
      const timeout = setTimeout(() => {
        setCurrentTypingIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isTypingOutput) {
      const outputLength = currentTypingIndex - command.cmd.length - 1;
      if (outputLength <= command.output.length) {
        const timeout = setTimeout(() => {
          setCurrentTypingIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        // Move to next command after a pause
        const delay = command.delay || 800;
        const timeout = setTimeout(() => {
          setDisplayedOutputs((prev) => [
            ...prev,
            `${prompt} ${command.cmd}\n${command.output}`,
          ]);
          setCurrentCommandIndex((prev) => prev + 1);
          setCurrentTypingIndex(0);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentTypingIndex, currentCommandIndex, commands, typingSpeed, prompt]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, blinkSpeed);
    return () => clearInterval(interval);
  }, [blinkSpeed]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedOutputs, currentTypingIndex]);

  const renderCurrentLine = () => {
    if (currentCommandIndex >= commands.length) return null;

    const command = commands[currentCommandIndex];
    const isTypingCommand = currentTypingIndex <= command.cmd.length;
    const isTypingOutput = currentTypingIndex > command.cmd.length;

    let currentCommandText = "";
    let currentOutputText = "";

    if (isTypingCommand) {
      currentCommandText = command.cmd.substring(0, currentTypingIndex);
    } else if (isTypingOutput) {
      currentCommandText = command.cmd;
      const outputLength = currentTypingIndex - command.cmd.length - 1;
      currentOutputText = command.output.substring(0, outputLength);
    }

    return (
      <>
        <div className="flex items-start">
          <span className="text-purple-400 mr-2">{prompt}</span>
          <span className="text-green-400">{currentCommandText}</span>
        </div>
        {currentOutputText && (
          <motion.div 
            className="text-gray-300 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentOutputText}
          </motion.div>
        )}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 ${className}`}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 bg-gray-800 p-3 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400 ml-2">terminal</div>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="p-4 font-mono h-[300px] md:h-[350px] overflow-y-auto bg-gray-900/50 backdrop-blur-sm flex flex-col"
      >
        <div className="flex-grow flex flex-col justify-center">
          <div className="space-y-3">
            {displayedOutputs.map((output, index) => (
              <div key={index} className="mb-3">
                {output.split("\n").map((line, i) => (
                  <motion.div
                    key={i}
                    className={i === 0 ? "" : "text-gray-300 ml-4"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {i === 0 ? (
                      <div className="flex items-start">
                        <span className="text-purple-400 mr-2">{prompt}</span>
                        <span className="text-green-400">{line.substring(prompt.length + 1)}</span>
                      </div>
                    ) : (
                      line
                    )}
                  </motion.div>
                ))}
              </div>
            ))}

            <AnimatePresence>
              {renderCurrentLine()}
            </AnimatePresence>

            {currentCommandIndex < commands.length && (
              <span
                className={`inline-block w-2 h-5 ml-1 bg-green-400 transition-opacity duration-200 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            )}
          </div>
        </div>

        {isComplete && (
          <motion.div
            className="text-center py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 mb-2">Terminal session complete</div>
            <div className="flex justify-center gap-4">
              <button className="text-sm px-4 py-1 rounded bg-gray-800 text-green-400 border border-gray-700 hover:bg-gray-700 transition">
                Restart
              </button>
              <button className="text-sm px-4 py-1 rounded bg-gray-800 text-cyan-400 border border-gray-700 hover:bg-gray-700 transition">
                More Info
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;