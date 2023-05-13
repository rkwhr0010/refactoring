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

//변수 캡슐화부터 시작
function getRawDataOfCustomers(){return customerData;}
function setRawDataOfCustomers(arg){customerData = arg;}

