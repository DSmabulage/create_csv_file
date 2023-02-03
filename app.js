import { appendFileSync } from "fs";

function saveAsCSV(name, phone, email) {
  const csv = `${name},${phone},${email}\n`;
  try {
    appendFileSync("./contacts.csv", csv);
  } catch (err) {
    console.error(err);
  }
}

const startApp = () => {
  saveAsCSV("Bill", "+00123456789", "bill@codingthesmartway.com");
  saveAsCSV("Steve", "+00987654321", "steve@codingthesmartway.com");
};

startApp();
