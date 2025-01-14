export interface PerspectiveGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  heightPercent?: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: Point;
  end: Point;
  interpolations?: Point[];
}

export interface Grid {
  verticalLines: Line[];
  horizontalLines: Line[];
}
