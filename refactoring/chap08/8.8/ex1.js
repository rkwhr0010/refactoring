function acquireData(input){
    const lines = input.split("\n");
    // let firstLine = true;
    const result = [];
    //로직을 진적으로 대체하면서 테스트한다.
    const loopItems = lines
        .slice(1);
    for(const line of loopItems){
        // if(firstLine){
        //     firstLine = false;
        //     continue;
        // }
        if(line.trim() === "") continue;
        const record = line.split(",");
        if(record[1].trim() === "India"){
            result.push({city:record[0].trim(), phone:record[2].trim()})
        }
    }
    return result;
}