next=(j, arr) => {
    let driver = arr[++j%(arr.length)];
    if(driver.count == 0) return driver;
    if(driver.count > 0) driver.count--;
    return next(j++, arr);

}

circusSort = arr => {
    let res = [];
    let  i = j = 0;
    while(i<30){
        let driv1 = next(j++, arr);
        let driv2 = next(j++, arr);
        while(driv1 == driv2)  driv2 = next(j++, arr);
        res.push({
            driv1: driv1,
            driv2: driv2,
        });
       i++;
    }
    return res;
  }
  
  
  circusSort([
  {name:'rotem', count: 4},
  {name: 'lia', count: 0},
  {name: 'alon', count: 1} ,
  {name: 'ziv', count: 1},
  {name: 'aviv', count: 0},
  {name: 'ori', count: 0},
  {name: 'tal', count: 0}]).forEach(element => {
      console.log(element.driv1.name, element.driv2.name);
  });