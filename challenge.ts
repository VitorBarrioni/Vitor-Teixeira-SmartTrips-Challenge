const findRoutes = (routes:[string, string][]) => {
    // Create new Array
  const routeTaken: string[] = [];
  const unusedRoutes: [string, string][] = [];

 routes.reduce((acc, cur) => {
    // if it's the first value, push it's values to routeTaken array
    if (acc[1] === '') {
      routeTaken.push(...cur);
      return cur;
    // if current value first position is equal to last position of accumulator, push the second value to the array
    } 
    else if (cur[0] === acc[1]) {
        routeTaken.push(cur[1]);
        return cur;
      }
    // if current value second position is equal to first position to the array, push current value first position to first position in the array
        else if(cur[1] === routeTaken[0]){
        routeTaken.unshift(cur[0])
        return [routeTaken[routeTaken.length - 1], routeTaken[routeTaken.length - 2]]
      }
      // if none condition checks, pushes value to array of unusedRoutes
      else {
        unusedRoutes.push(cur)
        return acc
      }
    
  }, ['', '']);
  // if there is anything in the array of unusedRoutes, calls the function again until it's empty and pushes the values to the array
  if (unusedRoutes.length !== 0) {
    const remainingRoutes = findRoutes(unusedRoutes);
    routeTaken.push(...remainingRoutes.split(', ').slice(1));
  }
  // return values in string
  return routeTaken.join(', ');
  };