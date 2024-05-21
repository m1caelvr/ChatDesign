let mensagens = [
    { name: "Will", date: new Date("2024-05-09T14:30:00"), message: "Boa tarde!! quanto tempo em" },
    { name: "Você", date: new Date("2024-05-09T14:35:00"), message: "simm, estava pensando em você hoje." },
    { name: "Você", date: new Date("2024-05-09T14:35:00"), message: "Como você está?" },
    { name: "Will", date: new Date("2024-05-09T14:37:00"), message: "estou ótimo." }
];

function adicionarMensagemAoHTML(msg) {
    const chatArea = document.getElementById("chat-area");

    const divMensagem = document.createElement("div");
    divMensagem.classList.add("mensage-area", msg.name === "Você" ? "sent" : "received");

    const divHorario = document.createElement("div");
    divHorario.classList.add("mensage-hours", "styles-font");

    const spanRemetente = document.createElement("span");
    spanRemetente.textContent = `${msg.name} - `;

    const timeHorario = document.createElement("time");
    timeHorario.setAttribute("datetime", msg.date.toISOString());
    timeHorario.textContent = msg.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const divMensagemTexto = document.createElement("div");
    divMensagemTexto.classList.add("mensage");
    divMensagemTexto.textContent = msg.message;

    divHorario.appendChild(spanRemetente);
    divHorario.appendChild(timeHorario);
    divMensagem.appendChild(divHorario);
    divMensagem.appendChild(divMensagemTexto);

    chatArea.appendChild(divMensagem);

    chatArea.scrollTop = chatArea.scrollHeight;
}

function adicionarMensagensAoHTML() {
    const chatArea = document.getElementById("chat-area");
    chatArea.innerHTML = "";

    mensagens.forEach(msg => {
        adicionarMensagemAoHTML(msg);
    });
}

adicionarMensagensAoHTML();

function enviarMensagem() {
    const novaMensagem = document.getElementById("mensage-for-send").value;
    if (novaMensagem.trim() !== "") {
        const novaMsg = { name: "Você", date: new Date(), message: novaMensagem };
        mensagens.push(novaMsg);
        adicionarMensagemAoHTML(novaMsg);
        document.getElementById("mensage-for-send").value = "";
    }
}

document.getElementById("send-mensage").addEventListener("click", enviarMensagem);

document.getElementById("mensage-for-send").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enviarMensagem();
        event.preventDefault();
    }
});