// nombre donante largo mínimo 3 y máximo 80
const validateName = (name) => {
    if(!name) return false;
    let lengthValid = name.trim().length >= 3 && name.trim().length <= 80;
    return lengthValid;
}

// email donante cumple formato de dirección de correo electrónico
const validateEmail = (email) => {
    if(!email) return false;
    let lengthValid = email.length < 30;

    // validar formato
    let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let formatValid = re.test(email);
    
    return lengthValid && formatValid;
}

// número de celular donante cumple formato de número de celular
const validatePhone = (phone) => {
    if(!phone) return true; // no es obligatorio
    let lengthValid = phone.length <= 15;
    let re = /^[0-9]+$/;
    let formatValid = re.test(phone);
    return lengthValid && formatValid;
}

// descripción de dispositivo se valida en el HTML

// años de uso largo 3, número entero entre 1 y 99
const validateAnnos = (annos) => {
    if(!annos) return false;
    let lengthValid = annos.length <= 3;
    let num = parseInt(annos, 10);
    let isInteger = Number.isInteger(num);
    let rangeValid = num >= 1 && num <= 99;
    return lengthValid && rangeValid && isInteger;
}

// fotos de producto mínimo 1 y máximo 3
const validatePictures = (fotos) => {
    if(!fotos) return false;
    let lengthValid = fotos.length >= 1 && fotos.length <= 3;
    let typeValid = true;
    for (const foto of fotos){
        let fileFamily = foto.type.split('/')[0];
        typeValid &&= fileFamily === 'image';
    }
    return lengthValid && typeValid;
}

// validar seleccion para region, comuna, tipo y estado
const validateSelect = (select) => {
    if(!select) return false;
    return true;
}

const agregarDispositivo = () => {
    // seleccionar formulario de dispositivos
    const deviceForm = document.querySelector('.dispositivo form');

    // clonar el formulario de dispositivo
    const newDeviceForm = deviceForm.cloneNode(true);

    // limpiar los valores de los campos clonados
    newDeviceForm.querySelectorAll('input, textarea, select').forEach(input => {
        input.value = '';
    });

    // crear un nuevo título para el formulario clonado
    const newTitle = document.createElement('h1');
    newTitle.textContent = 'Información del dispositivo';

    // eliminar el botón "Agregar otro dispositivo" del formulario clonado y del anterior
    deviceForm.querySelector('#agregar-disp').remove();
    newDeviceForm.querySelector('#agregar-disp').remove();

    // asignar un nuevo ID para evitar duplicaciones
    const numDispositivos = document.querySelectorAll('.dispositivo form').length;
    newDeviceForm.id = 'disp-form-2';

    // cambiar los IDs de los inputs dentro del formulario clonado
    newDeviceForm.querySelectorAll('[id]').forEach((element) => {
        let newId = element.id + '-' + 2;
        element.id = newId;
    });

    // agregar el nuevo formulario de dispositivo antes del botón de publicar
    document.querySelector('.dispositivo').insertBefore(newTitle, document.getElementById('publicar-donacion'));
    document.querySelector('.dispositivo').insertBefore(newDeviceForm, document.getElementById('publicar-donacion'));
};

const validateDispForm = (form) => {

    // obtener elementos del DOM por el ID
    const dispInput = form.querySelector('[name="disp"]');
    const tipoInput = form.querySelector('[name="tipo"]');
    const annosInput = form.querySelector('[name="annos"]');
    const estadoInput = form.querySelector('[name="estado"]');
    const fotosInput = form.querySelector('[name="fotos"]');

    let msg = "";

    if (!validateName(dispInput.value)) {
        msg += "Por favor ingrese un nombre de dispositivo de entre 3 y 80 caracteres.\n";
        dispInput.style.borderColor = "red";
    } else {
        dispInput.style.borderColor = "";
    }

    if (!validateSelect(tipoInput.value)) {
        msg += "Por favor seleccione un tipo.\n";
        tipoInput.style.borderColor = "red";
    } else {
        tipoInput.style.borderColor = "";
    }

    if (!validateAnnos(annosInput.value)) {
        msg += "Por favor, ingrese un número entero de años de uso entre 1 y 99.\n";
        annosInput.style.borderColor = "red";
    } else {
        annosInput.style.borderColor = "";
    }

    if (!validateSelect(estadoInput.value)) {
        msg += "Por favor seleccione un estado.\n";
        estadoInput.style.borderColor = "red";
    } else {
        estadoInput.style.borderColor = "";
    }

    if (!validatePictures(fotosInput.files)) {
        msg += "Por favor adjunte hasta 3 imágenes en el formato adecuado.\n";
        fotosInput.style.borderColor = "red";
    } else {
        fotosInput.style.borderColor = "";
    }

    return msg;
};

const validateForm = () => {

    // obtener elementos del DOM por el ID
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let phoneInput = document.getElementById('phone');
    let regionInput = document.getElementById('select-region');
    let comunaInput = document.getElementById('select-comuna');
    
    // obtener todos los formularios de dispositivos para ver si hay más de uno
    const forms = document.querySelectorAll('.dispositivo form');

    let msg = "";

    if (!validateName(nameInput.value)) {
        msg += "Por favor ingrese un nombre de entre 3 y 80 caracteres.\n";
        nameInput.style.borderColor = "red";
    } else {
        nameInput.style.borderColor = "";
    }

    if (!validateEmail(emailInput.value)) {
        msg += "Por favor ingrese un correo eléctronico con el formato ***@***.**.\n";
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "";
    }

    if (!validatePhone(phoneInput.value)) {
        msg += "Por favor ingrese un número de celular de hasta 15 números.\n";
        phoneInput.style.borderColor = "red";
    } else {
        phoneInput.style.borderColor = "";
    }

    if (!validateSelect(regionInput.value)) {
        msg += "Por favor seleccione una región.\n";
        regionInput.style.borderColor = "red";
    } else {
        regionInput.style.borderColor = "";
    }

    if (!validateSelect(comunaInput.value)) {
        msg += "Por favor seleccione una comuna.\n";
        comunaInput.style.borderColor = "red";
    } else {
        comunaInput.style.borderColor = "";
    }

    // validar el primer formulario siempre
    const form1 = forms[0];
    let msg1 = validateDispForm(form1);
    msg += msg1;

    // si hay un segundo formulario, validarlo también
    if (forms[1]) {
        const form2 = forms[1];
        let msg2 = validateDispForm(form2);
        msg += msg2;
    }

    let validationBox = document.getElementById("val-box");
    let validationMessageElem = document.getElementById("val-msg");
    let validationListElem = document.getElementById("val-list");

    if (msg === "") {
        // ocultar el formulario temporalmente
        const formContainer = document.querySelector('.main-container');
        formContainer.style.display = 'none';

        validationMessageElem.textContent = "¿Confirma que desea publicar esta donación?";
        validationListElem.innerHTML = "";

        validationBox.style.backgroundColor = "#ddffdd";
        validationBox.style.borderLeftColor = "#4CAF50";

        // Crear botones de confirmación
        let submitButton = document.createElement("button");
        submitButton.textContent = "Sí, confirmo";
        submitButton.style.marginRight = "10px";
        submitButton.addEventListener("click", () => {
            validationBox.hidden = true;
            const successBox = document.getElementById("success-box");
            successBox.hidden = false;
        });
        let backButton = document.createElement("button");
        backButton.textContent = "No, quiero volver al formulario";
        backButton.addEventListener("click", () => {
            const formContainer = document.querySelector('.main-container');
            formContainer.style.display = 'block';  // Mostrar el formulario nuevamente
            validationBox.hidden = true;            // Ocultar el cuadro de confirmación
        });

        validationListElem.appendChild(submitButton);
        validationListElem.appendChild(backButton);
        validationBox.hidden = false;
    } else {
        alert(msg); // alertas JS
    }
};

let agregar = document.getElementById("agregar-disp");
agregar.addEventListener("click", agregarDispositivo);

let publicar = document.getElementById('publicar-donacion');
publicar.addEventListener('click', validateForm);