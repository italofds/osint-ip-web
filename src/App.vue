<template>
	<nav class="navbar navbar-expand navbar-dark bg-dark fixed-top" aria-label="Second navbar example">
		<div class="container">
			<div>
				<img src = "../assets/github-logo.svg" alt="italofds identicon" class="navbar-icon me-3 align-middle" />
				<a class="navbar-brand align-middle" href="https://github.com/italofds" target="_blank">italofds</a>
				<span class="navbar-brand align-middle"> / </span>
				<a class="navbar-brand align-middle" href="https://github.com/italofds/osint-ip-web" target="_blank">osint-ip-web</a>
			</div>

		</div>
	</nav>

	<main id="start" class="pt-5">
		<div class="container p-3">
			<div class="bg-body-tertiary p-5 rounded">
				<h1 class="mb-3">Pesquisa em massa de informações de IP (por data ou não)</h1>
				<p class="lead">Esta ferramenta permite a pesquisa em massa de <strong>informações de IP</strong> disponíveis publicamente na Internet.</p>
				<p class="lead">Para isso, é necessário informar 1 ou mais endereços IP (IPv6 ou IPv4), <strong>separados por linha</strong>. Se desejar fazer uma pesquisa mais precisa por data, informe também a data na mesma linha.</p>
				<p class="lead">Caso a(s) data(s) esteja(m) em formato diferente do padrão AAAA-MM-DD, <strong>selecione o formato</strong> correto logo abaixo.</p>

				<form @submit.prevent="handleFormSubmit">
					<textarea v-model="formData.ipList" type="text" class="form-control my-3" id="firstName"
						placeholder="255.255.255.255 1999-12-31" rows="5" required></textarea>

					<div class="row">
						<div class="col-md-6">
							<div class="input-group mb-3" style="height:50px;">
								<span class="input-group-text" id="basic-addon1">Formato data:</span>
								<select v-model="formData.selectedDateFormat" class="form-select">
									<option v-for="item in dateFormatItens" :value="item.id" :key="item.id">{{ item.text }}</option>
								</select>
							</div>
						</div>
						<div class="col-md-6 d-grid gap-2">
							<button type="submit" class="btn btn-lg btn-primary mb-3">Consultar</button>
						</div>
					</div>
				</form>

			</div>

			<div id="result" class="my-5" v-show="resultList.length > 0">
				<h2>Resultado da Consulta:</h2>

				<p class="text-muted">Exibindo resultado do total de <strong>{{ resultList.length }}</strong> endereços IP informados.</p>
				<a href="#" class="btn btn-light">Exportar Excel</a>
				
				<GMapMap ref="myMapRef" class="mt-3 mb-3" :center="{ lat: 0, lng: 0 }" :zoom="1" map-type-id="terrain" style="width: 100%; height: 400px" :options="{
					zoomControl: true,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					rotateControl: false,
					fullscreenControl: false,
					scrollwheel: false,
					styles: mapStyle
				}">
					<GMapMarker :key="marker" v-for="marker in mapMarkers" :position="marker.position"/>	
				</GMapMap>
				
				<div class="table-responsive">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th scope="col"></th>
								<th scope="col">Endereço IP</th>
								<th scope="col">País</th>
								<th scope="col">Cidade</th>
								<th scope="col">ISP</th>
								<th scope="col" class="text-center">Dt. Ref.</th>
								<th scope="col" class="text-center">Data IP</th>
								<th v-if="hasExtraInfo" scope="col">Info. Extras</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="ipItem in resultList" :key="ipItem" :class="uniqueIpDataList[ipItem.dataIndex].status"> 
								<td>
									<div v-if="uniqueIpDataList[ipItem.dataIndex].status == 'loading'" class="spinner-border spinner-border-sm" role="status">
										<span class="visually-hidden">Loading...</span>
									</div>
									<i v-if="uniqueIpDataList[ipItem.dataIndex].status == 'error'" class="text-danger bi bi-exclamation-diamond-fill"></i>
									<i v-if="uniqueIpDataList[ipItem.dataIndex].status == 'success'" class="text-success bi bi-check-circle-fill"></i>
								</td>
								<td>{{ ipItem.ip }}</td>
								<td>{{ uniqueIpDataList[ipItem.dataIndex].country }}</td>
								<td>{{ uniqueIpDataList[ipItem.dataIndex].city }}</td>
								<td>{{ uniqueIpDataList[ipItem.dataIndex].isp }}</td>
								<td class="text-center">{{ uniqueIpDataList[ipItem.dataIndex].refDate }}</td>
								<td class="text-center">{{ ipItem.date ? ipItem.date : "-" }}</td>
								<td v-if="hasExtraInfo">{{ ipItem.extraInfo }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>			
		</div>
	</main>

	<a href="#start" class="btn btn-primary btn-lg btn-top p-0 d-flex justify-content-center align-items-center" v-if="resultList.length > 0">
		<i class="bi bi-caret-up-fill"></i>
	</a>
</template>

<script>
import mapStyleJSON from '../assets/map-style.json'
import moment from 'moment';
import axios from 'axios';

export default {
	name: 'App',
	data() {
		return {
			dateFormatItens: [
				{id: 0, text: "AAAA-MM-DD (Padrão)", dateFormat: "YYYY-MM-DD", regex: /\d{4}-\d{2}-\d{2}/g },
				{id: 1, text: "DD/MM/AAAA", dateFormat: "DD/MM/YYYY", regex: /\d{2}\/\d{2}\/\d{4}/g },
				{id: 2, text: "DD-MM-AAAA", dateFormat: "DD-MM-YYYY", regex: /\d{2}-\d{2}-\d{4}/g },
				{id: 3, text: "MM/DD/AAAA", dateFormat: "MM/DD/YYYY", regex: /\d{2}\/\d{2}\/\d{4}/g },
				{id: 4, text: "MM-DD-AAAA", dateFormat: "MM-DD-YYYY", regex: /\d{2}-\d{2}-\d{4}/g }
			],
			formData: {
				ipList: '',
				selectedDateFormat: 0
			},
			uniqueIpDataList: [],
			resultList: [],
			mapMarkers: [],
			hasExtraInfo: false
		};
	},
	methods: {
		handleFormSubmit() {

			console.log(process.env.VUE_APP_IP_API_URL);
			console.log(process.env.VUE_APP_MAPS_API_KEY);

			this.resultList = [];
			this.uniqueIpDataList = [];
			this.mapMarkers = [];
			this.hasExtraInfo = false;
			
			const regexIP = /\b(?:\d{1,3}\.){3}\d{1,3}\b|\b(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\b/gi;
			var separateRows = this.formData.ipList.split(/\r?\n|\r|\n/g);
			
			var resultSize = 0;			
			if(separateRows && separateRows.length > 100) {
				resultSize = 100;
			} else {
				resultSize  = separateRows.length;
			}

			for (let i = 0; i < resultSize; i++) {
				var row = separateRows[i];
				var rowIpList = row.match(regexIP);
				row = row.replaceAll(regexIP, "");
				
				if(rowIpList) {
					//Start ip data config
					var ipAddressFormated = formatIP(rowIpList[0]);		
					var validDate = "";
					var ipDataIndex = -1;
				''
					//Date ip config
					const dateData = this.dateFormatItens.find(obj => obj.id === this.formData.selectedDateFormat);
					var rowDateList = row.match(dateData.regex);
					row = row.replaceAll(dateData.regex, "");

					if(rowDateList) {
						if(isValidDate(rowDateList[0], dateData.dateFormat)) {
							validDate = rowDateList[0];
						}						
					}					

					//Unique ip data config
					for (let i = 0; i < this.uniqueIpDataList.length; i++) {
						let uniqueIpData = this.uniqueIpDataList[i];
						if(uniqueIpData.ip == ipAddressFormated && uniqueIpData.date == validDate){
							ipDataIndex = i;
							break;
						}
					}
					if(ipDataIndex == -1) {
						this.uniqueIpDataList.push({ip: ipAddressFormated, date: validDate, country: "-", city: "-", isp: "-", refDate: "-", status: "loading"});
						ipDataIndex = this.uniqueIpDataList.length-1;
					}

					//Result config					
					this.resultList.push({ip: ipAddressFormated, date: validDate, dataIndex: ipDataIndex, extraInfo: row.trim()});
					if(row.trim() != "") {
						this.hasExtraInfo = true;
					}					
				}
			}

			window.location.href='#result';
			this.fetchData();
		},
		async fetchData() {
			var locationsList = [];
			var bounds = new window.google.maps.LatLngBounds();

			for (let uniqueIpData of this.uniqueIpDataList) {
				try {
					var url  = process.env.VUE_APP_IP_API_URL + uniqueIpData.ip + "/" + uniqueIpData.date;
					const response = await axios.get(url);

					uniqueIpData.isp = response.data.asn;
					uniqueIpData.country = response.data.country;
					uniqueIpData.city = response.data.city;
					uniqueIpData.refDate = response.data.dbDate;
					uniqueIpData.status = "success";

					var location = {lat: response.data.location.lat, lng: response.data.location.lng};

					locationsList.push(location);
					var marker = {
						position: {
							lat: location.lat, lng: location.lng
						},
					};
					this.mapMarkers.push(marker);
					
					bounds.extend(marker.position);
					this.$refs.myMapRef.fitBounds(bounds);

				} catch (error) {
					uniqueIpData.status = "error"
					console.error('Ocorreu um erro durante a busca dos dados: ', error);
				}
			}

			
		}
	},
	setup() {
		const mapStyle = mapStyleJSON;

		return {
			mapStyle
		}
	}
}

function formatIP(IPAddressRaw){
	var ipAddressFormated;

	// Check if it's IPv4
	if(IPAddressRaw.indexOf(":") == -1) {
		ipAddressFormated = IPAddressRaw;		
	}

	// Check if it's IPv6
	else {
		var arrayIPParts = IPAddressRaw.split(":");
		var arrayIPPartsFormated = [];

		for (let ipPart of arrayIPParts) {
			if(ipPart.length < 2) {
				ipPart = "000" + ipPart;
			} else if(ipPart.length < 3) {
				ipPart = "00" + ipPart;
			} else if(ipPart.length < 4) {
				ipPart = "0" + ipPart;
			}
			
			arrayIPPartsFormated.push(ipPart);
		} 

		
		ipAddressFormated = arrayIPPartsFormated.join(":");
	}
	
	return ipAddressFormated.toUpperCase();
}

function isValidDate(date, format) {
	return moment(date, format, true).isValid();
}

</script>

<style>
	.navbar-brand:hover {
		text-decoration: underrow;
	}

	.navbar-icon {
		height: 20px;
	}

	tr.loading td {
		color: #CCCCCC;
	}

	tr.error td {
		background-color: #f8d7da;
	}

	.btn-top {
		position: fixed;
		bottom: 20px;
		right: 20px;
		display: none;
		padding: 0px;
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
	}
</style>