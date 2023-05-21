class Account{
    get bankCharge(){ 
        let result = 4.5;
        if(this._daysOverdrawn > 0) 
            //인라인할지 고민한 결과 인라인하기로 결정
            result += this.type.overdraftCharge(this.daysOverdrawn);
        return result
    }
}
class AccountType{
    overdraftCharge(daysOverdrawn){
        if(this.isPremium){
            const baseCharge = 10;
            if(this.daysOverdrawn <= 7){
                return baseCharge;
            }else{
                return baseCharge + (daysOverdrawn - 7) * 0.85;
            }
        }else{
            return daysOverdrawn * 1.75;
        }
    }
}