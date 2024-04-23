<template>
	<header class="navbar navbar-expand navbar-dark bg-dark fixed-top shadow" aria-label="Second navbar example">
		<div class="container">
			<div class="navbar-brand my-1">
				<i class="bi bi-search text-secondary h2 align-middle me-3"></i>
				<a class="text-light align-middle d-sm-inline d-none" href="https://github.com/italofds" target="_blank">italofds</a>
				<span class="text-secondary align-middle d-sm-inline d-none"> / </span>
				<a class="text-light align-middle" href="https://github.com/italofds/osint-ip-web" target="_blank">osint-ip-web</a>
				<span class="badge rounded-pill text-bg-secondary align-middle ms-3" style="font-size:10pt;"><small>v1.1.0</small></span>
			</div>

			<div class="dropdown">
				<button class="btn btn-dark dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Alterar Tema">
					<svg class="bi my-1 theme-icon-active"><use href="#circle-half"></use></svg>
					<span class="d-none ms-2" id="bd-theme-text">Alterar Tema</span>
				</button>
				<ul id="dropdown-theme" class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
					<li>
						<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
							<svg class="bi me-2 opacity-50"><use href="#sun-fill"></use></svg>
							Claro
							<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
						</button>
					</li>
					<li>
						<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
							<svg class="bi me-2 opacity-50"><use href="#moon-stars-fill"></use></svg>
							Escuro
							<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
						</button>
					</li>
					<li>
						<button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
							<svg class="bi me-2 opacity-50"><use href="#circle-half"></use></svg>
							Auto
							<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
						</button>
					</li>
				</ul>

				<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
					<symbol id="check2" viewBox="0 0 16 16">
						<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
					</symbol>
					<symbol id="circle-half" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
					</symbol>
					<symbol id="moon-stars-fill" viewBox="0 0 16 16">
						<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
						<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
					</symbol>
					<symbol id="sun-fill" viewBox="0 0 16 16">
						<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
					</symbol>
				</svg>
			</div>
		</div>
	</header>

	<main id="start" style="padding-top: 70px;">
		<div class="container p-3">
			<div class="bg-body-tertiary mb-3 p-3 p-lg-5 rounded">
				<h1 class="mb-3">Pesquisa em massa de informações de IP (por data ou não)</h1>
				<p class="lead">Esta ferramenta permite a pesquisa em massa de <strong>informações de IP</strong> disponíveis publicamente na Internet.</p>
				<p class="lead">Para isso, é necessário informar 1 ou mais endereços IP (IPv6 ou IPv4), <strong>separados por linha</strong>. Se desejar fazer uma pesquisa mais precisa por data, informe também a data na mesma linha.</p>
				<p class="lead">Caso a(s) data(s) esteja(m) em formato diferente do padrão AAAA-MM-DD, <strong>selecione o formato</strong> correto logo abaixo.</p>

				<form @submit.prevent="handleFormSubmit">
					<textarea v-model="formData.ipList" type="text" class="form-control my-3" id="firstName"
						placeholder="255.255.255.255 1999-12-31" rows="5" required></textarea>

					<div class="row">
						<div class="col-md-6 d-grid">
							<div class="input-group mb-3">
								<span class="input-group-text" id="basic-addon1">Formato data:</span>
								<select v-model="formData.selectedDateFormatIndex" class="form-select">
									<option v-for="item in dateFormatItens" :value="item.id" :key="item.id">{{ item.text }}</option>
								</select>
							</div>
						</div>
						<div class="col-md-6 d-grid">
							<button type="submit" class="btn btn-lg btn-primary mb-3">Consultar</button>
						</div>
					</div>
				</form>
			</div>

			<a class="anchor" id="result"></a>

			<div class="my-5" v-show="resultList.length > 0">
				<h2>Resultado da Consulta:</h2>

				<p class="text-muted">Exibindo resultado do total de <strong>{{ resultList.length }}</strong> endereços IP informados.</p>
				<button class="btn btn-outline-secondary" @click="exportExcel()">Exportar Excel</button>
				
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
					<table class="table table-striped table-hover mb-0">
						<thead>
							<tr>
								<th scope="col" class="text-nowrap"></th>
								<th scope="col" class="text-nowrap">Endereço IP</th>
								<th scope="col" class="text-nowrap">País</th>
								<th scope="col" class="text-nowrap">UF</th>
								<th scope="col" class="text-nowrap">Cidade</th>
								<th scope="col" class="text-nowrap">ISP</th>
								<th scope="col" class="text-centertext-nowrap ">Data Ref.</th>
								<th scope="col" class="text-center text-nowrap">Data IP</th>
								<th v-if="hasExtraInfo" scope="col" class="text-nowrap">Info. Extras</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(resultObj, index) in resultList" :key="index" :class="uniqueIpDataList[resultObj.dataIndex].status">
								<td>
									<div v-if="uniqueIpDataList[resultObj.dataIndex].status == 'loading'" class="spinner-border spinner-border-sm" role="status">
										<span class="visually-hidden">Loading...</span>
									</div>
									<i v-if="uniqueIpDataList[resultObj.dataIndex].status == 'error'" class="text-danger bi bi-exclamation-diamond-fill"></i>
									<i v-if="uniqueIpDataList[resultObj.dataIndex].status == 'success'" class="text-success bi bi-check-circle-fill"></i>
								</td>
								<td class="text-nowrap">{{ printValue(uniqueIpDataList[resultObj.dataIndex].ip) }}</td>
								<td class="text-nowrap">{{ printValue(uniqueIpDataList[resultObj.dataIndex].country) }}</td>
								<td class="text-nowrap">{{ printValue(uniqueIpDataList[resultObj.dataIndex].region) }}</td>
								<td class="text-nowrap">{{ printValue(uniqueIpDataList[resultObj.dataIndex].city) }}</td>
								<td class="text-nowrap">{{ printValue(uniqueIpDataList[resultObj.dataIndex].isp) }}</td>
								<td class="text-nowrap text-center">{{ printDateValue(uniqueIpDataList[resultObj.dataIndex].refDate) }}</td>
								<td class="text-nowrap text-center">{{ printDateValue(uniqueIpDataList[resultObj.dataIndex].date) }}</td>
								<td class="text-nowrap" v-if="hasExtraInfo">{{ printValue(resultObj.extraInfo) }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>		

			<p class="text-muted small text-center">Desenvolvido por <a target="_blank" href="https://github.com/italofds">Ítalo Santos</a> | © 2024 | Licença GPL-3.0| Hospedado pelo GitHub Pages | Contribua: <a target="_blank" href="https://github.com/italofds/osint-ip-web">github.com/italofds/osint-ip-web</a></p>	
		</div>
	</main>

	<a href="#start" class="btn btn-primary btn-lg btn-top p-0 d-flex justify-content-center align-items-center" v-if="resultList.length > 0">
		<i class="bi-arrow-up"></i>
	</a>
</template>

<script>
import mapStyleJSON from '../assets/map-style.json'
import '../assets/js/color-modes.js'
import moment from 'moment';
import axios from 'axios';
import * as XLSX from 'xlsx';

const MAX_DAYS_DIFF = 10;
const IP_REGEX = /\b(?:\d{1,3}\.){3}\d{1,3}\b|\b(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\b/gi;
const NEW_LINE_REGEX = /\r?\n|\r|\n/g;
const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

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

function validateDate(date, formatIn, formatOut) {
	var dataMoment = moment(date, formatIn, true);

	if(dataMoment.isValid()) {
		return dataMoment.format(formatOut);
	} else {
		return "";
	}
}

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
				selectedDateFormatIndex: 0
			},
			uniqueIpDataList: [],
			resultList: [],
			mapMarkers: []
		};
	},
	computed: {
		selectedDateFormat: function () {
			return this.dateFormatItens.find(obj => obj.id === this.formData.selectedDateFormatIndex);
		},
		
		hasExtraInfo: function () {
			var response = false;
			for(let result of this.resultList) {
				if(result.extraInfo) {
					response = true;
					break;
				}
			}
			return response;
		}
	},
	methods: {
		printValue: function (value) {
			return value ? value : "-";
		},
		printDateValue: function (dateValue) {
			if (dateValue) {
				return validateDate(dateValue, DEFAULT_DATE_FORMAT, this.selectedDateFormat.dateFormat);
			}
			return "-";
		},
		handleFormSubmit() {
			this.resultList = [];
			this.uniqueIpDataList = [];
			this.mapMarkers = [];
			
			var separateRows = this.formData.ipList.split(NEW_LINE_REGEX);
			
			var resultSize = 0;			
			if(separateRows && separateRows.length > 100) {
				resultSize = 100;
			} else {
				resultSize  = separateRows.length;
			}

			for (let i = 0; i < resultSize; i++) {
				var row = separateRows[i];
				var rowIpList = row.match(IP_REGEX);
				
				if(rowIpList) {
					//Start ip data config					
					var ipAddressFormated = formatIP(rowIpList[0]);		
					var validDate = "";
					var ipDataIndex = -1;
					row = row.replaceAll(IP_REGEX, "");
				''
					//Date ip config
					var rowDateList = row.match(this.selectedDateFormat.regex);					
					if(rowDateList) {
						validDate = validateDate(rowDateList[0], this.selectedDateFormat.dateFormat, DEFAULT_DATE_FORMAT);
						row = row.replaceAll(this.selectedDateFormat.regex, "");			
					}

					//Unique ip data config
					for (let i = 0; i < this.uniqueIpDataList.length; i++) {
						var uniqueIpData = this.uniqueIpDataList[i];
						if(uniqueIpData.ip == ipAddressFormated){

							var newIpDate = new Date(validDate);
							var oldIpDate = new Date(uniqueIpData.date);
							var diffDate = (newIpDate - oldIpDate) / (1000 * 60 * 60 * 24);

							if(diffDate >= -MAX_DAYS_DIFF && diffDate <= MAX_DAYS_DIFF) {
								ipDataIndex = i;
								break;
							}
						}						
					}

					if(ipDataIndex == -1) {
						this.uniqueIpDataList.push({status: "loading", ip: ipAddressFormated, country: "", region: "", city: "", isp: "", refDate: "", date: validDate});
						ipDataIndex = this.uniqueIpDataList.length-1;
					}

					//Result config					
					this.resultList.push({dataIndex: ipDataIndex, extraInfo: row.trim()});		
				}
			}

			console.log(this.uniqueIpDataList);
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
					uniqueIpData.region = response.data.regionName;
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
		},
		exportExcel() {
			var exportDataList = [];

			for(let resultItem of this.resultList) {
				var exportData = {
					"IP" : this.uniqueIpDataList[resultItem.dataIndex].ip,
					"País" : this.uniqueIpDataList[resultItem.dataIndex].country, 
					"UF" : this.uniqueIpDataList[resultItem.dataIndex].region, 
					"Cidade" : this.uniqueIpDataList[resultItem.dataIndex].city, 
					"ISP" : this.uniqueIpDataList[resultItem.dataIndex].isp, 
					"Data Ref." : this.uniqueIpDataList[resultItem.dataIndex].refDate, 
					"Data IP" : this.uniqueIpDataList[resultItem.dataIndex].date, 
					"Info. Extras" : resultItem.extraInfo
				};
				exportDataList.push(exportData);
			}			

			var worksheet = XLSX.utils.json_to_sheet(exportDataList);					
			var workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, "Dados IP");
			XLSX.writeFile(workbook, "ip-data-result.xlsx");
		}
	},
	setup() {
		const mapStyle = mapStyleJSON;

		return {
			mapStyle
		}
	}
}
</script>

<style>
	a.anchor {
		display: block;
		position: relative;
		top: -50px;
		visibility: hidden;
	}

	.bi {
		width: 1em;
		height: 1em;
		vertical-align: -.125em;
		fill: currentcolor;
	}

	.dropdown-menu .active .bi {
		display: block !important;
	}

	.navbar-brand:hover {
		text-decoration: underrow;
	}

	.navbar-brand a {
		text-decoration: none;
	}

	.navbar-brand a:hover {
		text-decoration: underline;
	}

	tr.loading td {
		color: #CCCCCC;
	}

	tr.error td {
		background-color: #f8d7da;
		color: #000;
	}

	.btn-top {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 3rem;
		height: 3rem;
	}
</style>