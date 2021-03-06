const mergeNArrays = ( arraysToSort, comparitor ) => {
  if ( arraysToSort.length === 1 ) { return arraysToSort[ 0 ]; } // Only one array so no need to merge
  const newArr = [];
  const pointers = new Array( arraysToSort.length ).fill( 0 );
  comparitor = comparitor || function ( a, b ) { return a < b; };

  const isInbounds = ( pointer, arr ) => ( pointer < arr.length );
  const anyInBounds = ( pointers, arraysToSort ) => pointers.reduce( ( acc, item, i, arr ) => acc || isInbounds( item, arraysToSort[ i ]), false );

  while ( anyInBounds( pointers, arraysToSort ) ) {
    let smallestArrInd;
    let smallestVal;

    const mostRecent = newArr[ newArr.length - 1 ];
    for ( let i = 0; i < arraysToSort.length; i++ ) {
      const thisPointer = pointers[ i ];
      const thisArr = arraysToSort[ i ];
      if ( isInbounds( thisPointer, thisArr ) && ( comparitor( thisArr[ thisPointer ], smallestVal ) || smallestVal === undefined ) ) {
        while ( thisArr[ pointers[ i ] ] < mostRecent ) { pointers[ i ]++; } // Skip any values that are smaller than the previous ones
        smallestArrInd = i;
        smallestVal = arraysToSort[ i ][ thisPointer ];
      }
    }
    newArr.push( smallestVal );
    pointers[ smallestArrInd ]++;
  }

  return newArr;
};

// Input:
  // indicesToPull: Set
  // dataSource: Array of Objects
  // key: String to pull as a key from datasource
const indicesFromSet = ( indicesToPull, dataSource ) => {
  const result = [];
  if ( indicesToPull.size === 0 || dataSource.length === 0 ) {
    console.log( 'Entered exit statement' );
    return result;
  }

  for ( const index of indicesToPull ) {
    result.push( dataSource[ index ]);
  }
  return result;
};

module.exports = { mergeNArrays, indicesFromSet };
