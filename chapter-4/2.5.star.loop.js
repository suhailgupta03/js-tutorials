const numberOfRows = 5; // Change this value to increase/decrease the number of rows

for (let i = 1; i <= numberOfRows; i++) {
  let starPattern = '';
  for (let j = 1; j <= i; j++) {
    starPattern += '*';
  }
  console.log(starPattern);
}
