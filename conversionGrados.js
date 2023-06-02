let fahrenheit;

function convertirACentigrados(fahrenheit){
    let gradosCelcius = (fahrenheit-32)*5/9;
    console.log(gradosCelcius);
    return gradosCelcius;
}

convertirACentigrados(50)

convertirACentigrados(75)

// a. ¿Cuántos grados C son 50 F?   --> son 10 grados C
// b. ¿Cuántos grados C son 75 F?   --> son 23.89 grados C