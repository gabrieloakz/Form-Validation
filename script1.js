function runForm2(form) {
    let msg = "Enviado por: ";
    
    // Validação do Primeiro Nome
    if (!form.firstname.value) {
        alert("Por favor, preencha o campo Primeiro Nome.");
        return;
    }
    msg += form.firstname.value + " ";
    
    // Validação do Último Nome
    if (!form.lastname.value) {
        alert("Por favor, preencha o campo Último Nome.");
        return;
    }
    msg += form.lastname.value + " ";
    
    // Validação do E-mail
    if (!form.email.value) {
        alert("Por favor, preencha o campo E-mail.");
        return;
    } else {
        // Regex para validação básica de e-mail
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email.value)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }
    }
    msg += "(" + form.email.value + ") ";
    
    // Validação do Sexo
    if (!form.sex1.checked && !form.sex2.checked) {
        alert("Por favor, selecione o Sexo.");
        return;
    }
    msg += form.sex1.checked ? " [masculino]" : " [feminino]";
    
    // Validação da Mensagem
    if (!form.textarea1.value) {
        alert("Por favor, escreva uma mensagem.");
        return;
    }
    msg += "\nMensagem: " + form.textarea1.value;
    
    // Se todas as validações passarem, exibe a mensagem final
    alert(msg);
}
