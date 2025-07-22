import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CustomButton ({ children, ...props } : Props) {
  return (
    <button {...props}>
      {children}
    </button>
  );
};
