let bajar;
let subir;
let texto;

function Mostrar(num){
    RecuperarDatos(num);
    bajar.style.display = 'none';
    subir.style.display = 'inline-block';
    texto.style.display = 'block';
}

function Ocultar(num){
    RecuperarDatos(num);
    bajar.style.display = 'inline-block';
    subir.style.display = 'none';
    texto.style.display = 'none';
}

function RecuperarDatos(num){
    if(num==1){
        bajar = document.getElementById('bajar1');
        subir = document.getElementById('subir1');
        texto = document.getElementById('texto1');
    }else if(num==2){
        bajar = document.getElementById('bajar2');
        subir = document.getElementById('subir2');
        texto = document.getElementById('texto2');
    }else if (num==3){
        bajar = document.getElementById('bajar3');
        subir = document.getElementById('subir3');
        texto = document.getElementById('texto3');
    }
}
