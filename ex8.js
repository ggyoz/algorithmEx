// 예산
function solution(d, budget) {
    
    var answer = d.length;
    let sum = 0;
    
    //오름차순 정렬
    d.sort((a,b)=> a - b);  
    
    for( let i = 0; i < d.length; i++ ){
        sum += d[i];
        
        if(budget < sum){
            return i;
        }
        
    }   
    
    return answer;
}