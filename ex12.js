// 모의고사
function solution(answers) {
    var answer = [];
    
    // 공배수 40
    let s1 = [1,2,3,4,5];
    let s2 = [2,1,2,3,2,4,2,5];
    let s3 = [3,3,1,1,2,2,4,4,5,5];
    
    let a = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i ++){        
        if(answers[i] == s1[i % s1.length]){
            a[0]++;
        }       
        if(answers[i] == s2[i % s2.length]){
            a[1]++;
        }         
        if(answers[i] == s3[i % s3.length]){
            a[2]++;
        }
    }   
    
    let maxValue = Math.max(...a);
    
    answer = a.reduce((acc, cur,idx) => {
        
        if(cur == maxValue){
            acc.push(idx + 1);
        }
        
        return acc
        
    }, []);   
    
    return answer;
}