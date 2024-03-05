// EXAMPLE 1 - Get the current Date and Time in UTC/GMT using JavaScript

const utcStr = new Date().toUTCString();
console.log(utcStr); // 👉️ "Mon, 24 Jul 2023 16:46:35 GMT"

const isoStr = new Date().toISOString();
console.log(isoStr); // 👉️ "2023-07-24T16:46:35.269Z"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the current Date and Time in UTC/GMT using toISOString()

// const isoStr = new Date().toISOString();
// console.log(isoStr); // 👉️ "2023-07-24T16:47:57.673Z"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get a GMT/UTC Date or convert a Date to GMT/UTC in JavaScript

// // ✅ (Optionally) Create a Date using Universal time (= GMT)
// //    instead of local time
// const d1 = new Date(Date.UTC(2022, 0, 14, 14, 30, 0));
// console.log(d1);

// // --------------------------------------------

// // ✅ Get a String representing the given Date
// //    using UTC (= GMT) time zone.
// const d2 = new Date();
// const result = d2.toUTCString();
// console.log(result); // 👉️ "Fri, 14 Jan 2022 16:50:03 GMT"

// // 👇️ returns UTC (=GMT) Hour of the date
// console.log(d2.getUTCHours()); // 👉️ 16

// // 👇️ returns UTC (=GMT) Minutes of the date
// console.log(d2.getUTCMinutes()); // 👉️ 50

// // 👇️ returns UTC (=GMT) Seconds of the date
// console.log(d2.getUTCSeconds()); // 👉️ 03
