class Account{
    constructor(number, type, interestRate){
        this._number = number;
        this._type = type;
        //어셔션 추가한 상태로 당분간 운영하기
        assert(interestRate === this._type.interestRate);
        this._interestRate = interestRate;
    }
    get interestRate(){return this._interestRate;}
}
//interestRate 이자율 필드 생성 및 접근자 추가
class AccountType{
    constructor(nameString, interestRate){
        this._name = nameString;
        this._interestRate = interestRate;
    }
    get interestRate(){return this._interestRate;}
}