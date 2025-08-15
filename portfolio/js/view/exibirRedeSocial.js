import { listaRedeSocial } from '../data/listaRedeSocial.js';

const elementoRedeSocial = document.querySelector('#elemento-rede-social');

function exibirElementoRedeSocial() {
    listaRedeSocial.forEach((redeSocial) => {
        elementoRedeSocial.innerHTML += `
            <li class="conteudo__menu-item">
                <a href="${redeSocial.link}" class="modelo__horizontal modelo__centralizado conteudo__link" target="_blank">
                    <img src="https://i.ibb.co/${redeSocial.img}" alt="Logo do ${redeSocial.titulo}"/>
                    <span class="conteudo__menu-titulo">${redeSocial.titulo}</span>
                </a>
            </li>
        `;
    });
}

exibirElementoRedeSocial();