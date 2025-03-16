// src/components/ui/dialog.tsx
import React from 'react';

export const Dialog = ({ children }: { children: React.ReactNode }) => {
  return <div className="dialog">{children}</div>;
};

export const DialogContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="dialog-content">{children}</div>;
};

export const DialogHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="dialog-header">{children}</div>;
};

export const DialogTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="dialog-title">{children}</h2>;
};

export const DialogTrigger = ({ children }: { children: React.ReactNode }) => {
  return <button className="dialog-trigger">{children}</button>;
};