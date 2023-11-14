const isari = document.querySelectorAll('#isarismn')
const baro = document.querySelectorAll('.prvl')
const P = document.querySelectorAll('#ptag')
const nugia = document.querySelectorAll('#nugo')

for (let i = 0; i < nugia.length; i++) {
    baro[i].addEventListener("click", function() {
        baro[i].classList.toggle("black");
        for (let j = 0; j < baro.length; j++) {
            if (j !== i) {
                baro[j].classList.remove("black");
            }
        }
        isari[i].classList.toggle("rotate");
        for (let j = 0; j < nugia.length; j++) {
            if (j !== i) {
                isari[j].classList.remove("rotate");
            }
        }
        P[i].classList.toggle("active");
        for (let j = 0; j < nugia.length; j++) {
            if (j !== i) {
                P[j].classList.remove("active");
            }
        }
    });
}