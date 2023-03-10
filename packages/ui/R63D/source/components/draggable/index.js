import React from 'react';
import PropTypes from 'prop-types';

export default class Draggable extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
            isDragging: false,
            x: 300,
            y: 200,
        }
    }

    componentWillMount() {
        document.addEventListener('mousemove', this.handleDraging);
        document.addEventListener('mouseup', this.stopDraging);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleDraging);
        document.removeEventListener('mouseup', this.stopDraging);
    }

    startDraging = (e) => {
        this.setState({ isDragging: true });
    }

    handleDraging = (e) => {
        
        if(!this.state.isDragging) return;
        
        const newX =  this.state.x + e.movementX;
        const newY = this.state.y + e.movementY;

        this.setState({ x: newX, y: newY });
    }

    stopDraging = () => {

        if(!this.state.isDragging) return;
        this.setState({ isDragging: false });
    }

    render(){
        return this.props.children({ top: this.state.y, left: this.state.x }, this.startDraging);
    }

}

Draggable.propTypes = {
    children: PropTypes.func.isRequired,
};
