//지역 변수를 사용할 때
function printOwing(invoice){
    let outstanding = 0;

    printBanner();

    //미해결 채무
    for(const o of invoice.orders){
        outstanding += o.amount;
    }

    //마감일
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+30);

    //중첩 함수가 지원되지 않는 언어는 이렇게 넣어줘야 할 것
    printDetails(invoice, outstanding);

    function printDetails(invoice, outstanding) {
        console.log(`고객명 : ${invoice.customer}`);
        console.log(`채무액 : ${outstanding}`);
        console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`);
    }

    function printBanner() {
        console.log("******************");
        console.log("**** 고객 채무 ****");
        console.log("******************");
    }
}