import {Images} from '../../styledComponents/StyledCompos'

function IPosts(props) {

  return (
    <div className='posts_second'>
        <Images src={props.image}></Images>
        <h2 className='font-bold p-2'>{props.title}</h2>
        <p className='para_desc'>{props.description}</p>
    </div>
  )
}

export default IPosts