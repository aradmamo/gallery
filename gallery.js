import{media} from './data/math.js'

window.Searchname = function (){
    const inp = document.getElementById('inp');

    const val = inp.value.trim();
    const searchimg = media.filter(solo =>{
        return solo.name.toLowerCase().includes(val.toLowerCase())
    }
    )

    displayPictures(searchimg)
}



function displayPictures(image){
    const container = document.getElementById('container');
    let html = '';

    
    image.forEach(solo => {
        html += `<div class="card" style="width: 18rem;">
                <img class='w-100 h-50' src="${solo.getimage()}"
                class="card-img-top" alt="..">
                <div class="card-body bg-warning">
                <h5 class="h1 card-title text-light">${solo.getname()}</h5>
                <h5 class="card-title">${solo.getartist()}</h5>
                <p class="card-text">
                ${solo.getprice()}</p>
                
                <p class='bg-warning text-danger para'>${
                    solo.getavailable()}</p>
                    
                    </div>
                    </div>`;
                    
                })
                
                container.innerHTML = html;
                
            }
      
                displayPictures(media)    