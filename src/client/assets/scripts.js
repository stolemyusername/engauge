const mergeNArrays = (arraysToSort, comparitor) => {
  if (arraysToSort.length === 1) { return arraysToSort[0]; } // Only one array so no need to merge
  const newArr = [];
  const pointers = new Array(arraysToSort.length).fill(0);
  comparitor = comparitor || function (a, b) { return a < b; };

  const isInbounds = (pointer, arr) => (pointer < arr.length);
  const anyInBounds = (pointers, arraysToSort) => pointers.reduce((acc, item, i, arr) => acc || isInbounds(item, arraysToSort[i]), false);

  while (anyInBounds(pointers, arraysToSort)) {
    let smallestArrInd;
    let smallestVal;

    const mostRecent = newArr[newArr.length - 1];
    for (let i = 0; i < arraysToSort.length; i++) {
      const thisPointer = pointers[i];
      const thisArr = arraysToSort[i];
      if (isInbounds(thisPointer, thisArr) && (comparitor(thisArr[thisPointer], smallestVal) || smallestVal === undefined)) {
        while (thisArr[pointers[i]] < mostRecent) { pointers[i]++; } // Skip any values that are smaller than the previous ones
        smallestArrInd = i;
        smallestVal = arraysToSort[i][thisPointer];
      }
    }
    newArr.push(smallestVal);
    pointers[smallestArrInd]++;
  }

  return newArr;
};

// Input:
  // indicesToPull: Set
  // dataSource: Array of Objects
  // key: String to pull as a key from datasource
const pluckFromSet = (indicesToPull, dataSource) => {
  const result = [];
  if (indicesToPull.size === 0 || dataSource.length === 0) {
    console.log('Entered exit statement');
    return result;
  }

  for (const index of indicesToPull) {
    result.push(dataSource[index]);
  }
  return result;
};

const findKeyAtID = (array, target, idName, key) => {
  // key is optional and will default to returning the index
  idName = idName || 'id';
  for (var i = 0; i < array.length; i++) {
    if (array[i][idName] === target) {
      return key ? array[i][key] : i;
    }
  }
};

const isSetEqual = (a, b) => {
  if (!a || !b) {return false;}
  for (value of a) {
      if (!b.has(value)) { return false; }
  }
  for (value of b) {
    if (!a.has(value)) { return false; }
  }
  return true;
};

const standardizeSize = (sessions, targetSize) => {
  //TODO: Duplicate logic in Heatmap.js this.scaleData function
  const result = [];
  for (var i = 0; i < sessions.length; i++) {
    const tempSession = [];
    const scaleX = targetSize.x / sessions[i].screenSize.x ;
    const scaleY = targetSize.y / sessions[i].screenSize.y ;
      // console.log(sessions[i].length)
    const recording = sessions[i].recording;
    for (var j = 0; j < recording.length; j++) {
      const tempPoint = Object.assign({}, recording[j]);
      tempPoint.x = recording[j].x * scaleX;
      tempPoint.y = recording[j].y * scaleY;
      tempSession.push(tempPoint);
    }
    result.push(tempSession)
  }
  return result;
};

module.exports = { mergeNArrays, pluckFromSet, findKeyAtID, isSetEqual, standardizeSize };
