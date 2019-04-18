import React ,{ Component } from 'react';
import '../App.css'; 

class Datecalculation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            days:1,
            hours:1,
            minutes:1,
            seconds:1,
        }
        this.Date();
    }

    Date = () => {
        var together = new Date();
        together.setFullYear(2016, 10, 2);
        together.setHours(10);
        together.setMinutes(0);
        together.setSeconds(0);
        together.setMilliseconds(0);
        let that = this;
        setInterval(function(){
            
        var oDate=new Date();
        var seconds=(Date.parse(oDate)-Date.parse(together))/1000;
        var days = Math.floor(seconds / (3600 * 24));
        seconds = seconds % (3600 * 24);
        var hours = Math.floor(seconds / 3600);
        if (hours < 10) {
            hours = "0" + hours;
        }
        seconds = seconds % 3600;
        var minutes = Math.floor(seconds / 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        seconds = seconds % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        that.setState({
            days:days,
            hours:hours,
            minutes:minutes,
            seconds:seconds
        })
        
    },500);
        
}
    render(){
        return(
            <div id="loveHeart">
					<div id="words">
						GouGou 我喜欢你的
						<div id="elapseClock">
                        <span class="digit">{this.state.days}天</span><span class="digit">{this.state.hours} 小时</span><span class="digit">{this.state.minutes} 分钟 </span><span class="digit">{this.state.seconds} 秒</span>
                        </div>
					</div>
					<div id="loveu">
						Like u forever and ever.<br/>
						<div class="signature">- li 2019</div>
					</div>
			</div>
        )
    }
}

export default Datecalculation;