//루프부분 중복코드 제거

function _filter(list, predi) {
  var new_list = [];
  _each(list, function(val) {
    if (predi(val)) new_list.push(val);
  });
  return new_list;
}

function _map(list, mapper){
  var new_list =[];
  _each(list, function(val){
    new_list.push(mapper(val));
  });
  return new_list;
}
function _each(list, iter){
  for(var i=0; i<list.length;i++){
    iter(list[i]);
  }
  return list;
}

function _curry(fn) {
  return function(a, b) {
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(a, b); };
  }
}
function _curryr(fn) {
  return function(a, b) {
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(b, a); };
  }
}
var _get = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key];
});

var slice = Array.prototype.slice;
function _rest(list, num){
    return slice.call(list, num||1);
}

// 2번째로 받음 함수를 재귀적으로 호출해주면서 값을 축약해가는 역할
function _reduce(list, iter, memo){
    if(arguments.length==2){
        memo = list[0]; // 인자가 2개 초기값을 안넣은 경우임
        list = _rest(list); // Array like 객체를 처리하기 위함
    }
    _each(list, function(val){
        memo = iter(memo, val);
    });
    return memo;
}
