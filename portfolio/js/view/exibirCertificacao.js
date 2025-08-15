import { listaCertificacao } from '../data/listaCertificacao.js';

const elementoCertificacao = document.querySelector('#elemento-certificacao');

function exibirCertificacao() {
    listaCertificacao.forEach((certificacao) => {
        elementoCertificacao.innerHTML += `
            <li class="conteudo__texto">
                <a href="${certificacao.link}" target="_blank" class="conteudo__destaque">${certificacao.titulo}</a>, ${certificacao.instituicao} - 
                <span class="conteudo__destaque">${certificacao.data}</span>.
            </li>
        `;
    });
}

exibirCertificacao();