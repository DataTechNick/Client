const style = {
    Bars: {
        position: "fixed",
        bottom: "150px",
        left: "0",
        height: "150px",
        width: "150px",
        backgroundColor: "whitesmoke"
    }
}

export default class Bars extends React.Component {

    render() {
        return (
            <div style={style.Bars}>
                bars
            </div>
        )
    }

}