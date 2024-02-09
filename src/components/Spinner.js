import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle'>
         <img src={loading} alt='loading'></img>
      </div>
    )
  }
}

