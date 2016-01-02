export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
}