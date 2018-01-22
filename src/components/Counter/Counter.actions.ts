export const INCREMENT = 'Counter/INCREMENT';
export const DECREMENT = 'Counter/DECREMENT';

export interface IActionSignature {
  readonly type: string;
}

export function increment(): IActionSignature {
  return {
    type: INCREMENT,
  };
}

export function decrement(): IActionSignature {
  return {
    type: DECREMENT,
  };
}
