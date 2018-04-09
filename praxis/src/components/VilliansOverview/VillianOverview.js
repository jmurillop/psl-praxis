import React, { Component } from 'react';
import './VillianOverview.css';

class VillianOverview extends Component {
    render() {
        return (<div className='villian-overview-container'>
        
            
            <a href={this.props.link}><h2>{this.props.name}</h2></a>
            <img src={this.props.image} alt={this.props.name} />
            
            <p className='villian-overview-text'>{this.props.overview}</p>

        </div>);
    }
}

export default VillianOverview;