const style = {
    Equipment: {
        position: "fixed",
        bottom: "0",
        right: "0",
        height: "150px",
        width: "150px",
        backgroundColor: "whitesmoke"
    }
}

export default class Actions extends React.Component {

    render() {
        return (
            <div style={style.Equipment}>
                action
            </div>
        )
    }

}