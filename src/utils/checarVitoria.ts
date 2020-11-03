function checarVitoria(estadoCelulas: Array<Number>): Array<Number> {
  const ar = estadoCelulas;
  if (ar[0] !== 0 && ar[0] === ar[1] && ar[1] === ar[2]) {
    return [0, 1, 2];
  }

  if (ar[3] !== 0 && ar[3] === ar[4] && ar[4] === ar[5]) {
    return [3, 4, 5];
  }

  if (ar[6] !== 0 && ar[6] === ar[7] && ar[7] === ar[8]) {
    return [6, 7, 8];
  }

  if (ar[0] !== 0 && ar[0] === ar[3] && ar[3] === ar[6]) {
    return [0, 3, 6];
  }

  if (ar[1] !== 0 && ar[1] === ar[4] && ar[4] === ar[7]) {
    return [1, 4, 7];
  }

  if (ar[2] !== 0 && ar[2] === ar[5] && ar[5] === ar[8]) {
    return [2, 5, 8];
  }

  if (ar[0] !== 0 && ar[0] === ar[4] && ar[4] === ar[8]) {
    return [0, 4, 8];
  }

  if (ar[2] !== 0 && ar[2] === ar[4] && ar[4] === ar[6]) {
    return [2, 4, 6];
  }

  return [-1];
}

export default checarVitoria;
