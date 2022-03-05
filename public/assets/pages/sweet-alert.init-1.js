/**
 * Theme: Unikit - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Sweet Alert Js
 */

function executeExample(sub){
    switch(sub){
        case 'basicMessage':
        Swal.fire('Any fool can use a computer')
        return;
        case 'titleText':
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
              )
        return;
        case 'errorType':
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
              })
        return;

        case 'customHtml':
            Swal.fire({
                title: '<strong>HTML <u>example</u></strong>',
                icon: 'info',
                html:
                  'You can use <b>bold text</b>, ' +
                  '<a href="//sweetalert2.github.io">links</a> ' +
                  'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                  '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
              })
        return;

        case 'threeButtons':
          Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
        return;

        case 'customPosition':
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        return;

        case 'customAnimation':
          Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        return;

        case 'warningConfirm':
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
          }).then(function(result) {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        return;

        case 'handleDismiss':
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger me-2'
            },
            buttonsStyling: false
          })

          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        return;

        case 'customImage':
          Swal.fire({
            title: 'Unikit!',
            text: 'Modal with a Brand Logo.',
            imageUrl: 'assets/images/logo-sm.jpeg',
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: 'Custom image',
          })
        return;

        case 'customWidth':
          Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: 50,
            background: 'rgba(254,254,254,1) url(assets/images/pattern.png)',
          })
        return;

        case 'timer':
          let timerInterval
            Swal.fire({
              title: 'Auto close alert!',
              html: 'I will close in <b></b> milliseconds.',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
        return;

        case 'rtl':
          Swal.fire({
            title: 'هل تريد الاستمرار؟',
            icon: 'question',
            iconHtml: '؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true
          })
        return;

        case 'ajaxRequest':
          Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
              return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                  if (!response.ok) {
                    throw new Error(response.statusText)
                  }
                  return response.json()
                })
                .catch(error => {
                  Swal.showValidationMessage(
                    `Request failed: ${error}`
                  )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
              })
            }
          })
        return;

        case 'chainingModals':
          Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
          }).queue([
            {
              title: 'Question 1',
              text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
          ]).then((result) => {
            if (result.value) {
              const answers = JSON.stringify(result.value)
              Swal.fire({
                title: 'All done!',
                html: `
                  Your answers:
                  <pre><code>${answers}</code></pre>
                `,
                confirmButtonText: 'Lovely!'
              })
            }
          })
        return;

        case 'dynamicQueue':
          const ipAPI = '//api.ipify.org?format=json'

          Swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text:
              'Your public IP will be received ' +
              'via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: () => {
              return fetch(ipAPI)
                .then(response => response.json())
                .then(data => Swal.insertQueueStep(data.ip))
                .catch(() => {
                  Swal.insertQueueStep({
                    icon: 'error',
                    title: 'Unable to get your public IP'
                  })
                })
            }
          }])
        return;

        case 'mixin':
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

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        return;

        case 'declarativeTemplate':

          Swal.fire({
            template: '#my-template',
          })
        return;

        case 'TriggerModalToast':
          Swal.bindClickHandler()
          Swal.mixin({
            toast: true,
          }).bindClickHandler('data-swal-toast-template')
        return;

        case 'success':
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            timer: 1500
            })
        return;

        case 'error':
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
        return;
        case 'warning':
          Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'Icon warning!',
            })
        return;
        case 'info':
          Swal.fire({
              icon: 'info',
              title: 'Oops...',
              text: 'Icon Info!',
            })
        return;

        case 'question':
          Swal.fire({
              icon: 'question',
              title: 'Oops...',
              text: 'Icon question!',
            })
        return;

    }
}
