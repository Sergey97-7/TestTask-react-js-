/*	
		Все реализовал. Если есть какие-то неточности, то я не так понял часть задания... 
		В любом случае здесь я показываю свои знания, поэтому какие-то неточности я смогу переделать.
*/
import React, {Component} from 'react';

class DateRange extends Component {

   state = {
      updateTime: null,
			date: null,
			isFetching: false
    }

    getDate = () => {
			this.setState({isFetching: true});
			const status = response => {
				if (response.status !== 200) {
					return Promise.reject(new Error(response.statusText))
				}
				return Promise.resolve(response)
			}
		  const json = response => {
			return response.json()
		  }
		  fetch(`https://yandex.com/time/sync.json?geo=213`) //https://cors-anywhere.herokuapp.com/
		  .then(status)
		  .then(json)
		  .then(data => {
				this.setState({
					updateTime: new Date(data.time),
					isFetching: false
				  })
		  })
		  .catch(function (error) {
			  console.log('error', error)
		  })
		}
		
    onChange = value => {
		this.getDate();
		const date = new Date (value);
        if (this.state.date !== date) {
          this.setState({date:date })
		}
	}

    renderItems = items => {
		return <div>{items.map((value,index)=><div key={index}>{value} </div>)}</div>
	}

    createItems = period => {
		let dates = [],
				periods = [];
		for (let i = +period.start; i < +period.end; i+= 3600000 * 168) { 
			dates.push(i);
		}
		for(let i=0; i<dates.length; i++) {
		let date = new Date(dates[i]),
		 		per1 = new Date(dates[i]), 
		 		per2 = new Date(dates[i]);
			switch(date.getDay()) {
				case 1:  periods[i] = `${new Date (per1.setHours(0)).toLocaleDateString()} - ${new Date (per2.setHours(144)).toLocaleDateString()}`;
				break;
				case 2:  periods[i] = `${new Date (per1.setHours(-24)).toLocaleDateString()} - ${new Date (per2.setHours(120)).toLocaleDateString()}`;
				break;
				case 3:  periods[i] = `${new Date (per1.setHours(-48)).toLocaleDateString()} - ${new Date (per2.setHours(96)).toLocaleDateString()}`;
				break;
				case 4:  periods[i] = `${new Date (per1.setHours(-72)).toLocaleDateString()} - ${new Date (per2.setHours(72)).toLocaleDateString()}`;
				break;
				case 5:  periods[i] = `${new Date (per1.setHours(-96)).toLocaleDateString()} - ${new Date (per2.setHours(48)).toLocaleDateString()}`;
				break;
				case 6:  periods[i] = `${new Date (per1.setHours(-120)).toLocaleDateString()} - ${new Date (per2.setHours(24)).toLocaleDateString()}`;
				break;
				case 0:  periods[i] = `${new Date (per1.setHours(-144)).toLocaleDateString()} - ${new Date (per2.setHours(0)).toLocaleDateString()}`;
				break;
				default: 
				console.log('Error: ', new Error());
			}
		}
		return periods;
	}

    createPeriod = date => {
		let newDate = new Date(date);
		newDate.setFullYear((newDate.getFullYear() + 1));
		return {
			start: date,
			end: newDate
		}
	}

	RenderInput = () => {
		return	<input type="date" 
							onFocus = {event => event.target.style.backgroundColor = '#900'} 
							onBlur = {event => event.target.style.backgroundColor = '#fff'} 
							onChange={ event => this.onChange(event.target.value)} 
						/>
	}

    RenderView = props => {
		return (
			<div> 
				{this.state.isFetching ? <p>Loading...</p> : 
					<div>{`Последнее изменение:  
						${props.updateTime.getDate() > 9 ? props.updateTime.getDate() : '0'+(props.updateTime.getDate())}
						.
						${props.updateTime.getMonth() > 9 ? props.updateTime.getMonth() : '0'+(props.updateTime.getMonth()+1)}`}
					</div>} 
				{props.date && <div>{this.renderItems(this.createItems(props.period))}</div>}
			</div>
		)
	}

    render() {
		return (	
			<div>
				<this.RenderInput onChange = {this.onChange.bind(this)}/>
				{(this.state.date) ?
				<this.RenderView 
					period = {this.createPeriod(this.state.date)}
					date =  {this.state.date}
					updateTime = {this.state.updateTime}	
				/> : null}
			</div>
		)
	}
}

export default DateRange;
