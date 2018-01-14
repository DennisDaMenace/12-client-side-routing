var app = app || {};
(module => {

    const adminPage = {};
    const markup = `
    <h1>Placeholder Admin (password)</h1>
    <form class="userLoginForm">
   <fieldset>
       <label id="userPasswordExisting">
         Password:
         <input id="LOGINPASSWORD" type="text" name="password" size="30" maxlength="100" placeholder="Enter Here">
       </label>
     <br />
       <button type="submit" class="loginButton2">Submit Login</button>
   </fieldset>
 </form>
    `
    
    adminPage.init = () => {
        localStorage.setItem('Password', 'password');  
        const template = Handlebars.compile(markup)
        $('#admin-page').off()
        $('#admin-slot').empty()
        $('#admin-page').show()
        $('#admin-slot').append(Handlebars.compile(markup))
        
        $('.loginButton2').on('click', (event) => {
            event.preventDefault();
            if (document.getElementById('LOGINPASSWORD').value === localStorage.getItem('Password')) {
              console.log('Login Success')
              localStorage.setItem('validated', 'yes')
              $('.update-book, .delete-book, .new-book').show();
              $('.userLoginForm').fadeOut(700);
            } else {
                $('.update-book, .delete-book, .new-book').hide();
                localStorage.setItem('validated', 'no')
                alert('Entered password is incorrect.')
            }
           });

    }
adminPage.verify = () => {}
    module.adminPage = adminPage
})(app)