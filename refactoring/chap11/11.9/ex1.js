function score(candidate, medicalExam, scoringGuide){
    return new Score(candidate,medicalExam,scoringGuide).execute();
}
class Score{
    constructor(candidate,medicalExam,scoringGuide){
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }
    execute(){
        this._result = 0;
        this._healthLevel = 0;
        this._highMedicalRiskFlag = false;
    
        this.scoreSmoking();
        let certificationGrade = "regular";
        if(this._scoringGuide.stateWithLowCertification(this._candidate.originState)){
            certificationGrade = "low";
            this._result -= 5;
        }
        //많은 코드...
        this._result -= Math.max(this._healthLevel -5 , 0);
        return result;

    }
    //이렇게 쪼게놓으면 디버깅이 훨씬 쉬워진다.(디버깅 포인트가 더욱 촘촘해짐)
    scoreSmoking() {
        if (this._medicalExam.isSmoker) {
            this._healthLevel += 10;
            this._highMedicalRiskFlag = true;
        }
    }
}