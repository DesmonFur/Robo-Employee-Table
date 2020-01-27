window.onload = console.log(JSON.parse(localStorage.getSelection))
console.log(localStorage)
var userData = JSON.parse(localStorage.getItem('getSelection'))
console.log(typeof(localStorage.getSelection))
console.log(typeof(userData))
console.log(userData)

$(document).ready(function(){

    
    var table = $("#test").DataTable(
        {
            
            data:userData,
            columns: [
                { data: 'user_name' },
                { data: 'user_job_title' },
                { data: 'user_picture' },
                { data: 'user_shirt_size' }
            ],
            select: {
                style: 'single'
            }
        }
        
        )
    })