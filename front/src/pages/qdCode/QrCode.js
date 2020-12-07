import React, { Component } from 'react'
import QrReader from 'react-qr-scanner';
import './QrCode.scss';
import {Redirect} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default class QrCode extends Component {
    constructor(props){
      super(props)
      this.state = {
        delay: 100,
        result: 'No result',
        isValid: false
      }
   
      this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
      this.setState({
        result: data,
        isValid: data ? true : false
      })
    }
    handleError(err){
      console.error(err)
    }
    render(){
      const previewStyle = {
        height: '100%',
        width: '100%',
      }
   
      if(this.state.isValid ){
        return <Redirect to="/checked" />
      } else {
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
        </>
      )
      }
    }
  }