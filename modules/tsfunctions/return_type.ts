// the `: number` here specifies that this function returns a number
export default function GetTime(): number {
  return new Date().getTime();
}

console.log(GetTime());
