//�������� ���� ����

let name = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);

// �ٸ���� Ǯ�� �׽�Ʈ
function solution(participant, completion) {

    var answer = '';
    
    var comp = completion.map(name => completion[name] = (completion[name]|0)+1);

    var part = participant.find(name => !completion[name]--, comp);

    console.log(part);   
    
    return answer;
    
}
//var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1));


// ó�� Ǯ��
function solution(participant, completion) {
    var answer = '';

    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i++ ){
        if(participant[i] != completion[i]){
            answer = participant[i];
            break;
        }     

    }

    return answer;

}