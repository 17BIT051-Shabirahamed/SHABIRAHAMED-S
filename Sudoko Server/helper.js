module.exports = (ithStart, ithEnd, jthStart, jthEnd, puzzle_array) => {
    var boxSum = 0;
    var array2d = [];
    for (i = ithStart; i < ithEnd; i++) {
        for (j = jthStart; j < jthEnd; j++) {
            boxSum += puzzle_array[i][j];
            array2d.push(puzzle_array[i][j]);
        }
    }
    var unique = array2d.filter((v, i, a) => a.indexOf(v) === i);
    if (array2d.length != unique.length || boxSum != 45) {
        flag = 1;
    }
}