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
getRawDataOfCustomers()[customerID].usages[year][month] = amount;//쓰기
function compareUsage(customerID, laterYear, month){//읽기
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear-1][month];
    return {laterAmount: later, change:later-earlier};
}
function getCustomerData(){return customerData;}
function getRawDataOfCustomers(){return getCustomerData()._data;}//기존 호환용
function setRawDataOfCustomers(arg){customerData = new CustomerData(arg);}

//데이터 구조를 표햔하는 클래스 정의 후 이를 반환하는 함수 만듦
class CustomerData{
    constructor(data){
        this._data = data;
    }
}
