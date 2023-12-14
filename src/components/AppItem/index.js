import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl, appId} = app
  return (
    <li className="list-item-for-app" key={appId}>
      <img src={imageUrl} alt={appName} className="icon-app" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
