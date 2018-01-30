import MiniMap from './minimap';
import Bars from './bars';
import Equipment from './equipment';
import Actions from './action';

const style = {
    MiniMap: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "150px",
        width: "150px",
        backgroundColor: "whitesmoke"
    },
    Bars: {
        position: "absolute",
        bottom: "0",
        left: "0",
        height: "150px",
        width: "150px",
        backgroundColor: "whitesmoke"
    },
    Equipment: {
        position: "absolute",
        bottom: "0",
        right: "0",
        height: "150px",
        width: "150px",
        backgroundColor: "whitesmoke"
    },
    Actions: {
        position: "absolute",
        bottom: "0",
        height: "150px",
        width: "150px",
        backgroundColor: "whitesmoke"
    }

};

export default class Hud extends React.Component {

    render() {
        return (
            <div>
                <MiniMap style={style.MiniMap} />
                <Bars style={style.Bars} />
                <Actions style={style.Actions} />
                <Equipment style={style.Equipment} />
            </div>
        )
    }

}

