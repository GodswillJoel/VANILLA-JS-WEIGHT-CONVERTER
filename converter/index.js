// let popup = document.getElementById("popup");

// function openPopup(){
//     popup.classList.add("open-popup");
// }

// function closePopup(){
//     popup.classList.remove("open-popup");
// }
// document.getElementById('intro').style.visibility = "visible"
// document.getElementById('explore').addEventListener('click', function(e){
// // document.getElementById('pop').style.visibility = "visible";
// });  
document.getElementById('output').style.visibility = "visible";
document.getElementById('weight').style.visibility = "visible";
document.getElementById('lbsInput').addEventListener('click', function(e){
document.getElementById('output').style.visibility = "visible";   
    let lbs = e.target.value;
    document.getElementById('grams').innerHTML = lbs/0.0022046;
    document.getElementById('kilograms').innerHTML = lbs/2.2046;
    document.getElementById('ounces').innerHTML = lbs*16;
});


// still working on it


// function introPageDisplay() {
//     let pageStartHTML =
     
//         `
//             <header id="showcase">
//             <h1> Welcome To My Website</h1>
//             </header>

//             <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
//             tempora, itaque officia ex eos rerum repellendus molestias numquam officiis nes
//             ciunt veritatis, quas unde voluptate, pos
//             simus dicta voluptas perspiciatis hic quae.
//             </p>
           
//             <div id="content" class="box1">
//             <a href="index.html" class="btn">Read More</a>
//             </div>
//         `;

//         let pageElement = document.getElementById("landPage");
//         pageElement.innerHTML = pageStartHTML;

// }