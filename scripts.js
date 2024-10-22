

function fetchImage (query) {
    const pexelsApi = '7ZRIPUtVjgZRqxlgaA7NsOSV87LVnSDvnVKaTLAhSTqtMISG3yAN4DuQ'
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`

    fetch(url, {
        headers: {Authorization: pexelsApi}
    })
    .then(response =>response.json())
    .then(data => {
        if(data.photos.length > 0) {
             document.querySelector('.searchedImg').src = `${data.photos[0].src.large}`
             document.getElementById('search-text').innerText = `Searched word:  ${query}`
            
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
const container = document.getElementById("myPanzoom");
const options = {
  Toolbar: {
    display: ["zoomIn",
"zoomOut",
"toggleZoom",

"rotateCCW",
"rotateCW",
"flipX",
"flipY",
"fitX",
"fitY",
"reset"],
  },
};

new Panzoom(container, options, { Toolbar });


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
   "biodegradable","bitesized","bitter","black","hate","kill",'Lithuania','Hell','Heaven',"dreamcatcher","succubus",'demon','black sabbath','sexy','zombie'
] 

document.querySelector('.randomWord').addEventListener('click', function(){
let randomThing = Math.round(Math.random() * 100 )
fetchImage(words[randomThing]);
document.getElementById('search-text').innerText = `Searched word:  ${words[randomThing]}`
})