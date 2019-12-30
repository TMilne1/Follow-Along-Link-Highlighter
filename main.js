const links = document.querySelectorAll('a');
const highlight = document.createElement('span');

document.body.append(highlight);
highlight.classList.add('highlight')

function highlightLink(event){
    
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX

    }
    
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`

};

links.forEach((link)=> link.addEventListener('mouseenter', highlightLink))