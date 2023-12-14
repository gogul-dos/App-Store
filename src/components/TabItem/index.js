import './index.css'

const TabItem = props => {
  const {tab, isThis, clicked} = props
  const {tabId, displayText} = tab
  const special = isThis ? 'yes' : ''

  const buttonClicked = () => {
    clicked(tabId)
  }

  return (
    <li className="list-item" key={tabId}>
      <button
        type="button"
        onClick={buttonClicked}
        className={`button-container ${special}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
