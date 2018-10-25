//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
var classNavi = document.getElementsByClassName('navi');

for (var i = 0; i < classNavi.length; i++) {
      console.log(classNavi[i].innerHTML);
      classNavi[i].addEventListener('mouseenter', showContent);
      classNavi[i].addEventListener('mouseleave', hideContent);

}

function showContent() {
      // the current parent element (in this case: home, location, or blog);
      // console.log(this.innerHTML);
      var currentElement = this.querySelectorAll('.inner')[0];
      // console.log(cucurrentElementrrentChild);
      currentElement.style.color ='#dc143c';
      currentElement.style.display = 'block';

}

function hideContent() {
      var currentElement = this.querySelectorAll('.inner')[0];
      currentElement.style.color = '#dc143c';
      currentElement.style.display = 'none';

}
/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var pElemA=document.getElementsByClassName('name');

for(var i=0; i<pElemA.length; i++){
    pElemA[i].addEventListener('click', showMenu)
}


function showMenu(){
    var showMenu=this.querySelectorAll('.menu')[0];
    if(showMenu.style.display ==='block'){
        shownMenu.style.display='none'
    }else{
        showMenu.style.display='block';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



var pElemB= document.getElementsByClassName('thumb');

for(var i=0; i<pElemB.length; i++){
    pElemB[i].addEventListener('click', thumbsDown)
    var counter = document.createElement('div');
    counter.className = 'hater';
    pElemB[i].appendChild(counter);
}

function thumbsDown(){
   var haterCount=this.querySelectorAll('.hater')[0];
   haterCount.innerHTML++
}


// // function dislikes(){
// //     //console.log('hi')
// //     var haterCount = this.querySelectorAll('.hater')[0];
// //     //console.log(haterCount);
// //     haterCount.innerHTML++;
// // }





// var pElemB= document.getElementsByClassName('thumb');

// var thumbsDownClick=0

// for(var i=0; i<pElemB.length; i++){
//     pElemB[i].addEventListener('click', thumbsDown);
//     var button=document.getElementsByClassName('thumb');
//     var count=1;
//     button.onclick=function thumbsDown(){
//         count+=1;
//         button.innerHTML++
//     }
// }
