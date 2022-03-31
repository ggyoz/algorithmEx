// 두수사이의 합
function solution(a, b) {
    
    var answer = 0;
    
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    
    answer = sigma(max) - sigma(min - 1);
    
    return answer;
}

function sigma(num){
    
    let result = num * (num + 1) / 2;    
    return result;
    
}