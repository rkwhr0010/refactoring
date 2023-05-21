function example(){
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
    //부수효과가 있는 코드는 한쪽만 남기고 제거
    for(const p of people) totalSalary += p.salary;
    for(const p of people) if(p.age<youngest) youngest = p.age;
    
    return `최연소:${youngest}, 총 급여: ${totalSalary}`;
}