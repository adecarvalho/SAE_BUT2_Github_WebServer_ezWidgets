//****************************** */
// Gauge temperature
//****************************** */
const gaugeTemperature = new Gauge('canvas_temperature_id', {
	title: 'Temp',
	unit: '°C',
	min: -5,
	max: 50,
	value: 0,
	colorNeedle: '#c6d7e7',
	colorText: '#d3e0ed',
	backgroundColor: 'rgb(51,51,51)',
	tickInterval: 5,
	zones: [
		{ limit: 10, color: '#4d4dc3' },
		{ limit: 20, color: '#f1c40f' },
		{ limit: 30, color: '#e74c3c' },
		{ limit: Infinity, color: '#c3106f' },
	],
});

//************************ */
// Gauge Humidity
//************************ */
const gaugeHumidity = new LcdGauge('canvas_humidity_id', {
	title: 'Hum',
	unit: '%',
	min: 0,
	max: 100,
	value: 0,
	tickInterval: 5,
});

//************************ */
// Gauge Lum
//************************ */
const gaugeLuminosity = new LcdVerticalGauge('canvas_luminosity_id', {
	title: 'Lum',
	unit: 'Lux',
	min: 0,
	max: 2000,
	value: 0,
	tickInterval: 250,
});

//************************** */
const t1 = setInterval(() => {
	const val = 5 * (Math.random() - 1) + 20;
	gaugeTemperature.setValue(val);

	gaugeHumidity.setValue(val * 2);

	gaugeLuminosity.setValue(val * 100);
}, 2000);
//********************************* */
window.addEventListener('beforeunload', (event) => {
	clearInterval(t1);
});
//end

