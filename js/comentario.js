const validateName = (name) => {
    if(!name) return false;
    let lengthValid = name.trim().length >= 3 && name.trim().length <= 80;
    return lengthValid;
}

const validateComment = (comment) => {
    if(!comment) return false;
    let lengthValid = comment.trim().length >= 5;
    return lengthValid;
}

validate = () => {
    
    const name = document.getElementById('comment-name');
    const comment = document.getElementById('comment-content');

    let msg = "";

    if(!validateName(name.value)) {
        msg += "Nombre inválido.\n";
        name.style.borderColor = "red";
    } else {
        name.style.borderColor = "";
    }

    if(!validateComment(comment.value)) {
        msg += "Comentario inválido.\n";
        comment.style.borderColor = "red";
    } else {
        comment.style.borderColor = "";
    }

    if(msg === "") {
        const form = document.getElementById('comment-form');
        form.style.display = "none";
        alert("Comentario enviado con éxito.");
    } else {
        alert(msg);
    }
};

let post = document.getElementById('comentario');
post.addEventListener('click', validate);