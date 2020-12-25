import React from 'react'

const Description = ({ filterList, match, history }) => {
  const desc = filterList.filter((movie) => movie.id === parseInt(match.params.id))
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
      <button onClick={() => history.goBack()} >click</button>
    </div>
  )
}

export default Description
