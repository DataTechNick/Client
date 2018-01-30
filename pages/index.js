import Canvas from '../components/canvas';
import Hud from '../components/hud';
import Window from '../components/window';

// import io from 'socket.io-client';

// const socket = io.connect('localhost:3001');


export default class Index extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            socketId: ""
        }

    }

    // componentWillMount() {
        
        // socket.on('socketId', (data) => {

            // console.log(data);
            // this.setState({ socketId: data });

        // });

    // }

    render = () => {
        return (
            <div>
                <Canvas/>
                <Hud/>
                <Window/>
            </div>
        )
    }

}
