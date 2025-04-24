document.addEventListener("DOMContentLoaded", function() {
  // Test XSS
  const xssForm = document.querySelector("form[action='#']");
  const xssInput = document.getElementById("xss_input");
  const xssResult = document.getElementById("xss_result");
  
  xssForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let userInput = xssInput.value;
    xssResult.textContent = userInput; // Ce code est vulnérable aux attaques XSS !
  });
  
  // Test SQL Injection (simulation côté frontend)
  const sqlForm = document.querySelectorAll("form[action='#']")[1];
  const sqlInput = document.getElementById("sql_input");
  const sqlResult = document.getElementById("sql_result");
  
  sqlForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let query = sqlInput.value;
    sqlResult.textContent = `Requête simulée : ${query} (en réalité, il n'y a pas de base de données ici)`;
  });
});