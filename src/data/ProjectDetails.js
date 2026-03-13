import React, { Fragment } from "react";
import philippineScripts from './images/projects/philippineScripts.jpg';
import baybayinCharacters from './images/projects/baybayinCharacters.png';
import sImoUI from './images/projects/simo-ui-full.jpg';
import pcPrejanVid from './media/pcPrejan2.mp4';
import pinoyKeyboardApk from './media/pinoyKeyboard.apk';
import pinoyKeyboardToggle from './images/projects/pinoyKeyboardToggle.jpg';
import tsAppTemplate from './images/projects/tsAppTemplate.jpeg';

export const reactTSAppTemplate = <Fragment>
    <h5 className="topic-label"><a target="_blank" rel="noreferrer"
                                   href="https://jaosimt-ts-app-template.vercel.app/">https://jaosimt-ts-app-template.vercel.app/</a>
    </h5>
    <p><strong>Why start from scratch? Templates will save a good amount of your time!</strong></p>
    <p>
        Building a custom React template is about reclaiming creative agency and reducing the "decision fatigue" that
        comes with modern web development. While frameworks like Tailwind or Bootstrap are powerful, they often force
        you into a specific design language or require you to memorize thousands of utility classes just to center a
        div.
    </p>
    <p className={'m-0'}>Here is why setting up your own foundational template is a game-changer:</p>
    <ol className={'m-0'}>
        <li>
            <h4>Zero-Friction Styling</h4>
            <p>When you define your own CSS classes—whether through CSS Modules or Styled Components — you build a
                system that speaks your language.</p>
            <ul className={'m-0'}>
                <li>Intuitive Naming: you use .card-header. It makes the
                    JSX readable and keeps your styling logic separate from your structure.
                </li>
                <li>Design Freedom: You aren't fighting a framework's default breakpoints or color palettes. You set
                    your variables once, and your app scales exactly how you envisioned it.
                </li>
            </ul>
        </li>
        <li>
            <h4>Pre-Wired Global State (Redux)</h4>
            <p>Configuring Redux from scratch in every project is a chore. By baking it into a template:</p>
            <ul className={'m-0'}>
                <li>
                    Boilerplate is Gone: You can have your store.js, rootReducer, and common slices (like userSlice or
                    uiSlice) ready to go.
                </li>
                <li>
                    Standardized Flow: You establish a consistent pattern for how data enters the app, making it easier
                    to jump back into the code months later without wondering where the state lives.
                </li>
            </ul>
        </li>
        <li>
            <h4>Bulletproof API Layers</h4>
            <p>Most apps spend 80% of their time talking to a server. A template allows you to build a sophisticated
                apiHelper:</p>
            <ul className={'m-0'}>
                <li>
                    Centralized Error Handling: You can intercept 401s (unauthorized) or 500s globally. Instead of
                    writing try/catch in every component, your helper manages toast notifications or redirects
                    automatically.
                </li>
                <li>
                    Clean Syntax: You can transform complex fetch calls into simple, reusable methods like
                    API.get('/profile'), keeping your components focused on the UI rather than network logic.
                </li>
            </ul>
        </li>
        <li>
            <h4>A Library of "Foundational" Components</h4>
            <ul>
                <li>
                    Every project needs a Button, an Input, and a Modal. Having these pre-built with your own CSS
                    classes means:
                    <ul>
                        <li>
                            Instant Prototyping: You can spin up a functional dashboard in minutes because the
                            building blocks
                            already exist.
                        </li>
                        <li>Consistency: Every button in every project feels the same, maintaining a professional
                            "signature"
                            style across your work.
                        </li>
                        <li>Essentially, you are building a workspace tailored to your brain. You stop "thinking too
                            much" about
                            the setup and start focusing entirely on the unique features of your app.
                        </li>
                    </ul>
                </li>
                <li>
                    Third-party libraries for things like Toast notifications often come with unnecessary dependencies
                    and complex APIs. A custom template includes "just enough" logic:
                    <ul className={'m-0'}>
                        <li>
                            The Toast: A 50-line component that listens to a Redux slice, allowing you to trigger a
                            notification from anywhere in the app (even inside your API helper) with a simple dispatch.
                            <p className={'mb-0'}>Yes, I could have just use existing libraries such as react-tostify but I thought I
                                needed much simpler and lighter which does absolutely the same! And yes, that's my way
                                of saying, I just wanted to create my own far simpler and lighter toast component 😎</p>
                        </li>
                        <li>Custom Inputs/Buttons: Pre-styled components tailored enough to get you started.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>
    <p>
        Ultimately, this template isn't just about code; it's about velocity. It allows you to move from npx to a
        functional, styled, and connected application in seconds.
    </p>
    <div className="inline-image"
         style={{ minHeight: '399px', backgroundSize: 'cover', backgroundImage: `url(${tsAppTemplate})` }}/>
    <p>
        For more details, please visit the vercel deployed app template <a target="_blank" rel="noreferrer"
                                                                           href="https://jaosimt-ts-app-template.vercel.app/">here</a>.
    </p>
</Fragment>

export const reactParseHtmlString = <Fragment>
    <h5 className="topic-label"><a target="_blank" rel="noreferrer"
                                   href="https://www.npmjs.com/package/react-parse-htmlstring">https://www.npmjs.com/package/react-parse-htmlstring</a>
    </h5>
    <p><strong>Parse any string and return a React component on a html container of your choice!</strong></p>
    <p>
        After digging npm packages and not able to find a working HTML String parser for React JS that works for me back
        then; On a project that requires crazy string combinations to be rendered as html, I created this package and
        decided to share it with the world.
    </p>
    <p><strong>Here's why:</strong></p>
    <p className={'mb-0'}>
        Given the following 3 different html strings containing valid html tags and plain usages of greater
        <strong>(&gt;)</strong> and/or less <strong>(&lt;)</strong> than characters:
    </p>
    <pre className={'mt-1 p-2 boxed pre-wrap'}>
        <ul className={'m-0'}>
            <li>
                Given that &lt;strong>max&lt;/strong>, &lt;strong>x&lt;/strong> and &lt;strong>y&lt;/strong> are
                declared and initialized, write a solution that if x&lt;y returns &lt;strong>max=x&lt;/strong>!
            </li>
            <li className={'mt-1'}>
                if (x&lt;y) <br/>&nbsp;&nbsp;&nbsp;max=x; <br/>else <br/>&nbsp;&nbsp;&nbsp;max=y;
            </li>
            <li className={'mt-1'}>
                a[1] = 6; <br/>List&lt;Integer> lst = new ArrayList&lt;>();
            </li>
        </ul>
    </pre>
    <p>
        Without proper parsing, dynamically rendering the above 3 strings will have different results.
    </p>
    <p>
        The issue starts with the browser automatically treating any character or word after "&lt;" as a html tag! And
        of course, any non-valid html tag like &lt;y or &lt;Integer> from above examples will be lost!
    </p>
    <p>
        HTML string encoding/escaping is also not an option as it will work for &lt;y or &lt;Integer> than needs to be
        rendered as it is, but then &lt;strong>max&lt;/strong> will be rendered as a plain text as well instead of the
        intended "<strong>max</strong>" text in bold!
    </p>
    <p><a href="https://jaosimt.github.io/react-parse-htmlstring/" target="_blank" rel="noreferrer">Try the Live
        Demo!</a></p>
    <p>
        For more details, please visit the npm package <a target="_blank" rel="noreferrer"
                                                          href="https://www.npmjs.com/package/react-parse-htmlstring">here</a>.
    </p>
</Fragment>

export const pinoyKeyboardDetails = <Fragment>
    <h5 className="topic-label">Unpublished</h5>
    <p><strong>Pinoy Keyboard is a baybayin B17+ keyboard extension.</strong></p>
    <p>Unfortunately, due to the fact that I am not ready to pay google app store yet 😂, I did not publish it. However,
        at your own risk, if you are technical enough to install manually, you can do so by downloading Pinoy Keyboard
        extension app for andriod in <a href={pinoyKeyboardApk} target="_blank" rel="noreferrer">here</a>! Rest assured,
        that it is safe and no hidden agenda whatsoever! It is just a straight keyboard extension application that a
        handful of people are already using.</p>
    <div className="inline-image" style={{ backgroundImage: `url(${pinoyKeyboardToggle})`, height: '300px' }}/>
    <p>Above illustration shows a key that toggles the keyboard characters from baybayin to roman/latin and/or vice
        versa. Ideal for those who are still studying and beginners alike in baybayin.</p>
    <p>As you can see, character placement are ordered left-to-right with <strong>ba ka da ga ha la ma</strong> and
        etc... respectively for easy remembering with the <a
            href="//en.wikipedia.org/wiki/Abakada_alphabet" target="_blank" rel="noreferrer">Abakada</a> alphabet in
        where
        baybayin and other Philipine scripts are based of.</p>
    <p>The topmost 3 keys are nothing more than a vowel selector. Normally, baybayin characters are syllables by default
        with the vowel <strong>a</strong>. However, for easy transition from the typical typing that we all used to with
        the roman/latin keys, I thought, that it would be easier to start with the same. Meaning, with this keyboard,
        the
        keys starts with the <b><i>pamatay pantining</i></b> or <b><i>disemvowelment</i></b> of the default syllable
        baybayin character/s.</p>
    <p>That said, when you type <span
        className="bybyn bold x-large">ᜊ</span> or <strong className="x-large">b</strong>, you will have the
        character <span
            className="bybyn bold x-large">ᜊ᜔</span>. And if that is not your intention, you will
        then follow it with one of the <b>3 topmost (vowel selector)</b> keys as follows:</p>
    <span className="bold">Top-Left -> A</span>
    <span className="bold">Top-Center -> E/I</span>
    <span className="bold">Top-Right -> O/U</span>
    <h4 className='label'>By the way, your android phone might not be able to download the apk on a simple click. If
        that is your case, try long-pressing the link and wait for the context menu and download from there.</h4>
    <p>That's It! For any questions, do reach me out to any of the social media platforms below.</p>
</Fragment>

export const pcPrejanDetails = <Fragment>
    <h5 className="topic-label">Unpublished</h5>
    <p><strong>A web application that allows <strong>PCP Architectural Services</strong> to add/update/remove projects
        and/or
        images and
        details with search capabilities and interactions to viewers/potential client inquires via comments on each and
        every uploaded project
        images.</strong></p>
    <h4 className="label">Video/Snapshots</h4>
    <video controls style={{
        marginTop: '14px'
    }}>
        <source src={pcPrejanVid} type="video/mp4"/>
        <source src={pcPrejanVid} type="video/ogg"/>
        Your browser does not support the video tag.
    </video>
    <h4 className="label">Languages/Frameworks/Tools:</h4>
    <ul>
        <li>HTML, CSS & (Vanilla) JavaScript</li>
        <li>Powered by <a href="/projects/simo-ui" target="_blank" rel="noreferrer">sImo-ui</a></li>
    </ul>
</Fragment>

export const simoUIDetails = <Fragment>
    <h5 className="topic-label"><a href="//simo-ui.jaosimt.com" target="_blank" rel="noreferrer">simo-ui.jaosimt.com</a>
    </h5>
    <p>
        <strong>
            A lightweight Javascript library. Originally built just for fun and practice. Turns out it came handy on
            one of my
            small web project. Thus, it can be a tool or a stepping stone for students and beginners alike.
        </strong>
    </p>
    <p>The goal for the library is to automatically load css dependency for the inclusive ui components and unload them
        whenever no longer present on the screen. An automatic process that does not require intervention from the
        user.</p>
    <p>Can be for coding practice or even use in an HTML, CSS & Vanilla JS web project. I have successfully use this in
        my <a href="/projects/pcprejan" target="_blank" rel="noreferrer">PCPrejan Webapp</a> project.</p>
    <p>Download simo-ui (sImoJS) library <a href="//simo-ui.jaosimt.com/sImoJS.zip">here</a>.</p>
    <p>Copy it in your web project and simply paste the following line at the end of your html's body tag.</p>
    <code>{`<script type="text/javascript" src="sImoJS/sImo.js"></script>`}</code>
    <p>For more information and documentation, click the logo or the link provided above.</p>
    <a href="//simo-ui.jaosimt.com" target="_blank" rel="noreferrer">
        <div className="inline-image" style={{ backgroundSize: 'contain', backgroundImage: `url(${sImoUI})` }}/>
    </a>
    <h4 className="label">Languages/Frameworks/Tools:</h4>
    <ul>
        <li>HTML, CSS & (Vanilla) JavaScript</li>
    </ul>
</Fragment>

export const baybayinPilipinasDetails = <Fragment>
    <h5 className="topic-label"><a href="//baybayin.jaosimt.com" target="_blank"
                                   rel="noreferrer">baybayin.jaosimt.com</a></h5>
    <p><strong>An online baybayin keyboard and baybayin translator with collections of baybayin related articles and
        news from
        multiple sources.</strong></p>
    <h4 className="label">What is Baybayin</h4>
    <p>
        Baybayin is an ancient Philippine writing system.<br/>A writing system native to the Philippines,
        attested from before Spanish colonization through to at least the eighteenth century. The term Baybay literally
        means "to spell" in Tagalog. Baybayin was extensively documented by the Spanish.
    </p>
    <div className="inline-image" style={{ backgroundImage: `url(${baybayinCharacters})` }}/>
    <p style={{ marginTop: '14px' }}>
        Baybayin is just one of many writing systems in the Philippines
    </p>
    <div className="inline-image" style={{ backgroundImage: `url(${philippineScripts})` }}/>
    <br/>
    <h4 className="label">Languages/Frameworks/Tools:</h4>
    <ul>
        <li>React JS</li>
    </ul>
</Fragment>
