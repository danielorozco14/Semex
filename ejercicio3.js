var arr=[1,"hola",true,"mundo","true",true,45];
function tipoDato(arr){
    var num,str,bool,obj,funct;
    var flagNum,flagStr,flagBool,flagObj,flagFunct;
    var aux=[];
    for(var i=0; i<arr.length;i++){
        if(typeof arr[i]=="number"){
            num++;
            flagNum=true;
        }
        else if(typeof arr[i]=="string"){
            str++;
            flagStr=true;
        }
        else if(typeof arr[i]=="boolean"){
            bool++;
            flagBool=true;
        }
        else if(typeof arr[i]=="object"){
            obj++;
            flagObj=true;
        }
        else if(typeof arr[i]=="function"){
            funct++;
            flagFunct=true;
        }
    }
    console.log("")
}