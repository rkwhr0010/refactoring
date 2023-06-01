function score(candidate, medicalExam, scoringGuide){
    return new Score(candidate,medicalExam,scoringGuide).execute();
}
class Score{
    constructor(candidate,medicalExam,scoringGuide){
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }
    //더 가다듬기, 명령의 목적인 복잡한 함수를 잘게 쪼게기 시작
    execute(){
        this._result = 0;
        this._healthLevel = 0;
        this._highMedicalRiskFlag = false;
    
        if(this._medicalExam.isSmoker){
            this._healthLevel += 10;
            this._highMedicalRiskFlag =true;
        }
        let certificationGrade = "regular";
        if(this._scoringGuide.stateWithLowCertification(this._candidate.originState)){
            certificationGrade = "low";
            this._result -= 5;
        }
        //많은 코드...
        this._result -= Math.max(this._healthLevel -5 , 0);
        return result;
    }
}