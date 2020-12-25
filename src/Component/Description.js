import React from 'react'

const Description = ({ filterList, match }) => {
  const desc = filterList.filter((movie) => movie.id === parseInt(match.params.id))
  console.log('id', desc, desc[0].movieName);
  let show;
  let trailer;
  if (desc.length > 0) {
    show = `${desc[0].movieName}`
    trailer = <iframe title='creed' width="680" height="360" src={`${desc[0].trailer}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  } else {
    show = 'movie does not exist'
  }
  return (
    <div className='description' >
      <p> {show} </p>
      {trailer}
    </div>
  )
}

export default Description
