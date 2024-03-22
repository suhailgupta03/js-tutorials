// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export function increment() {
  return { type: INCREMENT };
  // type is a way for Redux to KNOW that a PARTICULAR TYPE
  // of action was triggered
}

export function decrement() {
  return { type: DECREMENT };
}
