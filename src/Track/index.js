import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Track = props => {
  const {details, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = details

  const deleteTrack = () => {
    deleteItem(id)
  }

  return (
    <li className="track">
      <img src={imageUrl} alt="track" className="track-image" />
      <div className="track-details">
        <p className="song-name">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <p className="duration">{duration}</p>
      <button
        className="delete-button"
        testid="delete"
        type="button"
        onClick={deleteTrack}
      >
        <AiOutlineDelete className="del-icon" />
      </button>
    </li>
  )
}

export default Track
