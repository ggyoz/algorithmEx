//½ÇÆÐÀ²
function solution(N, stages) {

    var answer = [];

    let failratio = new Map();

    for(let i = 0; i < N; i++){
        
        let clearCnt = stages.filter((e) => e >= i + 1).length;
        let stageCnt = stages.filter((e) => e == i + 1).length;

        if(clearCnt == 0 || stageCnt == 0){
            failratio.set(i + 1, 0);    
        }else{
            failratio.set(i + 1, stageCnt / clearCnt );
        }
    }

    answer = new Map([...failratio.entries()].sort((a,b) => b[1] - a[1] )).keys();    

    return Array.from(answer);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);