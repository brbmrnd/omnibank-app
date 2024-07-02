import checkCpf from "./validation-cpf.js";
import checkAge from "./validation-age.js";

const inputsForm = document.querySelectorAll("[required]");

inputsForm.forEach((input) => {
    input.addEventListener("blur", () => checkInput(input));
    input.addEventListener("invalid", event => event.preventDefault());
});

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const messages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function checkInput(input) {
    let message = "";
    input.setCustomValidity('');

    if (input.name == "cpf" && input.value.length >= 11) {
        checkCpf(input);
    }
    if (input.name == "aniversario" && input.value != '') {
        checkAge(input);
    }

    errorTypes.forEach(erro => {
        if (input.validity[erro]) {
            message = messages[input.name][erro];
            console.log(message);
        }
    })
    const errorMessage = input.parentNode.querySelector('.mensagem-erro');
    const checkInput = input.checkValidity();

    if (!checkInput) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    }
}

