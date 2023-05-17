var users = [
    { id: 1, name: 'ID', age: 36 },
    { id: 2, name: 'BJ', age: 32 },
    { id: 3, name: 'JM', age: 32 },
    { id: 4, name: 'PJ', age: 27 },
    { id: 5, name: 'HA', age: 25 },
    { id: 6, name: 'JE', age: 26 },
    { id: 7, name: 'JI', age: 31 },
    { id: 8, name: 'MP', age: 23 }
    ];
var add = (a,b)=>a+b;
var sub = (a,b)=>a-b;
var mul = (a,b)=>a*b;
var div = (a,b)=>a/b;
var num = [1,2,3,4,5];
var arrLike = {0:'A',1:'B',2:'C',3:'D',4:'E',length:5};
var noArr = {10:'A',21:'B',12:'C',43:'D',24:'E'};
var chaos = {'keysdg':'bb','keyfda4g':'1qef','keybvzzb':'13da','key11':'y5','keyzxc':'413'};
function each(list, iter){
    for(var i =0;i<list.length;i++){
        iter(list[i]);
    }
    return list;
}

//문제 1 null 값 시 에러로 이후 전체가 멈춤
function each(list, iter){
    for(var i=0,len=_get('length')(list);i<len;i++){
        iter(list[i]);
    }
    return list;
}



//문제 2 _keys만들기  Object.keys()를 조금 더 안전하게
// 위 메서드는 key 값들만 추출해 'key 배열로' 리턴
function _is_object(obj){
    return typeof obj == 'object'&&!!obj;
}
function _keys(obj){
    return _is_object(obj)?Object.keys(obj):[];
}
function _is_type(obj, type){
    return typeof obj == type &&!!obj;
}
var _is_type = _curryr(_is_type);

//문제 3 배열이 아니여도 돌림직한 값을 each로 처리하고 싶다
// length 속성이 없거나, 인덱스가 0부터 순차 증가가 아닌 상황

function each(list, iter){
    var keys = _keys(list);
    for(var i=0, len=_get('length')(keys);i<len;i++){
        iter(list[keys[i]]);
    }
    return list;
}


function rest(list, num){
    return Array.prototype.slice.call(list, num||1);
}
function get(obj, key){
    return obj==null?undefined:obj[key];
}
function filter(list, predi){
    var new_list=[];
    _each(list, function(val){
        if(predi(val))new_list.push(val);
    });
    return new_list;
}
function map(list, mapper){
    var new_list=[];
    _each(list, function(val){
        new_list.push(mapper(val));
    });
    return new_list;
}
function _curry(fn){
    return function(a,b){
        return arguments.length==2?fn(a,b):b=>fn(a,b);
    }
}
function _curryr(fn){
    return function(a,b){
        return arguments.length==2?fn(a,b):b=>fn(b,a);
    }
}
function reduce(list, iter, memo){
    if(arguments.length==2){
        memo = list[0];
        list = rest(list);
    }
    _each(list, function(val){
        memo = iter(memo,val);
    });
    return memo;
}
function pipe(){
    var fns = arguments;
    return function(arg){
        return reduce(fns, function(arg, fn){
            return fn(arg);
        },arg);
    };
}
function go(arg){
    var fns = rest(arguments);
    return pipe.apply(null, fns)(arg);
}

var _get = _curryr(get);
var _filter = _curryr(filter);
var _map = _curryr(map);
var _each = _curryr(each);

        // //문제 1 null 값 시 에러로 이후 전체가 멈춤
        // // each(null, a=>console.log(a));
        // function each(list, iter){
        //     for(var i=0, len=_get('length')(list);i<len;i++){
        //         iter(list[i]);
        //     }
        //     return list;
        // }

        // //문제 2 _keys만들기  Object.keys()를 조금 더 안전하게
        // // 위 메서드는 key 값들만 추출해 '배열로' 리턴
        // function _is_object(obj){
        //     return typeof obj == 'object' && !!obj;
        // }
        // function _keys(obj){
        //     return _is_object(obj)?Object.keys(obj):[];
        // }

        // //문제 3 배열이 아니여도 돌림직한 값을 each로 처리하고 싶다
        // // length 속성이 없거나, 인덱스가 0부터 순차 증가가 아닌 상황
        // // each(noArr, a=>console.log(a));

        // function each(list, iter){
        //     var keys = _keys(list);
        //     for(var i=0, len=_get('length')(keys);i<len;i++){
        //         iter(list[keys[i]]);
        //     }
        //     return list;
        // }
        // /* 효과 및 설명
        // Object.keys()를 안전하게 사용해서 나온 결과값을 사용한다.
        // 리턴 결과는 객체의 key로만 구성된 '배열'이다.
        //     따라서 그 키 배열의 길이는 당연히 존재한다. 프로토타입이 Array니까 
        // 나온 keys배열은 0부터 index가 부여된다. 
        //     그 keys[i]의 값이 원래 list의 key값이다.
        //     key값으로 반복하니 결과적으로 key가 반드시 0부터 1씩 증가할 필요가 없다.
        //     key 값도 반복 처리할 수 있다.
        // */



        // pipe, go까지만 테스트용
        /* console.log(
            filter(users, user=>user.age>=30)
            ,filter(users, user=>get(user,'age')>=30)
            ,map(users, user=>user.age)
            ,map(users, user=>get(user,'age'))
            ,map(filter(users, user=>get(user,'age')>=30), user=>get(user, 'name') )
            ,_map(_get('name'))(users)
            ,_filter(user=>_get('age')(user)>=30 )(users)
            ,_map(_filter(user=>_get('age')(user)>=30)(users), user=>_get('name')(user))
            ,reduce(num, add)
            ,reduce(num, add,10)
            ,pipe(_filter(user=>user.age>=30),_map(_get('id')))(users)
            ,_filter(user=>_get('age')(user)>=30)(users)
            ,go(users,_filter(user=>user.age>=30),_map(_get('name')))
            ,pipe(_map(_get('age')), _filter( user=>user >=30) )(users)
        ); */