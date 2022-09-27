function Welcome(props) {
    console.log(props);
    return <h1>{props.children}</h1>
}

export function WelcomeH2(props) {
    return <h2>{props.children}</h2>
}

export default Welcome;