import {Injectable} from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable ({providedIn: 'root'})
export class ProductosService{
    constructor(){
        console.log("Servicio listo para usar!!!");
    }
    private productos: Producto[] = [
        { 
            nombre: "Jaguar", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089788997.jpg",
            precio: 9500,
            descripcion: "Otro ejemplo de la evolución de coches elegantes y distinguidos hacia versiones más deportivas es Jaguar. Los clásicos interiores de madera y sus interminables morros rematados con el espectacular felino plateado en la punta, míticos durante los 70 y los 80, han dado paso a vehículos más compactos, mucho más potentes y a versiones más actuales como los SUV. Todos ellos equipados con tecnologías desarrolladas en sus incursiones en la alta competición -donde llevan años codeándose con otras marcas de un perfil mucho más deportivo- pero sin perder ese aire british que caracteriza a la firma."
        },
        { 
            nombre: "Pagani", 
            img: "https://t1.uc.ltmcdn.com/es/posts/7/7/1/pagani_54177_8_600.webp",
            precio: 500000,
            descripcion: "Pagani Huayra. Fundada en 1992 por el argentino Horacio Pagani, es prácticamente una recién nacida si la comparamos con sus competidores."
        },
        { 
            nombre: "McLaren", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089222862.jpg",
            precio: 215000,
            descripcion: "Si hay una marca que ha podido hacer sombra a Ferrari en la Fórmula 1 en las últimas décadas, esa es McLaren. Pero lo que pocos conocen es que esta misma firma lleva algunos años desarrollando y comercializando súper deportivos de calle casi tan espectaculares como sus monoplazas. Los vehículos de la factoría de Woking (Reino Unido) son ya un referente del Salón de Ginebra y sus modelos, valorados en varios millones de euros, son piezas muy codiciadas entre las grandes fortunas del planeta. Diseñados para su conducción en circuito pero homologados para la carretera, es muy complicado encontrarse con alguno -se realizan producciones muy limitadas- pero si algún día se cruzan con uno, tengan la cámara preparada porque el McLaren Speedtail, por ejemplo, puede alcanzar hasta 402 km/h y seguramente sólo tengan una oportunidad de cazar ese extraordinario Correcaminos, aunque sea sólo para verlo (y oírlo) en vivo."
        },
        { 
            nombre: "Bugatti", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/12/09/16075114311587.jpg",
            precio: 1000000000,
            descripcion: "Otro clásico de los circuitos que ha realizado el trayecto hasta los garajes de las grandes fortunas con éxito. La marca francesa fue un referente de la alta competición antes de la II Guerra Mundial, pero el fatal accidente en 1939 del hijo del fundador, que perdió la vida con sólo 30 años durante unas pruebas con uno de sus coches, hizo que Bugatti cayese en un agujero del que intentó salir en los años 50 apostando por la Fórmula 1. Pero los malos resultados acabaron con el proyecto y volvieron a pasar varias décadas hasta que la firma de Alsacia volvió al candelero, esta vez sí por la puerta grande. Bugatti pasó a ser fabricante de súper deportivos de lujo, con una potencia extrema (más de 1.500 CV) y su Chiron Super Sport 300 tiene el orgullo de ser el coche de producción más rápido con un récord de 490,48 km/h desde 2019. Otros de sus modelos como el Veyron, el Divo o el Centodieci, son también referentes entre los vehículos más exclusivos. Y habitan en los garajes de los multimillonarios más populares del mundo."
        },
        { 
            nombre: "Mercedes", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/09/16520845405699.jpg",
            precio: 1000000,
            descripcion: "¿Federer, Nadal o Djokovic? Tres de las marcas más vendidas del mundo, que son el claro ejemplo de que la competencia nos hace mejores. Y es que las firmas alemanas han ido marcándose el paso toda la vida, tanto en los circuitos -intercalando éxitos en las competiciones más prestigiosas- como en la calle, donde han ido peleando su cuota de mercado con modelos más asequibles por un lado y versiones de súper lujo, por otro."
        },
        { 
            nombre: "BMW", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089095466.jpg",
            precio: 1000000,
            descripcion: "Con valores comunes como la fiabilidad, las altas prestaciones de sus motores y un servicio al cliente excepcional, podríamos decir que al final lo que diferencia unas de otras es algo tan sutil como el carácter o personalidad de sus vehículos, pero que han sabido transmitir a la perfección. Una identidad que se suele ajustar al perfil de sus compradores."
        },
        { 
            nombre: "Audi", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539091218224.jpg",
            precio: 9000000,
            descripcion: "Así, se puede decir que Mercedes tiene un público más maduro, que prima la clase frente a la deportividad. BMW tiene un abanico más amplio de edades entre sus compradores, pero todos ellos buscan un perfil más deportivo y eminentemente urbano. Y Audi quizá tenga un espectro más variado de estilos, que abarca desde la herencia 'offroad' de su mítico Quattro en su gama Q, hasta la sobriedad de las clásicas berlinas A6 y A8, que son los coches oficiales por excelencia en toda Europa. Pasando por modelos deportivos y utilitarios premium para todos los públicos como los A2, A3 y A4."
        },
        { 
            nombre: "Tesla", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089592927.jpg",
            precio: 1500000,
            descripcion: "Tesla Roadster. El gran éxito de la compañía de Elon Musk tiene aún más mérito si se tiene en cuenta el riesgo de su apuesta: coches eléctricos valorados en más de 100.000."
        },
        { 
            nombre: "Lexus", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089478784.jpg",
            precio: 1500000,
            descripcion: "Lexus LC. En 1989 lanzaba su primer modelo al mercado estadounidense para competir con los Mercedes, BMW y Audi, como alternativa de importación."
        },
        { 
            nombre: "Ferrari F8", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089934470.jpg",
            precio: 389500,
            descripcion: "Ferrari F8, referente principal en la Fórmula , la casa ingresa por el merchandising en todo el mundo mucho más que por la venta de automóviles."
        },
        { 
            nombre: "Lamborghini", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539095675614.jpg",
            precio: 1500000,
            descripcion: "Lamborghini es una marca de Bolonia, originariamente productora de tractores y vehículos agrícolas."
        },
        { 
            nombre: "Maserati", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089343417.jpg",
            precio:350000,
             descripcion: "Laptop Intel Core i7 13700H 3.7GHz (Turbo 5.0GHz) 14 núcleos, 20 hilos, Disco Sólido SSD M.2 2TB, Memoria RAM 32GB DDR5 (4800MHz), Pantalla FHD 16.1'' (1920x1080) 144Hz, Tarjeta Video GeForce RTX 4070 8GB GDDR6, Teclado iluminado inglés, Webcam HD 720p, Windows 11 Home, 1x HDMI 2.1, 3x USB Tipo A 3.1 Gen 1, 1x USB Tipo C 3.1 Gen 1, 1x RJ45, Wifi 6E AX211 (Gig+), Bluetooth 5.3, Batería 6 celdas"
        },
        { 
            nombre: "Aston Martin", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539091348386.jpg",
            precio: 599900,
            descripcion: "La versión british de los Maseratti. Sus deportivos, rápidos y potentes, desprenden buen gusto y mucha clase. Y si además es el coche de James Bond, no podemos dejar de asociar esta marca a equipamientos fuera de serie. Aunque los de verdad no lleven los accesorios que tenía el del espía 007. Una pena"
        },
        { 
            nombre: "Porsche", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539088822756.jpg",
            precio: 1500000,
            descripcion: "Porsche 91. La alemana emplea la fiabilidad y la vanguardia tecnológica de sus motores en la obtención de vehículos prácticamente perfectos."
        },
        { 
            nombre: "Rolls Royce", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539088102649.jpg",
            precio: 2000000,
            descripcion: "Los Rolls Royce son los coches preferidos de la familia real británica, los favoritos de emires, jeques o jefes de Estado."
        },
        { 
            nombre: "Bentley", 
            img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539095537652.jpg",
            precio: 1500000,
            descripcion: "Originalmente nacida como el competidor natural de Rolls Royce, fue adquirida por esta tras la crisis de 1929 y compartieron caminos durante casi 70 años, hasta que en 1998 fueron adquiridas por BMW y Volkswagen, respectivamente. La elegancia de los Bentley ha ido evolucionando desde entonces hacia modelos mucho más dinámicos en sus líneas, con una conducción cada vez más deportiva, y concebidos para un uso mucho más asiduo que su vecino de las islas. Eso sí, sin olvidar unos equipamientos fuera de serie, que en algunos casos pueden superar a sus competidores del segmento del lujo que podría llamarse más "
        },
        { 
            nombre: "Maybach", 
            img: "https://t1.uc.ltmcdn.com/es/posts/7/7/1/maybach_54177_4_600.webp",
            precio: 1500000,
            descripcion: "Se trata del ejemplo perfecto de personificación del lujo en el segmento de berlinas. Se fundó en 1909 y ha creado modelos únicos y extraños con el paso de los años como el Maybach Exelero. En la actualidad, es submarca de Mercedes-Benz y sus modelos ofrecen unos niveles de comodidad y refinamiento difíciles de igualar."
        },
        { 
            nombre: "McLaren", 
            img: "https://t1.uc.ltmcdn.com/es/posts/7/7/1/mclaren_54177_9_600.webp",
            precio: 2000000,
            descripcion: "omo sucede con Ferrari, McLaren es una marca de lujo estrechamente relacionada con la Fórmula 1. Fue fundada en 1963 como equipo de competición y, desde entonces, ha ganado 8 títulos de constructores y 12 de pilotos en F1. También ha ganado 3 veces las 500 Millas de Indianápolis y una vez las 24 Horas de Le Mans."
        },
        
    ];
    
    getProductos(): Producto[]
    {return this.productos;}

    getProducto(id:number) 
    {return this.productos[id];}
    
    buscarProductos (termino: string): Producto[]{
        let productosArr: Producto[]= [];
        termino = termino.toLocaleLowerCase();
        for(let i= 0;i < this.productos.length; i++){
            let producto = this.productos[i];
            let nombre = producto.nombre.toLocaleLowerCase();
            if(nombre.indexOf(termino)>=0){
                productosArr.push(producto)
            }
        }
        return productosArr;
    }
}