export const getStyle = <T extends HTMLElement>(
  element: React.RefObject<T> | T,
  style: keyof CSSStyleDeclaration
): string => {
  if (typeof window === "undefined") {
    return "";
  }

  const targetElement =
    element instanceof HTMLElement ? element : element.current;

  if (targetElement) {
    return window.getComputedStyle(targetElement)[style] as string;
  }

  return "";
};
