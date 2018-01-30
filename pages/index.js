// import Battle from '../components/battle';
import io from 'socket.io-client';

const socket = io.connect('localhost:3001');


export default class ToDo extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            socketId: ""
        }

    }

    componentWillMount() {

        
        socket.on('socketId', function (data) {
            console.log(data);
            this.setState({ socketId: data });
        });

    }

    render = () => {
        return (
            <div>
                <h1>{this.state.socketId}</h1>
            </div>
        )
    }

}

