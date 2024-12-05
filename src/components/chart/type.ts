export interface Root {
  responsive: boolean;
  maintainAspectRatio: boolean;
  interaction: Interaction;
  plugins: Plugins;
  scales: Scales;
}

export interface Interaction {
  mode: string;
  intersect: boolean;
}

export interface Plugins {
  legend: Legend;
  tooltip: Tooltip;
  title: Title;
}

export interface Legend {
  display: boolean;
  position: string;
  labels: Labels;
}

export interface Labels {
  color: string;
}

export interface Tooltip {
  enabled: boolean;
  mode: string;
  callbacks: Callbacks;
}

export interface Callbacks {}

export interface Title {
  display: boolean;
  text: string;
  color: string;
  font: Font;
}

export interface Font {
  size: number;
}

export interface Scales {
  x: X;
  y: Y;
}

export interface X {
  display: boolean;
  title: Title2;
  grid: Grid;
  ticks: Ticks;
}

export interface Title2 {
  display: boolean;
  text: string;
}

export interface Grid {
  display: boolean;
  color: string;
}

export interface Ticks {
  color: string;
}

export interface Y {
  display: boolean;
  title: Title3;
  grid: Grid2;
  ticks: Ticks2;
}

export interface Title3 {
  display: boolean;
  text: string;
}

export interface Grid2 {
  display: boolean;
  color: string;
}

export interface Ticks2 {
  color: string;
  beginAtZero: boolean;
}
