export default function checkAge(input) {
    const dateBirth = new Date(input.value);
    
    if (!verifyAge(dateBirth)){
        input.setCustomValidity('O usuário não é maior de idade.');
    }
}

function verifyAge(data){
    const dataAtual = new Date();
    const legalData = new Date(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate());
    
    return dataAtual >= legalData;
}