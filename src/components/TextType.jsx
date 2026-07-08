import { useEffect, useRef, useState, createElement, useMemo, useCallback, Children } from 'react';
import { gsap } from 'gsap';

const TextType = ({
  children,
  loop = false,
  className = '',
  style = "",
  speedTyping = 50,
  onComplete
}) => {
  const getTextString = (children) => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return String(children);
    if (Array.isArray(children)) {
      return children
        .map(child => {
          if (typeof child === 'string') return child;
          if (typeof child === 'number') return String(child);
          if (child?.props?.children) return getTextString(child.props.children);
          return '';
        })
        .join('');
    }
    if (children?.props?.children) {
      return getTextString(children.props.children);
    }
    return String(children || '');
  };

  const text = useMemo(() => getTextString(children), [children]);
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    let timeout;
    const currentText = textArray[currentTextIndex];

    const executeTypingAnimation = () => {
      if (currentCharIndex < currentText.length) {
        timeout = setTimeout(
          () => {
            setDisplayedText(prev => prev + currentText[currentCharIndex]);
            setCurrentCharIndex(prev => prev + 1);
          }, speedTyping
        );
      } else {
        
        if (onComplete) {
          onComplete();
        }
        
        if (loop) {
          timeout = setTimeout(() => {
            setDisplayedText('');
            setCurrentCharIndex(0);
            if (currentTextIndex < textArray.length - 1) {
              setCurrentTextIndex(prev => prev + 1);
            } else {
              setCurrentTextIndex(0);
            }
          }, 2000);
        }
      }
    };

    executeTypingAnimation();

    return () => {
      clearTimeout(timeout);
    };
  }, [
    currentCharIndex,
    textArray,
    currentTextIndex,
    speedTyping,
    loop,
    onComplete
  ]);

  return(
    <h1
      ref={containerRef}
      className={`text-type ${className}`}
      style={{
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {displayedText}
      {!isComplete && <span className="cursor-blink">|</span>}
    </h1>
  );
};

export default TextType;