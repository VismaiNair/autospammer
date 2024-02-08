function spam() {
  /*  Function-use Variable Definitions  */
  let spamming = {
    times: number = window.document.getElementById("spamTimes").value,
    text:  string = window.document.getElementById("spamText").value,
    output: string = window.document.getElementById("output"),
  };
  let msg = "";

  /* Text Size Limiting Functions */
  if (spamming.times > 10000) {
    alert("To prevent overly high usage of your browser's data space, the maximum number of times you can spam is 10000.");
    return spamming.output.innerHTML = "The maximum number of times you can spam is 500000.";
  }
  else {
    for (let i = 0; i < spamming.times; i++) {
      spamming.output.innerHTML = spamming.text;
    }
  }
  if (spamming.text == "Skibidi" && spamming.times == "69")
    spamming.output.innerHTML = "Sticking out your gyaat for the rizzler; You're so skibidi; You're so Fanum Tax; I just wanna be your sigma; Freaking come here; Give me ohio;";
}
