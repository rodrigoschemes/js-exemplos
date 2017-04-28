// Criando select populado
var body1 = document.getElementsByTagName('body');
var hr = document.createElement('hr');
var select = document.createElement('select');
var button = document.createElement('button');


button.id = "generate_btn";
button.innerHTML = "Generate";

body1[0].appendChild(select);
body1[0].appendChild(button);

for(var i = 0; i < 10; i++ ){
    var option = document.createElement('option');
    option.id = "#id_" + i;
    option.value = i;
    option.innerHTML = i;

    select.appendChild(option);
}

var input = document.querySelector('select');
var btn_generate = document.getElementById('generate_btn');
btn_generate.addEventListener('click',generate);

function generate() {

    var value = input.value;

    body1[0].appendChild(hr);
    for(var i = 0; i < parseInt(value); i++ ){
            var inpt = document.createElement('input');
            inpt.id = "#btn_" + i;

            var body = document.getElementsByTagName('body');
            body[0].appendChild(inpt);
    }

}


