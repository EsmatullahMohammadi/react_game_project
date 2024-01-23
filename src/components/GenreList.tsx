import { Genre } from '../hook/useGenres';
import useGenres from '../hook/useGenres'
import useData from '../hook/useData'

const GenreList = () => {
    const{data}=useGenres();
  return (
    <ul>
        {data.map(dat=> <li key={dat.id}>{dat.name}</li>)}
    </ul>
  )
}

export default GenreList