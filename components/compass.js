const style = {
    Compass: {
        position: "fixed",
        top: "0",
        height: "150px",
        width: "150px",
        backgroundColor: "whitesmoke"
    }
}

export default class Compass extends React.Component {

    render() {
        return (
            <div style={style.Compass}>
                compass
            </div>
        )
    }

}