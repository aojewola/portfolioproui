# PortfolioPro Frontend

**PortfolioPro** is the frontend for the PortfolioPro application, built using Angular 18.2.12. It communicates with the PortfolioPro backend to provide users with a seamless experience in managing their stock portfolios.

## Features

- **Interactive UI:** Allows users to manage their stock portfolios with ease.
- **API Integration:** Fetches stock data and portfolio details from the Spring Boot WebFlux backend.
- **Real-time Calculations:** Shows stock prices and calculates the number of shares the user can afford.

---

## Requirements

- **Node.js Version:** 20.18.1
- **npm Version:** 10.8.2

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/aojewola/portfolioproui.git
cd portfolioproui
```

### Install Dependencies
Make sure you have Node.js and npm installed. Run the following command:
```bash
npm install
```

### Run the Application
Start the development server:
```bash
ng serve
```

The application will be available at:
```
http://localhost:4200
```

---

## API Integration

The frontend interacts with the backend API to perform various operations. Make sure the backend service is running on `http://localhost:8080`.


---

## Development

### Prerequisites

- **Node.js 20.18.1**
- **npm 10.8.2**

### Running Locally
Use the Angular CLI to start the development server:
```bash
ng serve
```

### Building for Production
To build the application for production, run:
```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

---

## Troubleshooting

1. **Angular CLI Not Found:**
   - Ensure Angular CLI is installed globally: `npm install -g @angular/cli`.

2. **API Errors:**
   - Verify that the backend service is running and accessible at `http://localhost:8080`.

3. **Missing Currency Pipe:**
   - Install Angular Common module if not already included: `npm install @angular/common`.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For questions or support, please contact **[Asimi Ojewola]** at **[asimi.ojewola@gmail.com]**.
