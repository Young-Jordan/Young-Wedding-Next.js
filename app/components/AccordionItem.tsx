"use client"
import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function AccordionItem({title, children, isOpen, className, onClick} : AccordionProps) {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update the content height state based on the actual content height
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);
  return (
    <div className={className}>
      <button onClick={onClick} className='w-full lg:text-2xl text-xl font-bold' style={{ display: 'flex', alignItems: 'center' }}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className='transition-transform'
          style={{ transform: `rotate(${isOpen ? '0deg' : '-90deg'})`, marginLeft: 'auto' }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${contentHeight}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}