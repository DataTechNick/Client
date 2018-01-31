const style = {
    canvas: {
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "lightgray"
    }

};

export default class Canvas extends React.Component {

    render() {
        return (

            <canvas style={style.canvas}></canvas>

        )
    }

}

