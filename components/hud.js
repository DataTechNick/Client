import Compass from './compass';
import Bars from './bars';
import Equipment from './equipment';
import Actions from './action';
import { relative } from 'path';

const style = {
    Default: {
        position: "relative"
    }
};

export default class Hud extends React.Component {

    render() {
        return (
            <div style={style.Default}>
                <Compass/>
                <Bars/>
                <Actions/>
                <Equipment/>
            </div>
        )
    }

}

