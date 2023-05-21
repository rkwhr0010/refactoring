function example(){
    let totalSalary = 0;
    for(const p of people) totalSalary += p.salary;
    //더 나아가 각 반복문을 각 함수로 만들기, 먼저 근처로 문장 슬라이드
    let youngest = people[0] ? people[0].age : Infinity;
    for(const p of people) if(p.age<youngest) youngest = p.age;
    return `최연소:${youngest}, 총 급여: ${totalSalary}`;
}