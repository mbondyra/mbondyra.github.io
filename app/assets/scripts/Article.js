import  React from 'react';

class Obstacle extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <a-box id="center5" cursor-listener-promo1 sound="src: #fifthQuestion" className="clickable"
                   position="-20.5 1.5 20"
                   color="white"
                   depth="0.5" width="3" height="3">
                <a-entity position="-1.1 0.4 0.32"
                          bmfont-text="text: Question: What information can be required by the call centre?; width: 500 "></a-entity>
                <a-box className="clickable" cursor-listener
                       position="0 0 0"
                       color="lightgray"
                       depth="0.7" width="2.5" height="0.5" answer="true" parentn = "#center5">
                    <a-entity position="-1.2 -0.25 0.4"  bmfont-text="text: a. Full name; width: 500 "></a-entity>
                </a-box>
                <a-box className="clickable" cursor-listener
                       position="0 -0.55 0"
                       color="lightgray"
                       depth="0.7" width="2.5" height="0.5" answer="false" parentn = "#center5"  >
                    <a-entity position="-1.2 -0.25  0.4" bmfont-text="text: b. Your PIN number; width: 500 "></a-entity>
                </a-box>
                <a-box className="clickable" cursor-listener
                       position="0 -1.1 0"
                       color="lightgray"
                       depth="0.7" width="2.5" height="0.5" answer="false" parentn = "#center5"  >
                    <a-entity position="-1.2 -0.25  0.4"  bmfont-text="text: c.  online banking password; width: 500 "></a-entity>
                </a-box>
            </a-box>

        );
    }
}
export default  Obstacle;
