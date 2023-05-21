class Account{
    get bankCharge(){ //은행이자
        let result = 4.5;
        if(this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result
    }
    get overdraftCharge(){
        if(this.type.isPremium){//초과 인출 이자 계산
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