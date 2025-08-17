import { listaDispositivo, listaItemRodape } from "../data/listas.js";

function exibirListaDispositivo() {
    const elementoListaDispositivo = document.querySelector('#elemento-lista-dispositivo');

    listaDispositivo.forEach((dispositivo) => {
        elementoListaDispositivo.innerHTML += `
            <div class="dispositivo modelo__vertical modelo__centralizado">
                <img src="https://i.ibb.co/${dispositivo.linkImg}" alt="Icone (${dispositivo.nome})" class="conteudo__imagem"/>
                <h3 class="conteudo__subtitulo">${dispositivo.nome}</h3>
            </div>
        `;
    });
}

function exibirListaItemRodape() {
    const elementoListaItemRodape = document.querySelector('#elemento-lista-item-rodape');

    listaItemRodape.forEach((itemRodape) => {
        elementoListaItemRodape.innerHTML += `
            <li class="rodape__item">
                <a href="#">${itemRodape}</a>
            </li>
        `;
    });
}

exibirListaDispositivo();
exibirListaItemRodape();