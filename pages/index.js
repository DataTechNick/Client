import Canvas from '../components/canvas';
import Hud from '../components/hud';
import Window from '../components/window';

import io from 'socket.io-client';

const socket = io.connect('localhost:3001');

const style = {
    page: {
        margin: "0",
        padding: "0",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "100%",
        width: "100%",
    }

};

export default class Index extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            socketId: ""
        }

    }

    componentWillMount() {

        socket.on('socketId', (data) => {

            console.log(data);
            this.setState({ socketId: data });

        });

    }

    render = () => {
        return (
            <div style={style.page}>
                <Canvas />
                <Hud />
                <Window />
            </div>
        )
    }

}
