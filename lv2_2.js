//////////////////////////////////////////////////////////////
//내가 푼 방법//
function solution(record) {
    var answer = [];
    
    var nickname = new Map();
    
    for(let i = 0; i < record.length; i++){
        
        let str = record[i].split(' ');
        
        if(str[0] == "Enter"){
            nickname.set(str[1], str[2]);
            answer.push([str[1], "님이 들어왔습니다."]);
        }else if(str[0] == "Leave"){
            answer.push([str[1], "님이 나갔습니다."]);
        }else{
            nickname.set(str[1], str[2]);
        }        
        
    }    
    
    for(let i = 0; i < answer.length; i++){                
            
        answer[i][0] = nickname.get(answer[i][0]);        
        answer[i] = answer[i].join("");
        
    }    
    
    return answer;
}

/////////////////////////////////////////////////////////////
//좋은 풀이//
function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }

    record.forEach((v) => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") {
            action.push([state, id]);
        }

        if(nick) {
            userInfo[id] = nick;
        }
    })

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
    })
}

