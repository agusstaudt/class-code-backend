class ProductManager {

    //  Debe crearse desde su constructor con el
    //  elemento products, el cual será un arreglo vacío
    constructor() { 
        this.products = [];
    }
    // método addproduct()
    addProduct(title, description, price, thumbnail, code, stock) {
        // Verifica que todos los campos sean proporcionados
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("All fields are required");
            return null;
        }
        let nonEmpty=this.products.find(product=>product.code==code) 
        if(nonEmpty){   
            console.log("Code already defined");
            return null 
        }

        let id=100 // por defecto se le asigna 1 al id
        if(this.products.length){ // chequeo de longitud 
            id=this.products[this.products.length-1].id + 10 // id autoincrementable
        }
        // Cada producto que gestione debe contar con las propiedades:
        // - title (nombre del producto)
        // - description (descripción del  producto)
        // - price (precio)
        // - thumbnail (ruta de imagen)
        // - code (código identificador)
        // - stock (número de piezas disponibles)
        const product = { 
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product) // agrega al array products el contenido de la variable producto
        return product; 
    }
    // metodo getProducts()
    getProducts() {
        return this.products;
    }
    // Debe contar con un método “getProductById” el cual debe buscar en
    // el arreglo el producto que coincida con el id
    getProductById(id){
        let prod=this.products.find(producto=>producto.id===id);
            if(!prod === id){
                console.log("Not Found");
            }
            return prod;
    }
}

// Proceso de testing del entregable
// Se creará una instancia de la clase “ProductManager”
const productos1 = new ProductManager();
// Llamada a getProducts de manera tal de devolver el array vacío
console.log("Listado inicial de productos1:", JSON.stringify(productos1.getProducts(), null, 2));

// Primera instancia
productos1.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);
// Segunda instancia
productos1.addProduct("producto prueba 2", "Nuevo producto de prueba", 300, "sin imagen", "abc200", 50);
// Instancia sin un campo completado
productos1.addProduct("producto prueba 2", "Nuevo producto de prueba", 300, "sin imagen", "abc200");
// Instancia con código repetido
productos1.addProduct("producto copado", "Este es un producto rapido", 350, "sin imagen", "abc200", 24);

// Mostrar todos los productos
console.log("Listado de productos1:", JSON.stringify(productos1.getProducts(), null, 2));

