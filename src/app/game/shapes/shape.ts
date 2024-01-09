import { GameAsset } from '../game-asset';

export type Shape = GameAsset & {
  moveDown: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  width: number;
};
