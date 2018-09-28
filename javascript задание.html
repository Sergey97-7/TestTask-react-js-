Найдите ошибки в коде или отрефакторите его. Обратите внимание, в тест специльно включены задачи разного уровня и направлений программирования. Нам важно понять уровень ваших знаний и в "ширину", и в "глубину". Если вы не можете выполнить какую либо из частей - это не повод сдаваться. Это повод сделать все на что вы способны в рамках ваших текущих знаний. Это поможет нам понять, на чём с вами предстоит сделать упор при потенциальной совместной работе. Удачи!
В этом компоненте в календаре выбирается дата и по ней отображается список периодов. Периоды это недельные промежутки с понедельника по воскресенье, входящие в годовой отрезок времени, начинающийся с выбранного числа.
Если вы знаете typeScript можно использовать его.

<html>
	<head>
		<script>
			class dateInput {
				constructor() {
					this.input = document.querySelector(".input");
					
					this.input.onChange = this.onChange;
				}
				
				onChange(event) {
					this.inputValue = event.srcElement.value;
					this.updateTime = new Date();
					return this.inputValue;
				}
			}
		
			class dateRange extends dataInput {
				constructor() {
					this.container = document.querySelector('.containerForLastUpdateRecordAndPeriodItems')
				}
	
				createItems(period) {
					let dates = [];
					for (i = +period.start; i < +period.end; i+= 3600000 * 168)
					dates.push(i)
					let periods = [];
					for(i=0;i<date.length;i++) {
						let date = new Date(dates[i]);
						if (date.getDay() == 1) period = `${date.toLocaleDateString()} - {date.setHours(168).toLocaleDateString()}`
						else if (date.getDay() == 2) period[i] = `${date.setHours(-24).toLocaleDateString()} - {date.setHours(144).toLocaleDateString()}`
						else if (date.getDay() == 3) period[i] = `${date.setHours(-48).toLocaleDateString()} - {date.setHours(120).toLocaleDateString()}`
						else if (date.getDay() == 4) period[i] = `${date.setHours(-48).toLocaleDateString()} - {date.setHours(120).toLocaleDateString()}`
						else if (date.getDay() == 5) period[i] = `${date.setHours(-72).toLocaleDateString()} - {date.setHours(96).toLocaleDateString()}`
						else if (date.getDay() == 6) period[i] = `${date.setHours(-96).toLocaleDateString()} - {date.setHours(72).toLocaleDateString()}`
						else if (date.getDay() == 0) period[i] = `${date.setHours(-120).toLocaleDateString()} - {date.setHours(48).toLocaleDateString()}`

						var n = periods.length, a = periods.length;
						do { b = false;
							a /= 1.3;
							if (a == 9 || a == 10) a = 11;
							if (a < 1) a = 1;
							for (const i=0; i<n-a; ++i)
							{ if (periods[ i ] > periods[i+a])
								{ b = true;
								   var t = periods[i+a]; periods[i+a] = periods[ i ]; periods[ i ] = t;
								}
							}
						} while (a > 1 || b);
					}
					return periods;
				}
				
				renderItems(items) {
					this.container.appendChild(element = document.createElement('div'))
					element.innerText = `Последнее изменение: ${this.updateTime.getDate() + '.' + this.updateTime.getMonth() > 9 ? : '0'+this.updateTime.getMonth() : this.updateTime.getMonth()}`					
				
					items.forEach(function(item) {
						const element = document.createElement('div', {innerText: item});
										this.container.appendChild(element)
					}
				}
				
				onChange() {
					renderItems(this.createItems(this.createPeriod(this.inputValue)));
				}

				createPeriod(date) {
					let newDate = date;
					newDate.year = newDate.year + 1;
					return {
					start: date,
					end: newDate
					}
				}
			}
			
			const range = Object.create(dateRange.prototype);
			range.constructor = range.constructor.bind(range);
			range.constructor();
		</script>
	</head>
	<body>
		<div class="input"><input type='date'/></div>
		<div class="containerForLastUpdateRecordAndPeriodItems"></div>
	</body>
</html>