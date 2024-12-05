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


    const text_color=get_random_color();
    console.log(color)
    const new_element=document.createElement('span');
    new_element.textContent='hi'
    new_element.style.position = 'absolute'; 
    new_element.style.left = `${e.offsetX}px`; 
    new_element.style.top =`${e.offsetY}px`
    new_element.style.color=text_color;
    body_element.appendChild(new_element);

    setTimeout(() => {
        body_element.removeChild(new_element)
    },2000);

    


});