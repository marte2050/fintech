/*
* Autor: Jonathan
* Objetivo: Função para 'mockar dados de despesa e exibir na tela principal'
*/

function despesas(){
    let xLabels = ["Aluguel", "Cartão de Crédito", "Energia", "Água", "Internet"];
    let yDespesas = [2000, 800, 300, 200, 100];
    let barColors = ["red", "green","blue","orange","brown"];
    
    new Chart("cincoPrincipaisDespesas", {
      type: "pie",
      data: {
        labels: xLabels,
        datasets: [{
          backgroundColor: barColors,
          data: yDespesas
        }]
      },

      options: {
        legend: {display: false},
        
        title: {
          display: true,
          text: "Meus Principais Gastos"
        },

        layout: {
            responsive: true,
            maintainAspectRatio: false
        }
      }
    });
}