let customerData = {
    "1920" : {
        name:"마틴 파울러",
        id: "1920",
        usages: {
            "2016":{
                "1":50,
                "2":55, //이하 생략
            },
            "2015":{
                "1":70,
                "2":63, //이하 생략
            },
        },
    },
    "38673":{
        name : "닐 포드",
        id : "38673",
        // 다른 고객 정보 생략...
    }
}
getCustomerData().setUsage(customerID, year, month, amount);//쓰기

function compareUsage(customerID, laterYear, month){//읽기
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear-1][month];
    return {laterAmount: later, change:later-earlier};
}
function getCustomerData(){return customerData;}
function getRawDataOfCustomers(){return customerData._data;}//기존 호환용
function setRawDataOfCustomers(arg){customerData = new CustomerData(arg);}

class CustomerData{
    constructor(data){
        this._data = data;
    }
    setUsage(customerID, year, month, amount) {
        getRawDataOfCustomers()[customerID].usages[year][month] = amount;
    }
    //객체의 모든 필드가 불변이 아니라면, 캡슐화가 꺠질 수 있다.
    //그렇다고 customerData 를 사용하는 모든 코드를 확인 했는지 알 수가 없다.
    //복사본을 리턴해서 처리한다.
    get rawData(){
        return _.cloneDeep(this._data);
    }
}
