// Valores estáticos de demostración: no representan mediciones científicas.
const plastrackZones = {
  archipielago: {
    name: "Archipiélago",
    density: 2.8,
    coverage: "86%",
    scenes: 124,
    signal: [36, 54, 43, 72, 61, 84, 68],
    context: "La vista agregada permite comparar señales entre zonas y priorizar dónde revisar la información."
  },
  isabela: {
    name: "Isabela",
    density: 4.2,
    coverage: "91%",
    scenes: 42,
    signal: [48, 62, 71, 57, 88, 76, 94],
    context: "Esta selección ilustra cómo una zona con una señal relativa mayor podría destacarse para una revisión contextual."
  },
  "santa-cruz": {
    name: "Santa Cruz",
    density: 1.9,
    coverage: "78%",
    scenes: 35,
    signal: [27, 42, 35, 52, 39, 58, 47],
    context: "La lectura de esta zona se interpreta comparándola con otras ventanas temporales y fuentes ambientales."
  },
  "san-cristobal": {
    name: "San Cristóbal",
    density: 3.5,
    coverage: "82%",
    scenes: 29,
    signal: [39, 51, 66, 48, 73, 63, 82],
    context: "La serie simulada ayuda a observar variaciones y a formular preguntas para un análisis posterior."
  }
};

const plastrackStages = {
  signal: {
    eyebrow: "ETAPA 01 · FUENTE DE DATOS",
    icon: "bi-broadcast",
    title: "La observación comienza en el océano",
    output: "ENTRADA · observaciones satelitales y oceánicas",
    description: (zone) => `Copernicus y CMEMS aportan variables oceánicas y ambientales. En ${zone.name}, estas observaciones sirven como contexto para el monitoreo costero.`
  },
  etl: {
    eyebrow: "ETAPA 02 · EXTRACCIÓN, TRANSFORMACIÓN Y CARGA",
    icon: "bi-funnel",
    title: "Prepara datos comparables",
    output: "PROCESO · validar, normalizar, combinar y cargar",
    description: (zone) => `Para ${zone.name}, un proceso ETL validaría fechas y coordenadas, estandarizaría variables y organizaría las observaciones en un modelo analítico.`
  },
  dashboard: {
    eyebrow: "ETAPA 03 · ANÁLISIS Y VISUALIZACIÓN",
    icon: "bi-bar-chart-line",
    title: "Resume la señal para interpretarla",
    output: "SALIDA · indicadores, tendencias y comparaciones",
    description: (zone) => `El dashboard muestra para ${zone.name} una densidad estimada, cobertura y serie de señal. En un proyecto real, cada KPI debe documentar su fuente y método de cálculo.`
  },
  alert: {
    eyebrow: "ETAPA 04 · COMUNICACIÓN PARA LA ACCIÓN",
    icon: "bi-bell",
    title: "Comunica hallazgos con contexto",
    output: "DESTINO · analistas, sector pesquero y gestores ambientales",
    description: (zone) => `Una alerta para ${zone.name} requeriría umbrales definidos por especialistas, verificación y revisión humana antes de informar a usuarios o tomar decisiones.`
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const explorer = document.getElementById("explorador-plastrack");
  if (!explorer) return;

  const zoneButtons = [...explorer.querySelectorAll("[data-zone]")];
  const stageButtons = [...explorer.querySelectorAll("[data-stage]")];
  const bars = [...explorer.querySelectorAll(".explorer-chart__bar span")];
  const zoneChart = document.getElementById("zoneChart");
  let currentZone = "archipielago";
  let currentStage = "signal";

  // Actualiza los KPIs y la serie ilustrativa de la zona seleccionada.
  function renderZone() {
    const zone = plastrackZones[currentZone];
    document.getElementById("zoneDensity").textContent = zone.density.toFixed(1);
    document.getElementById("zoneCoverage").textContent = zone.coverage;
    document.getElementById("zoneScenes").textContent = new Intl.NumberFormat("es").format(zone.scenes);
    document.getElementById("chartZoneTitle").textContent = `${zone.name} · señal estimada`;
    zoneChart.setAttribute("aria-label", `Gráfica ilustrativa de señal ambiental simulada para ${zone.name}`);

    bars.forEach((bar, index) => {
      bar.style.setProperty("--bar-height", `${zone.signal[index]}%`);
    });

    zoneButtons.forEach((button) => {
      const isSelected = button.dataset.zone === currentZone;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });

    renderStage();
  }

  // Explica la etapa elegida con el contexto de la zona activa.
  function renderStage() {
    const stage = plastrackStages[currentStage];
    const zone = plastrackZones[currentZone];
    const icon = document.querySelector("#stageIcon i");

    document.getElementById("stageEyebrow").textContent = stage.eyebrow;
    document.getElementById("stageTitle").textContent = stage.title;
    document.getElementById("stageDescription").textContent = stage.description(zone);
    document.getElementById("stageOutput").textContent = stage.output;
    icon.className = `bi ${stage.icon}`;

    stageButtons.forEach((button) => {
      const isSelected = button.dataset.stage === currentStage;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
  }

  zoneButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentZone = button.dataset.zone;
      renderZone();
    });
  });

  stageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentStage = button.dataset.stage;
      renderStage();
    });
  });

  renderZone();
});
