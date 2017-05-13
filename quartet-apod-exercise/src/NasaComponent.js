import 'whatwg-fetch';
import React, { Component } from 'react';


class NasaComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            json:{},
            requestError: false,
            requesting:true,
            width:500,
            largeScreen: false
        }
        this._handleBlur = this._handleBlur.bind(this);
        this._handleResizeEvent = this._handleResizeEvent.bind(this);

    }

    _handleResizeEvent(){
        if(window.innerWidth <= 1000 && this.state.largeScreen){
            this.setState({
                largeScreen:false
            });

        }else {
            this.setState({
                largeScreen:true
            });
        }
    }

    componentWillMount(){
        console.log('before render');

    }
    componentDidMount(){
        console.log('after render');
        if(windows.innerWidth > 1000){
            this.setState({
                largeScreen:true
            });
        }

        // fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
        // .then(res =>{});
    }

    componentWillUpdate(){
        console.log('before update');
    }

    componentDidUpdate(){
        console.log('after Update');
    }

    _handleBlur(event){

    }

    // DetailList = (data) =>{
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>

    // }

    render(){
        console.log('this is render');
        // const {
        //     json:{
        //         title,
        //         date,
        //         url,
        //         hdurl,
        //         explanation
        //     }
        // } = this.state;

        fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo',{
            method:'get'
        }).then(function(res){
            console.log();
        }).catch(function(err){
            console.log(err);
        });
        
    }


}
export default NasaComponent;