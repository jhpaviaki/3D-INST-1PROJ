document.addEventListener('DOMContentLoaded', function () {
    
let tamanhoFonteAtual = 1;

const aumentaFonteBotao = document.getElementById('aumentar-fonte');

aumentaFonteBotao.addEventListener('click', function () {
    tamanhoFonteAtual += 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

diminuiFonteBotao.addEventListener('click', function () {
    tamanhoFonteAtual -= 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})

} )