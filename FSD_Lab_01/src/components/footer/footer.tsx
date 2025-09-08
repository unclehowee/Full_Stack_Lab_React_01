const currentDate = new Date();
const currentYear = currentDate.getFullYear();
function FooterSection () {
    return(
        <footer>
            <h3>Pixell River Financial {currentYear}</h3>
        </footer>
    )
}

export default FooterSection;