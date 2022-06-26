import { useEffect, useState } from 'react'
import Image from 'next/image'


export const Index = () => {

  const [characters, setCharacters] = useState([])

  const listar = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json();
    setCharacters(data.results);
    console.log(data.results);
  }

  useEffect(() => {

    listar();

  }, [])



  return (
    <>
      <div>Ricky and Morty</div>


    </>
  )

}
export default Index