let User=JSON.parse(window.localStorage.getItem('user'));
if(!User){
    window.location='index.html';
}
const List=async ()=>{
    try{
        const resp=await axios.get('https://jsonplaceholder.typicode.com/todos');
        const lists=resp.data;
        let listcontent='';
        lists.forEach((el,index)=>{
            listcontent+=`<li  ${el.completed?'disabledList':''} ${index%2?'list-group-item-info':'list-group-item-success'}"> <input type="checkbox" class="checkbox" ${el.completed?' checked':''}/> <label for=""> ${el.title}</label></li>`
        });
        $('#todo').html(listcontent);
        if(checkedCount){
            count=0;
        }
    }
    catch(e){
        console.log('failed to fetch lists data',e);
    }
}
$('#List').on('click',(e)=>{
    e.preventDefault();
    List();
});
let count=0;
const alertPromise= ()=>{
     return new Promise((resolve,reject)=>{
         if(count===5){
            resolve(count)
        }
        else{
            reject('count not equal to 5');
        }
    });
}
const promiseCall=()=>{
    alertPromise().then((data)=>{
        alert("Congrats. 5 Tasks have been Successfully Completed");
    })
    .catch((err)=>{
        console.log('promise rejected');
    })
}
List();
$('#todo').on('change','.checkbox',function(e){
    if($(this).prop('checked')===true){
        console.log('checked');
        count++; 
        $(this).parent().addClass('active');
    }
    else{
        count--;
        console.log('unchecked');
        $(this).parent().removeClass('active');
    }
    promiseCall();
});





