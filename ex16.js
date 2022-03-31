// 문자열 내 p와 y의 개수

// 이 방법은 생각은 했음..
function numPY(s){
    //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;

}

console.log(numPY("pPoooyYopoy"));
  

function solution(s){
    var answer = true;   
    
    let pCnt = 0;
    let yCnt = 0;
    
    for(let a of s.toUpperCase()){
        if(a == "P"){
            pCnt++;
        }else if(a == "Y"){
            yCnt++;
        }
    }
    
    if(pCnt != yCnt){
        answer = false;
    }
    
    return answer;
}