function payAmount(employee){
    let result;
    //가장 바깥조건부터 보호구문으로 변경
    if(employee.isSeparated){return {amount:0,reasonCode:"SEP"};
    }else{
        if(employee.isRetired){
            result = {amount:0, reasonCode:"RET"};
        }else{//급여 계산 로직
            lorem.ipsum(dolor.sitAmet);
            consectetur(adipiscing).elit();
            sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }
}