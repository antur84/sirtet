export interface GameSettings {
  blockSize: number;
  nrOfHorizontalBlocks: number;
  nrOfVerticalBlocks: number;
}

export const gameSettings = new Map<
  keyof GameSettings,
  GameSettings[keyof GameSettings]
>([
  ['blockSize', 40],
  ['nrOfHorizontalBlocks', 10],
  ['nrOfVerticalBlocks', 20],
]);

/**
 * The number of blocks that fit horizontally on the game board divided by two,
 * rounded down.
 */
export const getHorizontalMiddle = () =>
  Math.floor(gameSettings.get('nrOfHorizontalBlocks') / 2);
