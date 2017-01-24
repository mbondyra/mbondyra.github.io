
import Obstacle from "./Obstacle"
import obstacles from "./obstacles"
import  React from 'react';
import  ReactDOM from 'react-dom';

// Component to change to random color on click.
AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var COLORS = ['red', 'green', 'blue'];
        this.el.addEventListener('click', function (evt) {
            var isTrue= this.getAttribute("answer")
            if (isTrue=="true"){
                var sceneEl = document.querySelector('a-scene');
                console.log(sceneEl.querySelector(this.getAttribute("parentn")));
                sceneEl.querySelector(this.getAttribute("parentn")).parentNode.removeChild( sceneEl.querySelector(this.getAttribute("parentn")));
            } else {
                this.setAttribute('material', 'color', "red");
            }
            console.log('I was clicked at: ', evt.detail.intersection.point);
        });
    }
});



if (document.getElementById('c5')) {
    console.log("yo")
    ReactDOM.render(
        <Obstacle obstacle={obstacles[0]}/>, document.getElementById('c5')
    );
}