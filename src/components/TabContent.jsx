
const TabContent = ({tabData,active}) => {


  return (
    <div className="tab__container">
      <div className="tab__content">
        <p>{tabData[active].fact}</p>
      </div>
    </div>
  )
}

export default TabContent