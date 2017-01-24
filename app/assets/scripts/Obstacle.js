import  React from 'react';

class Obstacle extends React.Component {
    constructor(props) {
        super(props);
        AFRAME.registerComponent('cursor-listener-promo1', {
            init: function () {
                this.el.addEventListener('click', function (evt) {
                    console.log('I was clicked at: ', evt.detail.intersection.point);
                    this.components.sound.playSound();
                });
            }
        });
    }

    getPositionString() {
        return this.props.obstacle.pos.x + " 1.5 " + this.props.obstacle.pos.z;
    }

    renderAnswers() {
        return (
            <a-entity>
                <a-box className="clickable" cursor-listener
                       position="0 0 0"
                       color="lightgray"
                       depth="0.7" width="2.5" height="0.5" answer="true" parentn="#center5">
                    <a-entity position="-1.2 -0.25 0.4" bmfont-text="text: a. Full name; width: 500 "></a-entity>
                </a-box>
                <a-box className="clickable" cursor-listener
                       position="0 -0.55 0"
                       color="lightgray"
                       depth="0.7" width="2.5" height="0.5" answer="false" parentn="#center5">
                    <a-entity position="-1.2 -0.25  0.4" bmfont-text="text: b. Your PIN number; width: 500 "></a-entity>
                </a-box>
                <a-box className="clickable" cursor-listener
                       position="0 -1.1 0"
                       color="lightgray"
                       depth="0.7" width="2.5" height="0.5" answer="false" parentn="#center5">
                    <a-entity position="-1.2 -0.25  0.4"
                              bmfont-text="text: c.  online banking password; width: 500 "></a-entity>
                </a-box>
            </a-entity>
        );
    }

    renderQuestion(){
        return (
            <a-entity position="-1.1 0.4 0.32" bmfont-text={"text: Question: " + this.props.obstacle.content.question + "; width: 500 "}>
            </a-entity>
        )
    }

    render() {
        let obstacle = this.props.obstacle;
        window.obstacle = obstacle;
        return (
            <a-box id={obstacle.id}
                   cursor-listener-promo1
                   sound={"src: " + this.soundAsset}
                   position={this.getPositionString()}
                   className="clickable"
                   color="white"
                   depth="0.5"
                   width="3"
                   height="3">
                {this.renderQuestion()}
                {this.renderAnswers()}
            </a-box>

        );
    }
}
export default  Obstacle;
