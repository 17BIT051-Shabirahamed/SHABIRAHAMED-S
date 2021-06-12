const express = require('express');
const router = express.Router();
const goNextbox = require('../helper');

router.get('/puzzle', (req, res) => {
    res.send('working puzzle');
});
router.post('/puzzle_array', (req, res) => {
    const puzzleArray = req.body.puzzle_array;
    var rowSum = 0;
    var colSum = 0;
    flag = 0;
    var newArray = new Array(9);
    // for row
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            rowSum += puzzleArray[i][j];
            newArray[j] = puzzleArray[i][j];
        }
        let unique = newArray.filter((v, i, a) => a.indexOf(v) === i);
        console.log(unique.length)
        if (newArray.length != unique.length || rowSum != 45) {
            flag = 1;
        }
        if (flag == 1) {
            console.log("return false sudoko at row", i+1);
            res.send({message:'Wrong Suduko'});
            return;
        }
        else{
            console.log("You're the Sudoko winner");
            res.send({message:'Correct Suduko'});
            return;
        }
        rowSum = 0;
    }

    if (flag == 0) {
        // for col
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                colSum += puzzleArray[j][i];
                newArray[j] = puzzleArray[j][i];
            }
            var unique = newArray.filter((v, i, a) => a.indexOf(v) === i);
            console.log(unique.length)
            if (newArray.length != unique.length || colSum != 45) {
                flag = 1;
            }
            if (flag == 1) {
                console.log("return false sudoko at col", i+1);
                res.send({message:'Wrong Suduko'});
                return;
            }
            colSum = 0;
        }
        // now check 3*3
        if (flag == 0) {
            var ithStart=0;
            var ithEnd=3;
            var jthStart=0,jthEnd=3;
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    goNextbox(ithStart,ithEnd,jthStart,jthEnd,puzzleArray);
                    jthStart+=3;
                    jthEnd+=3;
                    if(flag==1){
                        res.send({message:'Wrong Suduko'});
                        return;
                    }
                }
                jthStart=0;
                jthEnd=3;
                ithStart+=3;
                ithEnd+=3;
                if(flag==1){
                    res.send({message:'Wrong Suduko'});
                    return;
                }
            }
        }
    }

    if(flag==0){
        res.send({message:'Correct Suduko'});
    }
});

module.exports = router;