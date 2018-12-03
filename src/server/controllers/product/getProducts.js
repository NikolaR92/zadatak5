const { Product } = require('../../models');


module.exports = {
    getProducts(req, res) {
        /** return list of all products */
        return Product.findAll()
            .then((products) => {
                res.status(201).send(products);
            })
            .catch(error => res.status(400).send(error));

    },

};
