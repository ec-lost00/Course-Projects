const panels = document.querySelectorAll('.panel');

/*adding an event for every image panel that makes
panel active on click */
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        const isActive = panel.classList.contains('active')
        removeActiveClasses()
        panel.classList.toggle('active', !isActive)
    })

})

//a function that removes active class from a panel
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}