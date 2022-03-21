// Code your solution in this file!
function distanceFromHqInBlocks(block){ 
    const location = 42
    if(block < location){
        return location - block;
    }else{
        return block - location;
    };
  };

  function distanceFromHqInFeet(block){
      const bToF = 264
    return distanceFromHqInBlocks(block) * bToF;
  };

  function distanceTravelledInFeet(hey){
      hey;
  };