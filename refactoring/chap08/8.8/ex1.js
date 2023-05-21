function acquireData(input){
    const lines = input.split("\n");
    const result = [];
    //로직을 진적으로 대체하면서 테스트한다.
    const loopItems = lines
        .slice(1)
        .filter(line => line.trim !== "")
        .map(line => line.split(","))
        .filter(record=>record[1].trim() === "India")
        .map(result => ({city:record[0].trim(), phone:record[2].trim()}))
        ;
    return result;
}