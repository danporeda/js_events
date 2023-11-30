const btn = document.querySelector('#clicker');

// btn.onclick = function() {
//     console.log('You clicked me');
// }

// btn.ondblclick = function() {
//     console.log('You clicked me twice');
// }

btn.addEventListener('click', function() {
    alert('CLICKED ME');
})

btn.addEventListener('mouseover', function(){
    btn.innerText = 'Stop TOUCHING ME';
})

btn.addEventListener('mouseout', function(){
    btn.innerText = 'Clicker';
})

window.addEventListener('scroll', function(){
    console.log('STOP SCROLLING');
})