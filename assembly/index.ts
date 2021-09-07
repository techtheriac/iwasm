declare function log(n : string | null) : void;

function isDivisible(number : i32, divisor : i32) : bool {
  if(number % divisor == 0) {
    return true;
  }
  return false;
}

export function fizzbuzz(n : i32) : string | null {
  if(isDivisible(n, 15))
    return "fizzbuzz"

  if(isDivisible(n, 3))
    return "fizz"

  if(isDivisible(n, 5))
    return "buzz"

  return null;
}