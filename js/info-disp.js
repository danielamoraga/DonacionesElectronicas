const dispositivos = {
    1: {
        contacto: {
            nombre: "Daniela Trinidad",
            email: "daniela@uchile.cl",
            telefono: "911 235 813",
            region: "Metropolitana",
            comuna: "Ñuñoa"
        },
        dispositivo: {
            tipo: "Audífonos",
            nombre: "SONY WH-CH10",
            annos: "2",
            estado: "Funciona a medias",
            descripcion: "El micrófono no funciona"
        },
        comentario: {
            nombre: "Don DP",
            fecha: "2021-09-01",
            contenido: "viene con los stickers?? aguante chino moreno"
        }
    },
    2: {
        contacto: {
            nombre: "Josefa Anaís",
            email: "josefa.anais@josefa.jo",
            region: "Metropolitana",
            comuna: "Ñuñoa"
        },
        dispositivo: {
            tipo: "Celular",
            nombre: "Samsung Galaxy A24",
            annos: "1",
            estado: "Funciona perfectamente"
        },
        comentario: {
            nombre: "Gustavo Alberto",
            fecha: "2023-09-02",
            contenido: "cuál es el valooor? 🫦"
        }
    },
    3: {
        contacto: {
            nombre: "Danilu",
            email: "danilu@danilu.dan",
            region: "Araucanía",
            comuna: "Temuco"
        },
        dispositivo: {
            tipo: "Notebook",
            nombre: "ASUS VivoBook",
            annos: "1",
            estado: "Funciona perfectamente"
        },
        comentario: {
            nombre: "Panelio",
            fecha: "2007-07-07",
            contenido: "Me gusta el sticker de Nana"
        }
    },
    4: {
        contacto: {
            nombre: "Francisco",
            email: "pancho@chopan.pan",
            telefono: "987 654 321",
            region: "Metropolitana",
            comuna: "Santiago Centro"
        },
        dispositivo: {
            tipo: "Tablet",
            nombre: "iPad 10gen 2020",
            annos: "5",
            estado: "Funciona perfectamente",
            descripcion: "Necesito venderla urgente, ya no la uso"
        },
        comentario: {
            nombre: "Danilu",
            fecha: "2020-06-04",
            contenido: "¿es rosado? no se nota bien el color"
        }
    },
    5: {
        contacto: {
            nombre: "Inti",
            email: "intilera@inti.sol",
            region: "Metropolitana",
            comuna: "Paine"
        },
        dispositivo: {
            tipo: "Otro",
            nombre: "Control joystick GXT análogo",
            annos: "3",
            estado: "No funciona"
        },
        comentario: {
            nombre: "Sra Josefina",
            fecha: "1972-09-11",
            contenido: "Se parece al mío 🤔"
        }
    },
};

// Función para obtener el parámetro de la URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtener el ID del dispositivo de la URL
const id = getParameterByName('id');

if (dispositivos[id]) {
    // Actualizar la información de contacto
    if (`${dispositivos[id].contacto.telefono}` === 'undefined') {
        document.getElementById('contact-info').querySelector('.info-list').innerHTML = `
            <li><span>Nombre:</span> ${dispositivos[id].contacto.nombre}</li>
            <li><span>Email:</span> ${dispositivos[id].contacto.email}</li>
            <li><span>Región:</span> ${dispositivos[id].contacto.region}</li>
            <li><span>Comuna:</span> ${dispositivos[id].contacto.comuna}</li>
        `;
    } else {
        document.getElementById('contact-info').querySelector('.info-list').innerHTML = `
            <li><span>Nombre:</span> ${dispositivos[id].contacto.nombre}</li>
            <li><span>Email:</span> ${dispositivos[id].contacto.email}</li>
            <li><span>Teléfono:</span> ${dispositivos[id].contacto.telefono}</li>
            <li><span>Región:</span> ${dispositivos[id].contacto.region}</li>
            <li><span>Comuna:</span> ${dispositivos[id].contacto.comuna}</li>
        `;
    }

    // Actualizar la información del dispositivo
    if (`${dispositivos[id].dispositivo.descripcion}` === 'undefined') {
        document.getElementById('disp-info').querySelector('.info-list').innerHTML = `
            <li><span>Nombre:</span> ${dispositivos[id].dispositivo.nombre}</li>
            <li><span>Tipo:</span> ${dispositivos[id].dispositivo.tipo}</li>
            <li><span>Años de Uso:</span> ${dispositivos[id].dispositivo.annos}</li>
            <li><span>Estado:</span> ${dispositivos[id].dispositivo.estado}</li>
        `;
    } else {
        document.getElementById('disp-info').querySelector('.info-list').innerHTML = `
            <li><span>Nombre:</span> ${dispositivos[id].dispositivo.nombre}</li>
            <li><span>Descripción:</span> ${dispositivos[id].dispositivo.descripcion}</li>
            <li><span>Tipo:</span> ${dispositivos[id].dispositivo.tipo}</li>
            <li><span>Años de Uso:</span> ${dispositivos[id].dispositivo.annos}</li>
            <li><span>Estado:</span> ${dispositivos[id].dispositivo.estado}</li>
        `;
    }

    // Actualizar la imagen del dispositivo
    const imageUrl = `../img/disp${id}.jpg`;
    document.getElementById('disp-img').src = imageUrl;

    // Actualizar la sección de comentarios
    document.getElementById('comments').querySelector('.comment').innerHTML = `
        <p><strong>${dispositivos[id].comentario.nombre}</strong> - ${dispositivos[id].comentario.fecha}</p>
        <p>${dispositivos[id].comentario.contenido}</p>
    `;
}