$(document).ready(function () {

    let component = `
    <div class="component"> 
            <span>Características</span>
            <span>Documentos</span>
            <span>Acerca de</span>
            <span>Ayuda</span>
            <span>Carreras</span>
            <span>Precios</span>
            <span>Login</span>
    </div>

            `;

    $('#menu').on('click', async function () {
        await Swal.fire({
            html: `${component}`,
            position: 'top-end',
            showClass: {
                popup: `
              animate__animated
              animate__fadeInLeft
              animate__faster
            `,
            },
            hideClass: {
                popup: `
              animate__animated
              animate__fadeOutLeft
              animate__faster
            `,
            },
            grow: 'column',
            width: 300,
            background: '#7a3576',
            showConfirmButton: false,
            showCloseButton: true,
        })



    })

})
