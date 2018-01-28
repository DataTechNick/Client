export default class Buttons extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.update("Ahoj")}>CZ</button>
                <button onClick={() => this.props.update("Hello")}>EN</button>
            </div>
        )
    }

}

