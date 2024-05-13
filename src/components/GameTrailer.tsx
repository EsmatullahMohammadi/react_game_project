import useTrailers from "../hook/useTrailer";


interface Probs{
  gameId:number;
}
const GameTrailer = ({gameId}:Probs) => {
  const {data, isLoading, error}=useTrailers(gameId);
  if(isLoading) return null;
  if(error) throw error;

  const first= data?.results[0];
  return first? <video src={first.data[480]} poster={first.preview} controls /> : null;

}

export default GameTrailer;