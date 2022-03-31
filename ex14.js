// 같은숫자는 싫어
function solution(arr) {
    
    let answer = [];
    
    answer.push(arr[0]);

    for(let i of arr){      

        if(answer[answer.length - 1] != i){
            console.log(i);
            answer.push(i);    
        }       

    }  

    return answer;
 
}

solution([1,1,3,3,0,1,1]);