import React, { Component } from 'react';
import Typist from '../node_modules/react-typist';
import '../node_modules/react-typist/dist/Typist.css';
import './App.css'; 
import Datecalculation from './components/Datecalculation';
import ReactPlayer from 'react-player';

class App extends Component {
  
  render() {
    
    return (
    <div id="mainDiv">
      <Typist className="Typist code">
           Boy * i=<span className="keyword">new</span> Boy(<span className="string">"li"</span>)
           <Typist.Delay ms={500}/>
           <span className="comments">// Tt's me.</span><br></br>
           Girl * U<br></br>
           <Typist.Delay ms={500}/>
           <span className="keyword">while</span>(<span className="keyword">true</span>):<br></br>
           <span className="placeholder"><span className="keyword">try:</span></span><br></br>
           <span className="placeholder"/><span className="placeholder"/>U = <span className="keyword">new</span> Girl<br></br>
           <span className="placeholder"/><span className="keyword">except:</span>(std::bad_alloc) <br></br>
           <Typist.Delay ms={500}/>
           <span classname="placeholder"/><span class="placeholder"/><span class="placeholder"/><span class="keyword">contimue</span>
           <Typist.Backspace count={3}Delay={500}></Typist.Backspace> 
           <span class="keyword">nue</span><br></br>
           <span className="placeholder"/><span className="keyword">if</span> U !=<span className="string">NULL</span>:<br></br>
           <span className="placeholder"/> <span className="placeholder"/><span>break</span><br></br>
           <Typist.Delay ms={500}/>
           <span className="comments">//Usually you will be trapped out of</span>
           <Typist.Backspace count={6}Delay={500}></Typist.Backspace>
           <span className="comments">in this loop</span><br></br>
           <span className="comments">//for a every long time.</span><br></br>
           <Typist.Delay ms={500}/>
           <span className="keyword">while</span><span>(<span className="keyword">true</span>)</span>:<br></br>
           <span className="placeholder"/><span className="keyword">try</span>:<br></br>
           <span className="placeholder"></span><span className="placeholder"></span><span className="keyword">case</span><span class="string">"hungry"</span>: i-&gt;feed(u);break; <br/>
           <Typist.Delay ms={500}/>
           <span className="placeholder"></span><span className="placeholder"></span><span className="keyword">case</span><span class="string">"tired"</span>: i-&gt;hug(u);break; <br/>
           <Typist.Delay ms={500}/>
           <span className="placeholder"></span><span className="placeholder"></span><span className="keyword">case</span><span class="string">"sleepy"</span>: i-&gt;coax(u);break; <br/>
           <Typist.Delay ms={500}/>
           <span className="placeholder"></span><span className="placeholder"></span><span className="keyword">default</span>: i-&gt;say(U,<span class="string">"I Like U"</span>);break; <br></br>
           <span className="placeholder"></span><span className="keyword">except</span>(Girl::DoNotLoveMe) :<br/>
           <Typist.Delay ms={500}/>
				   <span className="placeholder"></span><span class="comments">// Some day I will catch this message.</span><br/>
				   <span className="placeholder"/>i-&gt;believeInLove (<span class="keyword">false</span>); <br/>
				   <span className="placeholder"/><span class="comments">// I will never believe in love anymore.</span><br/>
				   <span className="placeholder"/>sys.exit(-1); <span class="comments">// Until reboot.</span><br/>
      </Typist>
      <Datecalculation  />
      <div id="loveHeart1">
          <ReactPlayer 
            
            url='https://www.youtube.com/watch?v=bS9eXS6VucU' playing></ReactPlayer>
      </div>
    </div>
    );
  }
}

export default App;
