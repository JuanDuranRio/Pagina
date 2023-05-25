

var datosY=["pollo","tamal","arroz","jugo"];

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
                data:[2,5,6,4],
                    backgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)'
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
            animations: {
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
                data:[5,6,7,8],
                    backgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)'
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
                data:[9,10,11,12],
                    backgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)'
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
                data:[13,14,15,16],
                    backgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)'
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
                data:[17,18,19,20],
                    backgroundColor:[
                        'rgb(66, 134, 244)',
                        'rgb(66, 135, 72)',
                        'rgb(229, 89, 50)',
                        'rgb(139, 0, 139)'
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
