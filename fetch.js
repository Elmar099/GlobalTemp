
const xlabels = [];
const ytemps = [];

chartIt();

async function chartIt(){
    await  getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
          labels: xlabels,
          datasets: [
            {
                label: 'Combined Land-Surface Air and Sea-Surface Water Temperature',
                data: ytemps,
                fill: true,
                backgroundColor: ['rgba(115, 79, 132, 0.2)'],
                borderColor: ['rgba(115, 99, 122, 1)'],
                borderWidth: 1
            }]
        },
    });
  async function getData() {
     const response = await fetch('ZonAnn.Ts+dSST.csv');
     const data = await response.text();
     console.log(data);

   const table = data.split('\n').slice(2);
    table.forEach(row => {
      const cols = row.split(',');
      const year = cols[0];
      xlabels.push(year);
      const temp = cols[1];
      ytemps.push(parseFloat(temp) + 14);
      console.log(year, temp);
    });
} 
}