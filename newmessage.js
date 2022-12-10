const myModal = new bootstrap.Modal('#talon')
const newModal = document.getElementById('talon');
const question = document.getElementById('question')
myModal.show();
var step = 0;
var saysNo = 0;
const onYes = function () {
    myModal.hide();
    step += 1;
    saysNo = 0;
}
const onNo = function () {
    myModal.hide();
    saysNo += 1;
}


newModal.addEventListener("hidden.bs.modal", function () {
    if (saysNo > 0) {
        let please = ""
        for (let i = 0; i < saysNo; i++) {
            if (i === 10) {
                please += 'IM ON MY KNEES '
            } else if (i > 6) {
                please += 'PRETTY PLEASE!! '
            } else if (i > 2) {
                please += 'PLEASE '
            } else {
                please += 'please '
            }
        }
        question.innerHTML = please
        myModal.show();
    } else if (step === 1) {
        question.innerHTML = "Ahaa thanks, You agree to sleep in call?"
        myModal.show();
    } else if (step === 2) {
        question.innerHTML = "Shweetttt, You agree to be my discord Kitten ?"
        myModal.show();
    } else if (step === 3) {
        question.innerHTML = ""
    }
});