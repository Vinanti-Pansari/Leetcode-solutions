/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    const direction = [
        [1,0],[0,1],[-1,0],[0,-1]
    ]
    const TotalRows = grid.length
    const TotalColumn = grid[0].length;

    dfs = (row, column) =>{
      if(row < 0 || column < 0 || row >= TotalRows || column >= TotalColumn || grid[row][column] !== '1' ){
        return
      }
      grid[row][column] = '2'
     for(const[nextRow, nextColumn] of direction){
        dfs(row + nextRow, column + nextColumn)
     }
    }

    for(let row = 0; row < TotalRows; row++) {
        for(let column = 0; column < TotalColumn; column++ ){
            if(grid[row][column] === '1'){
                dfs(row, column)
                islandCount ++
            }
        }
    }
    return islandCount
};