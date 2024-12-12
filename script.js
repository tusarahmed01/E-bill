function bill(){
  var current, cost, res;
  current=Number(document.calc.current.value);
  cost=Number(document.calc.cost.value);

res=current*cost;
document.calc.result.value= res;
}