
$(function () {

    //  socket
    var socket = io();

    // variables 
    let message = $('#chat-message');
    let chat = $('#chat');
    let messageBrother = $('#chat-message-brother');
    let chatBrother = $('#chatBrother');


    message.focus();
    messageBrother.focus();


    $('#message-box').on('submit', (function (e) {
        e.preventDefault();
        if (message.val().trim().lenght < 0 || message.val() === '') return
        socket.emit('client', message.val());
        message.val('');

    }))

    socket.on('server', function (data) {
        chat.append(`<li>${data}</li>`);
        chat.scrollTop(chat[0].scrollHeight)

    });


    $('#message-box-brother').on('submit', (function (e) {
        e.preventDefault();

        if (messageBrother.val().trim().lenght < 0 || messageBrother.val() === '') return
        socket.emit('client', messageBrother.val());
        messageBrother.val('');

    }))

    socket.on('server', function (data) {
        chatBrother.append(`<li>${data}</li>`);
        chatBrother.scrollTop(chatBrother[0].scrollHeight)

    });


    



})