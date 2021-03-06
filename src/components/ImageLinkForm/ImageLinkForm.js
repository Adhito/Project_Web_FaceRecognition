import React from 'react';


const ImageLinkForm = () => {
  return (
    <div className='ma4 mt0'>
      <p className='f3'>
        {'This app will detect faces '}
      </p>
      <div className='center'>
        <div className='center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex'/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red'>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
