"use client";

import React, { useCallback, useEffect, useRef } from "react";

// Types
import type { Grid, PerspectiveGridProps } from "./types";

// Imports
import clsx from "clsx";
import { perspectiveGridLineColor } from "@/app/config";
import { drawLine, generateGridLines, getLinePoints } from "./data";

const PerspectiveGrid: React.FC<PerspectiveGridProps> = ({
  className,
  heightPercent,
  ...props
}) => {
  // Constants
  const steps = 100;
  const maxCols = 21;
  const coneEffect = 3;
  const duration = 1000;
  const debounceDelay = 300;
  const delay = duration / 2;
  const perspectivePower = 2;
  const canvasWidthMultiplier = 1.5;
  const canvasHeightMultiplier = heightPercent ? heightPercent / 100 : 0.9;
  const light_line_color = perspectiveGridLineColor(0.09);

  // Refs
  const progress = useRef<number>(0);
  const grid = useRef<Grid | null>(null);
  const isReverting = useRef<boolean>(true);
  const animationProgress = useRef<number>(0);
  const startTime = useRef<number | null>(null);
  const animation = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resizeTimeout = useRef<number | null>(null);

  // Functions
  const calculateGridDimensions = useCallback(() => {
    const screenWidth = window.innerWidth;

    const calculatedCols = Math.min(maxCols, Math.floor(screenWidth / 70));
    const numCols =
      calculatedCols % 2 === 0 ? calculatedCols - 1 : calculatedCols;

    const numRows = Math.max(5, Math.floor(numCols / 2));

    return { numCols, numRows };
  }, []);

  const getCanvasInfo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    return { canvas, ctx };
  };

  const animateGrid = useCallback(
    (timestamp: number = 0) => {
      const info = getCanvasInfo();
      if (!info) return;

      const { canvas, ctx } = info;

      if (!startTime.current) startTime.current = timestamp;

      const elapsed = timestamp - startTime.current;
      progress.current = Math.min(elapsed / duration, 1);
      const nextIndex = Math.floor(progress.current * (steps + 1));

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      grid.current?.verticalLines.forEach((line) =>
        drawLine(ctx, { ...line, color: light_line_color })
      );
      grid.current?.horizontalLines.forEach((line) =>
        drawLine(ctx, { ...line, color: light_line_color })
      );

      // Draw vertical lines
      grid.current?.verticalLines.forEach((line) => {
        const start = line.interpolations
          ? line.interpolations[isReverting.current ? steps : 0]
          : line.start;
        const end = line.interpolations
          ? line.interpolations[animationProgress.current]
          : line.end;

        drawLine(ctx, { start, end });
      });

      // Draw horizontal lines
      grid.current?.horizontalLines.forEach((line) => {
        const lineY = line.start.y;
        const currentY =
          grid.current?.verticalLines[0]?.interpolations?.[
            animationProgress.current
          ]?.y ?? 0;

        if (isReverting.current) {
          if (currentY < lineY) {
            drawLine(ctx, { start: line.start, end: line.end });
          }
        } else {
          if (currentY >= lineY) {
            drawLine(ctx, { start: line.start, end: line.end });
          }
        }
      });

      if (progress.current < 1) {
        animationProgress.current = Math.max(0, Math.min(nextIndex, steps));
        animation.current = requestAnimationFrame(animateGrid);
      } else {
        drawGrid();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [light_line_color]
  );

  const drawGrid = useCallback(() => {
    startTime.current = null;
    isReverting.current = !isReverting.current;
    setTimeout(animateGrid, delay);
  }, [delay, animateGrid]);

  // Setup canvas
  const setupCanvas = useCallback(() => {
    const info = getCanvasInfo();
    if (!info) return;

    const { canvas } = info;

    canvas.width = window.innerWidth * canvasWidthMultiplier;
    canvas.height = window.innerHeight * canvasHeightMultiplier;

    const { numCols, numRows } = calculateGridDimensions();

    grid.current = generateGridLines(canvas, {
      numRows,
      numCols,
      coneEffect,
      perspectivePower,
    });
    grid.current.verticalLines.forEach((line) => {
      line.interpolations = getLinePoints(line.start, line.end, steps);
    });
    drawGrid();
  }, [canvasHeightMultiplier, drawGrid, calculateGridDimensions]);

  // Resize handler
  const handleResize = useCallback(() => {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }
    resizeTimeout.current = window.setTimeout(() => {
      setupCanvas();
      resizeTimeout.current = null;
    }, debounceDelay);
  }, [setupCanvas]);

  // Effects
  useEffect(() => {
    setupCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setupCanvas, handleResize]);

  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="relative top-0 left-2/4 -translate-x-2/4"
      />
    </div>
  );
};

export default PerspectiveGrid;
