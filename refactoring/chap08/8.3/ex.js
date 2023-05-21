function renderPerson(outStream, person){
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>제목: ${person.photo.title}</p>`);
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}
function photoDiv(p){
    return [
        "<div>",
        zznew(p),
        "</div>",
    ].join("\n");
}
//중복 제거를 위해 함수 추출
function zznew(p){
    return [
        `<p>제목: ${p.title}</p>`,
        emitPhotoData(p) ,
    ].join("\n");
}
function emitPhotoData(aPhoto){
    const result = [];
    result.push(`<p>위치: ${aPhoto.location}</p>`)
    result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`)
    return result.join("\n");
}