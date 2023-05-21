class Account{
    get bankCharge(){ 
        let result = 4.5;
        if(this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result
    }
    get overdraftCharge(){
        if(this.type.isPremium){
            const baseCharge = 10;
            if(this.daysOverdrawn <= 7){
                return baseCharge;
            }else{
                return baseCharge + (this.daysOverdrawn - 7) * 0.85;
            }
        }else{
            return this.daysOverdrawn * 1.75;
        }
    }
}
class AccountType{
    //계좌 타입으로 복사 후 적절하게 수정
    //daysOverdrawn는 계좌별로 달라지므로 원래 클래스에 남겨두었다.
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