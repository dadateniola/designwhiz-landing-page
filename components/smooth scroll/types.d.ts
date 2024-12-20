export interface SmoothScrollProps {
  children: React.ReactNode;
}

export interface SmoothScrollRef {
  scrollToTop: () => void;
  enableScroll: () => void;
  disableScroll: () => void;
}
