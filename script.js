function abrirIntro() {
    const modal =  document.getElementById('janelaIntro')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelaIntro') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirEstrutura() {
    const modal =  document.getElementById('janelaEstrutura')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelaEstrutura') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirTags() {
    const modal =  document.getElementById('janelaTags')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelaTags') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirLink() {
    const modal =  document.getElementById('janelaLink')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelaLink') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirMedia() {
    const modal =  document.getElementById('janelaMedia')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelaMedia') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirForms() {
    const modal =  document.getElementById('janelaForms')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelaForms') {
            modal.classList.remove('abrir')
        }
    })
}