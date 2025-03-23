const navItem = document.getElementById('navItem');
const collapseNavItem = document.getElementById('collapseNavItem');
console.log(window.visualViewport.width);

['load','resize'].forEach ( e =>
    window.addEventListener(e, (evt) =>{
    if (window.visualViewport.width<=768) {
        navItem.style.display = 'none';
        collapseNavItem.style.display = 'flex';
    } else {
        navItem.style.display = 'flex';
        collapseNavItem.style.display = 'none';
    }
    
    }));


const itemGenerate = () => {
    
}