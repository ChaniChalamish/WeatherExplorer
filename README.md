# 🌍 WeatherExplorer

## 🌀 What Is It?

**WeatherExplorer** is a lightweight, modern web app that gives you live weather updates for cities across the globe.
By default, it shows weather info for **Eilat, London, New York**, and **Alaska**.

Each city is shown in a neat card format, featuring:

* 🌆 City name
* 🌡️ Current temperature (°C)
* 📄 Weather summary 
* 🫅 Feels-like temperature
* 💧 Humidity percentage
* ☀️ A friendly icon to represent the weather

---

## 🚀 How to Run It Locally

### Step 1: Open your terminal

* **Windows**: Press `Win + R`, type `cmd`, and press `Enter`
  
### Step 2: Set up a folder

```bash
mkdir WeatherWise
cd WeatherWise
```

### Step 3: Clone the repository

```bash
git clone https://github.com/Noa123715/WeatherWise.git
```

### Step 4: Install dependencies

```bash
cd weatherwise
npm install
```

### Step 5: Launch the app

```bash
npm run dev
```

### Step 6: Open it in your browser

Go to `http://localhost:5173` and see the weather in action!

---

## 🌐 API in Use

WeatherExplorer pulls live data using the [OpenWeatherMap API](https://openweathermap.org/current).

### API Endpoint Sample:

```
GET https://api.openweathermap.org/data/2.5/weather?q=City&appid=API_KEY&units=metric&lang=he
```

**Query Parameters**:

* `q`: City name
* `appid`: Your personal API key
* `units=metric`: Celsius temperatures
* `lang=he`: Hebrew weather descriptions

> ⚠️ *Heads up:* Free API keys have usage limits.

---

## 🛠️ Challenges Faced

Creating this app involved a few learning curves:

* 🧰 Switching to Vite – Adopting Vite over CRA meant learning a new configuration system and adjusting development habits.
* 🌟 User Interface Polish – Balancing simplicity with clarity, including responsive card layouts and emoji indicators.

---

## 🖼️ App Preview

![Screenshot](https://github.com/ChaniChalamish/WeatherExplorer/raw/main/screenshots/screenshot.png)

---

## 👤 About the Developer

Developed by Chani Shkedi
📅 June 2025 | 🌱 Version 1.0

Thanks for stopping by!
I hope you find **WeatherExplorer** useful and easy to use. Feedback is always welcome 😊

---

# ☁️ Check the sky — from anywhere!
