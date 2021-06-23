const colunas = [
    [
        "img/carvalho-0.jpg",
        "img/carvalho-1.jpg",
        "img/carvalho-2.jpg",
        "img/carvalho-3.jpg",
        "img/carvalho-13.jpg",
        "img/carvalho-4.jpg"
    ],
    [
        "img/carvalho-5.jpg",
        "img/carvalho-6.jpg",
        "img/carvalho-7.jpg",
        "img/carvalho-8.jpg",
        "img/carvalho-9.jpg",
        "img/carvalho-20.jpg",
        "img/carvalho-21.jpg",

    ],
    [
        "img/carvalho-10.jpg",
        "img/carvalho-11.jpg",
        "img/carvalho-12.jpg",
        "img/carvalho-13.jpg",
        "img/carvalho-14.jpg"
    ],
    [
        "img/carvalho-15.jpg",
        "img/carvalho-16.jpg",
        "img/carvalho-17.jpg",
        "img/carvalho-18.jpg",
        "img/carvalho-19.jpg"
    ]
]
function listarFotos() {
    // Criar colunas
    colunas.map((colunaAtual) => {
        const idColuna = colunas.indexOf(colunaAtual)
        document.getElementById("fotos").innerHTML += `<section class="coluna" id="coluna-${idColuna}"></section>`
        colunaAtual.map((fotoAtual) => {
            document.getElementById(`coluna-${idColuna}`).innerHTML += `<img class="fotos-expo" src="${fotoAtual}">`
        })
    })
}

listarFotos()