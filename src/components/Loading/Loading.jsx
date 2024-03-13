const Loading = () => {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        width: "100vw",
        height: "100vh",

        backgroundColor: "rgba(29,27,27,0.4)",
        color: "#fff",
    };


    return (
        <div style={style}>
            <h3>Loading...</h3>
        </div>
    );
};

export default Loading;