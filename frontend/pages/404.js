const Custom404 = () => {
    /* scuffed code, will be fixed tomorrow(?) */
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            color: "#fff",
        }}>
            <h1 style={{ margin: 0, padding: 0 }}>Oops!</h1>
            <p>Looks like you made a wrong turn. <a href="/" style={{ color: "#95a1f1" }}>Go home?</a></p>
        </div>
    );
}

export default Custom404;
