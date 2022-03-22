// Code your solution in this file!
function distanceFromHqInBlocks(block){ 
    let location = 42;
    return Math.abs(block - location);
    // if(block < location){
    //     return location - block;
    // }else{
    //     return block - location;
    // };
};

function distanceFromHqInFeet(block){
    let bToF = 264;
return distanceFromHqInBlocks(block) * bToF;
};

function distanceTravelledInFeet(block1, block2){
    let bToF1 = 264;
    return Math.abs(block1 - block2) * bToF1;
    // if(block1 < block2){
    //     const fblock = block2 - block1;
    //     return fblock * bToF1;
    // }else{
    //     const fblock = block1 - block2;
    //     return fblock * bToF1;
    // };
};

function calculatesFarePrice(start, destination){
    let rate = 0.02;
    let distance = distanceTravelledInFeet(start, destination);
    while(distance < 2500){
        if(distance <= 400){
            return 0;
        }else if(distance > 400){
            return (distance * rate) - 8 ;
        }else if(distance > 2000){
            return 25;
        };
    };
    if(distance > 2500){
    return console.log("cannot travel that far");
    }
};
