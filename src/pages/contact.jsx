import povar from './povar.jpg';

function Contact () {
    return(
        <div>
            <h1>Contact us!</h1>
            <img src={povar} alt=""/>
            <h5> Call us on this number: 8 (960) 007 92 56</h5>
            <h5>Telegram: @mrFyvka</h5>
        </div>
    );
}

export { Contact }