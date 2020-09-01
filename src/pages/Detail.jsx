import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {ButtomBackToHome} from '../components/ButtonBackToHome'

const API_KEY = process.env.REACT_APP_API_KEY
export class Detail extends Component{

    static propTypes ={
        match:PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    
    state = {movie: {}}

    _fetchMovie({id}){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res =>res.json())
        .then(movie =>{
           /*console.log({movie});*/
           this.setState({movie})
        })
    }
    /*_goBack(){
        window.history.back();
    }*/

    componentDidMount(){
        console.log(this.props);
        const {movieId} = this.props.match.params
        this._fetchMovie({id: movieId})
    }

    render(){
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return(
            <div>
                <ButtomBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt=""/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
           
        )
    }
}