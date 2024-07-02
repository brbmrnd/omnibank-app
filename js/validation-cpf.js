export default function checkCpf(input) {
    const cpf = input.value.replace(/\.|-/g, "");

    if (checkRepeatNumber(cpf) || firstCpfCheck(cpf) || secondCpfCheck(cpf)) {
        input.setCustomValidity('Esse cpf não existe.');
    }

    function checkRepeatNumber(cpf) {
        const repeatNumbers = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999'
        ];

        return repeatNumbers.includes(cpf)
    }

    function firstCpfCheck(cpf) {
        let addition = 0;
        let multiply = 10;

        for (let size = 0; size < 9; size++) {
            addition += cpf[size] * multiply;
            multiply--;
        }

        addition = (addition * 10) % 11;


        if (addition == 10 || addition == 1) {
            addition = 0;
        }

        return addition != cpf[9];
    }

    function secondCpfCheck(cpf) {
        let addition = 0;
        let multiply = 11;

        for (let size = 0; size < 10; size++) {
            addition += cpf[size] * multiply;
            multiply--;
        }

        addition = (addition * 10) % 11;

        if (addition == 10 || addition == 1) {
            addition = 0;
        }

        return addition != cpf[10];
    }
}