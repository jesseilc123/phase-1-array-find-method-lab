// code your solution here

function superbowlWin(array){
    const win = array.find(function (item){
            return item.result === "W"
    })
    if(win !== undefined){
        return win.year
    }else{
        return undefined
    };
};