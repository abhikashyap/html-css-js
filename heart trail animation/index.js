const body_element= document.querySelector("body")

body_element.addEventListener("mousemove", (e) =>{
    const get_random_color = () =>{
        color = '#';
        string='0123456789ABCDEF'
        for (let i = 0; i < 6; i++) {
            color += string[Math.floor(Math.random()*16)]
            
        }

        return color;
    };

    const get_random_size= (e) =>{
        let size=Math.floor(Math.random()*50)
        return size

    };


    const text_color=get_random_color();
    const new_element=document.createElement('span');
    new_element.textContent='*';
    new_element.style.position = 'absolute'; 
    new_element.style.left = `${e.offsetX}px`; 
    new_element.style.top =`${e.offsetY}px`
    new_element.style.color=text_color;
    new_element.style.fontSize=`${get_random_size()}px`;
    body_element.appendChild(new_element);


    setTimeout(() => {
        body_element.removeChild(new_element)
    },500);

    


});