function renderPerson(outStream, person){
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}
function photoDiv(p){
    return [
        "<div>",
        emitPhotoData(p),
        "</div>",
    ].join("\n");
}
//함수 이름 바꾸기로 마무리
function emitPhotoData(p){
    return [
        `<p>제목: ${p.title}</p>`,
        `<p>위치: ${p.location}</p>` ,
        `<p>날짜: ${p.date.toDateString()}</p>`,
    ].join("\n");
}