// Datos demostrativos por rango: las cifras cambian junto con todas las visualizaciones.
const dashboardData = {
  7: {
    sales: 12840,
    ticket: 38.4,
    orders: 334,
    satisfaction: 4.8,
    changes: { sales: 8.4, ticket: 2.1, orders: 5.7 },
    categories: [1420, 4380, 2760, 1210, 3070],
    payments: [18, 54, 28],
    dailySales: [1480, 1760, 1690, 2010, 2380, 1860, 1660],
    topDishes: [{ name: "WestBite Classic Burger", units: 126 }, { name: "Mac & Cheese", units: 98 }, { name: "BBQ Ribs", units: 86 }, { name: "Truffle Fries", units: 74 }, { name: "New York Cheesecake", units: 62 }],
    ratings: [4.8, 4.6, 4.7, 4.9, 4.4],
    ordersList: [
      ["WB-2481", "04", "WestBite Classic Burger", 42.5, "20:42", "Completado"],
      ["WB-2480", "12", "BBQ Ribs", 58.0, "20:35", "En preparación"],
      ["WB-2479", "07", "Mac & Cheese", 31.5, "20:28", "Completado"],
      ["WB-2478", "03", "Crispy Chicken Sandwich", 36.0, "20:16", "Delivery"],
      ["WB-2477", "09", "Grilled Ribeye Steak", 74.0, "20:02", "Completado"],
      ["WB-2476", "02", "Truffle Fries", 18.5, "19:54", "Completado"],
      ["WB-2475", "15", "WestBite Classic Burger", 42.5, "19:41", "En preparación"],
      ["WB-2474", "08", "New York Cheesecake", 16.0, "19:27", "Delivery"],
      ["WB-2473", "11", "BBQ Ribs", 58.0, "19:10", "Completado"],
      ["WB-2472", "05", "Mac & Cheese", 31.5, "18:56", "Completado"]
    ]
  },
  30: {
    sales: 52480,
    ticket: 36.7,
    orders: 1430,
    satisfaction: 4.7,
    changes: { sales: 12.6, ticket: 3.2, orders: 8.9 },
    categories: [5860, 17820, 11240, 4970, 12590],
    payments: [21, 51, 28],
    dailySales: [1370, 1520, 1630, 1480, 1910, 2260, 1770, 1650, 1880, 2040, 1540, 1730, 2120, 2440, 1810, 1690, 1930, 2280, 2510, 1870, 1760, 2010, 2320, 2640, 1980, 1830, 2150, 2380, 2760, 2080],
    topDishes: [{ name: "WestBite Classic Burger", units: 514 }, { name: "Mac & Cheese", units: 402 }, { name: "BBQ Ribs", units: 358 }, { name: "Truffle Fries", units: 296 }, { name: "New York Cheesecake", units: 241 }],
    ratings: [4.8, 4.6, 4.7, 4.9, 4.3],
    ordersList: [
      ["WB-2481", "04", "WestBite Classic Burger", 42.5, "20:42", "Completado"],
      ["WB-2480", "12", "BBQ Ribs", 58.0, "20:35", "En preparación"],
      ["WB-2479", "07", "Mac & Cheese", 31.5, "20:28", "Completado"],
      ["WB-2478", "03", "Crispy Chicken Sandwich", 36.0, "20:16", "Delivery"],
      ["WB-2477", "09", "Grilled Ribeye Steak", 74.0, "20:02", "Completado"],
      ["WB-2476", "02", "Truffle Fries", 18.5, "19:54", "Completado"],
      ["WB-2475", "15", "WestBite Classic Burger", 42.5, "19:41", "En preparación"],
      ["WB-2474", "08", "New York Cheesecake", 16.0, "19:27", "Delivery"],
      ["WB-2473", "11", "BBQ Ribs", 58.0, "19:10", "Completado"],
      ["WB-2472", "05", "Mac & Cheese", 31.5, "18:56", "Completado"]
    ]
  },
  90: {
    sales: 158640,
    ticket: 35.9,
    orders: 4418,
    satisfaction: 4.6,
    changes: { sales: 15.3, ticket: 1.8, orders: 12.4 },
    categories: [17620, 54280, 33960, 14910, 37870],
    payments: [23, 49, 28],
    dailySales: [1420, 1560, 1770, 1490, 1960, 2310, 1820, 1690, 1920, 2070, 1580, 1800, 2180, 2510, 1870, 1740, 2010, 2370, 2600, 1930, 1820, 2090, 2410, 2720, 2040, 1900, 2200, 2460, 2830, 2130, 1510, 1680, 1850, 1570, 2040, 2390, 1900, 1770, 2000, 2150, 1640, 1860, 2240, 2570, 1930, 1800, 2070, 2430, 2660, 1990, 1880, 2150, 2470, 2780, 2100, 1960, 2260, 2510, 2890, 2170, 1590, 1720, 1900, 1620, 2110, 2460, 1970, 1840, 2070, 2220, 1710, 1930, 2310, 2640, 2000, 1870, 2140, 2500, 2730, 2060, 1940, 2210, 2530, 2840, 2160, 2020, 2320, 2570, 2950, 2200],
    topDishes: [{ name: "WestBite Classic Burger", units: 1548 }, { name: "Mac & Cheese", units: 1206 }, { name: "BBQ Ribs", units: 1074 }, { name: "Truffle Fries", units: 888 }, { name: "New York Cheesecake", units: 723 }],
    ratings: [4.7, 4.5, 4.6, 4.8, 4.2],
    ordersList: [
      ["WB-2481", "04", "WestBite Classic Burger", 42.5, "20:42", "Completado"],
      ["WB-2480", "12", "BBQ Ribs", 58.0, "20:35", "En preparación"],
      ["WB-2479", "07", "Mac & Cheese", 31.5, "20:28", "Completado"],
      ["WB-2478", "03", "Crispy Chicken Sandwich", 36.0, "20:16", "Delivery"],
      ["WB-2477", "09", "Grilled Ribeye Steak", 74.0, "20:02", "Completado"],
      ["WB-2476", "02", "Truffle Fries", 18.5, "19:54", "Completado"],
      ["WB-2475", "15", "WestBite Classic Burger", 42.5, "19:41", "En preparación"],
      ["WB-2474", "08", "New York Cheesecake", 16.0, "19:27", "Delivery"],
      ["WB-2473", "11", "BBQ Ribs", 58.0, "19:10", "Completado"],
      ["WB-2472", "05", "Mac & Cheese", 31.5, "18:56", "Completado"]
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const rangeSelect = document.getElementById("dateRange");
  if (!rangeSelect) return;
  if (typeof Chart === "undefined") {
    throw new Error("No se pudo cargar Chart.js. Revisa la conexión al CDN.");
  }

  const currency = new Intl.NumberFormat("es-MX", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const preciseCurrency = new Intl.NumberFormat("es-MX", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
  const palette = ["#c67b4e", "#304c42", "#e5a36c", "#7e9a8b", "#d7c7ae"];
  const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#75817b", usePointStyle: true, pointStyle: "circle", boxWidth: 7, padding: 17, font: { family: "DM Sans", size: 10 } } },
      tooltip: { backgroundColor: "#243b35", padding: 10, titleFont: { family: "DM Sans" }, bodyFont: { family: "DM Sans" } }
    }
  };
  const axisOptions = {
    grid: { color: "#eef0ec", drawBorder: false },
    border: { display: false },
    ticks: { color: "#8b958f", font: { family: "DM Sans", size: 9 } }
  };

  // Instancia las cinco gráficas y conserva referencias para actualizar los datasets.
  const charts = {
    sales: new Chart(document.getElementById("salesTrendChart"), {
      type: "line",
      data: { labels: [], datasets: [{ label: "Ventas", data: [], borderColor: "#c67b4e", backgroundColor: "rgba(198, 123, 78, .12)", fill: true, tension: .35, pointRadius: 0, pointHoverRadius: 4, borderWidth: 2 }] },
      options: { ...chartDefaults, interaction: { intersect: false, mode: "index" }, plugins: { ...chartDefaults.plugins, legend: { display: false }, tooltip: { ...chartDefaults.plugins.tooltip, callbacks: { label: (context) => ` ${preciseCurrency.format(context.parsed.y)}` } } }, scales: { x: { ...axisOptions, grid: { display: false }, ticks: { ...axisOptions.ticks, maxTicksLimit: 10, maxRotation: 0 } }, y: { ...axisOptions, ticks: { ...axisOptions.ticks, callback: (value) => `$${Number(value) / 1000}k` } } } }
    }),
    categories: new Chart(document.getElementById("categoryChart"), {
      type: "bar",
      data: { labels: ["Entradas", "Hamburguesas", "Pastas", "Postres", "Bebidas"], datasets: [{ data: [], backgroundColor: palette, borderRadius: 5, maxBarThickness: 31 }] },
      options: { ...chartDefaults, plugins: { ...chartDefaults.plugins, legend: { display: false }, tooltip: { ...chartDefaults.plugins.tooltip, callbacks: { label: (context) => ` ${currency.format(context.parsed.y)}` } } }, scales: { x: { ...axisOptions, grid: { display: false } }, y: { ...axisOptions, ticks: { ...axisOptions.ticks, callback: (value) => `$${Number(value) / 1000}k` } } } }
    }),
    payments: new Chart(document.getElementById("paymentChart"), {
      type: "doughnut",
      data: { labels: ["Efectivo", "Tarjeta", "Delivery apps"], datasets: [{ data: [], backgroundColor: palette.slice(0, 3), borderColor: "#fff", borderWidth: 3, hoverOffset: 5 }] },
      options: { ...chartDefaults, cutout: "68%", plugins: { ...chartDefaults.plugins, tooltip: { ...chartDefaults.plugins.tooltip, callbacks: { label: (context) => ` ${context.label}: ${context.parsed}%` } } } }
    }),
    topDishes: new Chart(document.getElementById("topDishesChart"), {
      type: "bar",
      data: { labels: [], datasets: [{ data: [], backgroundColor: "#789284", borderRadius: 4, barThickness: 20 }] },
      options: { ...chartDefaults, indexAxis: "y", plugins: { ...chartDefaults.plugins, legend: { display: false } }, scales: { x: { ...axisOptions, grid: { color: "#eef0ec" } }, y: { ...axisOptions, grid: { display: false }, ticks: { ...axisOptions.ticks, autoSkip: false } } } }
    }),
    reviews: new Chart(document.getElementById("reviewsChart"), {
      type: "radar",
      data: { labels: ["Comida", "Servicio", "Ambiente", "Limpieza", "Precio"], datasets: [{ label: "Calificación", data: [], borderColor: "#c67b4e", backgroundColor: "rgba(198, 123, 78, .18)", pointBackgroundColor: "#c67b4e", pointRadius: 3, borderWidth: 2 }] },
      options: { ...chartDefaults, scales: { r: { min: 0, max: 5, ticks: { display: false, stepSize: 1 }, grid: { color: "#e9ece7" }, angleLines: { color: "#e9ece7" }, pointLabels: { color: "#75817b", font: { family: "DM Sans", size: 9 } } } }, plugins: { ...chartDefaults.plugins, legend: { display: false } } }
    })
  };

  function createDateLabels(days) {
    const labels = [];
    const today = new Date();
    for (let offset = days - 1; offset >= 0; offset -= 1) {
      const date = new Date(today);
      date.setDate(today.getDate() - offset);
      labels.push(date.toLocaleDateString("es-MX", { day: "numeric", month: "short" }));
    }
    return labels;
  }

  function updateKpis(data) {
    document.getElementById("kpiSales").textContent = currency.format(data.sales);
    document.getElementById("kpiTicket").textContent = preciseCurrency.format(data.ticket);
    document.getElementById("kpiOrders").textContent = new Intl.NumberFormat("es-MX").format(data.orders);
    document.getElementById("kpiDish").textContent = data.topDishes[0].name;
    document.getElementById("dishUnits").textContent = new Intl.NumberFormat("es-MX").format(data.topDishes[0].units);
    document.getElementById("kpiRating").textContent = `${data.satisfaction.toFixed(1)} / 5`;
    document.getElementById("salesChange").textContent = `↑ ${data.changes.sales}%`;
    document.getElementById("ticketChange").textContent = `↑ ${data.changes.ticket}%`;
    document.getElementById("ordersChange").textContent = `↑ ${data.changes.orders}%`;
  }

  function updateCharts(days, data) {
    charts.sales.data.labels = createDateLabels(days);
    const dailyTotal = data.dailySales.reduce((sum, value) => sum + value, 0);
    const scaledSales = data.dailySales.map((value) => Math.round(value * data.sales / dailyTotal));
    scaledSales[scaledSales.length - 1] += data.sales - scaledSales.reduce((sum, value) => sum + value, 0);
    charts.sales.data.datasets[0].data = scaledSales;
    charts.categories.data.datasets[0].data = data.categories;
    charts.payments.data.datasets[0].data = data.payments;
    charts.topDishes.data.labels = data.topDishes.map((dish) => dish.name);
    charts.topDishes.data.datasets[0].data = data.topDishes.map((dish) => dish.units);
    charts.reviews.data.datasets[0].data = data.ratings;
    Object.values(charts).forEach((chart) => chart.update());
  }

  function renderOrders(orders) {
    const searchText = document.getElementById("orderSearch").value.trim().toLocaleLowerCase("es");
    const filteredOrders = orders.filter((order) => order.join(" ").toLocaleLowerCase("es").includes(searchText));
    const tableBody = document.getElementById("ordersTableBody");
    tableBody.replaceChildren();
    filteredOrders.forEach(([id, table, dish, total, time, status]) => {
      const row = document.createElement("tr");
      const statusClass = status === "Completado" ? "completed" : status === "Delivery" ? "delivery" : "preparing";
      const values = [id, table, dish, preciseCurrency.format(total), time];
      values.forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        if (index === 0) cell.className = "order-id";
        if (index === 2) cell.className = "order-dish";
        if (index === 3) cell.className = "order-total";
        row.append(cell);
      });
      const statusCell = document.createElement("td");
      const statusLabel = document.createElement("span");
      statusLabel.className = `order-status ${statusClass}`;
      statusLabel.textContent = status;
      statusCell.append(statusLabel);
      row.append(statusCell);
      tableBody.append(row);
    });
    document.getElementById("emptyOrders").hidden = filteredOrders.length > 0;
    document.getElementById("ordersCount").textContent = `Mostrando ${filteredOrders.length} de ${orders.length} pedidos`;
  }

  function updateDashboard() {
    const days = Number(rangeSelect.value);
    const data = dashboardData[days];
    if (!data) throw new Error(`No hay datos configurados para el rango de ${days} días.`);
    updateKpis(data);
    updateCharts(days, data);
    renderOrders(data.ordersList);
  }

  rangeSelect.addEventListener("change", updateDashboard);
  document.getElementById("orderSearch").addEventListener("input", () => {
    renderOrders(dashboardData[Number(rangeSelect.value)].ordersList);
  });
  updateDashboard();
});
