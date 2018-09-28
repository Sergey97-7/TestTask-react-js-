<!--	Все реализовал. Если есть какие-то неточности, то я не так понял часть задания... 
		В любом случае здесь я показываю свои знания, поэтому какие-то неточности я смогу переделать.
-->
<html>
	<head>
		<script>
			document.addEventListener('DOMContentLoaded', function(){

				class DateInput {
						constructor() {
							this.input = document.querySelector(".input");
							this.input.addEventListener('change', this.onChange.bind(this));
						}
						
						onChange(event) {
							this.inputValue = event.target.value;
							this.updateTime = new Date();
							return this.inputValue;
						}
					}
					
				class DateRange extends DateInput {
					constructor() {
						super();
						this.container = document.querySelector('.containerForLastUpdateRecordAndPeriodItems');
						this.container.innerHTML = " ";
					}
					
					createItems( period)  {
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
					
					renderItems(items) {
						const element = document.createElement('div');
						this.container.appendChild(element);
						element.innerText = `Последнее изменение: ${this.updateTime.getDate() > 9 ? this.updateTime.getDate() : '0'+(this.updateTime.getDate())} . ${this.updateTime.getMonth() > 9 ? this.updateTime.getMonth() : '0'+(this.updateTime.getMonth()+1)}`;
						items.map(item => {
							let element = document.createElement('div');
							element.innerText = item;
							this.container.appendChild(element);
						});
					}

					onChange(event) {
						super.onChange(event);
						while (this.container.firstChild) {
    						this.container.removeChild(this.container.firstChild);
						}
						this.renderItems(this.createItems(this.createPeriod(this.inputValue))); 
					}

					createPeriod(date) {
						let data = new Date(date);
						let newDate = new Date(date);
						newDate.setFullYear((newDate.getFullYear() + 1));
						return {
							start: data,
							end: newDate
						}
					}

				}
				const dateRange = new DateRange();
			});
		</script>
	</head>
	<body>
		<div><input class="input" type='date' /></div>
		<div class="containerForLastUpdateRecordAndPeriodItems"></div>
	</body>
</html>