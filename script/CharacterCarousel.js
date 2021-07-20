var characterName = ["Reyna", "Phoenix", "Raze", "Omen", "Jett"]
var character = [
    {
        path: '../asset/character/Reyna.png',
        role: 'DUELIST',
        biography: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.'
    },
    {
        path: '../asset/character/Phoenix_artwork.png',
        role: 'DUELIST',
        biography: 'Hailing from the U.K., Phoenix\'s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he\'s got backup or not, he\'ll rush into a fight on his own terms.'
    },
    {
        path: '../asset/character/Raze_artwork.png',
        role: 'DUELIST',
        biography: 'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”'
    },
    {
        path: '../asset/character/Omen.png',
        role: 'CONTROLLER',
        biography: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.'
    },
    {
        path: '../asset/character/Jett_artwork.png',
        role: 'DUELIST',
        biography: 'Representing her home country of South Korea, Jett\'s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.'
    }

]

var sliderHTML= ""


let pushSlider = () => {
    let index = 0
    characterName.forEach(e => {
        sliderHTML += ` <div class="slide-wrapper">
                            <div id ="character-name-`+index+`">
                                `+e+`
                            </div>
                        </div>`
        index++
    })
}
pushSlider()
$('#option-container').html(sliderHTML)

var lastItem;
var container = $('#option-container')
var firstIndex = 0
var lastIndex = 2

var sliders = $('.slide-wrapper')
// console.log(sliders)

let pushCharacter = (character) => {
    var characterHTML = `<div class="image-thumbnail">
                        <img src="`+character.path+`" alt="" srcset="">
                    </div>
                    <div class="description">
                        <div id="role">
                            // ROLE
                        </div>
                        <br>
                        <div id="role-description">
                            `+character.role+`
                        </div>
                        <br>
                        <br>
                        <div id="biography">
                            // BIOGRAPHY
                        </div>
                        <br>
                        <div id="biography-description">
                            `+character.biography+`
                        </div>
                    </div>`
    return characterHTML
}





for(let i=0 ; i<sliders.length ; i++){
    if(i < 3){
        sliders[i].style.display = "flex"
        $('#character-name-1').css({
            'color': '#FF4655',
        })
        $('.character-thumbnail').html(pushCharacter(character[1]))
    }
    else
        sliders[i].style.display = "none"

    $('#character-name-' + i).click(()=>{
        if(i == lastIndex){
            sliders[firstIndex].style.display = "none"
            lastItem = sliders[firstIndex]
            container.append(lastItem)
            firstIndex = (++firstIndex) % 5
            lastIndex = (++lastIndex) % 5
            sliders[lastIndex].style.display = "flex"
        }else if(i == firstIndex){
            sliders[lastIndex].style.display = "none"
            lastItem = $('#option-container .slide-wrapper:last-child')
            container.prepend(lastItem)
            firstIndex = (--firstIndex + 5) % 5
            lastIndex = (--lastIndex + 5) % 5
            sliders[firstIndex].style.display = "flex"
            console.log(firstIndex)
        }
        for(let i=0 ; i<sliders.length ; i++){
            $('#character-name-'+i).css({
                'color': '#ece7e1',
            })
        }
            

        $('#character-name-'+i).css({
                'color': '#FF4655',
                
        })
        
        $('.character-thumbnail').html(pushCharacter(character[i]))

    })
}





