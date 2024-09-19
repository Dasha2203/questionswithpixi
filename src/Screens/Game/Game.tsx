import { Container, Sprite, useApp } from "@pixi/react";
import * as PIXI from "pixi.js";
import { useCallback, useEffect, useRef } from "react";
import { GameProps } from "./types";

const BrushRadius = 50

const Game = ({ size: {width, height}, setErasedArea }: GameProps) => {
  const renderTexture = useRef<PIXI.RenderTexture | null>(null);
  const maskRef = useRef<PIXI.Graphics>(new PIXI.Graphics());
  const isDrawing = useRef<boolean>(false);
  const app = useApp()

  const pointerMove = (e: PIXI.FederatedPointerEvent) => {
    if (isDrawing.current && maskRef.current) {
      const { x, y } = e.data.global

      maskRef.current.beginFill(0xffffff)
      maskRef.current.drawCircle(x, y, BrushRadius)
      maskRef.current.endFill()

      maskRef.current.renderable = true;
      checkMaskCoverage()
    }
  };

  const pointerDown = (e: PIXI.FederatedPointerEvent) => {
    isDrawing.current = true
    pointerMove(e)
  }

  const pointerUp = () => {
    isDrawing.current = false
  }

  const checkMaskCoverage = useCallback(() => {
    if (app) {
      const maskTexture = app.renderer.generateTexture(maskRef.current)
      const pixels = app.renderer.extract.pixels(maskTexture)

      let coveredPixels = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] > 0 && pixels[i + 2] > 0 && pixels[i + 1] > 0) {
          coveredPixels++
        }
      }

      const totalPixels = width * height
      const coveredPercentage = (coveredPixels / totalPixels) * 100

      setErasedArea(coveredPercentage / 4)
    }
  }, [width, height]);

  useEffect(() => {
    const rt = PIXI.RenderTexture.create({ width, height });
    renderTexture.current = rt;
    app.renderer.render(app.stage, { renderTexture: rt });
    checkMaskCoverage();

  }, [checkMaskCoverage])

  return (
    <Container>
      <Sprite
        image="https://pixijs.com/assets/bg_grass.jpg"
        width={width}
        height={height}
        interactive
        pointermove={pointerMove}
        pointerdown={pointerDown}
        pointerup={pointerUp}
      />
      <Sprite
        image="https://pixijs.com/assets/bg_rotate.jpg"
        width={width}
        height={height}
        mask={maskRef.current}
      />
    </Container>
  )
};

export default Game;
