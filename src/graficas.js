

var datosY=["nunca","Casi Nunca","Pocas Veces","Algunas Veces","Frecuentemente","Muy Frecuente"];

function mostrar (){

    const cta = document.getElementById("g1").getContext("2d");

    if (window.grafica) {
        window.grafica.clear();
        window.grafica.destroy();
    }

    window.grafica = new Chart(cta, {

        type:"line",
        data:{
            labels:datosY,
            datasets:[{
                label:'cantidad de comidas',
                data:[2,5,6,4,0,7],
                    backgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)',
                        'rgb(128, 128, 0)',
                        'rgb(25, 25, 112)'
                    ],

                    borderColor:[
                        'rgb(75, 192, 192)'
                    ],

                    borderWidth:2,
                    pointRadius:7
                    


                    
                }]
        },

        options:{
            maintainAspectRatio:false,
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZaero:true
                    }
                }]
            },
            animations: {
                tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
                },
            },
            plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true  
            }
            }
        }
        
    });

    const ctb =document.getElementById("g2").getContext("2d");

    if (window.grafica2) {
        window.grafica2.clear();
        window.grafica2.destroy();
    }

    window.grafica2 = new Chart(ctb, {
        type:"doughnut",
        data:{
            labels:datosY,
            datasets:[{
                label:'cantidad de comidas',
                data:[5,6,7,8,1,3],
                    backgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)',
                        'rgb(128, 128, 0)',
                        'rgb(25, 25, 112)'
                    ],
                    borderColor:[
                        'rgb(66, 134, 0)',
                        'rgb(66, 135, 0)',
                        'rgb(229, 89, 0)',
                        'rgb(139, 0, 0)',
                        'rgb(128, 128, 0)',
                        'rgb(25, 25, 112)'
                    ],
                    borderWidth:3
                }]
        },

        options:{
            maintainAspectRatio:false,
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZaero:true
                    }
                }]
            },
            animations:{
                tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
                }
            },
            plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            }
            }
        }
        
    });

    const ctc =document.getElementById("g3").getContext("2d");

    if (window.grafica3) {
        window.grafica3.clear();
        window.grafica3.destroy();
    }

    window.grafica3 = new Chart(ctc, {
        type:"bar",
        data:{
            labels:datosY,
            datasets:[{
                label:'cantidad de comidas',
                data:[9,10,11,12,3,2],

                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgb(0, 255, 0,0.4)',
                        'rgb(154, 205, 50,0.5)'
                    ],

                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(0, 255, 0)',
                        'rgb(154, 205, 50)'
                    ],

                    hoverBackgroundColor:[
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgb(0, 255, 0,1)',
                        'rgb(154, 205, 50,1)'
                    ],

                    borderWidth: 2,
                }]
        },

        options:{
            maintainAspectRatio:false,
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZaero:true
                    }
                }],
            },
            animations:{
                tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
                }
            },
            plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            }
            }
        }
        
    });

    const ctd =document.getElementById("g4").getContext("2d");

    if (window.grafica4) {
        window.grafica4.clear();
        window.grafica4.destroy();
    }

    window.grafica4 = new Chart(ctd, {
        type:"pie",
        data:{
            labels:datosY,
            datasets:[{
                label:'cantidad de comidas',
                data:[13,14,15,16,3,7],
                    backgroundColor:[
                        'rgb(0, 255, 255,0.7)',
                        'rgb(127, 255, 0,0.7)',
                        'rgb(139, 0, 139,0.7)',
                        'rgb(255, 215, 0,0.7)',
                        'rgb(128, 128, 0,0.7)',
                        'rgb(25, 25, 112,0.7)'
                    ],
                    borderColor:[
                        'rgb(0, 255, 255)',
                        'rgb(127, 255, 0)',
                        'rgb(139, 0, 139)',
                        'rgb(255, 215, 0)',
                        'rgb(128, 128, 0)',
                        'rgb(25, 25, 112)'
                    ],
                    borderWidth:5,
                    
                    hoverBackgroundColor:[

                        'rgb(0, 255, 255)',
                        'rgb(127, 255, 0)',
                        'rgb(139, 0, 139)',
                        'rgb(255, 215, 0)',
                        'rgb(128, 128, 0)',
                        'rgb(25, 25, 112)'
                    ],

                    hoverBorderColor:[
                        'rgb(0, 255, 255)',
                        'rgb(127, 255, 0)',
                        'rgb(139, 0, 139)',
                        'rgb(255, 215, 0)',
                        'rgb(128, 128, 0)',
                        'rgb(25, 25, 112)'
                    ]
                }]
        },

        options:{
            maintainAspectRatio:false,
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZaero:true
                    }
                }]
            },
            animations:{
                tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
                }
            },
            plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            }
            }
        }
        
    });

    const cte =document.getElementById("g5").getContext("2d");

    if (window.grafica5) {
        window.grafica5.clear();
        window.grafica5.destroy();
    }

    window.grafica5 = new Chart(cte, {
        type:"radar",
        data:{
            labels:datosY,
            datasets:[{
                label:'cantidad de comidas',
                data:[17,18,19,20,12,1],

                    backgroundColor:'rgba(54, 162, 235, 0.5)',

                    pointBackgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)',
                        'rgb(128, 128, 0)',
                        'rgb(255, 255, 0)'
                    ],
                    borderColor:'rgba(54, 162, 235, 1)',
                    pointRadius:5
                }]
        },

        options:{

            maintainAspectRatio:false,
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZaero:true
                    }
                }]
            },
            animations: {
                tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
                },
            },
            
            plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            }
            }
        }
        
    });

}
