import React, { Component } from 'react'
import QrReader from 'react-qr-scanner';
import './QrCode.scss';

export default class QrCode extends Component {
    constructor(props){
      super(props)
      this.state = {
        delay: 100,
        result: 'No result',
      }
   
      this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
      this.setState({
        result: data,
      })
    }
    handleError(err){
      console.error(err)
    }
    render(){
      const previewStyle = {
        height: 240,
        width: 320,
      }
   
      return(
        <>
            <div className="qrcode">
            <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                />
            </div>
            <p>{this.state.result}</p>
        </>
      )
    }
  }