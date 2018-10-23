 let filterList = function(fullList,key,mainMenuShowArry,hiddenSubRoute,backMenu,backSubMenu){
    for(var i=0;i<fullList.length;i++){
        let obj = fullList[i];
        if(!mainMenuShowArry.includes(obj[key]) || !backMenu.includes(obj[key])){
            fullList.splice(i,1);
            i--;
        }else{
            if(obj.children && Array.isArray(obj.children)){
                for(let j=0;j<obj.children.length;j++){
                    let childobj = obj.children[j];
                    if(hiddenSubRoute.includes(childobj[key]) || !backSubMenu.includes(childobj[key])){
                        obj.children.splice(j,1);
                        j--;
                    }
                }
                
            }
        }
        
    }
}

export {
    filterList
}