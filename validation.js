const errors={
    unameErrFlag:true,
    passwordErrFlag:true
}
const validation=(el,authValue)=>{
    let flagName=el+"ErrFlag";
    if($(`#${el}`).val()===authValue){
        errors[flagName]=false;
        const msg='';
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).addClass('hidden');
    }
    else{
        errors[flagName]=true;
        const msg=`Invalid  ${el} `;
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).removeClass('hidden');
    }
}
$('#uname').on('input',(e)=>{validation('uname','admin')});
$('#password').on('input',(e)=>{validation('password','12345')});
const redirect=()=>{
    window.localStorage.setItem('user',JSON.stringify({uname:'admin'}));
    window.location='todo.html';
}
const login=(e,callback)=>{
    if(!errors['unameErrFlag'] && !errors['passwordErrFlag']){
        e.preventDefault();
        callback();
    }
}
$('#btn').on('click',(e)=>{
    login(e,redirect);
})