import React from 'react'
import { ContentWrapper } from '../elements/containers'

const ContactPage = () => {
  return (
    <ContentWrapper>
    <h3>Send personal hello</h3>
    <br/>
    <p>
        Gmail: <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=caldayham@gmail.com&body=Yo%20Cal!%0A%0AMy%20name%20is%0AAn%20interesting%20fact%20about%20me%20is%0AThe%20reason%20I%20am%20contacting%20you%20is%0AHere%20is%20a%20good%20link%20if%20you%20would%20like%20to%20learn%20more%20about%20me%0A%0AStay%20epic,%0A[YOUR%20NAME]&su=hi%20from%20your%20website" alt="cal day's compose gmail link" target="_blank">caldayham@gmail.com</a>
    </p>
    <p>
        Email: <a alt="copy email" onclick="copyToClip('cal@calday.one')">cal@calday.one</a>
    </p>
    <p>
        Text: <a alt="copy email" onclick="copyToClip('1 650 521 7269')">+1 650 521 7269</a>
    </p>
    <br/>
    <br/>
    <br/>
    <h3>Business links</h3>
    <br/>
    <p>Print REM: <a href="https://printrem.com" alt="print rem link" rel="noreferrer" target="_blank">https://printrem.com</a></p>
    <p>Ledges: <a href="https://ledges.io" alt="ledges link" rel="noreferrer" target="_blank">https://ledges.io</a></p>
    <br/>
    <br/>
    <br/>
    <h3>Public personal accounts</h3>
    <br/>
    <p>
        LinkedIn: <a href="https://linkedin.com/in/calday" alt="cal day's linkedin link" rel="noreferrer" target="_blank">https://linkedin.com/in/calday</a>
    </p>
    <p>
        GitHub: <a href="https://github.com/caldayone" alt="cal day's linkedin link" rel="noreferrer" target="_blank">https://github.com/caldayone</a>
    </p>
    <p>
        Monkeytype: <a href="https://monkeytype.com/profile/farmercal" alt="cal day's linkedin link" rel="noreferrer" target="_blank">https://monkeytype.com/profile/farmercal</a>
    </p>
    <p>
        Amazon: <a href="https://www.amazon.com/gp/profile/amzn1.account.AHRSPRXLBS4WBPJAECQH56DQJ7SA" rel="noreferrer" alt="cal day's linkedin link" target="_blank">https://www.amazon.com/gp/profile/amzn1.account.AHRSPRXLBS4WBPJAECQH56DQJ7SA</a>
    </p>
    <br/>
    <br/>
    <br/>
    <h3>Public crypto addresses</h3>
    <br/>
    <p>Bitcoin: <a alt="copy bitcoin address" onclick="copyToClip('3Je3cPo6VEa8JNhH21twCxUwTGWF4SY8mC')">3Je3cPo6VEa8JNhH21twCxUwTGWF4SY8mC</a></p>
    <p>Ethereum: <a alt="copy bitcoin address" onclick="copyToClip('0x73157DB335c52Cd54693067a71D89aC741a07539')">0x73157DB335c52Cd54693067a71D89aC741a07539</a></p>
    <p>USDC: <a alt="copy bitcoin address" onclick="copyToClip('0xE77965f2f887Ac55220b53ab1D4E43f3661EB657')">0xE77965f2f887Ac55220b53ab1D4E43f3661EB657</a></p>
</ContentWrapper>
  )
}

export default ContactPage