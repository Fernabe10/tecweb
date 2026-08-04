var nota1, nota2, nota3, nota4, nota5, nota6, nota7;
nota1=prompt('Ingrese 1ra. nota:','');
nota2=prompt('Ingrese 2da. nota:','');
nota3=prompt('Ingrese 3ra. nota:','');
nota4=prompt('Ingrese 4ta. nota:','');
nota5=prompt('Ingrese 5ta. nota:','');
nota6=prompt('Ingrese 6ta. nota:','');
nota7=prompt('Ingrese 7ma. nota:','');
//Convertimos los 7 strings en enteros
nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
nota4 = parseInt(nota4);
nota5 = parseInt(nota5);
nota6 = parseInt(nota6);
nota7 = parseInt(nota7);
var pro;
pro = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)/7;
if(pro>=7)
{
    document.write('promocionado');
}
else
{
    if(pro>=4)
    {
        document.write('regular');
    }
    else
    {
        document.write('reprobado');
    }
}
document.write('<br>');
document.write('Fin del ejercicio 7. Condicionales anidados.')