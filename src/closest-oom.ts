export const getClosestOOM = (left: number, right: number) => (
  Math.round(
    (Math.log(right) / Math.LN10) -
    (Math.log(left) / Math.LN10)
  )
);
