// components/Accordion.tsx
"use client"
import React, { useState, ReactElement } from 'react';

interface AccordionProps {
  children: ReactElement[];
  className?: string;
}

export default function Accordion({children, className} : AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (index === openIndex) {
      // Allows toggling the current open accordion closed
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: index === openIndex,
          onClick: () => handleAccordionClick(index),
        }),
      )}
    </div>
  );
};