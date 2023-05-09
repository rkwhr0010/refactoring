let tpHd = "untitled";
result += `<h1>${title()}</h1>`;
obj['articleTitle'] = 'Hello World';
setTitle(obj['articleTitle']);

//게터
function title(){ return tpHd;}
//세터
function setTitle(arg){tpHd = arg;}
