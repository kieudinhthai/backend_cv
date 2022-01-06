///--------------------Notification -----------------
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const button_send_mail = $("#send-message")

button_send_mail.on("click", (e) => {
    let text = 
    `name: ${$("#name").val()},
     email: ${$("#email").val()},
     subject: ${$("#subject").val()},
     message: ${$("#message").val()}`

    const data = {
        subject: "mail from webcv",
        text: text
    }
    const postData = axios({
        method: "POST",
        url: '/contact',
        data: data,
    })
        .then(res => {
            console.log(res)
            Toast.fire({
                icon: 'success',
                title: 'Sent an email'
            })
        })
        .catch(err => {
            console.log(err)
            Toast.fire({
                icon: 'error',
                title: 'Can not send an email'
            })
        })
})