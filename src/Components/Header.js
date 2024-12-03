const Header = () => {

    const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function generateRandomText(max){
    return Math.floor(Math.random() * (max+1))
}

const description = reactDescriptions[generateRandomText(reactDescriptions.length - 1)]

return(
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
)


}

export default Header;