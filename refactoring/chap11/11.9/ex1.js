function score(candidate, medicalExam, scoringGuide){
    return new Score(candidate).execute(medicalExam,scoringGuide);
}
//클래스를 만들고 함수 옮기기
class Score{
    constructor(candidate){
        this._candidate = candidate;
    }
    execute(medicalExam, scoringGuide){
        let result = 0;
        let healthLevel = 0;
        let highMedicalRiskFlag = false;
    
        if(medicalExam.isSmoker){
            healthLevel += 10;
            highMedicalRiskFlag =true;
        }
        let certificationGrade = "regular";
        if(scoringGuide.stateWithLowCertification(candidate.originState)){
            certificationGrade = "low";
            result -= 5;
        }
        //많은 코드...
        result -= Math.max(healthLevel -5 , 0);
        return result;
    }
}