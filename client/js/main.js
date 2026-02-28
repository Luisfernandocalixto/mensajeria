
$(function () {

    //  socket
    let socket = io();

    // variables 
    let message = $('#chat-message');
    let chat = $('#chat');
    let messageBrother = $('#chat-message-brother');
    let chatBrother = $('#chatBrother');



    $('#message-box').on('submit', (function (e) {
        e.preventDefault();
        if (message.val().trim().lenght < 0 || message.val().trim() === '') return;
        socket.emit('client', { message: message.val(), id: 'is1' });
        message.val('');
    }))

    socket.on('server', async function (data) {
        const Iam = 'is1';
        const className = data.id === Iam ? 'isI' : 'isChat';
        chat.append(`<li class="${className}" >${data.message}</li>`);
        chat.scrollTop(chat[0].scrollHeight);
        
    });
    
    
    $('#message-box-brother').on('submit', (async function (e) {
        e.preventDefault();
        
        if (messageBrother.val().trim().lenght < 0 || messageBrother.val().trim() === '') return;
        socket.emit('client', { message: messageBrother.val(), id: 'is2' });
        messageBrother.val('');
        
    }))
    
    socket.on('server', async function (data) {
        const Iam = 'is2';
        const className = data.id === Iam ? 'isI' : 'isChat';
        chatBrother.append(`<li class="${className}"  >${data['message']}</li>`);
        chatBrother.scrollTop(chatBrother[0].scrollHeight);

    });






});