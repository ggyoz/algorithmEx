//////////////////////////////////////////////////////////////
//���� Ǭ ���//
function solution(record) {
    var answer = [];
    
    var nickname = new Map();
    
    for(let i = 0; i < record.length; i++){
        
        let str = record[i].split(' ');
        
        if(str[0] == "Enter"){
            nickname.set(str[1], str[2]);
            answer.push([str[1], "���� ���Խ��ϴ�."]);
        }else if(str[0] == "Leave"){
            answer.push([str[1], "���� �������ϴ�."]);
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
//���� Ǯ��//
function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '���� ���Խ��ϴ�.',
        'Leave': '���� �������ϴ�.'
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

