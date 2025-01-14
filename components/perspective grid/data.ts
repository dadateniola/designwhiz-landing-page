// Types
import type { Grid, Line, Point } from "./types";

// Imports
import { perspectiveGridLineColor } from "@/app/config";

export function generateGridLines(
  canvas: HTMLCanvasElement,
  {
    numRows,
    numCols,
    coneEffect,
    perspectivePower,
  }: {
    numRows: number;
    numCols: number;
    coneEffect: number;
    perspectivePower: number;
  }
): Grid {
  const width = canvas.width;
  const height = canvas.height;

  const widthTop = width;
  const widthBottom = widthTop / coneEffect;

  const xTopStart = 0;
  const xTopEnd = widthTop;

  const xBottomStart = (widthTop - widthBottom) / 2;
  const xBottomEnd = xBottomStart + widthBottom;

  const verticalLines: Line[] = [];
  for (let i = 0; i < numCols; i++) {
    const x_top = xTopStart + ((xTopEnd - xTopStart) / (numCols - 1)) * i;
    const x_bottom =
      xBottomStart + ((xBottomEnd - xBottomStart) / (numCols - 1)) * i;

    verticalLines.push({
      start: { x: x_top, y: 0 },
      end: { x: x_bottom, y: height },
      interpolations: [],
    });
  }

  const horizontalLines: Line[] = [];
  for (let j = 0; j < numRows; j++) {
    const t = j / (numRows - 1);
    const y = height * (1 - Math.pow(1 - t, perspectivePower));

    const startX =
      verticalLines[0].start.x +
      (y / height) * (verticalLines[0].end.x - verticalLines[0].start.x);
    const endX =
      verticalLines[verticalLines.length - 1].start.x +
      (y / height) *
        (verticalLines[verticalLines.length - 1].end.x -
          verticalLines[verticalLines.length - 1].start.x);

    horizontalLines.push({
      start: { x: startX, y },
      end: { x: endX, y },
    });
  }

  return { verticalLines, horizontalLines };
}

export function getLinePoints(
  start: Point,
  end: Point,
  steps: number
): Point[] {
  const points: Point[] = [];
  const step = 1 / steps;

  const { x: startX, y: startY } = start;
  const { x: endX, y: endY } = end;

  for (let i = 0; i <= steps; i++) {
    const t = i * step;
    const x = startX + (endX - startX) * t;
    const y = startY + (endY - startY) * t;
    points.push({ x, y });
  }

  return points;
}

export function drawLine(
  ctx: CanvasRenderingContext2D,
  { start, end, color = perspectiveGridLineColor(0.11) }: Line & { color?: string }
) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
}
