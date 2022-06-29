class Gallery{
    constructor(name,artist,price,image,available){
        this.name = name
        this.artist = artist
        this.price = price
        this.available = available
        this.image = image

    }
    getname(){
      if(this.name =='A great picture'){
        return `${this.name}<p class = 'h6 bg-danger text-dark w-25'> Best Sale </p>`

      }else{
        return `${this.name}`
      }
    }
    getartist(){
        return `${this.artist}`
    }
    getprice(){
    
        return `$${this.price}`
    }
    getimage(){
           return `${this.image}`
    }
    getavailable(){
        if(this.available === false){
            return  `Sorry Not Available`
        }
        else if(this.available === true){
           
            return `<div class='btn btn-outline-dark text-light'>Buy It Now</div>`

        } 
       
       
   
    }
    
    
    }
    

const media = [
    new Gallery('A great picture','bruno brave',200,'https://cdn.pixabay.com/photo/2022/06/12/20/18/flower-7258778__340.jpg',true),
     new Gallery('Another picture','bruno brave',360,'https://cdn.pixabay.com/photo/2021/12/29/18/28/animal-6902459__340.jpg',true),
      new Gallery('Morning good','carla uno',295,'https://cdn.pixabay.com/photo/2022/03/10/13/46/muslim-7059888__340.png',true),
       new Gallery('Old picture','kamila hart',522,'https://cdn.pixabay.com/photo/2021/11/25/16/59/leaves-6824098__340.png',false)

]


  

export{media}