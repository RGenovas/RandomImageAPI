

let containers = [];
const container = document.getElementById("myPanzoom");
let random;

function fetchWords() {
    const urlRandom = 'https://random-word-api.herokuapp.com/word?number=120'
    fetch(urlRandom)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    
    })
 
}
fetchWords()






function fetchImage (query) {
    const pexelsApi = '7ZRIPUtVjgZRqxlgaA7NsOSV87LVnSDvnVKaTLAhSTqtMISG3yAN4DuQ'
    const url = `https://api.pexels.com/v1/search?query=${query}`
    const searchTag =  document.getElementById('search-text')



    fetch(url, {
        headers: {Authorization: pexelsApi}
    })
    .then(response =>response.json())
    .then(data => {
        if(data.photos.length > 0) {
            container.innerHTML = ''
             searchTag.innerText = `Searched word:  ${query}`
          
            for (var i = 0; i < data.photos.length; i++) {
               
                container.innerHTML +=  ` <div  id="myPanzoom${i}"><img src=${data.photos[i].src.large} class="searchedImg f-panzoom__content"></img></div>`
                // let container1 = document.getElementById(`myPanzoom${i}`);
                // new Panzoom(container1, options, { Toolbar });

            }
          
        } else {
                alert('No image found for ' + query)
            }
        
    })
    .catch(error => console.error('Error fetching image:', error))

}




document.querySelector('.search button').addEventListener('click', function(){
    fetchImage(document.querySelector('.search-bar').value)
})

document.querySelector('.search-bar').addEventListener('keyup', function(event){
    if(event.key === 'Enter') {
        fetchImage(document.querySelector('.search-bar').value)
    }
})
// the whole zoom menu

// const options = {
//   Toolbar: {
//     display: ["zoomIn",
// "zoomOut",
// "toggleZoom",
// "rotateCCW",
// "rotateCW",
// "flipX",
// "flipY",
// "fitX",
// "fitY",
// "reset"],
//   },
// };

// new Panzoom(container, options, { Toolbar });






let words = [
    "abandoned","able","absolute","adorable","adventurous","academic","acceptable","accomplished",
    "accurate","aching","acidic","acrobatic","active","actual","disturbing","admirable","admired","adolescent",
    "adorable","adored","advanced","afraid","affectionate","aged","aggravating","aggressive","agile","agitated",
    "agonizing","ajar","alarmed","alarming","alert","alienated","alive","all","amazing",
    "ambitious","ample","amused","amusing","anchored","ancient","angelic","angry","anguished","animated","annual",
    "another","antique","anxious","any","apprehensive",'creepy',"arctic","arid","aromatic","artistic",
    "ashamed","assured","astonishing","athletic","attached","attentive","attractive","austere","authentic",
    "authorized","automatic","average","aware","awesome","awful","awkward","bad","back",
    "baggy","bare","barren","basic","beautiful","beloved","beneficial","better","best","bewitched","big",
   "biodegradable","bitesized","bitter","black","hate","kill",'Lithuania','Hell','Heaven',"dreamcatcher","succubus",'demon','black sabbath','zombie','mainecoon'
] 

document.querySelector('.randomWord').addEventListener('click', function(){
let randomThing = Math.round(Math.random()  * words.length )

fetchImage(words[randomThing]);
document.getElementById('search-text').innerText = `Searched word:  ${words[randomThing]}`
})


