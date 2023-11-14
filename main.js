const isari = document.querySelectorAll('#isarismn')
const baro = document.querySelectorAll('#prvl')
const P = document.querySelectorAll('#ptag')
const nugia = document.querySelectorAll('#nugo')

for (let i = 0; i < nugia.length; i++) {
    nugia[i].addEventListener("click", function() {
        baro[i].classList.toggle("gansxvavebuli");
        for (let j = 0; j < nugia.length; j++) {
            if (j !== i) {
                baro[j].classList.remove("gansxvavebuli");
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