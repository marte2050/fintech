/*
* Autor: Jonathan
* Objetivo: Função para 'mockar dados de receita e exibir na tela principal'
*/

function receitas(){
    let xLabels = ["Salário", "Freelancers", "Outros"];
    let yReceitas = [4000, 1000, 700];
    let barColors = ["green","blue","orange"];
    
    new Chart("tresPrincipaisFontesReceita", {
      type: "bar",
      data: {
        labels: xLabels,
        datasets: [{
          backgroundColor: barColors,
          data: yReceitas
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Minhas Receitas"
        },
        layout: {
            responsive: true,
            maintainAspectRatio: false
        }
      }
    });
}