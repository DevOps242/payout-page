export function convertPenniesToDollars(pennies) {
  // PENNIES will be a double and need to convert to int
  pennies = pennies / 100;

  return pennies.toFixed(2);
}
