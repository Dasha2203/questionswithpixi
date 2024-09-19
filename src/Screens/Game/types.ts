export type Size = {
  width: number;
  height: number;
}

export type GameProps = {
  setErasedArea: (val: number) => void;
  size: Size;
}