function currentHand(arr) {



  console.log( [...new Set(arr.slice(0, arr.length - 4))].filter(x => !arr.slice(-4).includes(x)) )

  return [...new Set(arr.slice(0, arr.length - 4))].filter(x => !arr.slice(-4).includes(x)).sort()

  // if (!arr.length || arr.length <= 4) return [];

  // opponentsHand = [];

  // last4cards = arr.slice(arr.length-4);

  // for(let i = 0; i < arr.length - 4 ; i ++){

  //   if(!last4cards.includes(arr[i]) && !opponentsHand.includes(arr[i])){
  //     opponentsHand.push(arr[i])
  //   }
  // }
  
  // return opponentsHand.sort();


  // if (!arr.length || arr.length <= 4) return [];

  // opponentsHand = [];

  // last4cards = arr.slice(arr.length-4);

  // for(let i = 0; i < arr.length - 4 ; i ++){

  //   if(!last4cards.includes(arr[i]) && !opponentsHand.includes(arr[i])){
  //     opponentsHand.push(arr[i])
  //       if (opponentsHand.length >= 4) {
  //         return opponentsHand.sort();
  //       }
  //   }
  // }
  // return opponentsHand.sort();

  // if (!arr.length || arr.length <= 4) return [];

  // opponentsHand = [];

  // last4cards = arr.slice(arr.length-4);

  // for(let i = 0; i < arr.length - 4 ; i ++){

  //   if(!last4cards.includes(arr[i])){
  //     if (!opponentsHand.includes(arr[i])){
  //       opponentsHand.push(arr[i])
  //       if (opponentsHand.length >= 4) {
  //         return opponentsHand.sort();
  //       }
  //     }
  //   }
  // }
  // return opponentsHand.sort();

}

module.exports = currentHand;
