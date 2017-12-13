const panel = document.querySelector('.panel');
const addBtn = document.querySelector('.addBtn');
//Task 1 
const addInput = () => {
    let inputGroup = document.createElement("div");
    inputGroup.classList.add('input-group');
    let inputBox = document.createElement("input");
    inputBox.setAttribute('type', 'text');
    const rmvBtn = document.createElement("button");
    rmvBtn.classList.add('rmvBtn');
    rmvBtn.textContent = `-`;
    panel.appendChild(inputGroup).appendChild(inputBox);
    inputGroup.appendChild(rmvBtn);
    panel.appendChild(inputGroup);

    rmvBtn.addEventListener('click', function () {
        panel.removeChild(inputGroup);
    });
};

//Task 2: read and show property of inputs

//     const readInputs = function () {
//         let input = document.querySelectorAll('.input-group>input');
//         console.log(input);
//     for(var i = 0; i <input.length; i++){
//             textArea.value += input[i].value + '--&&--';
//     }
//         };
// };

addBtn.addEventListener('click', addInput);

//Task 2
const textArea = document.createElement('textarea');
const readBtn = document.createElement('button');
readBtn.textContent = `Собрать`;
panel.after(textArea, readBtn);

const radioGroup = document.createElement('div');
radioGroup.classList.add('radio-group');
readBtn.after(radioGroup);
for (var i = 0; i < 3; i++) {
    const label = document.createElement('label');
    let labelContent = ['Все', 'Чётные', 'Нечётные'];
    let labelAtr = ['all', 'even', 'odd'];
    label.setAttribute('for', labelAtr[i]);
    label.textContent = labelContent[i];
    radioGroup.append(label);
    const radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'value');
    radioInput.id = labelAtr[i];
    label.after(radioInput);
}

document.getElementById('all').setAttribute('checked', 'checked');
const chooseValue = () => {
    let inputs = document.querySelectorAll('.input-group > input');
    let result = '';
    let devider = `--&&--`;
    if (document.getElementById('all').checked === true) {
        for (var i = 0; i < inputs.length; i++) {
            textArea.value += parseInt(inputs[i].value) + devider;
        }

    } else if (document.getElementById('even').checked) {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value % 2 === 0) {
                result = inputs[i].value;
                textArea.value += result + devider;
            }
        }
    } else if (document.getElementById('odd').checked) {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value % 2 === 1) {
                result = inputs[i].value;
                textArea.value += result + devider;
            }
        }
    } else {
        textArea.value = `ERROR`;
    }

};

const checkValue = () => {
    let inputs = document.querySelectorAll('.input-group > input');
    let error;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == false || isNaN(inputs[i].value)) {
            inputs[i].classList.toggle('error');
            error = true;
        } else if (error) {
            alert('Please fill in all entries');
            readBtn.removeEventListener('click', chooseValue);
        }
        continue;
    }
};

readBtn.addEventListener('click', checkValue);
readBtn.addEventListener('click', chooseValue);


//Task 2

const drinkList = document.querySelector('ul');

const addItem = document.querySelector('#add_item');
addItem.onclick = () => {
    let newItem = document.querySelector('#new_item').value;
    let newElem = document.createElement('LI');
    newElem.textContent = newItem;
    drinkList.appendChild(newElem);
};
drinkList.onclick = (e) => {
    if (e.target !== e.currentTarget) {
        e.target.classList.toggle('shine');
    }
};