import React from 'react'
import { ContentWrapper } from '../elements/containers'
import { copyToClip } from '../functions/copy-text'

const ContactPage = () => {
    return (
        <ContentWrapper>
            <h3>Send personal hello</h3>
            <br />
            <p>
                Gmail: <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=caldayham@gmail.com&body=Yo%20Cal!%0A%0AMy%20name%20is%0AAn%20interesting%20fact%20about%20me%20is%0AThe%20reason%20I%20am%20contacting%20you%20is%0AHere%20is%20a%20good%20link%20if%20you%20would%20like%20to%20learn%20more%20about%20me%0A%0AStay%20epic,%0A[YOUR%20NAME]&su=hi%20from%20your%20website" alt="cal day's compose gmail link" target="_blank" rel="noreferrer">caldayham@gmail.com</a>
            </p>
            <p>
                Email: <button alt="copy email" onClick={() => copyToClip('cal@calday.one')}>cal@calday.one</button>
            </p>
            <p>
                Text: <button alt="copy email" onClick={() => copyToClip('1 650 521 7269')}>+1 650 521 7269</button>
            </p>
            <br />
            <br />
            <br />
            <h3>Business links</h3>
            <br />
            <p>Print REM: <a href="https://printrem.com" alt="print rem link" rel="noreferrer" target="_blank">https://printrem.com</a></p>
            <p>Ledges: <a href='https://ledges.io' alt="ledges link" rel="noreferrer" target="_blank">https://ledges.io</a></p>
            <br />
            <br />
            <br />
            <h3>Public personal accounts</h3>
            <br />
            <p>
                LinkedIn: <a href="https://linkedin.com/in/calday" alt="cal day's linkedin link" rel="noreferrer" target="_blank">https://linkedin.com/in/calday</a>
            </p>
            <p>
                GitHub: <a href="https://github.com/caldayone" alt="cal day's linkedin link" rel="noreferrer" target="_blank">https://github.com/caldayone</a>
            </p>
            <p>
                YouTube: <a href="https://www.youtube.com/channel/UCuIRTWu61i-6OpJvq161AQg" alt="youtube" rel="noreferrer" target="_blank">https://www.youtube.com/channel/UCuIRTWu61i-6OpJvq161AQg</a>
            </p>
            <p>
                Monkeytype: <a href="https://monkeytype.com/profile/farmercal" alt="cal day's linkedin link" rel="noreferrer" target="_blank">https://monkeytype.com/profile/farmercal</a>
            </p>
            <br />
            <br />
            <br />
            <h3>Public crypto addresses</h3>
            <br />
            <p>Bitcoin: <button alt="copy bitcoin address" onClick={() => copyToClip('3Je3cPo6VEa8JNhH21twCxUwTGWF4SY8mC')}>3Je3cPo6VEa8JNhH21twCxUwTGWF4SY8mC</button></p>
            <p>Ethereum: <button alt="copy bitcoin address" onClick={() => copyToClip('0x73157DB335c52Cd54693067a71D89aC741a07539')}>0x73157DB335c52Cd54693067a71D89aC741a07539</button></p>
            <p>USDC: <button alt="copy bitcoin address" onClick={() => copyToClip('0xE77965f2f887Ac55220b53ab1D4E43f3661EB657')}>0xE77965f2f887Ac55220b53ab1D4E43f3661EB657</button></p>
        </ContentWrapper>
    )
}

export default ContactPage