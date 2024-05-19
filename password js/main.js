const passwordLength = document.getElementById('passwordLength');
const password = document.getElementById('password');

//funsi penampung bahan untuk password
function generatePassword(event){
    const key = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=-{}[]';:/?.,<>~`"

    let generator = '';
    for(let i= 0; i< event; i++ ){
        generator += key[Math.floor(Math.random() * key.length)];
    }
    return generator
}

// inti dari input
// fungsi ini diambil di onclik atribut html
function getPassword(){
    const newPass = generatePassword(passwordLength.value);
    password.value = newPass;
}