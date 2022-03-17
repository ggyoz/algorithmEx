function solution(n, lost, reserve) {
    
    let answer = n;
    let students = new Map();
    
    for( let i = 1; i <= n; i++){
        students.set(i, 0);
    }
    
    for(let i of lost){
        students.set(i, -1);
    }
    
    for(let i of reserve){
        if(students.get(i) == -1){
            students.set(i, 0);    
        }else{
            students.set(i, 1);    
        }        
    }
    
    for( let key of students.keys() ){
        
        if( students.get(key + 1) !== undefined && students.get(key) + students.get(key + 1) === 0 ){
            students.set(key, 0);
            students.set(key + 1, 0);
        }else{
            continue;
        }       
            
    }   
    
    for(let velue of students.values()){
        if(velue == -1){
            answer--;
        }
    }    

    console.log(answer);
    
    return answer;
    
}

solution(4, [1,3], [2,4]);