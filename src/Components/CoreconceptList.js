
const CoreconceptList = ({concepts}) =>{

 return (
<ul>   

{concepts.map((concept, index) => (
        <li key={index} className="core-concept-card">
          <img src={concept.image} alt={concept.title} className="concept-image" />
          <h3>{concept.title}</h3>
          <p>{concept.description}</p>
        </li>
      ))}

</ul>

)
}


export default CoreconceptList;