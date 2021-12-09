const objetos = [
    {
        nombre : 'dragon ball',
        editoria : 'ivrea',
        precio : 1231,
        img : 'images/goku.png'

    },

    {
        nombre : "Stone Ocean",
        editoria : "Panini",
        precio: 5000
    }

    
];

const mainController = {
    index : (req,res)=>{
        res.render('products/index', {mangas : objetos})
        objetos.push({nombre:'punpun', editoria:'ivrea',precio : 1400})
    }
}

module.exports = mainController;