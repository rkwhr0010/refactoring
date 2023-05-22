class ProductionPlan{
    get production() {return this._production;}
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjestment);
        this._production += anAdjustment.amount;
    }
}