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

//클래스로 함수 옮기기
class CustomerData{
    constructor(data){
        this._data = data;
    }
    setUsage(customerID, year, month, amount) {
        getRawDataOfCustomers()[customerID].usages[year][month] = amount;
    }
}
