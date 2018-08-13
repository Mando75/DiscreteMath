function multiplyMatrixSizeN(A, B, n) {
    let C = new Array(n).fill(new Array(n).fill(0)); 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] = C[i][j] + (A[i][k] * B[k][j]);
            }
        }
    }
    return C;
}

console.log(multiplyMatrixSizeN([[1,2],[3,4]], [[1,2],[3,4]], 2));
