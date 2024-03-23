# osint-ip-web

The **osint-ip-web** application is a tool developed with Vue.js and integrated with the REST Full **osint-ip-api**, designed for the analysis and search of public information of IP addresses, such as the identification of the connection provider and approximate location. It features standout functionalities like batch queries for efficiency in large volume analyses, and advanced search, allowing for the acquisition of precise IP data on specific dates, optimizing the analysis and monitoring work of IPs for users and cybersecurity professionals.

## Key Features

- **IP Information Query:** Provides detailed data about the connection provider and the approximate location of IP addresses.
- **Advanced Search Functionality:** Allows users to conduct detailed searches for precise IP data, including historical information based on specific dates.
- **Batch Queries:** Enables the processing of multiple IP addresses at once, significantly enhancing analysis efficiency for large datasets.
- **Data Flexibility:** Allows integration with other IP API's, making the necessary adjustments, offering versatility for specific needs.
- **User-Friendly Design:** Designed with a focus on ease of use, facilitating efficient and effective IP data handling and analysis.
- **Easy Setup:** Simplified configuration for quick deployment and use in various development environments.

## Prerequisites

Before starting using the **osint-ip-web** application, it is necessary to have Node.js installed on your machine. Additionally, you must have downloaded and configured the **osint-ip-api** on the same computer, or alternatively, change the settings to use another API of your choice.

> [!NOTE]
> Detailed instructions for downloading and setting up the **osint-ip-api** are available in the official documentation (https://github.com/italofds/osint-ip-api/).

## Installation and Configuration

1. Clone the project repository to your local machine:

```bash
git clone https://github.com/italofds/osint-ip-web.git
cd osint-ip-web
```

2. Install the project dependencies:

```bash
npm install
```

3. Configure and start the local execution of the **osint-ip-api** for the queries requested by the WEB application.

4. Start the WEB application to send querys:

```bash
vue serve
```

## Usage

After setup, the WEB application is ready to be used. To perform a query, simply access the application through your preferred browser, informing the local address:

http://localhost:8080
 
Further usage instructions will be available on the application's own home page.

## Deploy

For deploying the Vue.js project, the following command should be executed:

```bash
npm run build:prod
```

After doing so, all the deployment content will be available in the `dist` folder.

## Contributing

Contributions to **osint-ip-web** are always welcome. Whether it's adding support for new IP APIs, improving the application's usability, suggesting new features, or documenting the project, your help is valuable in making this tool even more powerful.

## License

This project is licensed under the GNU General Public License (GPL), a free software license that guarantees users the freedom to run, study, share, and modify the software.

The GPL is a copyleft license, which means that any modified versions of the software must also be distributed under the same terms of the license. This promotes a free software community, encouraging collaboration and the sharing of improvements.

For more information about the GPL and its terms and conditions of use, visit [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html).
