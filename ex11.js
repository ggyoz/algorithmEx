//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    var answer = [];
    
    for(let a of strings){        
        answer.push([a[n], a]);
    }

    answer = answer.sort((a, b) => a[0] === b[0] ? a.localeCompare(b) : a[0].localeCompare(b[0])).map((e) => e[1]);
    console.log(answer);
    
    return answer;

}

solution(["sun", "bed", "car"], 1);