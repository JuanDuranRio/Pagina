var datosY=["nunca","Casi Nunca","Pocas Veces","Algunas Veces"];
const v1= document.getElementById('valor1')
const v2= document.getElementById('valor2')
const v3= document.getElementById('valor3')
const v4= document.getElementById('valor4')

function imprimir(elemento) {
    var ventana = window.open('','PRINT','height=400, width = 600');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write('</head><body >');
    ventana.document.write(elemento.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.print();
    ventana.close();
    return true;
}

document.querySelector("#Imprimir").addEventListener("click", function() {
    var div = document.querySelector("#imprimirDiv");
    imprimir(div);
})


const boton = document.getElementById("boton");
const div = document.getElementById("DIV");
boton.addEventListener("click", () => {
    div.style.display = "flex";
    v1.value = "";
    v2.value = "";
    v3.value = "";
    v4.value = "";
})

const boton2 = document.getElementById("boton2");

boton2.addEventListener("click", () =>{
    div.style.display = "none";
    mostrar();
})

function mostrar (){

    var valor1=document.getElementById('valor1').value;
    var valor2=document.getElementById('valor2').value;
    var valor3=document.getElementById('valor3').value;
    var valor4=document.getElementById('valor4').value;

    var datosX=[valor1,valor2,valor3,valor4];

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
                label:'resultados',
                data:datosX,
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
                label:'resultados',
                data:datosX,
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
                label:'resultados',
                data:datosX,

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
                label:'resultados',
                data:datosX,
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
                label:'resultados',
                data:datosX,

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
function reintentar(){
    var valor1=document.getElementById('valor1').value="";
    var valor2=document.getElementById('valor2').value="";
    var valor3=document.getElementById('valor3').value="";
    var valor4=document.getElementById('valor4').value="";

    var datosX=[valor1,valor2,valor3,valor4];

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
                label:'resultados',
                data:datosX,
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
                label:'resultados',
                data:datosX,
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
                label:'resultados',
                data:datosX,

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
                label:'resultados',
                data:datosX,
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
                label:'resultados',
                data:datosX,

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
