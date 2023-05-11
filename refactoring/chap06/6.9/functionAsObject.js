function Cat(name){
    return {
        name : name,
        getName : function(){return name;},
        setName : function(arg){name=arg},
        sound : function(){sound(name);}
    };
    function sound(name){console.log(name + " 냐아아아옹");}
}
var cat = Cat('나비');
cat.sound();
cat.setName('배추나비');
cat.sound();