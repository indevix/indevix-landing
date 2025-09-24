export type WordState =
  | "hidden"
  | "appearing"
  | "visible"
  | "destroying"
  | "assembling";

export interface SloganWordProps {
  word: string;
  index: number;
  state: WordState;
  onClick: () => void;
  onHover: () => void;
  delay: number;
}

export interface SloganParticle {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  char?: string;
}

export interface SloganState {
  hoveredIndex: number | null;
  wordStates: Map<number, WordState>;
  isAnimating: boolean;
}

export interface WordStyle {
  background: string;
  color: string;
  borderColor: string;
  shadow: string;
}
