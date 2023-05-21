function renderPerson(outStream, person){
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}
//기존 emitPhotoData제거 후 새 함수 이름 emitPhotoData로 변경
function listRecentPhotos(outStream, photos){
    photos
        .filter(p=>p.date > recentDateCutoff())
        .forEach(p=>{
            outStream.write("<div>\n");
            emitPhotoData(outStream, p)
            outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
            outStream.write("</div>\n");
        });
}
function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}
