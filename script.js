function calculateResult() {
  const income = parseFloat(document.getElementById("income").value);
  const expense1 = parseFloat(document.getElementById("expense1").value);
  const expense2 = parseFloat(document.getElementById("expense2").value);
  const expense3 = parseFloat(document.getElementById("expense3").value);
  const savings = parseFloat(document.getElementById("savings").value);
  const debt = parseFloat(document.getElementById("debt").value);
  const totalExpenses = expense1 + expense2 + expense3 + savings + debt;
  const result = income - totalExpenses;
  //visa resultat
  document.getElementById("result").textContent = "Resultat:" + result + " SEK " + "kvar";
}

//spara innehållet
function save() {
  //hämta innehållet från ID
  const save = document.getElementById("save").value;
  //skapa en Blob från innehållet

  const blob = new Blob([save], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "document.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}
