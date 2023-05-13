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

//중첩구조가 심할수록 데이터 일고/쓰기가 힘들어진다.
customerData[customerID].usages[year][month] = amount;//쓰기
function compareUsage(customerID, laterYear, month){//읽기
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear-1][month];
    return {laterAmount: later, change:later-earlier};
}




