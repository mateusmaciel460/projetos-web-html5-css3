const elementoProjetos = document.querySelector('#elemento-projetos');

const listaProjetos = [
    { 
        id: 1, 
        titulo: 'Projeto Portfolio', 
        tag: 'portfolio', 
        linkImagem: 'yBSr81DJ/logo-portfolio.png' 
    },
    {
        id: 2,
        titulo: 'Suporte Técnico',
        tag: 'suporte-tecnico',
        linkImagem: 'BV9vy0Mb/logo-suporte-tecnico.png'
    }
];

function exibirListaProjetosNaTela() {
    listaProjetos.forEach((projeto) => {
        elementoProjetos.innerHTML += `
            <div class="projeto modelo__vertical modelo__centralizado">
                <h2 class="conteudo__subtitulo">${projeto.titulo}</h2>

                <span class="conteudo__tag modelo__cor-verde">
                    ${projeto.tag}
                </span>

                <img src="https://i.ibb.co/${projeto.linkImagem}" alt="Logo - ${projeto.titulo}"/>

                <a href="${projeto.tag}/index.html" target="_blank" class="conteudo__botao modelo__cor-azul">
                    Acessar
                </a>
            </div>
        `;
    });
}

exibirListaProjetosNaTela();