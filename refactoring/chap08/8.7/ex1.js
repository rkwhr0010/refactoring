function example(){
    return `최연소:${youngestAge()}, 총 급여: ${totalSalary()}`;
    //알고리즘 교체하기
    function youngestAge() {
        return people.map(p=>p.age).reduce((a1,a2)=>a1<a2?a1:a2, Infinity);
    }
    //파이프라인으로 바꾸기
    function totalSalary() {
        return people.reduce((total, p)=> total+ p.salary,0);;
    }
}