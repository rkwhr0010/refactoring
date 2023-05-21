function renderPerson(outStream, person){
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    //추가 중복 제거
    result.push(zznew(person.photo));
    return result.join("\n");
}
function photoDiv(p){
    return [
        "<div>",
        zznew(p),
        "</div>",
    ].join("\n");
}
//emitPhotoData()인라인하기
function zznew(p){
    return [
        `<p>제목: ${p.title}</p>`,
        `<p>위치: ${p.location}</p>` ,
        `<p>날짜: ${p.date.toDateString()}</p>`,
    ].join("\n");
}