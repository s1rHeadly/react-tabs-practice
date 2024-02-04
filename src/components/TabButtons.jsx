
const TabButtons = ({tabData,active,setActive}) => {


  return (
    <div className="tab__header">

        {tabData.map((item, index) => (
               <li
                onClick={() => setActive(index)}
                className={`tab__button ${active === index ? "active" : ""}`}
                key={index}
                 >
          {item.animal}
        </li>
      ))}
    </div>
  )
}

export default TabButtons