// Import React to resolve React namespace errors for React.ReactNode
import React from 'react';

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}