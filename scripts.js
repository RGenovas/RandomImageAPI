
const container = document.querySelector(".image-container");
const searchTag =  document.getElementById('search-text')
let random 

let words = [
    "abandoned","able","absolute","adorable","adventurous","academic","acceptable","accomplished",
    "accurate","aching","actual","disturbing","admirable","admired","adolescent",
    "adorable","adored","advanced","afraid","affectionate","aged","aggravating","aggressive","agile","agitated",
    "agonizing","ajar","alarmed","alarming","alert","alienated","alive",
    "ample","amused","amusing","anchored","ancient","angelic","angry","anguished","animated","annual",
    "another","antique","anxious","any","apprehensive",'creepy',"arctic","aromatic","artistic",
    "ashamed","assured","astonishing","athletic","attached","attentive","attractive","austere","authentic",
    "authorized","automatic","average","aware","awesome","awful","awkward","bad","back",
    "baggy","bare","barren","basic","beautiful","beloved","beneficial","better","best","bewitched","big",
   "biodegradable","bitesized","bitter","black","hate","kill",'Lithuania','Hell','Heaven',"dreamcatcher","succubus",'demon','black sabbath','zombie','mainecoon','food', 'Dracula', 'Spongebob', 'devil', 'pikachu', 'beer',"spectrum",
   "competence","fill","cable","job","judicial","if","despair",
   "constellation","fountain","passion","program","conference","patience","eagle","keep",
   "producer","waterfall","self","overall","poem","teach","society","ignore","rebellion","furry","louse","pryer","honan","treks","snugs", "alice", "woman", "man","cityscape","horrible","Friday","batman","superman","Led Zeppelin", "pet", "dog", "soldier", "bottle"
] 



// Random word on load
document.addEventListener('DOMContentLoaded', function() {
  
    let randomThingOnload = Math.round(Math.random()  * words.length )
    fetchImage(words[randomThingOnload]);
}, false);


document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})


// Close popup
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}


// Image fetch
function fetchImage (query) {
    const pexelsApi = '7ZRIPUtVjgZRqxlgaA7NsOSV87LVnSDvnVKaTLAhSTqtMISG3yAN4DuQ'
    const url = `https://api.pexels.com/v1/search?query=${query}`
    fetch(url, {
        headers: {Authorization: pexelsApi}
    })
    .then(response =>response.json())
    .then(data => {
        if(data.photos.length > 0) {
            // clean out old images for new ones
             container.innerHTML = ''
            for (var i = 0; i < data.photos.length; i++) {   
                container.innerHTML += 
                `<div class="image">
                <img src=${data.photos[i].src.large} class="searchedImg"></img>
                </div>
                <div class="popup-image">
                <span>&times;</span>
                 <img src="img/amajorpenta.jpg" alt="">
                </div>
                </div>`     
            }

            // Add popup to loaded images
            document.querySelectorAll('.image-container img').forEach(image => {
                image.onclick = () => {
                    document.querySelector('.popup-image').style.display = 'block';
                    document.querySelector('.popup-image img').src = image.getAttribute('src');
                }
            })
        
            document.querySelector('.popup-image span').onclick = () => {
                document.querySelector('.popup-image').style.display = 'none';
            }
            
        } else {
                alert('No image found for ' + query)
            }
        
    })
    .catch(error => console.error('Error fetching image:', error))

}

// Buttons functions
document.querySelector('.search button').addEventListener('click', function(){
    let searched = document.querySelector('.search-bar').value
    if (searched.length > 1) {
        fetchImage(searched)
        searchTag.classList.remove('hidden')
        searchTag.innerText = `Results for:  ${(document.querySelector('.search-bar').value)}`
    } else {
        alert('Please submit a longer query. (More than 1 char)')
    }


})

document.querySelector('.search-bar').addEventListener('keyup', function(event){
    if(event.key === 'Enter') {
        searchTag.classList.remove('hidden')
        searchTag.innerText = `Results for:  ${(document.querySelector('.search-bar').value)}`
        fetchImage(document.querySelector('.search-bar').value)
    }
})



document.querySelector('.randomWord').addEventListener('click', function(){
let randomThing = Math.round(Math.random()  * words.length )
console.log(randomThing)
searchTag.classList.remove('hidden')
searchTag.innerText = `Random query:  ${((words[randomThing]))}`
fetchImage(words[randomThing]);

})


