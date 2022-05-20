import './style.css'

export default function EnterCode() {
    return (
        <div className='container'>
            <main>
                <h1 className="title">
                    Enter your code
                </h1>
                <br/>
            
                <form>
                    <input type="text" id="code" name="code" 
                    style={{width: 400 + "px", margin: 10 + "px"}}
                    min="100000" max="999999"/>

                    <input type="submit" value="Submit"/>
                </form>
            </main> 

            <footer>
                Powered by{' '} Team Three
            </footer>

        </div> 
    )
}