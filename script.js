function changeContent() {
    const value = document.getElementById("selector").value;
    const output = document.getElementById("output");
  
    if (value === "A") {
      output.innerHTML = "これはAの内容です。";
    } else if (value === "B") {
      output.innerHTML = "これはBの内容です。";
    }
  }