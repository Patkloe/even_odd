// even or odd  paire ou impaire
function check_even(n){
 if(n === 0)
  return "even :" + true;
 else if(n === 1)
  return "even :" + false;
 else
  return check_even(n - 2);
}
  check_even(15);
