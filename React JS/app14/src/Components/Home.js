import { CommonData } from "./ContentAPI";

function Home() {

    return <>
        <CommonData.Consumer>
            {
                (theme) => <div style={{backgroundColor: theme.bg, color:theme.fg}}>
                    {console.log(theme)}
                    <h1>Home Component</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            }

        </CommonData.Consumer>
    </>
}

export default Home;