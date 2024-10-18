let a = [1,2,6,1,2,5,9,'33','33'];

function sinrep(a){
  const b = new Set(a);
  let result = [...b];
  console.log(result);
}
sinrep(a);