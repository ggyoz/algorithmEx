// ���ڿ� �� p�� y�� ����

// �� ����� ������ ����..
function numPY(s){
    //�Լ��� �ϼ��ϼ���
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