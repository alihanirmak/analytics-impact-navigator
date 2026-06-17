import { useCallback, useMemo, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./App.css";
import {
  calculateRecommendations,
  calculationModels,
  maturityAssessmentSections,
  quickAssessmentQuestions,
  offerings,
  painCategories,
  referenceCases,
  strategies,
  useCases,
} from "./data";

const stepItems = [
  { id: "strategy", labelEN: "Strategy", labelTR: "Strateji" },
  { id: "mode", labelEN: "Start Mode", labelTR: "Başlangıç" },
  { id: "offerings", labelEN: "Offerings", labelTR: "Offeringler" },
  { id: "pains", labelEN: "Pain Points", labelTR: "Problemler" },
  { id: "recommendations", labelEN: "Recommendations", labelTR: "Öneriler" },
  { id: "offeringSummary", labelEN: "Review", labelTR: "Özet" },
  { id: "calculator", labelEN: "Calculator", labelTR: "Hesaplama" },
  { id: "summary", labelEN: "Summary", labelTR: "Özet" },
];

const assessmentStepItems = [
  { id: "maturityAssessment", labelEN: "Assessment", labelTR: "Assessment" },
  { id: "maturityResult", labelEN: "Result", labelTR: "Sonuç" },
  { id: "offerings", labelEN: "Offerings", labelTR: "Offeringler" },
  { id: "offeringSummary", labelEN: "Review", labelTR: "Özet" },
  { id: "calculator", labelEN: "Calculator", labelTR: "Hesaplama" },
  { id: "summary", labelEN: "Summary", labelTR: "Özet" },
];

function DonutChart({ items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  let cumulative = 0;

  const colors = ["#2563eb", "#06b6d4", "#10b981", "#f59e0b", "#8b5cf6"];

  const gradientParts = items.map((item, index) => {
    const start = total === 0 ? 0 : (cumulative / total) * 100;
    cumulative += item.value;
    const end = total === 0 ? 0 : (cumulative / total) * 100;
    return `${colors[index % colors.length]} ${start}% ${end}%`;
  });

  return (
    <div
      className="donut-chart"
      style={{
        background:
          total === 0
            ? "#e2e8f0"
            : `conic-gradient(${gradientParts.join(", ")})`,
      }}
    >
      <div className="donut-hole">
        <span>Total</span>
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("EN");
  const [screen, setScreen] = useState("landing");
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [selectedPains, setSelectedPains] = useState([]);
  const [selectedUseCases, setSelectedUseCases] = useState([]);
  const [selectedOfferings, setSelectedOfferings] = useState([]);
  const [calculatorValues, setCalculatorValues] = useState({});
  const [painSuggestedOfferingIds, setPainSuggestedOfferingIds] = useState([]);
  const [maturityAnswers, setMaturityAnswers] = useState({});
  const [openCalculatorCards, setOpenCalculatorCards] = useState([]);
  const [activeOfferingOnePager, setActiveOfferingOnePager] = useState(null);

  const recommendations = useMemo(() => {
    if (!selectedStrategy || selectedPains.length === 0) return [];
    return calculateRecommendations(selectedStrategy, selectedPains);
  }, [selectedStrategy, selectedPains]);

  const text = {
    EN: {
      appName: "Analytics Value Navigator Alihan",
      subtitle: "Build executive-ready analytics value cases from customer pains, offerings and use cases.",
      start: "Start Value Discovery",
      demo: "Load SAP Manufacturing Demo",

      chooseStrategy: "Choose Your Sales Strategy",
      strategyDesc:
        "Select the most suitable positioning strategy before discussing analytics opportunities with the customer.",
      continuePain: "Continue to Pain Points",
      back: "Back",
      selectPain: "Select Customer Pain Points",
      painDesc:
        "Select the business problems you heard from the customer. Recommended range: 3–7 pain points.",
      selected: "Selected",
      generate: "Generate Recommendations",
      minWarning: "Select at least 1 pain point to continue.",
      recommendations: "Recommended Use Cases",
      recommendationsDesc:
        "Recommendations are based on selected pain points and sales strategy. You can keep or remove use cases before value calculation.",
      match: "Match",
      valueType: "Value Type",
      suggestedSolutions: "Suggested Solutions",
      whyRecommended: "Why recommended",
      keep: "Keep",
      remove: "Remove",
      continueCalculator: "Continue to Value Calculator",
      selectedUseCases: "Selected Use Cases",
      noUseCases:
        "No use cases selected. Keep at least one recommendation to continue.",
      total: "Total",
      offerings: "Offering Explorer",
      offeringsDesc:
        "Select one or more offerings to start from our solution packages instead of customer pain points.",
      selectOffering: "Select Offering",
      removeOffering: "Remove Offering",
      continueWithOfferings: "Continue with Selected Offerings",
      viewOfferingDetails: "View Details",
      offeringDetails: "Offering Details",
      includedUseCases: "Included Use Cases",
      typicalPains: "Typical Pain Patterns",
      expectedTimeline: "Expected Timeline",
      criticalNotes: "Critical Notes",
      expectedValue: "Expected Business Value",
      solutionStack: "Suggested Solution Stack",
      startMode: "Choose Discovery Mode",
      startModeDesc:
        "Start from customer pain points when the customer already knows the problems, or start from our offerings when you want to proactively position analytics opportunities.",
      painLedTitle: "Start from Customer Pain Points",
      painLedDesc:
        "Use this when the customer has already shared business problems or pain points.",
      offeringLedTitle: "Start from Our Offerings",
      offeringLedDesc:
        "Use this when you want to proactively position our solution packages, even if the customer has not clearly described the pains yet.",
      offeringSummary: "Offering Summary",
      offeringSummaryDesc:
        "Review the full offering scope. Only core value drivers will be used in the calculator; supporting and future items remain part of the value story.",
      selectedOfferings: "Selected Offerings",
      includedBecause: "Included because of selected offering",
    },
    TR: {
      appName: "Analytics Value Navigator",
      subtitle:
        "Müşteri problemleri, offeringler ve use case’lerden executive seviyede değer raporları oluşturun.",
      start: "Değer Keşfine Başla",
      demo: "SAP Üretim Demo Senaryosunu Yükle",

      chooseStrategy: "Satış Stratejisini Seç",
      strategyDesc:
        "Müşteriyle analitik fırsatları konuşmadan önce en uygun konumlandırma stratejisini seçin.",
      continuePain: "Pain Point Seçimine Devam Et",
      back: "Geri",
      selectPain: "Müşteri Problemlerini Seç",
      painDesc:
        "Müşteriden duyulan iş problemlerini seçin. Önerilen aralık: 3–7 problem.",
      selected: "Seçildi",
      generate: "Önerileri Oluştur",
      minWarning: "Devam etmek için en az 1 pain point seçin.",
      recommendations: "Önerilen Use Case’ler",
      recommendationsDesc:
        "Öneriler seçilen müşteri problemleri ve satış stratejisine göre oluşturulur. Değer hesaplamadan önce use case’leri tutabilir veya çıkarabilirsiniz.",
      match: "Eşleşme",
      valueType: "Değer Tipi",
      suggestedSolutions: "Önerilen Çözümler",
      whyRecommended: "Neden önerildi",
      keep: "Tut",
      remove: "Çıkar",
      continueCalculator: "Value Calculator’a Devam Et",
      selectedUseCases: "Seçilen Use Case’ler",
      noUseCases:
        "Seçili use case yok. Devam etmek için en az bir öneriyi tutun.",
      total: "Toplam",
      offerings: "Offering Explorer",
      offeringsDesc:
        "Müşteri pain point’lerinden başlamadan, kendi çözüm paketlerimiz üzerinden ilerlemek için bir veya daha fazla offering seçin.",
      selectOffering: "Offering Seç",
      removeOffering: "Offering’i Çıkar",
      continueWithOfferings: "Seçilen Offeringler ile Devam Et",
      viewOfferingDetails: "Detayları Gör",
      offeringDetails: "Offering Detayları",
      includedUseCases: "İçerdiği Use Case’ler",
      typicalPains: "Tipik Problemler",
      expectedTimeline: "Beklenen Takvim",
      criticalNotes: "Kritik Notlar",
      expectedValue: "Beklenen İş Değeri",
      solutionStack: "Önerilen Çözüm Paketi",
      startMode: "Keşif Modunu Seç",
      startModeDesc:
        "Müşteri problemleri netse pain point’lerden başlayın; müşteriye proaktif olarak analitik fırsatları göstermek istiyorsanız offering’lerden başlayın.",
      painLedTitle: "Müşteri Problemlerinden Başla",
      painLedDesc:
        "Müşteri iş problemlerini veya pain point’leri zaten paylaştıysa bu yolu kullanın.",
      offeringLedTitle: "Kendi Offeringlerimizden Başla",
      offeringLedDesc:
        "Müşteri problemleri net söylemese bile kendi çözüm paketlerimizi proaktif olarak konumlandırmak için bu yolu kullanın.",
      offeringSummary: "Offering Özeti",
      offeringSummaryDesc:
        "Offering kapsamını inceleyin. Calculator yalnızca ana değer sürücülerini hesaplar; destekleyici ve gelecek faz kalemleri değer hikayesinde kalır.",
      selectedOfferings: "Seçilen Offeringler",
      includedBecause: "Seçilen offering nedeniyle dahil edildi",
    },
  }[language];

  const selectedStrategyData = strategies.find(
    (strategy) => strategy.id === selectedStrategy
  );

  function loadDemoScenario() {
    setSelectedStrategy("sap_first");
    setSelectedPains([
      "sap_non_sap_combine",
      "it_data_prep",
      "manual_excel_reports",
      "reports_not_on_time",
      "budget_forecast_long",
      "profitability_not_visible",
    ]);
    setSelectedOfferings([]);
    setSelectedUseCases([]);
    setCalculatorValues({});
    setScreen("pains");
  }


  function toggleOffering(offeringId) {
    setSelectedOfferings((current) =>
      current.includes(offeringId)
        ? current.filter((id) => id !== offeringId)
        : [...current, offeringId]
    );
  }

  function getSelectedOfferingItems() {
    return offerings.filter((offering) => selectedOfferings.includes(offering.id));
  }

  function getOfferingUseCaseMapping(offering) {
    if (offering.useCaseMapping) {
      return {
        core: offering.useCaseMapping.core || [],
        supporting: offering.useCaseMapping.supporting || [],
        future: offering.useCaseMapping.future || [],
      };
    }

    return {
      core: offering.includedUseCaseIds || [],
      supporting: [],
      future: [],
    };
  }

  function getAllOfferingUseCaseIds(offering) {
    const mapping = getOfferingUseCaseMapping(offering);

    return Array.from(
      new Set([
        ...mapping.core,
        ...mapping.supporting,
        ...mapping.future,
      ])
    );
  }

  function getCoreOfferingUseCaseIds(offering) {
    const mapping = getOfferingUseCaseMapping(offering);
    return mapping.core;
  }

  function getUseCaseById(useCaseId) {
    return useCases.find((useCase) => useCase.id === useCaseId);
  }

  function getOfferingFitScore(offering) {
    return offering.strategyFit?.[selectedStrategy] ?? 70;
  }

  function getOfferingFitLabel(score) {
    if (score >= 80) return language === "EN" ? "Recommended" : "Önerilen";
    if (score >= 50) return language === "EN" ? "Possible Fit" : "Uygun Olabilir";
    return language === "EN" ? "Low Fit" : "Düşük Uyum";
  }

  function getVisibleOfferings() {
    return offerings
      .filter((offering) => getOfferingFitScore(offering) >= 50)
      .sort((a, b) => getOfferingFitScore(b) - getOfferingFitScore(a));
  }

  function getSimilarReferenceCases() {
    const selectedOfferingIds = selectedOfferings;
    const selectedUseCaseIds = selectedUseCases;
    const isOfferingLed = selectedOfferingIds.length > 0;

    const selectedSolutionStack = Array.from(
      new Set(
        getSelectedOfferingItems().flatMap((offering) => offering.solutionStack)
      )
    );

    const selectedUseCaseSolutionStack = Array.from(
      new Set(
        getSelectedRecommendationItems().flatMap((useCase) => {
          return useCase.solutions?.[selectedStrategy] || [];
        })
      )
    );

    const combinedSolutionStack = Array.from(
      new Set([...selectedSolutionStack, ...selectedUseCaseSolutionStack])
    );

    return referenceCases
      .map((reference) => {
        const offeringMatches = reference.relatedOfferingIds.filter((id) =>
          selectedOfferingIds.includes(id)
        ).length;

        const useCaseMatches = reference.relatedUseCaseIds.filter((id) =>
          selectedUseCaseIds.includes(id)
        ).length;

        const technologyMatches = reference.technologies.filter((tech) =>
          combinedSolutionStack.some(
            (solution) =>
              solution.toLowerCase().includes(tech.toLowerCase()) ||
              tech.toLowerCase().includes(solution.toLowerCase())
          )
        ).length;

        const useCaseScore =
          selectedUseCaseIds.length > 0
            ? Math.round((useCaseMatches / selectedUseCaseIds.length) * 100)
            : 0;

        const technologyScore =
          combinedSolutionStack.length > 0
            ? Math.min(100, technologyMatches * 18)
            : 0;

        const scopeScore =
          reference.scopeOverlap === "Strong"
            ? 100
            : reference.scopeOverlap === "Partial"
              ? 65
              : 35;

        let score = 0;

        if (isOfferingLed) {
          const offeringScore = offeringMatches > 0 ? 100 : 0;

          score = Math.round(
            offeringScore * 0.45 +
            useCaseScore * 0.35 +
            technologyScore * 0.15 +
            scopeScore * 0.05
          );
        } else {
          score = Math.round(
            useCaseScore * 0.65 +
            technologyScore * 0.25 +
            scopeScore * 0.10
          );
        }

        return {
          ...reference,
          matchScore: Math.min(100, score),
          matchedUseCaseCount: useCaseMatches,
          matchedOfferingCount: offeringMatches,
          matchedTechnologyCount: technologyMatches,
        };
      })
      .filter((reference) => {
        if (isOfferingLed) {
          return (
            reference.matchedUseCaseCount > 0 ||
            reference.matchedOfferingCount > 0 ||
            reference.matchedTechnologyCount > 0
          );
        }

        return (
          reference.matchedUseCaseCount > 0 ||
          reference.matchedTechnologyCount > 0
        );
      })
      .sort((a, b) => {
        if (b.matchScore !== a.matchScore) {
          return b.matchScore - a.matchScore;
        }

        if (b.matchedUseCaseCount !== a.matchedUseCaseCount) {
          return b.matchedUseCaseCount - a.matchedUseCaseCount;
        }

        return b.matchedTechnologyCount - a.matchedTechnologyCount;
      })
      .slice(0, 3);
  }

  function getReferenceStrengthLabel(score) {
    if (score >= 80) return language === "EN" ? "Strong" : "Güçlü";
    if (score >= 60) return language === "EN" ? "Relevant" : "İlgili";
    return language === "EN" ? "Partial" : "Kısmi";
  }

  function continueWithSelectedOfferings() {
    const selectedOfferingItems = getSelectedOfferingItems();

    const coreUseCaseIds = Array.from(
      new Set(
        selectedOfferingItems.flatMap((offering) =>
          getCoreOfferingUseCaseIds(offering)
        )
      )
    );

    const typicalPainIds = Array.from(
      new Set(selectedOfferingItems.flatMap((offering) => offering.typicalPainIds))
    );

    setSelectedUseCases(coreUseCaseIds);
    setSelectedPains(typicalPainIds);

    setScreen("offeringSummary");
  }

  function getUseCaseTitleById(useCaseId) {
    const item = useCases.find((useCase) => useCase.id === useCaseId);
    if (!item) return useCaseId;
    return language === "EN" ? item.title : item.titleTR;
  }

  function togglePain(painId) {
    setSelectedPains((current) =>
      current.includes(painId)
        ? current.filter((id) => id !== painId)
        : [...current, painId]
    );
  }

  function getRecommendedOfferingsFromPains() {
  return offerings
    .map((offering) => {
      const typicalPainIds = offering.typicalPainIds || [];

      const matchedPainCount = typicalPainIds.filter((painId) =>
        selectedPains.includes(painId)
      ).length;

      const painScore =
        selectedPains.length > 0
          ? Math.round((matchedPainCount / selectedPains.length) * 100)
          : 0;

      const strategyScore = offering.strategyFit?.[selectedStrategy] || 50;

      const finalScore = Math.round(painScore * 0.65 + strategyScore * 0.35);

      return {
        ...offering,
        painMatchScore: finalScore,
        matchedPainCount,
      };
    })
    .filter((offering) => offering.matchedPainCount > 0)
    .sort((a, b) => b.painMatchScore - a.painMatchScore)
    .slice(0, 3);
}

function applyPainBasedOfferingRecommendations() {
  const recommendedOfferings = getRecommendedOfferingsFromPains();
  const recommendedOfferingIds = recommendedOfferings.map((item) => item.id);

  setPainSuggestedOfferingIds(recommendedOfferingIds);

  setSelectedOfferings([]);
  setSelectedUseCases([]);
  setCalculatorValues({});
  setOpenCalculatorCards([]);

  setScreen("offerings");
}

  function goToRecommendations() {
    const initialSelected = recommendations.slice(0, 5).map((item) => item.id);
    setSelectedUseCases(initialSelected);
    setScreen("recommendations");
  }

  function toggleUseCase(useCaseId) {
    setSelectedUseCases((current) =>
      current.includes(useCaseId)
        ? current.filter((id) => id !== useCaseId)
        : [...current, useCaseId]
    );
  }

  function toggleCalculatorCard(useCaseId) {
    setOpenCalculatorCards((current) =>
      current.includes(useCaseId)
        ? current.filter((id) => id !== useCaseId)
        : [...current, useCaseId]
    );
  }

  function getPainText(painId) {
    for (const category of painCategories) {
      const pain = category.pains.find((item) => item.id === painId);
      if (pain) return language === "EN" ? pain.en : pain.tr;
    }
    return painId;
  }

  function getSelectedRecommendationItems() {
    const selectedFromRecommendations = recommendations.filter((item) =>
      selectedUseCases.includes(item.id)
    );

    const missingFromRecommendations = useCases
      .filter((useCase) => selectedUseCases.includes(useCase.id))
      .filter(
        (useCase) =>
          !selectedFromRecommendations.some((item) => item.id === useCase.id)
      );

    return [...selectedFromRecommendations, ...missingFromRecommendations];
  }

  function normalizeSolutionName(solution) {
    const value = solution.toLowerCase();

    if (value.includes("sap bdc")) return "SAP BDC";
    if (value.includes("sap datasphere")) return "SAP Datasphere";
    if (value.includes("sac planning")) return "SAC Planning";
    if (
      value.includes("sac reporting") ||
      value.includes("sac dashboard") ||
      value === "sac"
    )
      return "SAC Reporting";
    if (value.includes("predictive")) return "SAC Predictive Planning";
    if (value.includes("papm")) return "SAP PaPM";
    if (value.includes("sap fm")) return "SAP FM";
    if (value.includes("bpc")) return "SAP BPC modernization";
    if (value.includes("sap data product") || value.includes("data products"))
      return "SAP Data Products";

    if (value.includes("microsoft fabric")) return "Microsoft Fabric";
    if (value.includes("power bi semantic")) return "Power BI semantic model";
    if (value.includes("power bi")) return "Power BI";
    if (value.includes("onelake")) return "OneLake";
    if (value.includes("data factory")) return "Data Factory";
    if (value.includes("azure ai") || value.includes("azure ml"))
      return "Azure AI / Azure ML";
    if (value.includes("power platform")) return "Power Platform";
    if (
      value.includes("assessment") ||
      value.includes("maturity") ||
      value.includes("validation")
    )
      return "Value Assessment";

    return solution;
  }

  function getRecommendedSolutionStack() {
    const rawSolutions = getSelectedRecommendationItems().flatMap((useCase) => {
      const strategySolutions = useCase.solutions?.[selectedStrategy] || [];
      return strategySolutions;
    });

    const normalized = Array.from(
      new Set(rawSolutions.map((solution) => normalizeSolutionName(solution)))
    );

    if (selectedStrategy === "sap_first") {
      const priority = [
        "SAP BDC",
        "SAP Datasphere",
        "SAC Planning",
        "SAC Reporting",
        "SAP Data Products",
        "SAP PaPM",
        "SAP FM",
      ];

      return priority.filter((item) => normalized.includes(item)).slice(0, 7);
    }

    if (selectedStrategy === "microsoft_first") {
      const priority = [
        "Microsoft Fabric",
        "Power BI",
        "OneLake",
        "Azure AI / Azure ML",
        "Power Platform",
      ];

      return priority.filter((item) => normalized.includes(item)).slice(0, 5);
    }

    const priority = [
      "Target architecture",
      "Value Assessment",
      "Roadmap",
      "Platform recommendation",
      "Governance framework",
    ];

    return priority
      .filter((item) =>
        normalized.some((solution) => solution.toLowerCase() === item.toLowerCase())
      )
      .slice(0, 6);
  }

  function getDefaultValuesForUseCase(useCase) {
    const model = calculationModels[useCase.calculationModel];
    if (!model) return {};

    const defaults = {};
    model.inputs.forEach((input) => {
      defaults[input.id] = input.defaultValue;
    });

    return defaults;
  }

  function getValuesForUseCase(useCase) {
    return calculatorValues[useCase.id] || getDefaultValuesForUseCase(useCase);
  }

  function updateCalculatorValue(useCaseId, inputId, value) {
    setCalculatorValues((current) => ({
      ...current,
      [useCaseId]: {
        ...getDefaultValuesForUseCase(
          recommendations.find((item) => item.id === useCaseId)
        ),
        ...current[useCaseId],
        [inputId]: value,
      },
    }));
  }

  function calculateUseCaseValue(useCase) {
    const model = calculationModels[useCase.calculationModel];
    if (!model) return 0;

    const rawValues = getValuesForUseCase(useCase);

    const numericValues = Object.fromEntries(
      Object.entries(rawValues).map(([key, value]) => [
        key,
        value === "" ? 0 : Number(value),
      ])
    );

    const result = Math.round(model.calculate(numericValues));
    return Number.isFinite(result) ? result : 0;
  }

  function calculateUseCaseScore(useCase) {
    const model = calculationModels[useCase.calculationModel];
    if (!model || !model.calculateScore) return null;

    const rawValues = getValuesForUseCase(useCase);

    const numericValues = Object.fromEntries(
      Object.entries(rawValues).map(([key, value]) => [
        key,
        value === "" ? 0 : Number(value),
      ])
    );

    const score = Math.round(model.calculateScore(numericValues));
    return Number.isFinite(score) ? score : null;
  }

  function calculateTotalValue() {
    return getSelectedRecommendationItems().reduce((sum, item) => {
      return sum + calculateUseCaseValue(item);
    }, 0);
  }

  function getScoredUseCases() {
    return getSelectedRecommendationItems()
      .map((useCase) => ({
        ...useCase,
        score: calculateUseCaseScore(useCase),
      }))
      .filter((useCase) => useCase.score !== null);
  }

  function calculateAverageStrategicScore() {
    const scoredUseCases = getScoredUseCases();

    if (scoredUseCases.length === 0) return null;

    const totalScore = scoredUseCases.reduce((sum, item) => sum + item.score, 0);

    return Math.round(totalScore / scoredUseCases.length);
  }

  function getStrategicImpactLabel(score) {
    if (score === null) return language === "EN" ? "Not scored" : "Skorlanmadı";
    if (score >= 80) return language === "EN" ? "High" : "Yüksek";
    if (score >= 60) return language === "EN" ? "Medium" : "Orta";
    return language === "EN" ? "Low" : "Düşük";
  }

  function getValueMeasurementLabel(type) {
    if (type === "hybrid") {
      return language === "EN" ? "Hybrid Value" : "Hibrit Değer";
    }

    if (type === "score") {
      return language === "EN" ? "Score-based" : "Skor Bazlı";
    }

    return language === "EN" ? "Monetary" : "Parasal";
  }

  function formatCompactCurrency(value) {
    if (value >= 1000000) {
      return `€${Math.round(value / 100000) / 10}M`;
    }

    if (value >= 1000) {
      return `€${Math.round(value / 1000)}K`;
    }

    return formatCurrency(value);
  }

  function getPrimaryValueDriver() {
    const breakdown = getValueBreakdown();
    if (breakdown.length === 0) return "-";

    return [...breakdown].sort((a, b) => b.value - a.value)[0].label;
  }

  function getRecommendedDecisionText() {
    if (selectedOfferings.length > 0) {
      const firstOffering = getSelectedOfferingItems()[0];
      if (firstOffering) {
        return language === "EN"
          ? firstOffering.recommendedNextStep
          : firstOffering.recommendedNextStepTR;
      }
    }

    return language === "EN"
      ? "Approve a 2-week Analytics Value Assessment to validate assumptions and build a customer-specific business case."
      : "Varsayımları doğrulamak ve müşteriye özel business case oluşturmak için 2 haftalık Analytics Value Assessment çalışmasının başlatılması.";
  }

  function getValueBreakdown() {
    const breakdown = {};

    getSelectedRecommendationItems()
      .filter((item) => item.valueMeasurement !== "score")
      .forEach((item) => {
        const label = language === "EN" ? item.valueType : item.valueTypeTR;
        const value = calculateUseCaseValue(item);

        if (value <= 0) return;

        breakdown[label] = (breakdown[label] || 0) + value;
      });

    return Object.entries(breakdown)
      .map(([label, value]) => ({
        label,
        value,
      }))
      .sort((a, b) => b.value - a.value);
  }

  function getSuggestedSolutions() {
    const solutionSet = new Set();

    getSelectedRecommendationItems().forEach((item) => {
      const solutions = item.solutions[selectedStrategy] || [];
      solutions.slice(0, 3).forEach((solution) => solutionSet.add(solution));
    });

    return Array.from(solutionSet);
  }

  function getGroupedSolutions() {
    const solutions = getSuggestedSolutions();

    const groups = [
      {
        titleEN: "Data Foundation",
        titleTR: "Veri Altyapısı",
        keywords: ["SAP BDC", "SAP Datasphere", "SAP HANA", "Data Products"],
        items: [],
      },
      {
        titleEN: "Planning & Reporting",
        titleTR: "Planlama & Raporlama",
        keywords: ["SAC Planning", "SAC Reporting", "SAP BPC modernization"],
        items: [],
      },
      {
        titleEN: "Profitability & Performance",
        titleTR: "Kârlılık & Performans",
        keywords: ["SAP PaPM"],
        items: [],
      },
      {
        titleEN: "Process & Automation",
        titleTR: "Süreç & Otomasyon",
        keywords: ["Celonis", "SAP Signavio", "Power Platform"],
        items: [],
      },
      {
        titleEN: "Other Capabilities",
        titleTR: "Diğer Yetkinlikler",
        keywords: [],
        items: [],
      },
    ];

    solutions.forEach((solution) => {
      const group = groups.find((item) => item.keywords.includes(solution));
      if (group) {
        group.items.push(solution);
      } else {
        groups[groups.length - 1].items.push(solution);
      }
    });

    return groups.filter((group) => group.items.length > 0);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat(language === "EN" ? "en-US" : "tr-TR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  }

  async function exportExecutiveReportToPdf() {
    const reportElement = document.querySelector(".executive-report-page");

    if (!reportElement) {
      return;
    }

    const canvas = await html2canvas(reportElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#f8fafc",
      windowWidth: reportElement.scrollWidth,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const fileName =
      language === "EN"
        ? "analytics-value-navigator-executive-report.pdf"
        : "analytics-value-navigator-yonetici-raporu.pdf";

    pdf.save(fileName);
  }

  function getShortInputLabel(label) {
    const normalized = label.toLowerCase();

    if (normalized.includes("number of activities")) return "Activities";
    if (normalized.includes("time per activity")) return "Hours / Activity";
    if (normalized.includes("frequency per year")) return "Frequency";
    if (normalized.includes("average hourly cost")) return "Hourly Cost";
    if (normalized.includes("improvement rate")) return "Improvement %";

    if (normalized.includes("analytics use cases")) return "Use Cases";
    if (normalized.includes("data preparation days")) return "Prep Days";
    if (normalized.includes("average daily it cost")) return "Daily IT Cost";
    if (normalized.includes("reduction") || normalized.includes("reuse rate"))
      return "Reduction %";

    if (normalized.includes("annual revenue")) return "Revenue";
    if (normalized.includes("impact rate")) return "Impact %";
    if (normalized.includes("baseline")) return "Baseline";
    if (normalized.includes("current")) return "Current";
    if (normalized.includes("target")) return "Target";

    if (label.length > 18) return `${label.slice(0, 18)}…`;
    return label;
  }

  function updateMaturityAnswer(questionId, value) {
    setMaturityAnswers((current) => ({
      ...current,
      [questionId]: value,
    }));
  }

  function toggleMaturityMultiAnswer(questionId, optionId) {
    setMaturityAnswers((current) => {
      const existing = current[questionId] || [];

      return {
        ...current,
        [questionId]: existing.includes(optionId)
          ? existing.filter((id) => id !== optionId)
          : [...existing, optionId],
      };
    });
  }

  function getMaturityAnswer(question) {
    if (maturityAnswers[question.id] !== undefined) {
      return maturityAnswers[question.id];
    }

    if (question.type === "multi") return [];
    if (question.type === "score") return question.defaultValue || 3;
    return question.options?.[0]?.id || "";
  }

  function calculateMaturityScore() {
  let score = 0;

  const dataMaturity = maturityAnswers.data_maturity;
  const currentSetup = maturityAnswers.current_setup;
  const challenges = maturityAnswers.main_challenge || [];
  const priorities = maturityAnswers.business_priority || [];
  const constraint = maturityAnswers.technology_constraint || [];

  // Data maturity: max 25
  if (dataMaturity === "high") score += 25;
  else if (dataMaturity === "medium") score += 16;
  else if (dataMaturity === "low") score += 8;

  // Current setup: max 25
  if (currentSetup === "existing_planning") score += 22;
  else if (currentSetup === "existing_bi") score += 18;
  else if (currentSetup === "excel_heavy") score += 10;
  else if (currentSetup === "not_structured") score += 6;

  // Challenge complexity: max 20
  if (challenges.length <= 1) score += 18;
  else if (challenges.length <= 3) score += 14;
  else score += 9;

  // Business priority clarity: max 15
  if (priorities.length === 1 || priorities.length === 2) score += 15;
  else if (priorities.length >= 3) score += 11;
  else score += 6;

  // Constraint readiness: max 15
  if (constraint.includes("no_constraint")) score += 15;
  else if (constraint.includes("use_existing_tools")) score += 12;
  else if (constraint.includes("cloud_limited")) score += 8;
  else if (
    constraint.includes("avoid_new_sap") ||
    constraint.includes("avoid_new_ms")
  ) {
    score += 7;
  } else {
    score += 10;
  }

  return Math.min(100, Math.round(score));
}

  function getRecommendedStrategyFromAssessment() {
    const primaryPlatform = maturityAnswers.primary_platform;
    const sapLandscape = maturityAnswers.sap_landscape || [];
    const microsoftLandscape = maturityAnswers.microsoft_landscape || [];
    const constraints = maturityAnswers.technology_constraints || [];

    if (
      primaryPlatform === "sap_first" ||
      sapLandscape.some((item) =>
        ["s4hana", "bw", "bpc", "sac", "datasphere", "successfactors"].includes(item)
      )
    ) {
      if (!constraints.includes("avoid_new_sap")) {
        return "sap_first";
      }
    }

    if (
      primaryPlatform === "microsoft_first" ||
      microsoftLandscape.some((item) =>
        ["powerbi", "fabric", "azure_data", "power_platform"].includes(item)
      )
    ) {
      if (!constraints.includes("avoid_new_ms")) {
        return "microsoft_first";
      }
    }

    return "technology_neutral";
  }

  function getStrategyTitle(strategyId) {
    const strategy = strategies.find((item) => item.id === strategyId);

    if (!strategy) return "-";

    return language === "EN" ? strategy.title : strategy.titleTR;
  }

  function getRecommendedOfferingsFromAssessment() {
  const recommendedStrategy = getRecommendedStrategyFromAssessment();

  const challenges = maturityAnswers.main_challenge || [];
  const priorities = maturityAnswers.business_priority || [];
  const planningSetup = maturityAnswers.current_setup;
  const dataMaturity = maturityAnswers.data_maturity;

  return offerings
    .map((offering) => {
      let score = offering.strategyFit?.[recommendedStrategy] || 50;

      const category = offering.category?.toLowerCase() || "";
      const title = offering.title?.toLowerCase() || "";

      // Data foundation need
      if (
        challenges.includes("data_foundation") ||
        dataMaturity === "low"
      ) {
        if (
          category.includes("data") ||
          title.includes("data")
        ) {
          score += 25;
        }
      }

      // Reporting need
      if (
        challenges.includes("reporting") ||
        priorities.includes("faster_reporting")
      ) {
        if (
          category.includes("reporting") ||
          title.includes("reporting") ||
          title.includes("kpi")
        ) {
          score += 20;
        }
      }

      // Planning need
      if (
        challenges.includes("planning") ||
        priorities.includes("planning_accuracy") ||
        planningSetup === "excel_heavy" ||
        planningSetup === "existing_planning"
      ) {
        if (
          category.includes("planning") ||
          title.includes("planning") ||
          title.includes("forecast")
        ) {
          score += 20;
        }
      }

      // Governance need
      if (
        challenges.includes("governance") ||
        priorities.includes("governance")
      ) {
        if (
          title.includes("governance") ||
          title.includes("harmonization") ||
          title.includes("kpi") ||
          category.includes("governance")
        ) {
          score += 18;
        }
      }

      // Automation / process need
      if (
        challenges.includes("automation") ||
        priorities.includes("cost_efficiency")
      ) {
        if (
          category.includes("process") ||
          title.includes("automation") ||
          title.includes("process")
        ) {
          score += 18;
        }
      }

      // AI readiness need
      if (
        challenges.includes("ai_readiness") ||
        priorities.includes("ai_readiness")
      ) {
        if (
          title.includes("ai") ||
          title.includes("forecast") ||
          title.includes("predictive") ||
          category.includes("ai")
        ) {
          score += 15;
        }
      }

      return {
        ...offering,
        assessmentFitScore: Math.min(100, score),
      };
    })
    .filter((offering) => offering.assessmentFitScore >= 65)
    .sort((a, b) => b.assessmentFitScore - a.assessmentFitScore)
    .slice(0, 3);
}

  function applyAssessmentRecommendations() {
    const recommendedStrategy = getRecommendedStrategyFromAssessment();
    const recommendedOfferings = getRecommendedOfferingsFromAssessment();

    const recommendedOfferingIds = recommendedOfferings.map((item) => item.id);

    const coreUseCaseIds = Array.from(
      new Set(
        recommendedOfferings.flatMap((offering) =>
          getCoreOfferingUseCaseIds(offering)
        )
      )
    );

    const typicalPainIds = Array.from(
      new Set(
        recommendedOfferings.flatMap((offering) => offering.typicalPainIds || [])
      )
    );

    setSelectedStrategy(recommendedStrategy);
    setSelectedOfferings(recommendedOfferingIds);
    setSelectedUseCases(coreUseCaseIds);
    setSelectedPains(typicalPainIds);
    setCalculatorValues({});
    setOpenCalculatorCards([]);

    setScreen("offerings");
  }

  function getMaturityLevelLabel(score) {
    if (score === null) return language === "EN" ? "Not scored" : "Skorlanmadı";
    if (score >= 80) return language === "EN" ? "Advanced" : "İleri";
    if (score >= 60) return language === "EN" ? "Developing" : "Gelişen";
    if (score >= 40) return language === "EN" ? "Emerging" : "Başlangıç / Gelişmekte";
    return language === "EN" ? "Foundational" : "Temel Seviye";
  }

  function getIndicativeBenchmark() {
    return {
      peerMin: 55,
      peerMax: 70,
      leadingPractice: 80,
    };
  }


  function isAssessmentFlow() {
    return (
      screen === "maturityAssessment" ||
      screen === "maturityResult" ||
      maturityAnswers.primary_platform !== undefined
    );
  }

  function canNavigateTo(stepId) {
    if (stepId === "maturityAssessment") return true;
    if (stepId === "maturityResult") return true;
    if (stepId === "strategy") return true;
    if (stepId === "mode") return !!selectedStrategy;
    if (stepId === "offerings") return !!selectedStrategy;
    if (stepId === "pains") return !!selectedStrategy;
    if (stepId === "recommendations")
      return !!selectedStrategy && selectedPains.length > 0;
    if (stepId === "offeringSummary")
      return selectedOfferings.length > 0 && selectedUseCases.length > 0;
    if (stepId === "calculator")
      return selectedUseCases.length > 0 || selectedOfferings.length > 0;
    if (stepId === "summary")
      return selectedUseCases.length > 0 || selectedOfferings.length > 0;
    return false;
  }


  const Shell = useCallback(function Shell({ children }) {
    function getCurrentAction() {

      if (screen === "maturityAssessment") {
        return {
          label:
            language === "EN"
              ? "Generate Assessment Result"
              : "Assessment Sonucunu Oluştur",
          disabled: false,
          action: () => setScreen("maturityResult"),
        };
      }

      if (screen === "maturityResult") {
        return {
          label:
            language === "EN"
              ? "Apply Recommendations"
              : "Önerileri Uygula",
          disabled: getRecommendedOfferingsFromAssessment().length === 0,
          action: applyAssessmentRecommendations,
        };
      }
      if (screen === "strategy") {
        return {
          label:
            language === "EN"
              ? "Choose Discovery Mode"
              : "Keşif Modunu Seç",
          disabled: !selectedStrategy,
          action: () => setScreen("mode"),
        };
      }

      if (screen === "offerings") {
        return {
          label:
            language === "EN"
              ? "Continue with Selected Offerings"
              : "Seçilen Offeringler ile Devam Et",
          disabled: selectedOfferings.length === 0,
          action: continueWithSelectedOfferings,
        };
      }

      if (screen === "offeringSummary") {
        return {
          label:
            language === "EN"
              ? "Continue to Value Calculator"
              : "Value Calculator’a Devam Et",
          disabled: selectedUseCases.length === 0,
          action: () => setScreen("calculator"),
        };
      }

      if (screen === "pains") {
  return {
    label:
      language === "EN"
        ? "Recommend Offerings"
        : "Offering Öner",
    disabled: selectedPains.length === 0,
    action: applyPainBasedOfferingRecommendations,
  };
}

      if (screen === "recommendations") {
        return {
          label:
            language === "EN"
              ? "Continue to Value Calculator"
              : "Value Calculator’a Devam Et",
          disabled: selectedUseCases.length === 0,
          action: () => setScreen("calculator"),
        };
      }

      if (screen === "calculator") {
        return {
          label:
            language === "EN"
              ? "Generate Executive Summary"
              : "Executive Summary Oluştur",
          disabled: selectedUseCases.length === 0,
          action: () => setScreen("summary"),
        };
      }

      if (screen === "summary") {
        return {
          label:
            language === "EN"
              ? "Back to Calculator"
              : "Hesaplamaya Geri Dön",
          disabled: false,
          action: () => setScreen("calculator"),
        };
      }

      return null;
    }

    const currentAction = getCurrentAction();

    return (
      <div className="app-shell top-layout">
        <header className="app-header brand-top-header stacked-header">
          <div className="header-title" onClick={() => setScreen("landing")}>
            <strong>Analytics Value Navigator</strong>
          </div>

          <div className="header-lang floating-lang">
            <button
              className={language === "EN" ? "active" : ""}
              onClick={() => setLanguage("EN")}
            >
              EN
            </button>
            <button
              className={language === "TR" ? "active" : ""}
              onClick={() => setLanguage("TR")}
            >
              TR
            </button>
          </div>

          {currentAction && (
            <div className="header-main-action">
              <button
                className="primary header-cta"
                disabled={currentAction.disabled}
                onClick={currentAction.action}
              >
                {currentAction.label}
              </button>
            </div>
          )}
        </header>

        <nav className="flow-step-bar">
          {(isAssessmentFlow() ? assessmentStepItems : stepItems).map((step, index) => {
            const active = screen === step.id;
            const enabled = canNavigateTo(step.id);

            return (
              <button
                key={step.id}
                disabled={!enabled}
                className={active ? "flow-step-item active" : "flow-step-item"}
                onClick={() => enabled && setScreen(step.id)}
              >
                <span>{index + 1}</span>
                <p>{language === "EN" ? step.labelEN : step.labelTR}</p>
              </button>
            );
          })}
        </nav>

        <main className="shell-main">{children}</main>
      </div>
    );
  }, [
    screen,
    language,
    selectedStrategy,
    selectedOfferings.length,
    selectedUseCases.length,
    selectedPains.length,
  ]);

  return (
    <div className="app">
      {screen === "landing" && (
        <main className="hero">
          <div className="hero-card">
            <div className="landing-lang top-right">
              <button
                className={language === "EN" ? "active" : ""}
                onClick={() => setLanguage("EN")}
              >
                EN
              </button>
              <button
                className={language === "TR" ? "active" : ""}
                onClick={() => setLanguage("TR")}
              >
                TR
              </button>
            </div>
            <p className="eyebrow">Value Selling Tool</p>
            <h1>{text.appName}</h1>
            <p className="subtitle">{text.subtitle}</p>



            <div className="landing-path-grid">
              <button
                className="landing-path-card smart"
                onClick={() => {
                  setSelectedPains([]);
                  setSelectedUseCases([]);
                  setSelectedOfferings([]);
                  setCalculatorValues({});
                  setOpenCalculatorCards([]);
                  setMaturityAnswers({});
                  setScreen("maturityAssessment");
                }}
              >
                <span>{language === "EN" ? "Smart Discovery" : "Akıllı Keşif"}</span>
                <h3>
                  {language === "EN"
                    ? "Take Maturity Assessment"
                    : "Olgunluk Değerlendirmesi Yap"}
                </h3>
                <p>
                  {language === "EN"
                    ? "Answer a short assessment and let AVN recommend the best-fit strategy and offerings."
                    : "Kısa bir assessment doldurun; AVN en uygun strateji ve offeringleri önersin."}
                </p>
                <strong>
                  {language === "EN" ? "Start Smart Assessment" : "Akıllı Assessment’a Başla"}
                </strong>
              </button>

              <button
                className="landing-path-card sales"
                onClick={() => setScreen("strategy")}
              >
                <span>
                  {language === "EN" ? "Sales-Led Discovery" : "Satış Odaklı Keşif"}
                </span>
                <h3>
                  {language === "EN"
                    ? "Start Value Discovery"
                    : "Değer Keşfine Başla"}
                </h3>
                <p>
                  {language === "EN"
                    ? "Manually choose the sales strategy and continue with pain points or offerings."
                    : "Satış stratejisini manuel seçin; pain point veya offering üzerinden ilerleyin."}
                </p>
                <strong>
                  {language === "EN" ? "Start Sales-Led Discovery" : "Satış Odaklı Keşfe Başla"}
                </strong>
              </button>
            </div>
          </div>
        </main>
      )}

      {screen === "maturityAssessment" && (
        <Shell>
          <section className="page-head compact">
            <div>
              <p className="eyebrow">
                {language === "EN" ? "Smart Discovery" : "Akıllı Keşif"}
              </p>
              <h1>
                {language === "EN"
                  ? "Analytics Maturity Assessment"
                  : "Analitik Olgunluk Değerlendirmesi"}
              </h1>
              <p className="page-description">
                {language === "EN"
                  ? "Capture the customer’s landscape, maturity and priorities to guide strategy and offering recommendations."
                  : "Müşterinin teknoloji yapısını, olgunluğunu ve önceliklerini toplayarak strateji ve offering önerilerini yönlendirin."}
              </p>
            </div>
          </section>

          <div className="maturity-section-list">
            <div className="quick-assessment-card">
              <div className="section-title-row">
                <div>
                  <h2>
                    {language === "EN"
                      ? "Quick Analytics Assessment"
                      : "Hızlı Analitik Değerlendirme"}
                  </h2>
                  <p>
                    {language === "EN"
                      ? "Answer a few high-level questions to generate an initial strategy and offering direction."
                      : "İlk strateji ve offering yönünü oluşturmak için birkaç üst seviye soruyu yanıtlayın."}
                  </p>
                </div>

                <span className="quick-assessment-count">
                  {quickAssessmentQuestions.length} {language === "EN" ? "questions" : "soru"}
                </span>
              </div>

              <div className="quick-question-grid">
                {quickAssessmentQuestions.map((question, index) => {
                  const answer = getMaturityAnswer(question);

                  return (
                    <section className="quick-question-card" key={question.id}>
                      <div className="quick-question-title">
                        <span>{index + 1}</span>
                        <h3>
                          {language === "EN" ? question.question : question.questionTR}
                        </h3>
                      </div>

                      <div className="quick-option-list">
                        {question.options.map((option) => (
                          <button
                            key={option.id}
                            className={
                              question.type === "multi"
                                ? answer.includes(option.id)
                                  ? "quick-option selected"
                                  : "quick-option"
                                : answer === option.id
                                  ? "quick-option selected"
                                  : "quick-option"
                            }
                            onClick={() => {
                              if (question.type === "multi") {
                                toggleMaturityMultiAnswer(question.id, option.id);
                              } else {
                                updateMaturityAnswer(question.id, option.id);
                              }
                            }}
                          >
                            {language === "EN" ? option.label : option.labelTR}
                          </button>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </Shell>
      )}

      {screen === "maturityResult" && (
        <Shell>
          <section className="page-head compact">
            <div>
              <p className="eyebrow">
                {language === "EN" ? "Smart Discovery Result" : "Akıllı Keşif Sonucu"}
              </p>
              <h1>
                {language === "EN"
                  ? "Analytics Maturity Result"
                  : "Analitik Olgunluk Sonucu"}
              </h1>
              <p className="page-description">
                {language === "EN"
                  ? "Initial maturity view based on the customer’s landscape, maturity scores and business priorities."
                  : "Müşterinin teknoloji yapısı, olgunluk skorları ve iş önceliklerine göre oluşturulan ilk olgunluk görünümü."}
              </p>
            </div>

            <div className="metric-chip total">
              <span>{language === "EN" ? "Maturity Score" : "Olgunluk Skoru"}</span>
              <strong>{calculateMaturityScore()}/100</strong>
            </div>
          </section>

          <section className="maturity-result-hero">
            <div>
              <span>{language === "EN" ? "Overall Level" : "Genel Seviye"}</span>
              <strong>{getMaturityLevelLabel(calculateMaturityScore())}</strong>
              <p>
                {language === "EN"
                  ? "This score is indicative and should be used to guide the next discovery conversation, not as a final benchmark."
                  : "Bu skor indikatif bir değerlendirmedir; nihai benchmark değil, sonraki keşif görüşmesini yönlendirmek için kullanılmalıdır."}
              </p>
            </div>

            <div>
              <span>
                {language === "EN" ? "Recommended Strategy" : "Önerilen Strateji"}
              </span>
              <strong>{getStrategyTitle(getRecommendedStrategyFromAssessment())}</strong>
              <p>
                {language === "EN"
                  ? "Recommended based on the customer’s current technology landscape, stated constraints and maturity inputs."
                  : "Müşterinin mevcut teknoloji yapısı, belirtilen kısıtları ve olgunluk girdilerine göre önerilmiştir."}
              </p>
            </div>
          </section>

          <section className="maturity-benchmark-card">
            <div className="section-title-row">
              <h2>
                {language === "EN" ? "Indicative Benchmark" : "İndikatif Benchmark"}
              </h2>
              <p>
                {language === "EN"
                  ? "Directional comparison against typical peer range and leading practice"
                  : "Tipik benzer şirket aralığı ve iyi uygulama seviyesiyle yönlendirici karşılaştırma"}
              </p>
            </div>

            <div className="benchmark-scale">
              <div className="benchmark-track">
                <div
                  className="benchmark-peer-range"
                  style={{
                    left: `${getIndicativeBenchmark().peerMin}%`,
                    width: `${getIndicativeBenchmark().peerMax -
                      getIndicativeBenchmark().peerMin
                      }%`,
                  }}
                />

                <div
                  className="benchmark-leading-marker"
                  style={{ left: `${getIndicativeBenchmark().leadingPractice}%` }}
                />

                <div
                  className="benchmark-user-marker"
                  style={{ left: `${calculateMaturityScore()}%` }}
                >
                  <span>{calculateMaturityScore()}</span>
                </div>
              </div>

              <div className="benchmark-labels">
                <span>0</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
              </div>
            </div>

            <div className="benchmark-legend">
              <span>
                <em className="legend-dot user" />
                {language === "EN" ? "Your score" : "Sizin skorunuz"}
              </span>
              <span>
                <em className="legend-dot peer" />
                {language === "EN" ? "Typical peer range" : "Tipik benzer şirket aralığı"}
              </span>
              <span>
                <em className="legend-dot leading" />
                {language === "EN" ? "Leading practice" : "İyi uygulama seviyesi"}
              </span>
            </div>
          </section>

          <section className="maturity-recommended-offerings">
            <div className="section-title-row">
              <h2>
                {language === "EN"
                  ? "Recommended Offerings"
                  : "Önerilen Offeringler"}
              </h2>
              <p>
                {language === "EN"
                  ? "Best-fit solution packages based on assessment inputs"
                  : "Assessment girdilerine göre en uygun çözüm paketleri"}
              </p>
            </div>

            <div className="maturity-offering-grid">
              {getRecommendedOfferingsFromAssessment().map((offering) => (
                <article className="maturity-offering-card" key={offering.id}>
                  <div>
                    <span>
                      {language === "EN" ? offering.category : offering.categoryTR}
                    </span>
                    <strong>
                      {language === "EN" ? offering.title : offering.titleTR}
                    </strong>
                    <p>
                      {language === "EN" ? offering.pitch : offering.pitchTR}
                    </p>
                  </div>

                  <em>
                    {offering.assessmentFitScore}%{" "}
                    {language === "EN" ? "fit" : "uyum"}
                  </em>
                </article>
              ))}
            </div>
          </section>
        </Shell>
      )}

      {screen === "strategy" && (
        <Shell>

          <section className="page-head center">
            <div>
              <h1>{text.chooseStrategy}</h1>
              <p className="page-description">{text.strategyDesc}</p>
            </div>
          </section>

          <div className="strategy-grid">
            {strategies.map((strategy) => (
              <button
                key={strategy.id}
                className={
                  selectedStrategy === strategy.id
                    ? "strategy-card selected"
                    : "strategy-card"
                }
                onClick={() => {
  setSelectedStrategy(strategy.id);
  setSelectedPains([]);
  setSelectedUseCases([]);
  setSelectedOfferings([]);
  setPainSuggestedOfferingIds([]);
  setCalculatorValues({});
  setOpenCalculatorCards([]);
}}
              >
                <h2>{language === "EN" ? strategy.title : strategy.titleTR}</h2>
                <p>
                  {language === "EN"
                    ? strategy.description
                    : strategy.descriptionTR}
                </p>
              </button>
            ))}
          </div>


        </Shell>
      )}

      {screen === "mode" && (
        <Shell>
          <section className="page-head center">
            <div>
              <h1>{text.startMode}</h1>
              <p className="page-description">{text.startModeDesc}</p>
            </div>
          </section>

          <div className="mode-grid">
            <button
              className="mode-card"
              onClick={() => {
                setSelectedPains([]);
                setSelectedUseCases([]);
                setSelectedOfferings([]);
                setCalculatorValues({});
                setOpenCalculatorCards([]);
                setScreen("pains");
              }}
            >
              <span>01</span>
              <h2>{text.painLedTitle}</h2>
              <p>{text.painLedDesc}</p>
              <strong>
                {language === "EN"
                  ? "Customer pain → use cases → value"
                  : "Müşteri problemi → use case → değer"}
              </strong>
            </button>

            <button
              className="mode-card"
              onClick={() => {
                setSelectedPains([]);
                setSelectedUseCases([]);
                setSelectedOfferings([]);
                setCalculatorValues({});
                setOpenCalculatorCards([]);
                setScreen("offerings");
              }}
            >
              <span>02</span>
              <h2>{text.offeringLedTitle}</h2>
              <p>{text.offeringLedDesc}</p>
              <strong>
                {language === "EN"
                  ? "Offering → included use cases → value"
                  : "Offering → içerdiği use case’ler → değer"}
              </strong>
            </button>
          </div>
        </Shell>
      )}

      {screen === "offerings" && (
        <Shell>
          <section className="page-head compact">
            <div>
              <h1>{text.offerings}</h1>
              <p className="page-description">{text.offeringsDesc}</p>
            </div>

            <div className="metric-chip">
              <span>{text.selected}</span>
              <strong>{selectedOfferings.length}</strong>
            </div>
          </section>

          <div className="offering-grid">
            {getVisibleOfferings().map((offering) => {
              const isSelected = selectedOfferings.includes(offering.id);
              const fitScore = getOfferingFitScore(offering);
              const isSuggestedByPain = painSuggestedOfferingIds.includes(offering.id);

              return (
                <article
                className={[
  "offering-card",
  isSelected ? "selected" : "",
  isSuggestedByPain ? "suggested-by-pain" : "",
]
  .filter(Boolean)
  .join(" ")}
                  key={offering.id}
                >
                  
                  <div className="offering-card-top">
                    <span>{language === "EN" ? offering.category : offering.categoryTR}</span>

                    <div className="offering-card-badges">
  

  <strong className="fit-badge">
    {fitScore}% {getOfferingFitLabel(fitScore)}
  </strong>

  <strong>
    {getAllOfferingUseCaseIds(offering).length}{" "}
    {language === "EN" ? "use cases" : "use case"}
  </strong>
</div>
                  </div>

                  <h2>{language === "EN" ? offering.title : offering.titleTR}</h2>
                  <p>{language === "EN" ? offering.pitch : offering.pitchTR}</p>

                  <div className="offering-timeline-strip">
                    <span>{text.expectedTimeline}</span>
                    <strong>
                      {language === "EN"
                        ? offering.expectedProjectTimeline.summary
                        : offering.expectedProjectTimeline.summaryTR}
                    </strong>
                  </div>

                  <button
                    className="secondary offering-onepager-button"
                    onClick={() => setActiveOfferingOnePager(offering)}
                  >
                    {language === "EN" ? "View One-Pager" : "Tek Sayfa Özeti Gör"}
                  </button>

                  <button
                    className={isSelected ? "secondary danger" : "secondary"}
                    onClick={() => toggleOffering(offering.id)}
                  >
                    {isSelected ? text.removeOffering : text.selectOffering}
                  </button>
                </article>
              );
            })}
          </div>
        </Shell>
      )}

      {screen === "offeringSummary" && (
        <Shell>
          <section className="page-head compact">
            <div>
              <p className="eyebrow">
                {language === "EN" ? "Offering-led Discovery" : "Offering Odaklı Keşif"}
              </p>
              <h1>{text.offeringSummary}</h1>
              <p className="page-description">{text.offeringSummaryDesc}</p>
            </div>
          </section>

          <div className="offering-review-list compact">
            {getSelectedOfferingItems().map((offering, offeringIndex) => {
              const offeringUseCases = useCases.filter((useCase) =>
                offering.includedUseCaseIds.includes(useCase.id)
              );

              return (
                <details
                  className="offering-review-card compact"
                  key={offering.id}
                >
                  <summary>
                    <div className="offering-review-main compact">
                      <span className="offering-review-category">
                        {language === "EN" ? offering.category : offering.categoryTR}
                      </span>

                      <h2>{language === "EN" ? offering.title : offering.titleTR}</h2>

                      <p>{language === "EN" ? offering.pitch : offering.pitchTR}</p>
                    </div>

                    <div className="offering-review-facts compact">
                      <span>
                        {offeringUseCases.length}{" "}
                        {language === "EN" ? "use cases" : "use case"}
                      </span>

                      <span>
                        {language === "EN"
                          ? offering.expectedProjectTimeline.summary
                          : offering.expectedProjectTimeline.summaryTR}
                      </span>
                    </div>
                  </summary>

                  <div className="offering-review-usecases compact grouped">
                    {[
                      {
                        key: "core",
                        titleEN: "Core Value Drivers",
                        titleTR: "Ana Değer Sürücüleri",
                        descriptionEN: "Included in the value calculator",
                        descriptionTR: "Value calculator’da hesaplanır",
                        ids: getOfferingUseCaseMapping(offering).core,
                      },
                      {
                        key: "supporting",
                        titleEN: "Supporting Capabilities",
                        titleTR: "Destekleyici Yetkinlikler",
                        descriptionEN: "Included in the value story, not directly calculated",
                        descriptionTR: "Değer hikayesine dahildir, doğrudan hesaplanmaz",
                        ids: getOfferingUseCaseMapping(offering).supporting,
                      },
                      {
                        key: "future",
                        titleEN: "Future Opportunities",
                        titleTR: "Gelecek Faz Fırsatları",
                        descriptionEN: "Potential next-wave opportunities",
                        descriptionTR: "Sonraki faz fırsatlarıdır",
                        ids: getOfferingUseCaseMapping(offering).future,
                      },
                    ]
                      .filter((group) => group.ids.length > 0)
                      .map((group) => (
                        <section className="offering-usecase-group" key={group.key}>
                          <div className="offering-usecase-group-title">
                            <div>
                              <h3>{language === "EN" ? group.titleEN : group.titleTR}</h3>
                              <p>{language === "EN" ? group.descriptionEN : group.descriptionTR}</p>
                            </div>

                            <span>
                              {group.ids.length} {language === "EN" ? "items" : "kalem"}
                            </span>
                          </div>

                          <div className="offering-review-table-head compact">
                            <span>{language === "EN" ? "Use Case" : "Use Case"}</span>
                            <span>{language === "EN" ? "Value Driver" : "Değer Sürücüsü"}</span>
                            <span>{language === "EN" ? "Key Solutions" : "Ana Çözümler"}</span>
                          </div>

                          {group.ids
                            .map((useCaseId) => getUseCaseById(useCaseId))
                            .filter(Boolean)
                            .map((useCase) => {
                              const solutions = (useCase.solutions?.[selectedStrategy] || [])
                                .slice(0, 3)
                                .map((solution) => normalizeSolutionName(solution));

                              return (
                                <details
                                  className="offering-review-usecase-row compact expandable"
                                  key={useCase.id}
                                >
                                  <summary>
                                    <div className="usecase-title-cell">
                                      <strong>
                                        {language === "EN" ? useCase.title : useCase.titleTR}
                                      </strong>
                                      <small>
                                        {language === "EN"
                                          ? "Click to view details"
                                          : "Detayı görmek için tıklayın"}
                                      </small>
                                    </div>

                                    <span className="value-category-pill compact">
                                      {useCase.valueMeasurement === "score"
                                        ? language === "EN"
                                          ? useCase.strategicValueType || "Strategic / Readiness Score"
                                          : useCase.strategicValueTypeTR || "Stratejik / Hazırlık Skoru"
                                        : language === "EN"
                                          ? useCase.valueType
                                          : useCase.valueTypeTR}
                                    </span>

                                    <div className="compact-solution-list dense">
                                      {solutions.map((solution) => (
                                        <em key={solution}>{solution}</em>
                                      ))}
                                    </div>
                                  </summary>

                                  <div className="usecase-expanded-detail">
                                    <p>
                                      {language === "EN"
                                        ? useCase.description
                                        : useCase.descriptionTR}
                                    </p>
                                  </div>
                                </details>
                              );
                            })}
                        </section>
                      ))}
                  </div>
                </details>
              );
            })}
          </div>
        </Shell>
      )}

      {screen === "pains" && (
        <Shell>

          <section className="page-head compact">
            <div>
              <h1>{text.selectPain}</h1>
              <p className="page-description">{text.painDesc}</p>
            </div>

            <div className="metric-chip">
              <span>{text.selected}</span>
              <strong>{selectedPains.length}</strong>
            </div>
          </section>

          <div className="pain-category-list">
            {painCategories.map((category) => (
              <section className="pain-category" key={category.id}>
                <h2>{language === "EN" ? category.title : category.titleTR}</h2>

                <div className="pain-grid">
                  {category.pains.map((pain) => (
                    <button
                      key={pain.id}
                      className={
                        selectedPains.includes(pain.id)
                          ? "pain-card selected"
                          : "pain-card"
                      }
                      onClick={() => togglePain(pain.id)}
                    >
                      <span className="checkbox">
                        {selectedPains.includes(pain.id) ? "✓" : ""}
                      </span>
                      <p>{language === "EN" ? pain.en : pain.tr}</p>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {selectedPains.length === 0 && (
            <p className="warning-text">{text.minWarning}</p>
          )}


        </Shell>
      )}

      {screen === "recommendations" && (
        <Shell>

          <section className="page-head compact">
            <div>
              <h1>{text.recommendations}</h1>
              <p className="page-description">{text.recommendationsDesc}</p>
            </div>

            <div className="metric-chip">
              <span>{text.selected}</span>
              <strong>{selectedUseCases.length}</strong>
            </div>
          </section>

          <div className="context-strip">
            <div>
              <strong>{language === "EN" ? "Strategy" : "Strateji"}</strong>
              <span>
                {selectedStrategyData
                  ? language === "EN"
                    ? selectedStrategyData.title
                    : selectedStrategyData.titleTR
                  : "-"}
              </span>
            </div>

            {selectedOfferings.length === 0 && (
              <div>
                <strong>{language === "EN" ? "Pain Points" : "Problemler"}</strong>
                <span>{selectedPains.length}</span>
              </div>
            )}

            {selectedOfferings.length > 0 && (
              <div>
                <strong>{language === "EN" ? "Offerings" : "Offeringler"}</strong>
                <span>{selectedOfferings.length}</span>
              </div>
            )}
          </div>

          <div className="recommendation-grid">
            {recommendations.map((useCase) => {
              const isSelected = selectedUseCases.includes(useCase.id);
              const solutions = useCase.solutions[selectedStrategy] || [];

              return (
                <article
                  className={
                    isSelected
                      ? "recommendation-card selected"
                      : "recommendation-card"
                  }
                  key={useCase.id}
                >
                  <div className="card-topline">
                    <span
                      className={
                        useCase.finalScore >= 90
                          ? "match-pill strong"
                          : useCase.finalScore >= 75
                            ? "match-pill good"
                            : "match-pill possible"
                      }
                    >
                      {useCase.finalScore}% {text.match}
                    </span>
                    <div className="calculator-pill-row">
                      <span className="category-pill">
                        {language === "EN" ? useCase.category : useCase.categoryTR}
                      </span>

                      <span
                        className={`measurement-pill ${useCase.valueMeasurement || "monetary"
                          }`}
                      >
                        {getValueMeasurementLabel(useCase.valueMeasurement)}
                      </span>
                    </div>
                  </div>

                  <h2>{language === "EN" ? useCase.title : useCase.titleTR}</h2>
                  <p className="recommendation-description">
                    {language === "EN"
                      ? useCase.description
                      : useCase.descriptionTR}
                  </p>

                  <div className="compact-meta">
                    <span>
                      {language === "EN"
                        ? useCase.valueType
                        : useCase.valueTypeTR}
                    </span>
                  </div>

                  <details className="recommendation-solution-details">
                    <summary>
                      {language === "EN" ? "Solution Details" : "Çözüm Detayları"}
                    </summary>

                    <div className="solution-tags compact">
                      {solutions.map((solution) => (
                        <span key={solution}>{solution}</span>
                      ))}
                    </div>
                  </details>

                  <div className="why-line">
                    {language === "EN" ? "Matched pains" : "Eşleşen problem"}:{" "}
                    <strong>{useCase.matchedPainIds.length}</strong>
                  </div>

                  <button
                    className={isSelected ? "secondary danger" : "secondary"}
                    onClick={() => toggleUseCase(useCase.id)}
                  >
                    {isSelected ? text.remove : text.keep}
                  </button>
                </article>
              );
            })}
          </div>

          {selectedUseCases.length === 0 && (
            <p className="warning-text">{text.noUseCases}</p>
          )}


        </Shell>
      )}

      {screen === "calculator" && (
        <Shell>
          <section className="page-head compact">
            <div>
              <h1>Value Calculator</h1>
              <p className="page-description">
                {language === "EN"
                  ? "Enter high-level assumptions to estimate quantified value and score strategic / readiness impact where applicable."
                  : "Ölçülebilir değeri tahmin etmek ve uygun use case’lerde stratejik / hazırlık etkisini skorlamak için üst seviye varsayımları girin."}
              </p>
            </div>

            <div className="metric-chip total">
              <span>
                {language === "EN" ? "Quantified Value" : "Ölçülebilir Değer"}
              </span>
              <strong>{formatCurrency(calculateTotalValue())}</strong>
            </div>
          </section>

          <div className="calculator-list compact">
            {getSelectedRecommendationItems().map((useCase) => {
              const model = calculationModels[useCase.calculationModel];
              const values = getValuesForUseCase(useCase);
              const calculatedValue = calculateUseCaseValue(useCase);
              const calculatedScore = calculateUseCaseScore(useCase);
              const isScoreOnly = useCase.valueMeasurement === "score";
              const isOpen = openCalculatorCards.includes(useCase.id);

              return (
                <section
                  className={
                    isOpen
                      ? "calculator-card compact open"
                      : "calculator-card compact"
                  }
                  key={useCase.id}
                >
                  <div
                    className="calculator-card-header compact clickable"
                    onClick={() => toggleCalculatorCard(useCase.id)}
                  >
                    <div className="calculator-title-block">
                      <span className="category-pill">
                        {language === "EN" ? useCase.category : useCase.categoryTR}
                      </span>

                      <h2>{language === "EN" ? useCase.title : useCase.titleTR}</h2>

                      <p>
                        {useCase.valueMeasurement === "score"
                          ? language === "EN"
                            ? useCase.strategicValueType || "Strategic / Readiness Score"
                            : useCase.strategicValueTypeTR || "Stratejik / Hazırlık Skoru"
                          : language === "EN"
                            ? useCase.valueType
                            : useCase.valueTypeTR}
                      </p>
                    </div>

                    <div className="calculator-result-stack">
                      {!isScoreOnly && (
                        <div className="calculator-result-inline">
                          <small>
                            {language === "EN"
                              ? "Estimated Annual Value"
                              : "Tahmini Yıllık Değer"}
                          </small>
                          <strong>{formatCurrency(calculatedValue)}</strong>
                        </div>
                      )}

                      {calculatedScore !== null && (
                        <div className="calculator-score-inline">
                          <small>
                            {language === "EN"
                              ? useCase.strategicValueType || "Strategic / Readiness Score"
                              : useCase.strategicValueTypeTR || "Stratejik / Hazırlık Skoru"}
                          </small>
                          <strong>{calculatedScore}/100</strong>
                        </div>
                      )}
                    </div>

                    <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
                  </div>

                  {isOpen &&
                    (() => {
                      const monetaryInputs = model.inputs.filter(
                        (input) => input.group !== "score"
                      );

                      const scoreInputs = model.inputs.filter(
                        (input) => input.group === "score"
                      );

                      return (
                        <>
                          {monetaryInputs.length > 0 && (
                            <div className="formula-row">
                              {monetaryInputs.map((input, index) => (
                                <div className="formula-part" key={input.id}>
                                  {index > 0 && <span className="formula-operator">×</span>}

                                  <label className="formula-input">
                                    <span className="formula-label">
                                      {getShortInputLabel(
                                        language === "EN" ? input.label : input.labelTR
                                      )}
                                      <span
                                        className="info-dot"
                                        data-tooltip={language === "EN" ? input.label : input.labelTR}
                                      >
                                        i
                                      </span>
                                    </span>

                                    <input
                                      type="number"
                                      value={values[input.id]}
                                      onChange={(event) =>
                                        updateCalculatorValue(
                                          useCase.id,
                                          input.id,
                                          event.target.value
                                        )
                                      }
                                    />
                                  </label>
                                </div>
                              ))}

                              <span className="formula-operator equals">=</span>

                              <div className="formula-result">
                                <span>{language === "EN" ? "Value" : "Değer"}</span>
                                <strong>{formatCurrency(calculatedValue)}</strong>
                              </div>
                            </div>
                          )}
                          {scoreInputs.length > 0 && (
                            <div className="score-input-row">
                              <div className="score-input-row-title">
                                <span>
                                  {language === "EN"
                                    ? useCase.strategicInputTitle ||
                                    (isScoreOnly ? "Score Assumptions" : "Strategic Impact Assumptions")
                                    : useCase.strategicInputTitleTR ||
                                    (isScoreOnly ? "Skor Varsayımları" : "Stratejik Etki Varsayımları")}
                                </span>
                                <strong>{calculatedScore}/100</strong>
                              </div>

                              <div className="score-slider-list">
                                {scoreInputs.map((input) => (
                                  <label className="score-slider-field" key={input.id}>
                                    <div className="score-slider-label">
                                      <strong>
                                        {language === "EN"
                                          ? input.shortLabel || input.label
                                          : input.shortLabelTR || input.labelTR}
                                      </strong>

                                      <span>{values[input.id]}/5</span>
                                    </div>

                                    <div className="score-slider-control">
                                      <small>1</small>

                                      <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        step="1"
                                        value={values[input.id]}
                                        onChange={(event) =>
                                          updateCalculatorValue(
                                            useCase.id,
                                            input.id,
                                            event.target.value
                                          )
                                        }
                                      />

                                      <small>5</small>
                                    </div>
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })()}
                </section>
              );
            })}
          </div>
        </Shell>
      )}

      {screen === "summary" && (
        <Shell>
          <section className="executive-report-page">
            <div className="report-action-row">
              <button className="secondary export-pdf-button" onClick={exportExecutiveReportToPdf}>
                {language === "EN" ? "Export PDF" : "PDF Olarak İndir"}
              </button>
            </div>
            <section className="executive-memo-hero">
              <div>
                <p className="eyebrow">
                  {language === "EN" ? "Executive Value Case" : "Yönetici Değer Raporu"}
                </p>

                <h1>
                  {language === "EN"
                    ? calculateAverageStrategicScore() !== null
                      ? `${formatCompactCurrency(calculateTotalValue())} quantified annual value with ${getStrategicImpactLabel(
                        calculateAverageStrategicScore()
                      ).toLowerCase()} strategic impact`
                      : `${formatCompactCurrency(calculateTotalValue())} quantified annual value opportunity identified`
                    : calculateAverageStrategicScore() !== null
                      ? `${formatCompactCurrency(calculateTotalValue())} ölçülebilir yıllık değer ve ${getStrategicImpactLabel(
                        calculateAverageStrategicScore()
                      ).toLowerCase()} stratejik etki`
                      : `${formatCompactCurrency(calculateTotalValue())} ölçülebilir yıllık değer fırsatı belirlendi`}
                </h1>

                <p>
                  {language === "EN"
                    ? calculateAverageStrategicScore() !== null
                      ? `This indicative value case consolidates ${selectedUseCases.length} selected analytics use cases into a C-Level opportunity view. Quantified value is calculated separately from strategic impact indicators, so measurable efficiency and broader business impact can be reviewed together.`
                      : `This indicative value case consolidates ${selectedUseCases.length} selected analytics use cases into a C-Level opportunity view. The estimate highlights the main value drivers, recommended solution direction and a practical next step to validate assumptions through a focused assessment.`
                    : calculateAverageStrategicScore() !== null
                      ? `Bu indikatif değer raporu, ${selectedUseCases.length} seçili analitik use case’i C-Level seviyesinde okunabilir bir fırsat görünümüne dönüştürür. Ölçülebilir değer ile stratejik etki göstergeleri ayrı değerlendirilir; böylece verimlilik etkisi ve daha geniş iş etkisi birlikte görülebilir.`
                      : `Bu indikatif değer raporu, ${selectedUseCases.length} seçili analitik use case’i C-Level seviyesinde okunabilir bir fırsat görünümüne dönüştürür. Tahmin; ana değer sürücülerini, önerilen çözüm yönünü ve varsayımları odaklı bir assessment ile doğrulamak için önerilen sonraki adımı özetler.`}
                </p>
              </div>

              <div className="executive-decision-card">
                <span>{language === "EN" ? "Recommended Decision" : "Önerilen Karar"}</span>
                <strong>{getRecommendedDecisionText()}</strong>
              </div>
            </section>

            <section className="executive-impact-strip">
              <div>
                <span>
                  {language === "EN" ? "Quantified Value" : "Ölçülebilir Değer"}
                </span>
                <strong>{formatCurrency(calculateTotalValue())}</strong>
              </div>

              {calculateAverageStrategicScore() !== null && (
                <div>
                  <span>
                    {language === "EN" ? "Strategic Impact" : "Stratejik Etki"}
                  </span>
                  <strong>
                    {calculateAverageStrategicScore()}/100{" "}
                    <em>{getStrategicImpactLabel(calculateAverageStrategicScore())}</em>
                  </strong>
                </div>
              )}

              <div>
                <span>
                  {language === "EN" ? "Calculated Use Cases" : "Hesaplanan Use Case"}
                </span>
                <strong>{selectedUseCases.length}</strong>
              </div>
            </section>


            {selectedOfferings.length > 0 && (
              <section className="compact-offering-panel">
                <div className="section-title-row">
                  <h2>
                    {language === "EN" ? "Selected Offerings" : "Seçilen Offeringler"}
                  </h2>
                  <p>
                    {language === "EN"
                      ? "Solution packages included in this value case"
                      : "Bu değer raporuna dahil edilen çözüm paketleri"}
                  </p>
                </div>

                <div className="compact-offering-table">
                  {getSelectedOfferingItems().map((offering) => (
                    <div className="compact-offering-row" key={offering.id}>
                      <div>
                        <span>
                          {language === "EN" ? offering.category : offering.categoryTR}
                        </span>
                        <strong>
                          {language === "EN" ? offering.title : offering.titleTR}
                        </strong>
                      </div>

                      <div>
                        <span>
                          {language === "EN" ? "Expected Timeline" : "Beklenen Takvim"}
                        </span>
                        <strong>
                          {language === "EN"
                            ? offering.expectedProjectTimeline.summary
                            : offering.expectedProjectTimeline.summaryTR}
                        </strong>
                      </div>


                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="executive-value-breakdown">
              <div className="section-title-row">
                <h2>{language === "EN" ? "Value Breakdown" : "Değer Kırılımı"}</h2>
                <p>
                  {language === "EN"
                    ? "Quantified annual value by value driver"
                    : "Değer sürücüsüne göre ölçülebilir yıllık değer"}
                </p>
              </div>

              <div className="value-driver-list">
                {[...getValueBreakdown()]
                  .sort((a, b) => b.value - a.value)
                  .map((item) => {
                    const total = calculateTotalValue();
                    const share = total > 0 ? Math.round((item.value / total) * 100) : 0;

                    return (
                      <div className="value-driver-row" key={item.label}>
                        <div className="value-driver-label">
                          <strong>{item.label}</strong>
                          <span>{share}%</span>
                        </div>

                        <div className="value-driver-bar">
                          <div style={{ width: `${share}%` }} />
                        </div>

                        <strong className="value-driver-amount">
                          {formatCurrency(item.value)}
                        </strong>
                      </div>
                    );
                  })}
              </div>
            </section>
            {getScoredUseCases().length > 0 && (
              <section className="strategic-score-summary">
                <div className="section-title-row">
                  <h2>
                    {language === "EN"
                      ? "Strategic Impact Summary"
                      : "Stratejik Etki Özeti"}
                  </h2>
                  <p>
                    {language === "EN"
                      ? "Score-based and hybrid value indicators captured separately from quantified value"
                      : "Ölçülebilir değerden ayrı takip edilen skor bazlı ve hibrit değer göstergeleri"}
                  </p>
                </div>

                <div className="strategic-score-summary-grid">
                  <div className="strategic-score-overall">
                    <span>
                      {language === "EN"
                        ? "Average Strategic Impact"
                        : "Ortalama Stratejik Etki"}
                    </span>
                    <strong>{calculateAverageStrategicScore()}/100</strong>
                    <em>{getStrategicImpactLabel(calculateAverageStrategicScore())}</em>
                  </div>

                  <div className="strategic-score-list">
                    {getScoredUseCases().map((useCase) => (
                      <div className="strategic-score-row" key={useCase.id}>
                        <div>
                          <strong>
                            {language === "EN" ? useCase.title : useCase.titleTR}
                          </strong>
                          <span>
                            {language === "EN"
                              ? useCase.strategicValueType || "Strategic / Readiness Score"
                              : useCase.strategicValueTypeTR || "Stratejik / Hazırlık Skoru"}
                          </span>
                        </div>

                        <strong>{useCase.score}/100</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}


            <details className="executive-accordion">
              <summary>
                {language === "EN"
                  ? "Similar Delivery References"
                  : "Benzer Teslimat Referansları"}
              </summary>

              <section className="reference-panel compact-inside-accordion">
                <div className="section-title-row">
                  <h2>
                    {language === "EN"
                      ? "Similar Delivery References"
                      : "Benzer Teslimat Referansları"}
                  </h2>
                  <p>
                    {language === "EN"
                      ? "Comparable delivery patterns based on selected offerings and use cases"
                      : "Seçilen offering ve use case’lere göre benzer teslimat desenleri"}
                  </p>
                </div>

                <div className="reference-grid">
                  {getSimilarReferenceCases().map((reference) => (
                    <article className="reference-card executive-reference" key={reference.id}>
                      <div className="reference-card-top">
                        <span>{reference.matchScore}% Match</span>
                        <strong>{getReferenceStrengthLabel(reference.matchScore)}</strong>
                      </div>

                      <div className="reference-main">
                        <p className="reference-client">
                          {language === "EN"
                            ? reference.clientName || `${reference.industry} Client`
                            : reference.clientNameTR || `${reference.industryTR} Müşterisi`}
                        </p>

                        <h3>{language === "EN" ? reference.title : reference.titleTR}</h3>

                        <div className="reference-meta">
                          <span>{reference.customerType}</span>
                          <span>
                            {language === "EN"
                              ? reference.duration || "Indicative timeline"
                              : reference.durationTR || "Tahmini süre"}
                          </span>
                        </div>
                      </div>

                      <div className="reference-scope">
                        <span>{language === "EN" ? "Delivered Scope" : "Teslimat Kapsamı"}</span>
                        <p>
                          {language === "EN"
                            ? reference.deliveredScope || reference.outcome
                            : reference.deliveredScopeTR || reference.outcomeTR}
                        </p>
                      </div>

                      <div className="reference-tags">
                        {reference.technologies.slice(0, 4).map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                    </article>
                  ))}
                </div>
              </section>
            </details>

            <details className="executive-accordion">
              <summary>
                {language === "EN" ? "Use Case Details" : "Use Case Detayları"}
              </summary>

              <section className="details-panel compact-inside-accordion">
                <div className="section-title-row">
                  <h2>
                    {language === "EN" ? "Priority Use Cases" : "Öncelikli Use Case’ler"}
                  </h2>
                  <p>
                    {language === "EN"
                      ? "Top value contributors included in the estimate"
                      : "Tahmine dahil edilen en yüksek değer katkısı sağlayan use case’ler"}
                  </p>
                </div>

                <div className="executive-usecase-table">
                  <div className="executive-usecase-header">
                    <span>#</span>
                    <span>{language === "EN" ? "Use Case" : "Use Case"}</span>
                    <span>{language === "EN" ? "Value Driver" : "Değer Sürücüsü"}</span>
                    <span>{language === "EN" ? "Value / Score" : "Değer / Skor"}</span>
                  </div>

                  {[...getSelectedRecommendationItems()]
                    .map((item) => {
                      const value = calculateUseCaseValue(item);
                      const score = calculateUseCaseScore(item);

                      return {
                        ...item,
                        value,
                        score,
                      };
                    })
                    .sort((a, b) => b.value - a.value)
                    .slice(0, 5)
                    .map((item, index) => {
                      const isScoreOnly = item.valueMeasurement === "score";
                      const hasScore = item.score !== null;

                      return (
                        <div className="executive-usecase-row" key={item.id}>
                          <span>{index + 1}</span>

                          <strong>{language === "EN" ? item.title : item.titleTR}</strong>

                          <span>
                            {isScoreOnly
                              ? language === "EN"
                                ? item.strategicValueType || "Strategic / Readiness Score"
                                : item.strategicValueTypeTR || "Stratejik / Hazırlık Skoru"
                              : language === "EN"
                                ? item.valueType
                                : item.valueTypeTR}
                          </span>

                          <strong>
                            {isScoreOnly
                              ? `${item.score}/100`
                              : hasScore
                                ? `${formatCurrency(item.value)} · ${item.score}/100`
                                : formatCurrency(item.value)}
                          </strong>
                        </div>
                      );
                    })}
                </div>

                {getSelectedRecommendationItems().length > 5 && (
                  <p className="additional-usecases-note">
                    {language === "EN"
                      ? `+${getSelectedRecommendationItems().length - 5} additional use cases included in the calculation.`
                      : `Hesaplamaya +${getSelectedRecommendationItems().length - 5} ek use case dahil edilmiştir.`}
                  </p>
                )}
              </section>
            </details>

            <section className="executive-disclaimer">
              <strong>{language === "EN" ? "Disclaimer" : "Açıklama"}</strong>
              <p>
                {language === "EN"
                  ? "The estimated value shown here is an indicative opportunity based on selected use cases, assumptions and high-level inputs. It should not be considered as a guaranteed saving. Values should be validated through a customer-specific assessment."
                  : "Burada gösterilen tahmini değer, seçilen use case’ler, varsayımlar ve üst seviye girdiler üzerinden oluşturulan indikatif bir fırsat değeridir. Garanti tasarruf olarak değerlendirilmemelidir. Değerler müşteriye özel bir assessment ile doğrulanmalıdır."}
              </p>
            </section>
          </section>
        </Shell>
      )}

      {activeOfferingOnePager && (
        <div
          className="onepager-modal-backdrop"
          onClick={() => setActiveOfferingOnePager(null)}
        >
          <div
            className="onepager-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="onepager-modal-header">
              <div>
                <span>
                  {language === "EN" ? "Offering One-Pager" : "Offering Tek Sayfa Özeti"}
                </span>
                <h2>
                  {language === "EN"
                    ? activeOfferingOnePager.title
                    : activeOfferingOnePager.titleTR}
                </h2>
              </div>

              <button onClick={() => setActiveOfferingOnePager(null)}>×</button>
            </div>

            {activeOfferingOnePager.onePagerImage ? (
              <img
                className="onepager-image"
                src={activeOfferingOnePager.onePagerImage}
                alt={
                  language === "EN"
                    ? activeOfferingOnePager.onePagerTitle || activeOfferingOnePager.title
                    : activeOfferingOnePager.onePagerTitleTR || activeOfferingOnePager.titleTR
                }
              />
            ) : (
              <div className="onepager-fallback">
                <h3>
                  {language === "EN"
                    ? activeOfferingOnePager.title
                    : activeOfferingOnePager.titleTR}
                </h3>
                <p>
                  {language === "EN"
                    ? activeOfferingOnePager.pitch
                    : activeOfferingOnePager.pitchTR}
                </p>

                <div className="onepager-fallback-grid">
                  <div>
                    <span>{language === "EN" ? "Expected Timeline" : "Beklenen Takvim"}</span>
                    <strong>
                      {language === "EN"
                        ? activeOfferingOnePager.expectedProjectTimeline.summary
                        : activeOfferingOnePager.expectedProjectTimeline.summaryTR}
                    </strong>
                  </div>

                  <div>
                    <span>{language === "EN" ? "Recommended Next Step" : "Önerilen Sonraki Adım"}</span>
                    <strong>
                      {language === "EN"
                        ? activeOfferingOnePager.recommendedNextStep
                        : activeOfferingOnePager.recommendedNextStepTR}
                    </strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;