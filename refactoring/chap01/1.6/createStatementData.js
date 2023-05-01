
export default function createStatementData(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData; 
    
    function enrichPerformance(aPerformance){
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);//중간 데이터에 연극 정보를 저장
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);

        return result;
    }
    function playFor(aPerformance){ //renderPlainText 중첩함수를 옮김
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch(aPerformance.play.type){
            case "tragedy" : 
            result = 40000;
            if(aPerformance.audience > 30){
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
            case "comedy" : 
            result = 30000;
            if(aPerformance.audience > 30){
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
            default: throw new Error(`알수 없는 장르: ${aPerformance.play.type}`);
        }
        return result; 
    }
    function volumeCreditsFor(aPerformance){
        let volumeCredits = 0;
        volumeCredits += Math.max(aPerformance.audience -30,0);
        if("comedy" === aPerformance.play.type) 
            volumeCredits += Math.floor(aPerformance.audience/5);
        return volumeCredits;
    }
    function totalAmount(data){ 
        return data.performances //반복문을 파이프라인으로 바꿈
            .reduce((total, p) => total + p.volumeCredits, 0 );
    }
    function totalVolumeCredits(data){
        return data.performances //반복문을 파이프라인으로 바꿈
            .reduce((total, p)=>total+p.volumeCredits, 0);
    }
}