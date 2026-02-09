import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProjectStats {
  label: string;
  value: string;
  subtext: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}