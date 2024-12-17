export interface SmoothScrollProps {
  children: React.ReactNode;
}

export interface SmoothScrollRef {
  enableScroll: () => void;
  disableScroll: () => void;
}
