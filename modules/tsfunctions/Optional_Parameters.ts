export default function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(2, 5));
