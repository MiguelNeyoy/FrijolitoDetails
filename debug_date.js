
const targetStr = "2026-11-21T00:00:00";
const targetDate = new Date(targetStr);
const now = new Date(); // This will use system time which is Feb 2026

console.log("Target String:", targetStr);
console.log("Target Date:", targetDate.toString());
console.log("Now:", now.toString());
console.log("Diff (ms):", targetDate - now);
console.log("Diff <= 0?", (targetDate - now) <= 0);

const days = Math.floor((targetDate - now) / (1000 * 60 * 60 * 24));
console.log("Days:", days);
