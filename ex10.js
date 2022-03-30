//없는숫자 더하기

function solution(numbers) {

    var answer = 0;    
    let all = [1,2,3,4,5,6,7,8,9];    
    
    for(let i =0;i < all.length; i++){
        if(!numbers.includes(all[i])){            
            answer += all[i];
        }
    }   
    
    return answer;

}


function solution(numbers) {

    var answer = 45;   
    
    for(let i =0; i < numbers.length; i++){
        answer -= numbers[i];
    }   
    
    return answer;

}