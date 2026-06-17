export const strategies = [
    {
        id: "sap_first",
        title: "SAP-first Strategy",
        titleTR: "SAP Öncelikli Strateji",
        description:
            "Best for SAP-heavy customers, S/4HANA transformations and SAP BDC opportunities.",
        descriptionTR:
            "SAP ağırlıklı müşteriler, S/4HANA dönüşümleri ve SAP BDC fırsatları için uygundur.",
    },
    {
        id: "microsoft_first",
        title: "Microsoft / Power BI-first Strategy",
        titleTR: "Microsoft / Power BI Öncelikli Strateji",
        description:
            "Best for customers with strong Microsoft ecosystem or Power BI demand.",
        descriptionTR:
            "Microsoft ekosistemi güçlü olan veya Power BI talebi bulunan müşteriler için uygundur.",
    },
    {
        id: "technology_neutral",
        title: "Technology-neutral Advisory Strategy",
        titleTR: "Teknoloji Bağımsız Danışmanlık Stratejisi",
        description:
            "Best for early-stage discovery, roadmap discussions and mixed technology landscapes.",
        descriptionTR:
            "Erken aşama keşif, roadmap görüşmeleri ve karma teknoloji yapıları için uygundur.",
    },
];

export const painCategories = [
    {
        id: "data_foundation",
        title: "Data Foundation & Integration",
        titleTR: "Veri Altyapısı & Entegrasyon",
        pains: [
            {
                id: "sap_non_sap_combine",
                en: "SAP and non-SAP data cannot be easily combined.",
                tr: "SAP ve SAP dışı veriler kolayca birleştirilemiyor.",
            },
            {
                id: "data_duplicated",
                en: "Data is duplicated across multiple systems.",
                tr: "Veri birden fazla sistemde tekrarlı şekilde tutuluyor.",
            },
            {
                id: "it_data_prep",
                en: "IT spends too much time preparing data for analytics.",
                tr: "IT ekipleri analitik için veri hazırlamaya çok fazla zaman harcıyor.",
            },
            {
                id: "pipelines_costly",
                en: "Data pipelines and interfaces are costly to maintain.",
                tr: "Veri akışları ve entegrasyonların bakımı maliyetli.",
            },
            {
                id: "no_reusable_foundation",
                en: "There is no reusable data foundation for analytics use cases.",
                tr: "Analitik use case’leri için tekrar kullanılabilir bir veri altyapısı yok.",
            },
            {
                id: "legacy_dwh_scale",
                en: "Legacy data warehouse or BI architecture is difficult to scale.",
                tr: "Mevcut data warehouse veya BI mimarisi ölçeklenmekte zorlanıyor.",
            },
            {
                id: "cloud_strategy_unclear",
                en: "Cloud data platform strategy is unclear.",
                tr: "Cloud veri platformu stratejisi net değil.",
            },
            {
                id: "data_quality_slow",
                en: "Data quality issues slow down reporting and analytics projects.",
                tr: "Veri kalitesi problemleri raporlama ve analitik projelerini yavaşlatıyor.",
            },
        ],
    },
    {
        id: "reporting",
        title: "Reporting & Decision-Making",
        titleTR: "Raporlama & Karar Alma",
        pains: [
            {
                id: "manual_excel_reports",
                en: "Reports are prepared manually in Excel.",
                tr: "Raporlar manuel olarak Excel’de hazırlanıyor.",
            },
            {
                id: "reports_not_on_time",
                en: "Management reports are not available on time.",
                tr: "Yönetim raporları zamanında hazır olmuyor.",
            },
            {
                id: "different_kpi_definitions",
                en: "Different departments use different KPI definitions.",
                tr: "Farklı departmanlar aynı KPI’ları farklı tanımlıyor.",
            },
            {
                id: "users_dont_trust_numbers",
                en: "Business users do not trust the reported numbers.",
                tr: "İş kullanıcıları raporlardaki rakamlara güvenmiyor.",
            },
            {
                id: "too_much_report_prep",
                en: "Too much time is spent on preparing reports instead of analysis.",
                tr: "Analiz yapmak yerine rapor hazırlamaya çok fazla zaman harcanıyor.",
            },
            {
                id: "dashboards_not_used",
                en: "Existing dashboards are not used effectively.",
                tr: "Mevcut dashboard’lar etkin kullanılmıyor.",
            },
            {
                id: "no_realtime_visibility",
                en: "Operational teams lack real-time visibility.",
                tr: "Operasyon ekipleri anlık görünürlüğe sahip değil.",
            },
            {
                id: "email_file_reporting",
                en: "Reports are distributed by email and file sharing instead of a single platform.",
                tr: "Raporlar tek bir platform yerine e-posta ve dosya paylaşımıyla dağıtılıyor.",
            },
        ],
    },
    {
        id: "planning",
        title: "Planning & Forecasting",
        titleTR: "Planlama & Tahminleme",
        pains: [
            {
                id: "budget_forecast_long",
                en: "Budgeting and forecasting processes take too long.",
                tr: "Bütçe ve forecast süreçleri çok uzun sürüyor.",
            },
            {
                id: "planning_excel_files",
                en: "Planning is managed through disconnected Excel files.",
                tr: "Planlama birbirinden kopuk Excel dosyalarıyla yönetiliyor.",
            },
            {
                id: "forecast_accuracy_low",
                en: "Forecast accuracy is low.",
                tr: "Forecast doğruluğu düşük.",
            },
            {
                id: "what_if_difficult",
                en: "Scenario and what-if analysis is difficult.",
                tr: "Senaryo ve what-if analizleri yapmak zor.",
            },
            {
                id: "plan_actual_manual",
                en: "Plan vs. actual analysis is slow or manual.",
                tr: "Plan-fiili karşılaştırmaları yavaş veya manuel yapılıyor.",
            },
            {
                id: "drivers_not_connected",
                en: "Operational drivers are not connected to financial plans.",
                tr: "Operasyonel göstergeler finansal planlarla bağlantılı değil.",
            },
            {
                id: "plans_not_integrated",
                en: "Workforce, OPEX, CAPEX or sales planning are not integrated.",
                tr: "Workforce, OPEX, CAPEX veya satış planları entegre değil.",
            },
            {
                id: "versions_approvals_hard",
                en: "Planning versions and approvals are difficult to control.",
                tr: "Planlama versiyonları ve onay süreçleri zor yönetiliyor.",
            },
        ],
    },
    {
        id: "profitability",
        title: "Profitability & Performance Management",
        titleTR: "Kârlılık & Performans Yönetimi",
        pains: [
            {
                id: "profitability_not_visible",
                en: "Product, customer or channel profitability is not clearly visible.",
                tr: "Ürün, müşteri veya kanal kârlılığı net görülemiyor.",
            },
            {
                id: "margin_manual",
                en: "Margin analysis is manual or not detailed enough.",
                tr: "Marj analizleri manuel veya yeterince detaylı değil.",
            },
            {
                id: "allocations_hard",
                en: "Cost allocations are difficult to manage and explain.",
                tr: "Maliyet dağıtımları yönetilmekte ve açıklanmakta zorlanıyor.",
            },
            {
                id: "profitability_not_connected_planning",
                en: "Profitability reports are not connected with planning assumptions.",
                tr: "Kârlılık raporları planlama varsayımlarıyla bağlantılı değil.",
            },
            {
                id: "profit_loss_drivers_unclear",
                en: "Management cannot easily understand what drives profit or loss.",
                tr: "Yönetim kâr veya zararı neyin tetiklediğini kolayca göremiyor.",
            },
            {
                id: "pricing_cost_not_together",
                en: "Pricing, discount and cost impacts are not analyzed together.",
                tr: "Fiyat, indirim ve maliyet etkileri birlikte analiz edilemiyor.",
            },
            {
                id: "profitability_too_high_level",
                en: "Profitability analysis is too high-level and lacks business detail.",
                tr: "Kârlılık analizi çok üst seviyede kalıyor ve iş detayı eksik.",
            },
            {
                id: "profitability_simulation_hard",
                en: "Scenario-based profitability simulation is difficult.",
                tr: "Senaryo bazlı kârlılık simülasyonu yapmak zor.",
            },
        ],
    },
    {
        id: "process",
        title: "Process & Operational Efficiency",
        titleTR: "Süreç & Operasyonel Verimlilik",
        pains: [
            {
                id: "bottlenecks_not_visible",
                en: "Process bottlenecks are not clearly visible.",
                tr: "Süreç darboğazları net şekilde görülemiyor.",
            },
            {
                id: "manual_steps_inefficient",
                en: "Manual process steps create inefficiency.",
                tr: "Manuel süreç adımları verimsizlik yaratıyor.",
            },
            {
                id: "rework_not_quantified",
                en: "Process deviations and rework are difficult to quantify.",
                tr: "Süreç sapmaları ve tekrar işler ölçülemiyor.",
            },
            {
                id: "automation_not_prioritized",
                en: "Automation opportunities are not prioritized by value.",
                tr: "Otomasyon fırsatları değer etkisine göre önceliklendirilmiyor.",
            },
            {
                id: "process_improvement_not_measured",
                en: "The customer cannot clearly measure process improvement potential.",
                tr: "Müşteri süreç iyileştirme potansiyelini net ölçemiyor.",
            },
            {
                id: "process_delays",
                en: "Order-to-cash, procure-to-pay or finance processes have delays.",
                tr: "Order-to-cash, procure-to-pay veya finans süreçlerinde gecikmeler var.",
            },
            {
                id: "highest_process_impact_unknown",
                en: "Teams do not know which process issues create the highest business impact.",
                tr: "Ekipler hangi süreç problemlerinin en yüksek iş etkisini yarattığını bilmiyor.",
            },
            {
                id: "static_process_reporting",
                en: "Process performance is monitored through static reports instead of data-driven insights.",
                tr: "Süreç performansı veri odaklı içgörüler yerine statik raporlarla takip ediliyor.",
            },
        ],
    },
];

export const useCases = [
    {
        id: "sap_non_sap_data_integration",
        category: "Data Foundation & Integration",
        categoryTR: "Veri Altyapısı & Entegrasyon",
        title: "SAP + non-SAP Data Integration",
        titleTR: "SAP + SAP Dışı Veri Entegrasyonu",
        description:
            "Combine SAP and non-SAP data sources to create a unified analytics foundation.",
        descriptionTR:
            "SAP ve SAP dışı veri kaynaklarını birleştirerek ortak bir analitik veri temeli oluşturmak.",
        valueType: "Estimated IT Cost Avoidance",
        valueTypeTR: "Tahmini IT Maliyet Önleme",
        calculationModel: "CM8",
        valueMeasurement: "score",
        strategicValueType: "Data Integration Readiness",
        strategicValueTypeTR: "Veri Entegrasyonu Hazırlığı",

        strategicInputTitle: "Data Integration Readiness",
        strategicInputTitleTR: "Veri Entegrasyonu Hazırlığı",
        solutions: {
            sap_first: ["SAP BDC", "SAP Datasphere", "Data Products", "SAC Reporting"],
            microsoft_first: [
                "Microsoft Fabric",
                "Power BI",
                "Data Factory",
                "SAP data integration",
            ],
            technology_neutral: [
                "Data integration assessment",
                "Target architecture",
                "Platform recommendation",
            ],
        },
    },
    {
        id: "data_product_reuse",
        category: "Data Foundation & Integration",
        categoryTR: "Veri Altyapısı & Entegrasyon",
        title: "Data Product Reuse",
        titleTR: "Veri Ürünü Tekrar Kullanımı",
        description:
            "Create reusable data products that can serve multiple reporting, planning and AI use cases.",
        descriptionTR:
            "Raporlama, planlama ve AI use case’lerinde tekrar kullanılabilecek veri ürünleri oluşturmak.",
        valueType: "Estimated IT Cost Avoidance",
        valueTypeTR: "Tahmini IT Maliyet Kaçınımı",
        strategicValueType: "Reuse & Governance Impact",
        strategicValueTypeTR: "Reuse & Yönetişim Etkisi",

        strategicInputTitle: "Reuse & Governance Assumptions",
        strategicInputTitleTR: "Reuse & Yönetişim Varsayımları",
        calculationModel: "CM9",
        valueMeasurement: "hybrid",
        solutions: {
            sap_first: ["SAP BDC", "SAP Datasphere", "SAP Data Products", "SAC consumption"],
            microsoft_first: [
                "Microsoft Fabric",
                "OneLake",
                "Power BI semantic model",
            ],
            technology_neutral: [
                "Data product design",
                "Data domain modeling",
                "Governance framework",
            ],
        },
    },
    {
        id: "legacy_dwh_modernization",
        category: "Data Foundation & Integration",
        categoryTR: "Veri Altyapısı & Entegrasyon",
        title: "Legacy Data Warehouse Modernization",
        titleTR: "Eski Data Warehouse Modernizasyonu",
        description:
            "Modernize legacy data warehouse and BI architecture to improve scalability, performance and maintainability.",
        descriptionTR:
            "Eski data warehouse ve BI mimarisini daha ölçeklenebilir, performanslı ve sürdürülebilir hale getirmek.",
        valueType: "Estimated IT Cost Avoidance",
        valueTypeTR: "Tahmini IT Maliyet Önleme",
        calculationModel: "CM8",
        valueMeasurement: "score",
        strategicValueType: "Modernization Readiness",
        strategicValueTypeTR: "Modernizasyon Hazırlık",

        strategicInputTitle: "Modernization Readiness Assumptions",
        strategicInputTitleTR: "Modernizasyon Hazırlık Varsayımları",
        solutions: {
            sap_first: ["SAP BW modernization", "SAP Datasphere", "SAP BDC", "SAP HANA"],
            microsoft_first: [
                "Microsoft Fabric",
                "Power BI",
                "Lakehouse modernization",
            ],
            technology_neutral: [
                "DWH assessment",
                "Modernization roadmap",
                "Platform selection",
            ],
        },
    },
    {
        id: "cloud_data_platform_roadmap",
        category: "Data Foundation & Integration",
        categoryTR: "Veri Altyapısı & Entegrasyon",
        title: "Cloud Data Platform Roadmap",
        titleTR: "Cloud Veri Platformu Yol Haritası",
        description:
            "Define the right cloud data platform strategy based on business needs, existing landscape and future analytics goals.",
        descriptionTR:
            "İş ihtiyaçları, mevcut sistem yapısı ve gelecek analitik hedeflerine göre doğru cloud veri platformu stratejisini belirlemek.",
        valueType: "Strategic Value Score",
        valueTypeTR: "Stratejik Değer Skoru",
        calculationModel: "CM8",
        valueMeasurement: "score",
        strategicValueType: "Platform Readiness",
        strategicValueTypeTR: "Platform Hazırlık",

        strategicInputTitle: "Platform Readiness Assumptions",
        strategicInputTitleTR: "Platform Hazırlık Varsayımları",
        solutions: {
            sap_first: ["SAP BDC", "SAP Datasphere", "SAP Data Products", "SAC"],
            microsoft_first: [
                "Microsoft Fabric",
                "OneLake",
                "Power BI",
            ],
            technology_neutral: [
                "Cloud platform assessment",
                "Architecture blueprint",
                "Roadmap",
            ],
        },
    },
    {
        id: "management_reporting_automation",
        category: "Reporting & Decision-Making",
        categoryTR: "Raporlama & Karar Alma",
        title: "Management Reporting Automation",
        titleTR: "Yönetim Raporlama Otomasyonu",
        description:
            "Automate recurring management reports and reduce manual Excel-based reporting effort.",
        descriptionTR:
            "Tekrarlayan yönetim raporlarını otomatikleştirerek manuel Excel bazlı raporlama eforunu azaltmak.",
        valueType: "Estimated Effort Saving",
        valueTypeTR: "Tahmini Efor Tasarrufu",
        calculationModel: "CM1",
        valueMeasurement: "monetary",
        solutions: {
            sap_first: ["SAC Reporting", "SAP Datasphere", "SAP BDC", "SAP BW integration"],
            microsoft_first: ["Power BI", "Microsoft Fabric", "SAP data integration"],
            technology_neutral: [
                "Reporting automation assessment",
                "BI roadmap",
                "KPI mapping",
            ],
        },
    },
    {
        id: "executive_kpi_cockpit",
        category: "Reporting & Decision-Making",
        categoryTR: "Raporlama & Karar Alma",
        title: "Executive KPI Cockpit",
        titleTR: "Yönetici KPI Kokpiti",
        description:
            "Create an executive-level cockpit to monitor key business KPIs from a single trusted view.",
        descriptionTR:
            "Üst yönetimin temel iş KPI’larını tek ve güvenilir ekrandan takip edebileceği bir kokpit oluşturmak.",
        valueType: "Executive Reporting Efficiency",
        valueTypeTR: "Yönetici Raporlama Verimliliği",

        strategicValueType: "Executive Visibility Score",
        strategicValueTypeTR: "Yönetici Görünürlük Skoru",

        strategicInputTitle: "Executive Visibility Assumptions",
        strategicInputTitleTR: "Yönetici Görünürlük Varsayımları",
        calculationModel: "CM12",
        valueMeasurement: "hybrid",
        solutions: {
            sap_first: ["SAC Reporting", "SAP Datasphere", "SAP BDC", "S/4HANA analytics"],
            microsoft_first: ["Power BI", "Microsoft Fabric", "Power BI semantic model"],
            technology_neutral: [
                "KPI framework",
                "Dashboard design",
                "Executive reporting blueprint",
            ],
        },
    },
    {
        id: "kpi_harmonization",
        category: "Reporting & Decision-Making",
        categoryTR: "Raporlama & Karar Alma",
        title: "KPI Harmonization",
        titleTR: "KPI Standardizasyonu",
        description:
            "Align KPI definitions across departments to create a consistent and trusted reporting language.",
        descriptionTR:
            "Departmanlar arasında KPI tanımlarını hizalayarak ortak ve güvenilir bir raporlama dili oluşturmak.",
        valueType: "Strategic Value Score",
        valueTypeTR: "Stratejik Değer Skoru",
        calculationModel: "CM8",
        valueMeasurement: "score",
        strategicValueType: "KPI Governance Score",
        strategicValueTypeTR: "KPI Yönetişim Skoru",

        strategicInputTitle: "KPI Governance Assumptions",
        strategicInputTitleTR: "KPI Yönetişim Varsayımları",
        solutions: {
            sap_first: ["SAP Datasphere semantic layer", "SAC Reporting", "SAP BDC"],
            microsoft_first: [
                "Power BI semantic model",
                "Microsoft Fabric",
                "Governance layer",
            ],
            technology_neutral: [
                "KPI dictionary",
                "Business glossary",
                "Governance framework",
            ],
        },
    },
    {
        id: "operational_visibility_dashboard",
        category: "Reporting & Decision-Making",
        categoryTR: "Raporlama & Karar Alma",
        title: "Operational Visibility Dashboard",
        titleTR: "Operasyonel Görünürlük Dashboard’u",
        description:
            "Provide operational teams with near real-time visibility into key process and performance indicators.",
        descriptionTR:
            "Operasyon ekiplerine temel süreç ve performans göstergelerinde anlık veya anlığa yakın görünürlük sağlamak.",
        valueType: "Operational Time Saving",
        valueTypeTR: "Operasyonel Zaman Tasarrufu",

        strategicValueType: "Operational Visibility Score",
        strategicValueTypeTR: "Operasyonel Görünürlük Skoru",

        strategicInputTitle: "Operational Visibility Assumptions",
        strategicInputTitleTR: "Operasyonel Görünürlük Varsayımları",

        valueMeasurement: "hybrid",
        calculationModel: "CM13",
        solutions: {
            sap_first: ["SAC Reporting", "SAP Datasphere", "SAP BDC", "S/4HANA integration"],
            microsoft_first: [
                "Power BI",
                "Microsoft Fabric",
                "SAP integration",
            ],
            technology_neutral: [
                "Operational reporting assessment",
                "Dashboard roadmap",
                "Data availability review",
            ],
        },
    },
    {
        id: "budget_cycle_optimization",
        category: "Planning & Forecasting",
        categoryTR: "Planlama & Tahminleme",
        title: "Budget Cycle Optimization",
        titleTR: "Bütçe Süreci Optimizasyonu",
        description:
            "Shorten budgeting cycles by replacing disconnected Excel processes with structured and integrated planning.",
        descriptionTR:
            "Kopuk Excel süreçlerini yapılandırılmış ve entegre planlama ile değiştirerek bütçe süresini kısaltmak.",
        valueType: "Estimated Effort Saving",
        valueTypeTR: "Tahmini Efor Tasarrufu",
        calculationModel: "CM1",
        valueMeasurement: "monetary",
        solutions: {
            sap_first: ["SAC Planning", "SAP Datasphere", "SAP BPC modernization", "SAP FM"],
            microsoft_first: [
                "Power BI",
                "Microsoft Fabric",
                "Selected planning platform",
            ],
            technology_neutral: [
                "Planning process assessment",
                "Target planning model",
                "Roadmap",
            ],
        },
    },
    {
        id: "forecast_accuracy_improvement",
        category: "Planning & Forecasting",
        categoryTR: "Planlama & Tahminleme",
        title: "Forecast Accuracy Improvement",
        titleTR: "Forecast Doğruluğu İyileştirme",
        description:
            "Improve forecast accuracy by using historical data, business drivers and predictive methods.",
        descriptionTR:
            "Geçmiş veri, iş sürücüleri ve tahminleme yöntemleriyle forecast doğruluğunu artırmak.",
        valueType: "Estimated Forecast Accuracy",
        valueTypeTR: "Tahmini Forecast Doğruluğu",
        strategicValueType: "Forecast Confidence Impact",
        strategicValueTypeTR: "Forecast Güven Etkisi",

        strategicInputTitle: "Forecast Impact Assumptions",
        strategicInputTitleTR: "Forecast Etki Varsayımları",
        calculationModel: "CM10",
        valueMeasurement: "hybrid",
        solutions: {
            sap_first: ["SAC Planning", "SAC Predictive Planning", "SAP Datasphere"],
            microsoft_first: ["Power BI", "Microsoft Fabric", "Azure AI / Azure ML"],
            technology_neutral: [
                "Forecasting assessment",
                "Model comparison",
                "Predictive use case validation",
            ],
        },
    },
    {
        id: "integrated_financial_planning",
        category: "Planning & Forecasting",
        categoryTR: "Planlama & Tahminleme",
        title: "Integrated Financial Planning",
        titleTR: "Entegre Finansal Planlama",
        description:
            "Connect sales, OPEX, CAPEX, workforce and financial plans into one integrated planning model.",
        descriptionTR:
            "Satış, OPEX, CAPEX, workforce ve finansal planları tek bir entegre planlama modelinde birleştirmek.",
        valueType: "Estimated Planning Efficiency",
        valueTypeTR: "Tahmini Planlama Verimliliği",

        strategicValueType: "Strategic Impact Score",
        strategicValueTypeTR: "Stratejik Etki Skoru",

        strategicInputTitle: "Strategic Impact Assumptions",
        strategicInputTitleTR: "Stratejik Etki Varsayımları",

        valueMeasurement: "hybrid",
        calculationModel: "CM7",
        solutions: {
            sap_first: ["SAC Planning", "SAP Datasphere", "SAP BPC modernization", "SAP FM"],
            microsoft_first: [
                "Power BI reporting layer",
                "Azure integration",
                "Planning platform integration",
            ],
            technology_neutral: [
                "Integrated planning blueprint",
                "Planning maturity assessment",
                "Roadmap",
            ],
        },
    },
    {
        id: "workforce_opex_capex_planning",
        category: "Planning & Forecasting",
        categoryTR: "Planlama & Tahminleme",
        title: "Workforce / OPEX / CAPEX Planning",
        titleTR: "Workforce / OPEX / CAPEX Planlama",
        description:
            "Standardize and automate workforce, operational expense and capital expense planning processes.",
        descriptionTR:
            "Workforce, operasyonel gider ve yatırım harcaması planlama süreçlerini standartlaştırmak ve otomatikleştirmek.",
        valueType: "Workforce & Cost Planning Efficiency",
        valueTypeTR: "Workforce & Maliyet Planlama Verimliliği",
        strategicValueType: "Planning Alignment Score",
        strategicValueTypeTR: "Planlama Hizalanma Skoru",

        strategicInputTitle: "Planning Alignment Assumptions",
        strategicInputTitleTR: "Planlama Hizalanma Varsayımları",
        calculationModel: "CM11",
        valueMeasurement: "hybrid",
        solutions: {
            sap_first: [
                "SAC Planning",
                "SAP Datasphere",
                "SuccessFactors integration where relevant",
                "SAP FM",
            ],
            microsoft_first: [
                "Power BI",
                "Microsoft Fabric",
                "Planning platform integration",
            ],
            technology_neutral: [
                "Planning template design",
                "Driver-based planning assessment",
                "Process redesign",
            ],
        },
    },
    {
        id: "product_customer_profitability",
        category: "Profitability & Performance Management",
        categoryTR: "Kârlılık & Performans Yönetimi",
        title: "Product / Customer Profitability Analysis",
        titleTR: "Ürün / Müşteri Kârlılık Analizi",
        description:
            "Analyze profitability by product, customer, channel or region to identify value creation and leakage areas.",
        descriptionTR:
            "Ürün, müşteri, kanal veya bölge bazında kârlılığı analiz ederek değer yaratan ve değer kaybettiren alanları belirlemek.",
        valueType: "Profitability Improvement Impact",
        valueTypeTR: "Kârlılık İyileştirme Etkisi",

        strategicValueType: "Profitability Visibility Score",
        strategicValueTypeTR: "Kârlılık Görünürlüğü Skoru",

        strategicInputTitle: "Profitability Visibility Assumptions",
        strategicInputTitleTR: "Kârlılık Görünürlüğü Varsayımları",

        valueMeasurement: "hybrid",
        calculationModel: "CM14",
        solutions: {
            sap_first: ["SAC Reporting", "SAC Planning", "SAP Datasphere", "SAP BDC", "SAP PaPM"],
            microsoft_first: [
                "Power BI",
                "Microsoft Fabric",
                "SAP finance data integration",
            ],
            technology_neutral: [
                "Profitability model design",
                "KPI framework",
                "Data assessment",
            ],
        },
    },
    {
        id: "margin_cost_driver_analysis",
        category: "Profitability & Performance Management",
        categoryTR: "Kârlılık & Performans Yönetimi",
        title: "Margin & Cost Driver Analysis",
        titleTR: "Marj & Maliyet Sürücüleri Analizi",
        description: "Identify the key cost and margin drivers behind business performance.",
        descriptionTR:
            "İş performansının arkasındaki temel maliyet ve marj sürücülerini belirlemek.",
        valueType: "Estimated Business Impact",
        valueTypeTR: "Tahmini İş Etkisi",
        calculationModel: "CM8",
        valueMeasurement: "score",
        strategicValueType: "Margin Visibility Score",
        strategicValueTypeTR: "Marj Görünürlüğü Skoru",

        strategicInputTitle: "Margin Visibility Assumptions",
        strategicInputTitleTR: "Marj Görünürlüğü Varsayımları",
        solutions: {
            sap_first: ["SAC Reporting", "SAP Datasphere", "SAP BDC", "SAP finance integration"],
            microsoft_first: ["Power BI", "Microsoft Fabric", "SAP finance integration"],
            technology_neutral: [
                "Cost driver assessment",
                "Profitability dashboard blueprint",
                "KPI design",
            ],
        },
    },
    {
        id: "cost_allocation_automation",
        category: "Profitability & Performance Management",
        categoryTR: "Kârlılık & Performans Yönetimi",
        title: "Cost Allocation Automation",
        titleTR: "Maliyet Dağıtımı Otomasyonu",
        description:
            "Automate cost allocation logic and improve transparency of allocation results.",
        descriptionTR:
            "Maliyet dağıtım mantığını otomatikleştirerek dağıtım sonuçlarının şeffaflığını artırmak.",
        valueType: "Estimated Effort Saving",
        valueTypeTR: "Tahmini Efor Tasarrufu",
        calculationModel: "CM1",
        valueMeasurement: "monetary",
        solutions: {
            sap_first: ["SAC Planning", "SAP Datasphere", "SAP BDC", "SAP PaPM"],
            microsoft_first: ["Power BI", "Microsoft Fabric", "Allocation logic layer"],
            technology_neutral: [
                "Allocation model design",
                "Process assessment",
                "Automation roadmap",
            ],
        },
    },
    {
        id: "profitability_simulation",
        category: "Profitability & Performance Management",
        categoryTR: "Kârlılık & Performans Yönetimi",
        title: "Profitability Simulation",
        titleTR: "Kârlılık Simülasyonu",
        description:
            "Simulate the impact of price, volume, discount, cost and mix changes on profitability.",
        descriptionTR:
            "Fiyat, hacim, indirim, maliyet ve ürün karması değişimlerinin kârlılık etkisini simüle etmek.",
        valueType: "Profitability Simulation Impact",
        valueTypeTR: "Kârlılık Simülasyon Etkisi",

        strategicValueType: "Scenario Impact Score",
        strategicValueTypeTR: "Senaryo Etki Skoru",

        strategicInputTitle: "Scenario Impact Assumptions",
        strategicInputTitleTR: "Senaryo Etki Varsayımları",

        valueMeasurement: "hybrid",
        calculationModel: "CM15",
        solutions: {
            sap_first: ["SAC Planning", "SAC Reporting", "SAP Datasphere", "SAP PaPM"],
            microsoft_first: [
                "Power BI",
                "Microsoft Fabric",
                "Planning integration",
            ],
            technology_neutral: [
                "Simulation model design",
                "Driver-based profitability assessment",
                "Roadmap",
            ],
        },
    },
    {
        id: "process_mining_value_assessment",
        category: "Process & Operational Efficiency",
        categoryTR: "Süreç & Operasyonel Verimlilik",
        title: "Process Mining Value Assessment",
        titleTR: "Process Mining Değer Analizi",
        description:
            "Identify and quantify process improvement opportunities using process data.",
        descriptionTR:
            "Süreç verisini kullanarak süreç iyileştirme fırsatlarını belirlemek ve parasal etkisini ölçmek.",
        valueType: "Process Efficiency Opportunity",
        valueTypeTR: "Süreç Verimlilik Fırsatı",

        strategicValueType: "Process Transparency Score",
        strategicValueTypeTR: "Süreç Şeffaflığı Skoru",

        strategicInputTitle: "Process Transparency Assumptions",
        strategicInputTitleTR: "Süreç Şeffaflığı Varsayımları",

        valueMeasurement: "hybrid",
        calculationModel: "CM16",
        solutions: {
            sap_first: ["Celonis", "SAP Signavio", "SAP process data integration"],
            microsoft_first: [
                "Celonis / process data integration",
                "Power BI process reporting where relevant",
            ],
            technology_neutral: [
                "Process discovery",
                "Value assessment",
                "Automation opportunity analysis",
            ],
        },
    },
    {
        id: "process_bottleneck_analysis",
        category: "Process & Operational Efficiency",
        categoryTR: "Süreç & Operasyonel Verimlilik",
        title: "Process Bottleneck Analysis",
        titleTR: "Süreç Darboğaz Analizi",
        description:
            "Detect process delays, bottlenecks and deviations that slow down business operations.",
        descriptionTR:
            "İş operasyonlarını yavaşlatan süreç gecikmelerini, darboğazları ve sapmaları tespit etmek.",
        valueType: "Estimated Time Saving",
        valueTypeTR: "Tahmini Süre Tasarrufu",
        calculationModel: "CM2",
        valueMeasurement: "monetary",
        solutions: {
            sap_first: ["Celonis", "SAP Signavio", "SAP process data integration"],
            microsoft_first: ["Process data integration", "Power BI operational dashboards"],
            technology_neutral: [
                "Process assessment",
                "Bottleneck analysis",
                "Process KPI framework",
            ],
        },
    },
    {
        id: "automation_opportunity_prioritization",
        category: "Process & Operational Efficiency",
        categoryTR: "Süreç & Operasyonel Verimlilik",
        title: "Automation Opportunity Prioritization",
        titleTR: "Otomasyon Fırsatlarının Önceliklendirilmesi",
        description:
            "Prioritize automation opportunities based on effort, frequency, business impact and expected value.",
        descriptionTR:
            "Otomasyon fırsatlarını efor, işlem sıklığı, iş etkisi ve beklenen değere göre önceliklendirmek.",
        valueType: "Automation Efficiency Opportunity",
        valueTypeTR: "Otomasyon Verimlilik Fırsatı",

        strategicValueType: "Automation Readiness Score",
        strategicValueTypeTR: "Otomasyon Hazırlık Skoru",

        strategicInputTitle: "Automation Readiness Assumptions",
        strategicInputTitleTR: "Otomasyon Hazırlık Varsayımları",

        valueMeasurement: "hybrid",
        calculationModel: "CM17",
        solutions: {
            sap_first: ["Celonis", "SAP Signavio", "SAP workflow / automation ecosystem"],
            microsoft_first: ["Power Platform", "Power BI", "Process data integration"],
            technology_neutral: [
                "Automation assessment",
                "Opportunity scoring model",
                "ROI prioritization",
            ],
        },
    },
    {
        id: "process_kpi_cockpit",
        category: "Process & Operational Efficiency",
        categoryTR: "Süreç & Operasyonel Verimlilik",
        title: "Process KPI Cockpit",
        titleTR: "Süreç KPI Kokpiti",
        description:
            "Monitor process performance through clear KPIs such as cycle time, rework, delays and compliance.",
        descriptionTR:
            "Süreç performansını süre, tekrar iş, gecikme ve uyum gibi KPI’larla takip etmek.",
        valueType: "Strategic Value Score",
        valueTypeTR: "Stratejik Değer Skoru",
        calculationModel: "CM8",
        valueMeasurement: "score",
        strategicValueType: "Process Visibility Score",
        strategicValueTypeTR: "Süreç Görünürlüğü Skoru",

        strategicInputTitle: "Process Visibility Assumptions",
        strategicInputTitleTR: "Süreç Görünürlüğü Varsayımları",
        solutions: {
            sap_first: ["SAC Reporting", "SAP Datasphere", "SAP BDC", "Celonis / Signavio data"],
            microsoft_first: ["Power BI", "Microsoft Fabric", "Process data integration"],
            technology_neutral: [
                "Process KPI design",
                "Dashboard blueprint",
                "Reporting roadmap",
            ],
        },
    },
];

export const strategyFitScores = {
    sap_first: {
        sap_non_sap_data_integration: 100,
        data_product_reuse: 95,
        legacy_dwh_modernization: 90,
        cloud_data_platform_roadmap: 90,
        management_reporting_automation: 85,
        executive_kpi_cockpit: 85,
        kpi_harmonization: 80,
        operational_visibility_dashboard: 80,
        budget_cycle_optimization: 95,
        forecast_accuracy_improvement: 90,
        integrated_financial_planning: 95,
        workforce_opex_capex_planning: 90,
        product_customer_profitability: 90,
        margin_cost_driver_analysis: 85,
        cost_allocation_automation: 90,
        profitability_simulation: 90,
        process_mining_value_assessment: 90,
        process_bottleneck_analysis: 85,
        automation_opportunity_prioritization: 85,
        process_kpi_cockpit: 80,
    },
    microsoft_first: {
        sap_non_sap_data_integration: 70,
        data_product_reuse: 80,
        legacy_dwh_modernization: 80,
        cloud_data_platform_roadmap: 85,
        management_reporting_automation: 95,
        executive_kpi_cockpit: 95,
        kpi_harmonization: 85,
        operational_visibility_dashboard: 95,
        budget_cycle_optimization: 60,
        forecast_accuracy_improvement: 80,
        integrated_financial_planning: 60,
        workforce_opex_capex_planning: 65,
        product_customer_profitability: 80,
        margin_cost_driver_analysis: 80,
        cost_allocation_automation: 65,
        profitability_simulation: 75,
        process_mining_value_assessment: 70,
        process_bottleneck_analysis: 75,
        automation_opportunity_prioritization: 85,
        process_kpi_cockpit: 90,
    },
    technology_neutral: {
        sap_non_sap_data_integration: 85,
        data_product_reuse: 90,
        legacy_dwh_modernization: 95,
        cloud_data_platform_roadmap: 100,
        management_reporting_automation: 80,
        executive_kpi_cockpit: 85,
        kpi_harmonization: 95,
        operational_visibility_dashboard: 80,
        budget_cycle_optimization: 80,
        forecast_accuracy_improvement: 85,
        integrated_financial_planning: 90,
        workforce_opex_capex_planning: 80,
        product_customer_profitability: 85,
        margin_cost_driver_analysis: 85,
        cost_allocation_automation: 80,
        profitability_simulation: 85,
        process_mining_value_assessment: 90,
        process_bottleneck_analysis: 90,
        automation_opportunity_prioritization: 90,
        process_kpi_cockpit: 85,
    },
};

export const painRelevanceScores = {
    sap_non_sap_combine: {
        sap_non_sap_data_integration: 100,
        data_product_reuse: 70,
        cloud_data_platform_roadmap: 60,
    },
    data_duplicated: {
        data_product_reuse: 90,
        sap_non_sap_data_integration: 70,
        legacy_dwh_modernization: 65,
    },
    it_data_prep: {
        data_product_reuse: 100,
        sap_non_sap_data_integration: 80,
        legacy_dwh_modernization: 60,
    },
    pipelines_costly: {
        legacy_dwh_modernization: 90,
        data_product_reuse: 70,
        cloud_data_platform_roadmap: 60,
    },
    no_reusable_foundation: {
        data_product_reuse: 100,
        cloud_data_platform_roadmap: 70,
        sap_non_sap_data_integration: 60,
    },
    legacy_dwh_scale: {
        legacy_dwh_modernization: 100,
        cloud_data_platform_roadmap: 80,
        data_product_reuse: 60,
    },
    cloud_strategy_unclear: {
        cloud_data_platform_roadmap: 100,
        legacy_dwh_modernization: 60,
    },
    data_quality_slow: {
        data_product_reuse: 70,
        kpi_harmonization: 60,
        management_reporting_automation: 40,
    },

    manual_excel_reports: {
        management_reporting_automation: 100,
        executive_kpi_cockpit: 60,
        kpi_harmonization: 50,
    },
    reports_not_on_time: {
        management_reporting_automation: 90,
        executive_kpi_cockpit: 75,
        operational_visibility_dashboard: 60,
    },
    different_kpi_definitions: {
        kpi_harmonization: 100,
        executive_kpi_cockpit: 70,
        data_product_reuse: 40,
    },
    users_dont_trust_numbers: {
        kpi_harmonization: 90,
        executive_kpi_cockpit: 80,
        data_product_reuse: 50,
    },
    too_much_report_prep: {
        management_reporting_automation: 100,
        data_product_reuse: 50,
        kpi_harmonization: 40,
    },
    dashboards_not_used: {
        executive_kpi_cockpit: 80,
        operational_visibility_dashboard: 70,
        kpi_harmonization: 50,
    },
    no_realtime_visibility: {
        operational_visibility_dashboard: 100,
        process_kpi_cockpit: 50,
    },
    email_file_reporting: {
        management_reporting_automation: 90,
        executive_kpi_cockpit: 60,
    },

    budget_forecast_long: {
        budget_cycle_optimization: 100,
        integrated_financial_planning: 70,
        workforce_opex_capex_planning: 60,
    },
    planning_excel_files: {
        budget_cycle_optimization: 90,
        integrated_financial_planning: 80,
        workforce_opex_capex_planning: 60,
    },
    forecast_accuracy_low: {
        forecast_accuracy_improvement: 100,
        integrated_financial_planning: 50,
    },
    what_if_difficult: {
        profitability_simulation: 70,
        integrated_financial_planning: 80,
        forecast_accuracy_improvement: 50,
    },
    plan_actual_manual: {
        integrated_financial_planning: 80,
        budget_cycle_optimization: 70,
        management_reporting_automation: 50,
    },
    drivers_not_connected: {
        integrated_financial_planning: 90,
        forecast_accuracy_improvement: 60,
        profitability_simulation: 60,
    },
    plans_not_integrated: {
        integrated_financial_planning: 100,
        workforce_opex_capex_planning: 85,
    },
    versions_approvals_hard: {
        budget_cycle_optimization: 80,
        integrated_financial_planning: 60,
    },

    profitability_not_visible: {
        product_customer_profitability: 100,
        margin_cost_driver_analysis: 80,
        executive_kpi_cockpit: 50,
    },
    margin_manual: {
        margin_cost_driver_analysis: 100,
        product_customer_profitability: 75,
    },
    allocations_hard: {
        cost_allocation_automation: 100,
        margin_cost_driver_analysis: 60,
    },
    profitability_not_connected_planning: {
        profitability_simulation: 90,
        integrated_financial_planning: 70,
        product_customer_profitability: 60,
    },
    profit_loss_drivers_unclear: {
        margin_cost_driver_analysis: 100,
        product_customer_profitability: 80,
    },
    pricing_cost_not_together: {
        profitability_simulation: 100,
        margin_cost_driver_analysis: 70,
    },
    profitability_too_high_level: {
        product_customer_profitability: 90,
        margin_cost_driver_analysis: 70,
    },
    profitability_simulation_hard: {
        profitability_simulation: 100,
        integrated_financial_planning: 60,
    },

    bottlenecks_not_visible: {
        process_bottleneck_analysis: 100,
        process_mining_value_assessment: 80,
        process_kpi_cockpit: 60,
    },
    manual_steps_inefficient: {
        automation_opportunity_prioritization: 90,
        process_mining_value_assessment: 80,
    },
    rework_not_quantified: {
        process_mining_value_assessment: 90,
        process_bottleneck_analysis: 70,
        process_kpi_cockpit: 50,
    },
    automation_not_prioritized: {
        automation_opportunity_prioritization: 100,
        process_mining_value_assessment: 70,
    },
    process_improvement_not_measured: {
        process_mining_value_assessment: 100,
        process_kpi_cockpit: 70,
    },
    process_delays: {
        process_bottleneck_analysis: 95,
        process_mining_value_assessment: 80,
    },
    highest_process_impact_unknown: {
        process_mining_value_assessment: 90,
        automation_opportunity_prioritization: 80,
    },
    static_process_reporting: {
        process_kpi_cockpit: 90,
        operational_visibility_dashboard: 60,
    },
};

export function calculateRecommendations(selectedStrategy, selectedPainIds) {
    const results = useCases.map((useCase) => {
        const relevanceScores = selectedPainIds
            .map((painId) => painRelevanceScores[painId]?.[useCase.id] || 0)
            .filter((score) => score > 0);

        const strongestPainScore =
            relevanceScores.length > 0 ? Math.max(...relevanceScores) : 0;

        const additionalPainBonus = relevanceScores
            .filter((score) => score !== strongestPainScore)
            .reduce((sum, score) => sum + score * 0.15, 0);

        const painScore = Math.min(
            100,
            Math.round(strongestPainScore + additionalPainBonus)
        );

        const strategyScore = strategyFitScores[selectedStrategy]?.[useCase.id] || 50;

        const finalScore = Math.round(painScore * 0.7 + strategyScore * 0.3);

        const matchedPainIds = selectedPainIds.filter(
            (painId) => painRelevanceScores[painId]?.[useCase.id]
        );

        return {
            ...useCase,
            painScore,
            strategyScore,
            finalScore,
            matchedPainIds,
        };
    });

    return results
        .filter((item) => item.finalScore >= 55)
        .sort((a, b) => b.finalScore - a.finalScore)
        .slice(0, 8);
}

export const calculationModels = {
    CM1: {
        label: "Estimated Effort Saving",
        labelTR: "Tahmini Efor Tasarrufu",
        inputs: [
            {
                id: "activities",
                label: "Number of activities",
                labelTR: "Aktivite sayısı",
                defaultValue: 80,
            },
            {
                id: "timePerActivity",
                label: "Time per activity (hours)",
                labelTR: "Aktivite başına süre (saat)",
                defaultValue: 3,
            },
            {
                id: "frequency",
                label: "Frequency per year",
                labelTR: "Yıllık tekrar sayısı",
                defaultValue: 12,
            },
            {
                id: "hourlyCost",
                label: "Average hourly cost",
                labelTR: "Ortalama saatlik maliyet",
                defaultValue: 20,
            },
            {
                id: "improvementRate",
                label: "Improvement rate (%)",
                labelTR: "İyileştirme oranı (%)",
                defaultValue: 40,
            },
        ],
        calculate: (v) =>
            v.activities *
            v.timePerActivity *
            v.frequency *
            v.hourlyCost *
            (v.improvementRate / 100),
    },

    CM2: {
        label: "Estimated Time Saving",
        labelTR: "Tahmini Süre Tasarrufu",
        inputs: [
            {
                id: "currentCycle",
                label: "Current cycle time (days)",
                labelTR: "Mevcut süreç süresi (gün)",
                defaultValue: 10,
            },
            {
                id: "targetCycle",
                label: "Target cycle time (days)",
                labelTR: "Hedef süreç süresi (gün)",
                defaultValue: 6,
            },
            {
                id: "affectedVolume",
                label: "Affected people or process volume",
                labelTR: "Etkilenen kişi veya işlem hacmi",
                defaultValue: 25,
            },
            {
                id: "dailyCost",
                label: "Daily cost or impact value",
                labelTR: "Günlük maliyet veya etki değeri",
                defaultValue: 100,
            },
            {
                id: "realizationRate",
                label: "Realization rate (%)",
                labelTR: "Gerçekleşme oranı (%)",
                defaultValue: 40,
            },
        ],
        calculate: (v) =>
            Math.max(0, v.currentCycle - v.targetCycle) *
            v.affectedVolume *
            v.dailyCost *
            (v.realizationRate / 100),
    },

    CM3: {
        label: "Estimated IT Cost Avoidance",
        labelTR: "Tahmini IT Maliyet Önleme",
        inputs: [
            {
                id: "useCases",
                label: "Analytics use cases per year",
                labelTR: "Yıllık analitik use case sayısı",
                defaultValue: 20,
            },
            {
                id: "prepDays",
                label: "Data preparation days per use case",
                labelTR: "Use case başına veri hazırlık günü",
                defaultValue: 15,
            },
            {
                id: "dailyITCost",
                label: "Average daily IT cost",
                labelTR: "Ortalama günlük IT maliyeti",
                defaultValue: 200,
            },
            {
                id: "reductionRate",
                label: "Reduction / reuse rate (%)",
                labelTR: "Azaltım / tekrar kullanım oranı (%)",
                defaultValue: 40,
            },
        ],
        calculate: (v) =>
            v.useCases * v.prepDays * v.dailyITCost * (v.reductionRate / 100),
    },

    CM4: {
        label: "Estimated Business Impact",
        labelTR: "Tahmini İş Etkisi",
        inputs: [
            {
                id: "businessVolume",
                label: "Relevant business volume",
                labelTR: "İlgili iş hacmi",
                defaultValue: 30000000,
            },
            {
                id: "improvementRate",
                label: "Improvement rate (%)",
                labelTR: "İyileştirme oranı (%)",
                defaultValue: 3,
            },
            {
                id: "impactFactor",
                label: "Financial impact factor (%)",
                labelTR: "Finansal etki katsayısı (%)",
                defaultValue: 10,
            },
            {
                id: "confidenceRate",
                label: "Realization confidence (%)",
                labelTR: "Gerçekleşme güven oranı (%)",
                defaultValue: 50,
            },
        ],
        calculate: (v) =>
            v.businessVolume *
            (v.improvementRate / 100) *
            (v.impactFactor / 100) *
            (v.confidenceRate / 100),
    },

    CM5: {
        label: "Strategic Value Score",
        labelTR: "Stratejik Değer Skoru",
        inputs: [
            {
                id: "issues",
                label: "Number of recurring issues",
                labelTR: "Tekrarlayan problem sayısı",
                defaultValue: 20,
            },
            {
                id: "resolutionHours",
                label: "Average resolution hours",
                labelTR: "Ortalama çözüm süresi",
                defaultValue: 4,
            },
            {
                id: "hourlyCost",
                label: "Average hourly cost",
                labelTR: "Ortalama saatlik maliyet",
                defaultValue: 25,
            },
            {
                id: "reductionRate",
                label: "Reduction rate (%)",
                labelTR: "Azaltım oranı (%)",
                defaultValue: 40,
            },
        ],
        calculate: (v) =>
            v.issues *
            v.resolutionHours *
            v.hourlyCost *
            (v.reductionRate / 100),
    },

    CM6: {
        label: "Estimated Process Efficiency Value",
        labelTR: "Tahmini Süreç Verimliliği Değeri",
        inputs: [
            {
                id: "manualSteps",
                label: "Number of manual process steps",
                labelTR: "Manuel süreç adımı sayısı",
                defaultValue: 50000,
            },
            {
                id: "minutesPerStep",
                label: "Average time per step (minutes)",
                labelTR: "Adım başına ortalama süre (dakika)",
                defaultValue: 5,
            },
            {
                id: "hourlyCost",
                label: "Average cost per hour",
                labelTR: "Saatlik ortalama maliyet",
                defaultValue: 30,
            },
            {
                id: "improvementRate",
                label: "Automation / improvement rate (%)",
                labelTR: "Otomasyon / iyileştirme oranı (%)",
                defaultValue: 40,
            },
        ],
        calculate: (v) =>
            v.manualSteps *
            (v.minutesPerStep / 60) *
            v.hourlyCost *
            (v.improvementRate / 100),
    },
    CM7: {
        outputType: "hybrid",

        label: "Integrated Planning Efficiency + Strategic Impact",
        labelTR: "Entegre Planlama Verimliliği + Stratejik Etki",

        inputs: [
            {
                id: "planningUsers",
                label: "Planning users",
                labelTR: "Planlama kullanıcıları",
                shortLabel: "Users",
                shortLabelTR: "Kullanıcı",
                defaultValue: 30,
                group: "monetary",
            },
            {
                id: "daysSavedPerCycle",
                label: "Days saved per planning cycle",
                labelTR: "Planlama döngüsü başına kazanılan gün",
                shortLabel: "Days Saved",
                shortLabelTR: "Gün Kazancı",
                defaultValue: 3,
                group: "monetary",
            },
            {
                id: "cyclesPerYear",
                label: "Planning cycles per year",
                labelTR: "Yıllık planlama döngüsü",
                shortLabel: "Cycles",
                shortLabelTR: "Döngü",
                defaultValue: 4,
                group: "monetary",
            },
            {
                id: "averageDailyCost",
                label: "Average daily cost",
                labelTR: "Ortalama günlük maliyet",
                shortLabel: "Daily Cost",
                shortLabelTR: "Günlük Maliyet",
                defaultValue: 200,
                group: "monetary",
            },
            {
                id: "realizationRate",
                label: "Realization rate (%)",
                labelTR: "Gerçekleşme oranı (%)",
                shortLabel: "Realization %",
                shortLabelTR: "Gerçekleşme %",
                defaultValue: 40,
                group: "monetary",
            },

            {
                id: "integrationImpact",
                label: "Connected planning impact score (1-5)",
                labelTR: "Entegre planlama etki skoru (1-5)",
                shortLabel: "Connected Planning",
                shortLabelTR: "Entegre Planlama",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "scenarioImpact",
                label: "Scenario capability impact score (1-5)",
                labelTR: "Senaryo yetkinliği etki skoru (1-5)",
                shortLabel: "Scenario Capability",
                shortLabelTR: "Senaryo Yetkinliği",
                defaultValue: 5,
                group: "score",
            },
            {
                id: "visibilityImpact",
                label: "Plan vs actual visibility impact score (1-5)",
                labelTR: "Plan-fiili görünürlük etki skoru (1-5)",
                shortLabel: "Plan vs Actual Visibility",
                shortLabelTR: "Plan-Fiili Görünürlük",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.planningUsers *
            v.daysSavedPerCycle *
            v.cyclesPerYear *
            v.averageDailyCost *
            (v.realizationRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.integrationImpact + v.scenarioImpact + v.visibilityImpact) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },
    CM8: {
        outputType: "score",

        label: "Strategic Readiness Score",
        labelTR: "Stratejik Hazırlık Skoru",

        inputs: [
            {
                id: "businessRelevance",
                label: "Business relevance score (1-5)",
                labelTR: "İş önemi skoru (1-5)",
                shortLabel: "Business Relevance",
                shortLabelTR: "İş Önemi",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "readiness",
                label: "Organizational / data readiness score (1-5)",
                labelTR: "Organizasyon / veri hazırlık skoru (1-5)",
                shortLabel: "Readiness",
                shortLabelTR: "Hazırlık",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "strategicImportance",
                label: "Strategic importance score (1-5)",
                labelTR: "Stratejik önem skoru (1-5)",
                shortLabel: "Strategic Importance",
                shortLabelTR: "Stratejik Önem",
                defaultValue: 5,
                group: "score",
            },
        ],

        calculate: () => 0,

        calculateScore: (v) => {
            const averageScore =
                (v.businessRelevance + v.readiness + v.strategicImportance) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },
    CM9: {
        outputType: "hybrid",

        label: "Data Product Reuse Value + Governance Impact",
        labelTR: "Data Product Yeniden Kullanım Değeri + Yönetişim Etkisi",

        inputs: [
            {
                id: "analyticsUseCasesPerYear",
                label: "Analytics use cases per year",
                labelTR: "Yıllık analitik use case sayısı",
                shortLabel: "Use Cases",
                shortLabelTR: "Use Case",
                defaultValue: 20,
                group: "monetary",
            },
            {
                id: "dataPreparationDays",
                label: "Data preparation days per use case",
                labelTR: "Use case başına veri hazırlık günü",
                shortLabel: "Prep Days",
                shortLabelTR: "Hazırlık Günü",
                defaultValue: 10,
                group: "monetary",
            },
            {
                id: "averageDailyITCost",
                label: "Average daily IT cost",
                labelTR: "Ortalama günlük IT maliyeti",
                shortLabel: "Daily IT Cost",
                shortLabelTR: "Günlük IT Maliyeti",
                defaultValue: 300,
                group: "monetary",
            },
            {
                id: "reuseRate",
                label: "Reduction / reuse rate (%)",
                labelTR: "Azalma / yeniden kullanım oranı (%)",
                shortLabel: "Reuse %",
                shortLabelTR: "Reuse %",
                defaultValue: 40,
                group: "monetary",
            },

            {
                id: "reusePotential",
                label: "Reuse potential score (1-5)",
                labelTR: "Yeniden kullanım potansiyeli skoru (1-5)",
                shortLabel: "Reuse Potential",
                shortLabelTR: "Reuse Potansiyeli",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "governanceReadiness",
                label: "Governance readiness score (1-5)",
                labelTR: "Yönetişim hazırlık skoru (1-5)",
                shortLabel: "Governance",
                shortLabelTR: "Yönetişim",
                defaultValue: 3,
                group: "score",
            },
            {
                id: "scalabilityImpact",
                label: "Scalability impact score (1-5)",
                labelTR: "Ölçeklenebilirlik etki skoru (1-5)",
                shortLabel: "Scalability",
                shortLabelTR: "Ölçeklenebilirlik",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.analyticsUseCasesPerYear *
            v.dataPreparationDays *
            v.averageDailyITCost *
            (v.reuseRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.reusePotential + v.governanceReadiness + v.scalabilityImpact) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },

    CM10: {
        outputType: "hybrid",

        label: "Forecast Accuracy Value + Confidence Impact",
        labelTR: "Tahmin Doğruluğu Değeri + Güven Etkisi",

        inputs: [
            {
                id: "annualRevenueOrCostBase",
                label: "Annual revenue / cost base",
                labelTR: "Yıllık gelir / maliyet bazı",
                shortLabel: "Base Amount",
                shortLabelTR: "Baz Tutar",
                defaultValue: 5000000,
                group: "monetary",
            },
            {
                id: "forecastErrorReduction",
                label: "Forecast error reduction (%)",
                labelTR: "Forecast hata azalımı (%)",
                shortLabel: "Error Reduction %",
                shortLabelTR: "Hata Azalımı %",
                defaultValue: 3,
                group: "monetary",
            },
            {
                id: "realizationRate",
                label: "Realization rate (%)",
                labelTR: "Gerçekleşme oranı (%)",
                shortLabel: "Realization %",
                shortLabelTR: "Gerçekleşme %",
                defaultValue: 40,
                group: "monetary",
            },

            {
                id: "forecastConfidence",
                label: "Forecast confidence improvement score (1-5)",
                labelTR: "Forecast güven artışı skoru (1-5)",
                shortLabel: "Forecast Confidence",
                shortLabelTR: "Forecast Güveni",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "driverBasedPlanning",
                label: "Driver-based planning capability score (1-5)",
                labelTR: "Driver bazlı planlama yetkinliği skoru (1-5)",
                shortLabel: "Driver-based Planning",
                shortLabelTR: "Driver Bazlı Planlama",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "decisionQuality",
                label: "Decision quality impact score (1-5)",
                labelTR: "Karar kalitesi etki skoru (1-5)",
                shortLabel: "Decision Quality",
                shortLabelTR: "Karar Kalitesi",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.annualRevenueOrCostBase *
            (v.forecastErrorReduction / 100) *
            (v.realizationRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.forecastConfidence + v.driverBasedPlanning + v.decisionQuality) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },
    CM11: {
        outputType: "hybrid",

        label: "Workforce & Cost Planning Value + Alignment Impact",
        labelTR: "Workforce & Maliyet Planlama Değeri + Hizalanma Etkisi",

        inputs: [
            {
                id: "planningActivities",
                label: "Number of planning activities",
                labelTR: "Planlama aktivitesi sayısı",
                shortLabel: "Activities",
                shortLabelTR: "Aktivite",
                defaultValue: 50,
                group: "monetary",
            },
            {
                id: "hoursPerActivity",
                label: "Time per activity (hours)",
                labelTR: "Aktivite başına süre (saat)",
                shortLabel: "Hours / Activity",
                shortLabelTR: "Saat / Aktivite",
                defaultValue: 2,
                group: "monetary",
            },
            {
                id: "frequencyPerYear",
                label: "Frequency per year",
                labelTR: "Yıllık frekans",
                shortLabel: "Frequency",
                shortLabelTR: "Frekans",
                defaultValue: 4,
                group: "monetary",
            },
            {
                id: "averageHourlyCost",
                label: "Average hourly cost",
                labelTR: "Ortalama saatlik maliyet",
                shortLabel: "Hourly Cost",
                shortLabelTR: "Saatlik Maliyet",
                defaultValue: 25,
                group: "monetary",
            },
            {
                id: "improvementRate",
                label: "Improvement rate (%)",
                labelTR: "İyileşme oranı (%)",
                shortLabel: "Improvement %",
                shortLabelTR: "İyileşme %",
                defaultValue: 40,
                group: "monetary",
            },

            {
                id: "costTransparency",
                label: "Cost transparency impact score (1-5)",
                labelTR: "Maliyet görünürlüğü etki skoru (1-5)",
                shortLabel: "Cost Transparency",
                shortLabelTR: "Maliyet Görünürlüğü",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "hrFinanceAlignment",
                label: "HR-finance alignment score (1-5)",
                labelTR: "HR-finans hizalanma skoru (1-5)",
                shortLabel: "HR-Finance Alignment",
                shortLabelTR: "HR-Finans Hizalanması",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "scenarioCapability",
                label: "Scenario planning capability score (1-5)",
                labelTR: "Senaryo planlama yetkinliği skoru (1-5)",
                shortLabel: "Scenario Capability",
                shortLabelTR: "Senaryo Yetkinliği",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.planningActivities *
            v.hoursPerActivity *
            v.frequencyPerYear *
            v.averageHourlyCost *
            (v.improvementRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.costTransparency + v.hrFinanceAlignment + v.scenarioCapability) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },

    CM12: {
        outputType: "hybrid",

        label: "Executive KPI Value + Visibility Impact",
        labelTR: "Yönetici KPI Değeri + Görünürlük Etkisi",

        inputs: [
            {
                id: "reportingActivities",
                label: "Number of recurring reports / KPI packs",
                labelTR: "Tekrarlayan rapor / KPI paketi sayısı",
                shortLabel: "Reports",
                shortLabelTR: "Rapor",
                defaultValue: 40,
                group: "monetary",
            },
            {
                id: "hoursPerReport",
                label: "Time per report cycle (hours)",
                labelTR: "Rapor döngüsü başına süre (saat)",
                shortLabel: "Hours / Report",
                shortLabelTR: "Saat / Rapor",
                defaultValue: 4,
                group: "monetary",
            },
            {
                id: "frequencyPerYear",
                label: "Frequency per year",
                labelTR: "Yıllık frekans",
                shortLabel: "Frequency",
                shortLabelTR: "Frekans",
                defaultValue: 12,
                group: "monetary",
            },
            {
                id: "averageHourlyCost",
                label: "Average hourly cost",
                labelTR: "Ortalama saatlik maliyet",
                shortLabel: "Hourly Cost",
                shortLabelTR: "Saatlik Maliyet",
                defaultValue: 25,
                group: "monetary",
            },
            {
                id: "automationRate",
                label: "Automation / efficiency rate (%)",
                labelTR: "Otomasyon / verimlilik oranı (%)",
                shortLabel: "Efficiency %",
                shortLabelTR: "Verimlilik %",
                defaultValue: 50,
                group: "monetary",
            },

            {
                id: "kpiStandardization",
                label: "KPI standardization score (1-5)",
                labelTR: "KPI standardizasyon skoru (1-5)",
                shortLabel: "KPI Standardization",
                shortLabelTR: "KPI Standardizasyonu",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "decisionVisibility",
                label: "Executive decision visibility score (1-5)",
                labelTR: "Yönetici karar görünürlüğü skoru (1-5)",
                shortLabel: "Decision Visibility",
                shortLabelTR: "Karar Görünürlüğü",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "executiveAdoption",
                label: "Executive adoption potential score (1-5)",
                labelTR: "Yönetici benimseme potansiyeli skoru (1-5)",
                shortLabel: "Executive Adoption",
                shortLabelTR: "Yönetici Benimsemesi",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.reportingActivities *
            v.hoursPerReport *
            v.frequencyPerYear *
            v.averageHourlyCost *
            (v.automationRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.kpiStandardization + v.decisionVisibility + v.executiveAdoption) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },

    CM13: {
        outputType: "hybrid",

        label: "Operational Visibility Value + Decision Impact",
        labelTR: "Operasyonel Görünürlük Değeri + Karar Etkisi",

        inputs: [
            {
                id: "operationalUsers",
                label: "Operational users",
                labelTR: "Operasyonel kullanıcı sayısı",
                shortLabel: "Users",
                shortLabelTR: "Kullanıcı",
                defaultValue: 25,
                group: "monetary",
            },
            {
                id: "timeSavedPerWeek",
                label: "Time saved per user per week (hours)",
                labelTR: "Kullanıcı başına haftalık zaman kazanımı (saat)",
                shortLabel: "Hours Saved",
                shortLabelTR: "Saat Kazancı",
                defaultValue: 2,
                group: "monetary",
            },
            {
                id: "workingWeeks",
                label: "Working weeks per year",
                labelTR: "Yıllık çalışma haftası",
                shortLabel: "Weeks",
                shortLabelTR: "Hafta",
                defaultValue: 48,
                group: "monetary",
            },
            {
                id: "averageHourlyCost",
                label: "Average hourly cost",
                labelTR: "Ortalama saatlik maliyet",
                shortLabel: "Hourly Cost",
                shortLabelTR: "Saatlik Maliyet",
                defaultValue: 25,
                group: "monetary",
            },
            {
                id: "realizationRate",
                label: "Realization rate (%)",
                labelTR: "Gerçekleşme oranı (%)",
                shortLabel: "Realization %",
                shortLabelTR: "Gerçekleşme %",
                defaultValue: 50,
                group: "monetary",
            },

            {
                id: "processVisibility",
                label: "Process visibility score (1-5)",
                labelTR: "Süreç görünürlüğü skoru (1-5)",
                shortLabel: "Process Visibility",
                shortLabelTR: "Süreç Görünürlüğü",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "exceptionDetection",
                label: "Exception detection score (1-5)",
                labelTR: "İstisna tespit skoru (1-5)",
                shortLabel: "Exception Detection",
                shortLabelTR: "İstisna Tespiti",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "decisionSpeed",
                label: "Decision speed impact score (1-5)",
                labelTR: "Karar hızı etki skoru (1-5)",
                shortLabel: "Decision Speed",
                shortLabelTR: "Karar Hızı",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.operationalUsers *
            v.timeSavedPerWeek *
            v.workingWeeks *
            v.averageHourlyCost *
            (v.realizationRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.processVisibility + v.exceptionDetection + v.decisionSpeed) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },

    CM14: {
        outputType: "hybrid",

        label: "Profitability Value + Visibility Impact",
        labelTR: "Kârlılık Değeri + Görünürlük Etkisi",

        inputs: [
            {
                id: "annualRevenueBase",
                label: "Annual revenue base",
                labelTR: "Yıllık gelir bazı",
                shortLabel: "Revenue Base",
                shortLabelTR: "Gelir Bazı",
                defaultValue: 10000000,
                group: "monetary",
            },
            {
                id: "marginImprovementPotential",
                label: "Margin improvement potential (%)",
                labelTR: "Marj iyileştirme potansiyeli (%)",
                shortLabel: "Margin Impact %",
                shortLabelTR: "Marj Etkisi %",
                defaultValue: 1,
                group: "monetary",
            },
            {
                id: "realizationRate",
                label: "Realization rate (%)",
                labelTR: "Gerçekleşme oranı (%)",
                shortLabel: "Realization %",
                shortLabelTR: "Gerçekleşme %",
                defaultValue: 30,
                group: "monetary",
            },

            {
                id: "marginVisibility",
                label: "Margin visibility score (1-5)",
                labelTR: "Marj görünürlüğü skoru (1-5)",
                shortLabel: "Margin Visibility",
                shortLabelTR: "Marj Görünürlüğü",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "customerProductInsight",
                label: "Customer / product insight score (1-5)",
                labelTR: "Müşteri / ürün içgörü skoru (1-5)",
                shortLabel: "Customer / Product Insight",
                shortLabelTR: "Müşteri / Ürün İçgörüsü",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "decisionActionability",
                label: "Decision actionability score (1-5)",
                labelTR: "Aksiyona dönüştürülebilirlik skoru (1-5)",
                shortLabel: "Actionability",
                shortLabelTR: "Aksiyon Alınabilirlik",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.annualRevenueBase *
            (v.marginImprovementPotential / 100) *
            (v.realizationRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.marginVisibility + v.customerProductInsight + v.decisionActionability) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },

    CM15: {
        outputType: "hybrid",

        label: "Profitability Simulation Value + Scenario Impact",
        labelTR: "Kârlılık Simülasyon Değeri + Senaryo Etkisi",

        inputs: [
            {
                id: "annualRevenueBase",
                label: "Annual revenue base",
                labelTR: "Yıllık gelir bazı",
                shortLabel: "Revenue Base",
                shortLabelTR: "Gelir Bazı",
                defaultValue: 10000000,
                group: "monetary",
            },
            {
                id: "scenarioImprovementPotential",
                label: "Scenario improvement potential (%)",
                labelTR: "Senaryo iyileştirme potansiyeli (%)",
                shortLabel: "Scenario Impact %",
                shortLabelTR: "Senaryo Etkisi %",
                defaultValue: 3,
                group: "monetary",
            },
            {
                id: "realizationRate",
                label: "Realization rate (%)",
                labelTR: "Gerçekleşme oranı (%)",
                shortLabel: "Realization %",
                shortLabelTR: "Gerçekleşme %",
                defaultValue: 70,
                group: "monetary",
            },

            {
                id: "scenarioDepth",
                label: "Scenario depth score (1-5)",
                labelTR: "Senaryo derinliği skoru (1-5)",
                shortLabel: "Scenario Depth",
                shortLabelTR: "Senaryo Derinliği",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "decisionSpeed",
                label: "Decision speed impact score (1-5)",
                labelTR: "Karar hızı etki skoru (1-5)",
                shortLabel: "Decision Speed",
                shortLabelTR: "Karar Hızı",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "profitabilityControl",
                label: "Profitability control score (1-5)",
                labelTR: "Kârlılık kontrol skoru (1-5)",
                shortLabel: "Profitability Control",
                shortLabelTR: "Kârlılık Kontrolü",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.annualRevenueBase *
            (v.scenarioImprovementPotential / 100) *
            (v.realizationRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.scenarioDepth + v.decisionSpeed + v.profitabilityControl) / 3;

            return Math.round((averageScore / 5) * 100);
        },
    },
    CM16: {
        outputType: "hybrid",

        label: "Process Mining Value + Transparency Impact",
        labelTR: "Süreç Madenciliği Değeri + Şeffaflık Etkisi",

        inputs: [
            {
                id: "annualProcessCostBase",
                label: "Annual process cost base",
                labelTR: "Yıllık süreç maliyet bazı",
                shortLabel: "Cost Base",
                shortLabelTR: "Maliyet Bazı",
                defaultValue: 3000000,
                group: "monetary",
            },
            {
                id: "efficiencyOpportunity",
                label: "Efficiency opportunity (%)",
                labelTR: "Verimlilik fırsatı (%)",
                shortLabel: "Opportunity %",
                shortLabelTR: "Fırsat %",
                defaultValue: 5,
                group: "monetary",
            },
            {
                id: "realizationRate",
                label: "Realization rate (%)",
                labelTR: "Gerçekleşme oranı (%)",
                shortLabel: "Realization %",
                shortLabelTR: "Gerçekleşme %",
                defaultValue: 40,
                group: "monetary",
            },

            {
                id: "processTransparency",
                label: "Process transparency score (1-5)",
                labelTR: "Süreç şeffaflığı skoru (1-5)",
                shortLabel: "Process Transparency",
                shortLabelTR: "Süreç Şeffaflığı",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "bottleneckInsight",
                label: "Bottleneck insight score (1-5)",
                labelTR: "Darboğaz içgörüsü skoru (1-5)",
                shortLabel: "Bottleneck Insight",
                shortLabelTR: "Darboğaz İçgörüsü",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "improvementPrioritization",
                label: "Improvement prioritization score (1-5)",
                labelTR: "İyileştirme önceliklendirme skoru (1-5)",
                shortLabel: "Prioritization",
                shortLabelTR: "Önceliklendirme",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.annualProcessCostBase *
            (v.efficiencyOpportunity / 100) *
            (v.realizationRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.processTransparency +
                    v.bottleneckInsight +
                    v.improvementPrioritization) /
                3;

            return Math.round((averageScore / 5) * 100);
        },
    },
    CM17: {
        outputType: "hybrid",

        label: "Automation Opportunity Value + Readiness Impact",
        labelTR: "Otomasyon Fırsatı Değeri + Hazırlık Etkisi",

        inputs: [
            {
                id: "automationOpportunityBase",
                label: "Annual automation opportunity base",
                labelTR: "Yıllık otomasyon fırsatı bazı",
                shortLabel: "Opportunity Base",
                shortLabelTR: "Fırsat Bazı",
                defaultValue: 250000,
                group: "monetary",
            },
            {
                id: "captureRate",
                label: "Capture rate (%)",
                labelTR: "Yakalama oranı (%)",
                shortLabel: "Capture %",
                shortLabelTR: "Yakalama %",
                defaultValue: 20,
                group: "monetary",
            },

            {
                id: "automationFit",
                label: "Automation fit score (1-5)",
                labelTR: "Otomasyon uygunluk skoru (1-5)",
                shortLabel: "Automation Fit",
                shortLabelTR: "Otomasyon Uygunluğu",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "implementationFeasibility",
                label: "Implementation feasibility score (1-5)",
                labelTR: "Uygulama yapılabilirliği skoru (1-5)",
                shortLabel: "Feasibility",
                shortLabelTR: "Yapılabilirlik",
                defaultValue: 4,
                group: "score",
            },
            {
                id: "valuePrioritization",
                label: "Value prioritization score (1-5)",
                labelTR: "Değer önceliklendirme skoru (1-5)",
                shortLabel: "Value Prioritization",
                shortLabelTR: "Değer Önceliği",
                defaultValue: 4,
                group: "score",
            },
        ],

        calculate: (v) =>
            v.automationOpportunityBase * (v.captureRate / 100),

        calculateScore: (v) => {
            const averageScore =
                (v.automationFit +
                    v.implementationFeasibility +
                    v.valuePrioritization) /
                3;

            return Math.round((averageScore / 5) * 100);
        },
    },
};

export const offerings = [
    {
        id: "bpc_modernization_journey",

        title: "BPC Modernization Journey",
        titleTR: "BPC Modernizasyon Yolculuğu",

        category: "Planning Modernization",
        categoryTR: "Planlama Modernizasyonu",

        pitch:
            "A phased, measurable and low-risk journey from legacy BPC/BW planning to a modern SAC Planning, SAC Reporting, Datasphere and BDC architecture.",
        pitchTR:
            "Legacy BPC/BW planlama yapısından SAC Planning, SAC Reporting, Datasphere ve BDC tabanlı modern mimariye fazlı, ölçülebilir ve düşük riskli geçiş yaklaşımı.",

        customerSituation: [
            "Customer uses SAP BPC for budgeting, forecasting or planning.",
            "BW is used for actuals, reporting or management reports.",
            "Users are familiar with the existing BPC/BW landscape.",
            "Big-bang migration is considered risky.",
            "The customer needs a modernization roadmap but does not know where to start.",
        ],
        customerSituationTR: [
            "Müşteri bütçe, forecast veya planlama süreçlerinde SAP BPC kullanıyor.",
            "Fiili raporlar veya yönetim raporları BW üzerinden alınıyor.",
            "Kullanıcılar mevcut BPC/BW yapısına alışmış durumda.",
            "Big-bang geçiş riskli görülüyor.",
            "Müşteri modernizasyon istiyor ama nereden başlayacağını net bilmiyor.",
        ],

        typicalPainIds: [
            "budget_forecast_long",
            "planning_excel_files",
            "plan_actual_manual",
            "versions_approvals_hard",
            "reports_not_on_time",
            "manual_excel_reports",
            "data_quality_slow",
            "legacy_dwh_scale",
        ],

        typicalPainPatterns: [
            "BPC models are complex and difficult to maintain.",
            "BW reports do not provide a modern user experience.",
            "Excel workarounds are used around BPC.",
            "Budgeting and forecasting cycles take too long.",
            "Performance issues, errors and manual intervention points exist.",
            "There is no clear roadmap for SAC/BDC transition.",
        ],
        typicalPainPatternsTR: [
            "BPC modelleri karmaşık ve bakımı zor.",
            "BW raporları modern kullanıcı deneyimi sunmuyor.",
            "BPC etrafında Excel workaround’ları kullanılıyor.",
            "Bütçe ve forecast süreçleri uzun sürüyor.",
            "Performans, hata ve manuel müdahale noktaları var.",
            "SAC/BDC geçişi için net roadmap bulunmuyor.",
        ],

        includedUseCaseIds: [
            "budget_cycle_optimization",
            "integrated_financial_planning",
            "management_reporting_automation",
            "data_product_reuse",
            "legacy_dwh_modernization",
            "operational_visibility_dashboard",
        ],

        useCaseMapping: {
            core: [
                "budget_cycle_optimization",
                "management_reporting_automation",
                "integrated_financial_planning",
            ],
            supporting: [
                "legacy_dwh_modernization",
                "data_product_reuse",
            ],
            future: [
                "operational_visibility_dashboard",
            ],
        },

        solutionStack: [
            "SAC Planning",
            "SAC Reporting",
            "SAP Datasphere",
            "SAP BDC",
            "SAP BW / BPC assessment",
            "SAP S/4HANA integration",
        ],

        optionalFutureCapabilities: [
            "AI-enabled forecasting",
            "Planning recommendation agent",
            "Value tracking agent",
            "BPC/BW diagnostic agent",
        ],

        expectedBusinessValue: [
            "Reduced BPC maintenance effort",
            "Reduced Excel workaround dependency",
            "Shorter planning and reporting cycles",
            "Improved planning user experience",
            "Better plan vs actual visibility",
            "Lower transformation risk through phased adoption",
            "Clear roadmap toward modern SAP planning architecture",
            "AI-ready foundation for future planning use cases",
        ],
        expectedBusinessValueTR: [
            "BPC bakım eforunun azaltılması",
            "Excel workaround bağımlılığının azaltılması",
            "Daha kısa planlama ve raporlama döngüleri",
            "Daha iyi planlama kullanıcı deneyimi",
            "Daha iyi plan-fiili görünürlüğü",
            "Fazlı adaptasyon ile daha düşük dönüşüm riski",
            "Modern SAP planlama mimarisine doğru net roadmap",
            "Gelecekteki AI destekli planlama use case’leri için hazır temel",
        ],

        expectedProjectTimeline: {
            summary: "4–6 months phased journey",
            summaryTR: "4–6 aylık fazlı dönüşüm yolculuğu",
            bestStart: "Before the annual budgeting cycle; January–February is ideal if the next major budget cycle starts in Q3.",
            bestStartTR:
                "Yıllık bütçe döngüsünden önce; ana bütçe dönemi Q3’te başlıyorsa Ocak–Şubat başlangıcı idealdir.",
            phases: [
                {
                    title: "BPC/BW Health Check & Diagnostic",
                    titleTR: "BPC/BW Health Check & Diagnostic",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
                {
                    title: "Roadmap & Solution Design",
                    titleTR: "Roadmap & Çözüm Tasarımı",
                    duration: "3–5 weeks",
                    durationTR: "3–5 hafta",
                },
                {
                    title: "First SAC Planning / Reporting Wave",
                    titleTR: "İlk SAC Planning / Reporting Wave",
                    duration: "8–12 weeks",
                    durationTR: "8–12 hafta",
                },
                {
                    title: "Measure Adoption & Value",
                    titleTR: "Adoption & Value Ölçümü",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
                {
                    title: "Scale Remaining BPC/BW Scope",
                    titleTR: "Kalan BPC/BW Scope’un Ölçeklenmesi",
                    duration: "3–4 months",
                    durationTR: "3–4 ay",
                },
            ],
        },

        criticalSuccessFactors: [
            "Do not position this as a pure technical migration.",
            "Avoid big-bang replacement unless the BPC scope is very small and well documented.",
            "Start with a low-risk, high-visibility planning or reporting scenario.",
            "Keep BPC running during the first wave to reduce business risk.",
            "Identify business owners early.",
            "Confirm master data and actual data integration readiness.",
            "Measure adoption, performance and process impact after each phase.",
            "Avoid copying poor BPC design directly into SAC Planning.",
            "Align the timeline with the customer’s budget cycle.",
        ],
        criticalSuccessFactorsTR: [
            "Bu çalışma sadece teknik migration olarak konumlandırılmamalıdır.",
            "BPC scope çok küçük ve iyi dokümante değilse big-bang geçişten kaçınılmalıdır.",
            "İlk fazda düşük riskli ama görünürlüğü yüksek bir planlama veya raporlama senaryosu seçilmelidir.",
            "İş riskini azaltmak için ilk wave sırasında BPC çalışmaya devam etmelidir.",
            "Business owner’lar erken belirlenmelidir.",
            "Ana veri ve fiili veri entegrasyon hazır oluşu doğrulanmalıdır.",
            "Her faz sonrası kullanım, performans ve süreç etkisi ölçülmelidir.",
            "BPC’deki kötü tasarımlar birebir SAC Planning’e taşınmamalıdır.",
            "Proje takvimi müşterinin bütçe döngüsüyle hizalanmalıdır.",
        ],

        projectApproach: [
            "Phase 0 — BPC/BW Health Check & Diagnostic",
            "Phase 1 — Co-existence Pilot",
            "Phase 2 — First SAC Planning + Reporting Wave",
            "Phase 3 — Measure Value & Adoption",
            "Phase 4 — Scale Remaining BPC/BW Scope",
            "Phase 5 — AI-enabled Planning Opportunities",
        ],
        projectApproachTR: [
            "Phase 0 — BPC/BW Health Check & Diagnostic",
            "Phase 1 — Co-existence Pilot",
            "Phase 2 — İlk SAC Planning + Reporting Wave",
            "Phase 3 — Value & Adoption Ölçümü",
            "Phase 4 — Kalan BPC/BW Scope’un Ölçeklenmesi",
            "Phase 5 — AI destekli planlama fırsatları",
        ],

        referencePatterns: [
            "BPC budget planning modernization",
            "BW reporting to SAC dashboard transition",
            "Excel-supported BPC process redesign",
            "SAC Planning pilot for selected finance planning process",
            "BPC/BW modernization roadmap assessment",
        ],
        referencePatternsTR: [
            "BPC bütçe planlama modernizasyonu",
            "BW raporlarının SAC dashboard yapısına taşınması",
            "Excel destekli BPC sürecinin yeniden tasarlanması",
            "Seçilen finans planlama süreci için SAC Planning pilotu",
            "BPC/BW modernizasyon roadmap assessment",
        ],

        salesPositioning:
            "This offering does not position BPC modernization as a big-bang migration. It starts by assessing the current BPC/BW landscape, then introduces SAC Planning and SAC Reporting in selected areas while BPC continues to run. Adoption, performance and value are measured after each wave, enabling a safer and evidence-based modernization roadmap.",
        salesPositioningTR:
            "Bu offering, BPC modernizasyonunu big-bang bir geçiş olarak konumlandırmaz. Önce mevcut BPC/BW yapısını analiz eder, ardından BPC çalışmaya devam ederken seçilen alanlarda SAC Planning ve SAC Reporting’i devreye alır. Her fazdan sonra kullanım, performans ve değer ölçülerek daha güvenli ve veriye dayalı bir modernizasyon roadmap’i oluşturulur.",

        discoveryQuestions: [
            "Which planning processes are currently managed in BPC?",
            "Which BW reports are business-critical?",
            "How many BPC models, input schedules and reports are actively used?",
            "How much Excel workaround is used around BPC?",
            "Where do users experience performance or error issues?",
            "How long does the budgeting / forecasting cycle take?",
            "Which process could be a low-risk SAC pilot candidate?",
            "Is the goal technology renewal, process improvement, or both?",
        ],
        discoveryQuestionsTR: [
            "Hangi planlama süreçleri şu anda BPC’de yönetiliyor?",
            "Hangi BW raporları iş açısından kritik?",
            "Aktif kullanılan kaç BPC modeli, input schedule ve rapor var?",
            "BPC etrafında ne kadar Excel workaround kullanılıyor?",
            "Kullanıcılar en çok nerede performans veya hata sorunu yaşıyor?",
            "Bütçe / forecast süreci ne kadar sürüyor?",
            "İlk SAC pilotu için düşük riskli süreç hangisi olabilir?",
            "Hedef teknoloji yenileme mi, süreç iyileştirme mi, yoksa ikisi birden mi?",
        ],

        recommendedNextStep:
            "Run a 2-week BPC/BW Health Check & Modernization Assessment.",
        recommendedNextStepTR:
            "2 haftalık BPC/BW Health Check & Modernization Assessment çalışması yapılması.",
        onePagerImage: "/offering-onepagers/bpc-modernization-journey.jpeg",
        onePagerTitle: "BPC Modernization Journey One-Pager",
        onePagerTitleTR: "BPC Modernization Journey Tek Sayfa Özeti",
        strategyFit: {
            sap_first: 100,
            microsoft_first: 25,
            technology_neutral: 75,
        },
    },
    {
        id: "planning_transformation_accelerator",

        title: "Planning Transformation Accelerator",
        titleTR: "Planlama Dönüşüm Paketi",

        category: "Planning & Forecasting",
        categoryTR: "Planlama & Tahminleme",

        pitch:
            "Modernizes budgeting, forecasting and planning processes by replacing disconnected Excel-based activities with an integrated, driver-based planning model.",
        pitchTR:
            "Kopuk Excel bazlı bütçe, forecast ve planlama süreçlerini entegre ve driver-based bir planlama modeline dönüştürür.",

        customerSituation: [
            "Planning is managed in Excel or fragmented tools.",
            "Budgeting and forecasting cycles take too long.",
            "Finance, sales, OPEX, CAPEX or workforce plans are not connected.",
            "Plan vs actual analysis is slow or manual.",
            "Scenario and what-if planning capabilities are limited.",
        ],
        customerSituationTR: [
            "Planlama Excel veya kopuk araçlarla yönetiliyor.",
            "Bütçe ve forecast süreçleri uzun sürüyor.",
            "Finans, satış, OPEX, CAPEX veya workforce planları bağlantılı değil.",
            "Plan-fiili analizi yavaş veya manuel.",
            "Senaryo ve what-if planlama yetkinlikleri sınırlı.",
        ],

        typicalPainIds: [
            "budget_forecast_long",
            "planning_excel_files",
            "planning_not_integrated",
            "plan_actual_manual",
            "versions_approvals_hard",
        ],

        typicalPainPatterns: [
            "Budgeting and forecasting processes take too long.",
            "Planning is managed through disconnected Excel files.",
            "Operational drivers are not connected to financial plans.",
            "Planning versions and approvals are difficult to control.",
            "Plan vs actual analysis is slow or manual.",
        ],
        typicalPainPatternsTR: [
            "Bütçe ve forecast süreçleri çok uzun sürüyor.",
            "Planlama birbirinden kopuk Excel dosyalarıyla yönetiliyor.",
            "Operasyonel driver’lar finansal planlarla bağlantılı değil.",
            "Planlama versiyonları ve onay süreçleri zor yönetiliyor.",
            "Plan-fiili analizi yavaş veya manuel yapılıyor.",
        ],

        includedUseCaseIds: [
            "budget_cycle_optimization",
            "integrated_financial_planning",
            "workforce_opex_capex_planning",
            "forecast_accuracy_improvement",
            "cost_allocation_automation",
            "management_reporting_automation",
        ],

        useCaseMapping: {
            core: [
                "budget_cycle_optimization",
                "forecast_accuracy_improvement",
                "integrated_financial_planning",
                "workforce_opex_capex_planning",
            ],
            supporting: [
                "management_reporting_automation",
            ],
            future: [
                "cost_allocation_automation",
            ],
        },

        solutionStack: [
            "SAC Planning",
            "SAP Datasphere",
            "SAP BDC",
            "SAC Reporting",
            "SAP S/4HANA integration",
            "SAP FM where relevant",
        ],

        optionalFutureCapabilities: [
            "AI-enabled forecasting",
            "Scenario recommendation agent",
            "Planning assumption validation agent",
            "Value tracking agent",
        ],

        expectedBusinessValue: [
            "Shorter budgeting and forecasting cycles",
            "Reduced manual Excel effort",
            "Better planning control and version management",
            "Improved plan vs actual visibility",
            "Stronger scenario and what-if analysis",
            "Better alignment between operational and financial plans",
        ],
        expectedBusinessValueTR: [
            "Daha kısa bütçe ve forecast döngüleri",
            "Daha az manuel Excel eforu",
            "Daha iyi planlama kontrolü ve versiyon yönetimi",
            "Daha iyi plan-fiili görünürlüğü",
            "Daha güçlü senaryo ve what-if analizi",
            "Operasyonel ve finansal planlar arasında daha iyi hizalanma",
        ],

        expectedProjectTimeline: {
            summary: "4–6 months typical implementation",
            summaryTR: "4–6 aylık tipik uygulama süreci",
            bestStart:
                "Best started before the annual budgeting or forecasting cycle; pilot scope should be selected early.",
            bestStartTR:
                "Yıllık bütçe veya forecast döngüsünden önce başlamak idealdir; pilot kapsam erken seçilmelidir.",
            phases: [
                {
                    title: "Planning Process Assessment",
                    titleTR: "Planlama Süreci Analizi",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Target Planning Model Design",
                    titleTR: "Hedef Planlama Modeli Tasarımı",
                    duration: "3–4 weeks",
                    durationTR: "3–4 hafta",
                },
                {
                    title: "SAC Planning MVP",
                    titleTR: "SAC Planning MVP",
                    duration: "8–10 weeks",
                    durationTR: "8–10 hafta",
                },
                {
                    title: "Actuals, Master Data and Reporting Integration",
                    titleTR: "Fiili Veri, Ana Veri ve Raporlama Entegrasyonu",
                    duration: "4–6 weeks",
                    durationTR: "4–6 hafta",
                },
                {
                    title: "Workflow, UAT and Rollout",
                    titleTR: "Workflow, UAT ve Yaygınlaştırma",
                    duration: "3–5 weeks",
                    durationTR: "3–5 hafta",
                },
            ],
        },

        criticalSuccessFactors: [
            "Do not automate a broken Excel process without redesigning it.",
            "Start with a clearly bounded planning scope.",
            "Define planning ownership and approval responsibilities early.",
            "Validate master data and actual data availability before build.",
            "Clarify planning granularity, frequency and version logic.",
            "Keep the first MVP simple enough for business adoption.",
            "Align timeline with the budgeting and forecasting calendar.",
        ],
        criticalSuccessFactorsTR: [
            "Bozuk bir Excel süreci yeniden tasarlanmadan otomatikleştirilmemelidir.",
            "Net sınırları olan bir planlama kapsamı ile başlanmalıdır.",
            "Planlama sahipliği ve onay sorumlulukları erken belirlenmelidir.",
            "Geliştirme öncesinde ana veri ve fiili veri hazır oluşu doğrulanmalıdır.",
            "Planlama kırılımı, frekansı ve versiyon mantığı netleştirilmelidir.",
            "İlk MVP iş kullanıcılarının adapte olabileceği kadar sade tutulmalıdır.",
            "Proje takvimi bütçe ve forecast takvimiyle hizalanmalıdır.",
        ],

        projectApproach: [
            "Phase 1 — Planning Process Assessment",
            "Phase 2 — Target Planning Model Design",
            "Phase 3 — SAC Planning MVP",
            "Phase 4 — Actuals and Master Data Integration",
            "Phase 5 — Workflow, Reporting and Scale-up",
        ],
        projectApproachTR: [
            "Phase 1 — Planlama Süreci Analizi",
            "Phase 2 — Hedef Planlama Modeli Tasarımı",
            "Phase 3 — SAC Planning MVP",
            "Phase 4 — Fiili Veri ve Ana Veri Entegrasyonu",
            "Phase 5 — Workflow, Raporlama ve Yaygınlaştırma",
        ],

        referencePatterns: [
            "Excel-based budget planning replacement",
            "Driver-based financial planning model",
            "OPEX planning standardization",
            "Plan vs actual reporting automation",
            "Scenario planning enablement",
        ],
        referencePatternsTR: [
            "Excel bazlı bütçe planlamasının değiştirilmesi",
            "Driver-based finansal planlama modeli",
            "OPEX planlama standardizasyonu",
            "Plan-fiili raporlamasının otomatikleştirilmesi",
            "Senaryo planlama yetkinliğinin kazandırılması",
        ],

        salesPositioning:
            "Many organizations still run planning through disconnected Excel files, manual consolidation and unclear ownership. This offering helps the customer move to an integrated planning model where assumptions, drivers, versions and actuals are connected.",
        salesPositioningTR:
            "Birçok kurum planlamayı hâlâ kopuk Excel dosyaları, manuel konsolidasyon ve net olmayan sahiplik yapılarıyla yönetiyor. Bu offering, müşterinin varsayımları, driver’ları, versiyonları ve fiili verileri birbirine bağlı entegre bir planlama modeline geçmesini sağlar.",

        discoveryQuestions: [
            "How long does the budgeting cycle take?",
            "Which planning areas are still managed in Excel?",
            "How many users are involved in planning?",
            "How are versions and approvals managed?",
            "How quickly can users compare plan vs actuals?",
            "Which operational drivers are used in planning?",
            "Which planning area would be the best MVP candidate?",
        ],
        discoveryQuestionsTR: [
            "Bütçe süreci ne kadar sürüyor?",
            "Hangi planlama alanları hâlâ Excel ile yönetiliyor?",
            "Planlama sürecine kaç kullanıcı dahil oluyor?",
            "Versiyonlar ve onaylar nasıl yönetiliyor?",
            "Kullanıcılar plan-fiili karşılaştırmasını ne kadar hızlı yapabiliyor?",
            "Planlamada hangi operasyonel driver’lar kullanılıyor?",
            "İlk MVP için en uygun planlama alanı hangisi olabilir?",
        ],

        recommendedNextStep: "Run a 2-week Planning Value Assessment.",
        recommendedNextStepTR: "2 haftalık Planning Value Assessment çalışması yapılması.",
        strategyFit: {
            sap_first: 90,
            microsoft_first: 55,
            technology_neutral: 85,
        },
    },
    {
        id: "executive_reporting_kpi_cockpit",

        title: "Executive Reporting & KPI Cockpit",
        titleTR: "Yönetici Raporlama & KPI Kokpiti",

        category: "Reporting & Decision-Making",
        categoryTR: "Raporlama & Karar Alma",

        pitch:
            "Transforms manual management reporting into automated, trusted and executive-level KPI cockpits.",
        pitchTR:
            "Manuel yönetim raporlamasını otomatik, güvenilir ve executive seviyede KPI cockpit yapısına dönüştürür.",

        customerSituation: [
            "Management reports are manually prepared in Excel.",
            "Reports are not available on time.",
            "Different departments use different KPI definitions.",
            "Executives do not have a single trusted view of performance.",
            "Business users need faster and easier access to key performance indicators.",
        ],
        customerSituationTR: [
            "Yönetim raporları manuel olarak Excel’de hazırlanıyor.",
            "Raporlar zamanında hazır olmuyor.",
            "Departmanlar farklı KPI tanımları kullanıyor.",
            "Üst yönetimin performansı izleyebileceği tek ve güvenilir bir ekran yok.",
            "İş kullanıcıları temel performans göstergelerine daha hızlı ve kolay erişmek istiyor.",
        ],

        typicalPainIds: [
            "manual_excel_reports",
            "reports_not_on_time",
            "kpi_definitions_inconsistent",
            "single_source_missing",
            "self_service_limited",
        ],

        typicalPainPatterns: [
            "Reports are prepared manually in Excel.",
            "Management reports are delayed.",
            "KPI definitions are inconsistent across departments.",
            "Business users do not fully trust reported numbers.",
            "Self-service analytics is limited.",
            "Executives cannot easily access a single version of the truth.",
        ],
        typicalPainPatternsTR: [
            "Raporlar manuel olarak Excel’de hazırlanıyor.",
            "Yönetim raporları gecikmeli hazırlanıyor.",
            "Departmanlar arasında KPI tanımları tutarlı değil.",
            "İş kullanıcıları raporlanan rakamlara tam güvenmiyor.",
            "Self-service analitik yetkinliği sınırlı.",
            "Üst yönetim tek ve güvenilir performans görünümüne kolay erişemiyor.",
        ],

        includedUseCaseIds: [
            "management_reporting_automation",
            "executive_kpi_cockpit",
            "kpi_harmonization",
            "operational_visibility_dashboard",
            "sap_non_sap_data_integration",
        ],

        useCaseMapping: {
            core: [
                "management_reporting_automation",
                "executive_kpi_cockpit",
                "kpi_harmonization",
                "operational_visibility_dashboard",
            ],
            supporting: [

                "sap_non_sap_data_integration",
            ],
            future: [],
        },

        solutionStack: [
            "SAC Reporting",
            "SAP Datasphere",
            "SAP BDC",
            "SAP BW integration",
            "Power BI where Microsoft-first",
            "Microsoft Fabric where broader MS analytics architecture is needed",
        ],

        optionalFutureCapabilities: [
            "AI-assisted management commentary",
            "KPI explanation agent",
            "Anomaly detection",
            "Executive insight summarization",
        ],

        expectedBusinessValue: [
            "Reduced manual reporting effort",
            "Faster management reporting cycle",
            "Improved KPI consistency",
            "Better executive decision-making",
            "Single trusted view of performance",
            "Improved reporting governance and ownership",
        ],
        expectedBusinessValueTR: [
            "Manuel raporlama eforunun azaltılması",
            "Daha hızlı yönetim raporlama döngüsü",
            "Daha tutarlı KPI tanımları",
            "Daha iyi yönetici karar alma desteği",
            "Performansa ilişkin tek ve güvenilir görünüm",
            "Daha iyi raporlama yönetişimi ve sahipliği",
        ],

        expectedProjectTimeline: {
            summary: "8–12 weeks for first executive cockpit",
            summaryTR: "İlk yönetici kokpiti için 8–12 hafta",
            bestStart:
                "Best started before a recurring management reporting cycle or executive review period.",
            bestStartTR:
                "Düzenli yönetim raporlama döngüsü veya üst yönetim değerlendirme döneminden önce başlamak idealdir.",
            phases: [
                {
                    title: "Reporting Landscape Assessment",
                    titleTR: "Raporlama Ortamı Analizi",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
                {
                    title: "KPI and Data Definition",
                    titleTR: "KPI ve Veri Tanımı",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Executive Dashboard MVP",
                    titleTR: "Yönetici Dashboard MVP",
                    duration: "4–6 weeks",
                    durationTR: "4–6 hafta",
                },
                {
                    title: "Automation and Governance",
                    titleTR: "Otomasyon ve Yönetişim",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Rollout and Self-service Enablement",
                    titleTR: "Yaygınlaştırma ve Self-service Enablement",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
            ],
        },

        criticalSuccessFactors: [
            "Do not start dashboard design before KPI definitions are aligned.",
            "Identify executive audience and decision needs clearly.",
            "Clarify data ownership and refresh frequency.",
            "Avoid recreating all old Excel reports without prioritization.",
            "Start with a focused executive cockpit, then scale.",
            "Ensure source data quality and semantic consistency.",
            "Define governance for KPI changes and report ownership.",
        ],
        criticalSuccessFactorsTR: [
            "KPI tanımları hizalanmadan dashboard tasarımına başlanmamalıdır.",
            "Yönetici hedef kitlesi ve karar ihtiyaçları net belirlenmelidir.",
            "Veri sahipliği ve veri yenileme frekansı netleştirilmelidir.",
            "Tüm eski Excel raporları önceliklendirme olmadan birebir yeniden yapılmamalıdır.",
            "Odaklı bir yönetici kokpitiyle başlanmalı, sonra ölçeklenmelidir.",
            "Kaynak veri kalitesi ve semantik tutarlılık sağlanmalıdır.",
            "KPI değişiklikleri ve rapor sahipliği için yönetişim tanımlanmalıdır.",
        ],

        projectApproach: [
            "Phase 1 — Reporting Landscape Assessment",
            "Phase 2 — KPI and Data Definition",
            "Phase 3 — Executive Dashboard MVP",
            "Phase 4 — Automation and Governance",
            "Phase 5 — Rollout and Self-service Enablement",
        ],
        projectApproachTR: [
            "Phase 1 — Raporlama Ortamı Analizi",
            "Phase 2 — KPI ve Veri Tanımı",
            "Phase 3 — Yönetici Dashboard MVP",
            "Phase 4 — Otomasyon ve Yönetişim",
            "Phase 5 — Yaygınlaştırma ve Self-service Enablement",
        ],

        referencePatterns: [
            "Executive KPI cockpit",
            "Monthly management reporting automation",
            "Plan vs actual dashboard",
            "Reporting standardization and harmonization",
            "BW reporting to SAC dashboard transition",
        ],
        referencePatternsTR: [
            "Yönetici KPI kokpiti",
            "Aylık yönetim raporlaması otomasyonu",
            "Plan-fiili dashboard’u",
            "Raporlama standardizasyonu ve harmonizasyonu",
            "BW raporlarının SAC dashboard yapısına taşınması",
        ],

        salesPositioning:
            "This offering helps customers move from manually prepared management reports to trusted, automated and executive-ready KPI cockpits. It focuses not only on dashboard design, but also on KPI harmonization, data consistency and reporting governance.",
        salesPositioningTR:
            "Bu offering, müşterinin manuel hazırlanan yönetim raporlarından güvenilir, otomatik ve yönetici seviyesinde KPI cockpit yapısına geçmesini sağlar. Sadece dashboard tasarımına değil, KPI harmonizasyonuna, veri tutarlılığına ve raporlama yönetişimine de odaklanır.",

        discoveryQuestions: [
            "Which reports are manually prepared today?",
            "How long does monthly management reporting take?",
            "Which KPIs are most important for executives?",
            "Are KPI definitions consistent across departments?",
            "Which data sources are used for management reporting?",
            "How often are reports refreshed?",
            "Who owns KPI definitions and report governance?",
        ],
        discoveryQuestionsTR: [
            "Bugün hangi raporlar manuel hazırlanıyor?",
            "Aylık yönetim raporlaması ne kadar sürüyor?",
            "Üst yönetim için en kritik KPI’lar hangileri?",
            "KPI tanımları departmanlar arasında tutarlı mı?",
            "Yönetim raporlaması için hangi veri kaynakları kullanılıyor?",
            "Raporlar hangi sıklıkla yenileniyor?",
            "KPI tanımları ve rapor yönetişiminin sahibi kim?",
        ],

        recommendedNextStep: "Run an Executive Reporting Design Sprint.",
        recommendedNextStepTR: "Executive Reporting Design Sprint yapılması.",
        strategyFit: {
            sap_first: 85,
            microsoft_first: 90,
            technology_neutral: 85,
        },
    },
    {
        id: "data_foundation_accelerator",

        title: "Data Foundation Accelerator",
        titleTR: "Veri Altyapısı Hızlandırma Paketi",

        category: "Data Foundation & Integration",
        categoryTR: "Veri Altyapısı & Entegrasyon",

        pitch:
            "Builds a trusted and reusable data foundation by connecting SAP and non-SAP data for reporting, planning and AI use cases.",
        pitchTR:
            "SAP ve SAP dışı verileri bağlayarak raporlama, planlama ve AI use case’leri için güvenilir ve tekrar kullanılabilir veri temeli oluşturur.",

        customerSituation: [
            "SAP and non-SAP data are disconnected.",
            "Analytics teams spend too much time preparing data.",
            "Data is duplicated across reports and planning models.",
            "Business users do not trust data consistency.",
            "AI and advanced analytics use cases are blocked by weak data foundation.",
        ],
        customerSituationTR: [
            "SAP ve SAP dışı veriler kopuk durumda.",
            "Analitik ekipleri veri hazırlamak için çok fazla zaman harcıyor.",
            "Veri mantığı raporlar ve planlama modelleri arasında tekrar tekrar kuruluyor.",
            "İş kullanıcıları veri tutarlılığına tam güvenmiyor.",
            "AI ve ileri analitik use case’leri zayıf veri temeli nedeniyle başlayamıyor.",
        ],

        typicalPainIds: [
            "sap_non_sap_combine",
            "it_data_prep",
            "data_quality_slow",
            "single_source_missing",
            "legacy_dwh_scale",
        ],

        typicalPainPatterns: [
            "SAP and non-SAP data cannot be easily combined.",
            "IT spends too much time preparing data for analytics.",
            "Business users do not trust data consistency.",
            "The same data logic is duplicated across analytics initiatives.",
            "There is no reusable data product approach.",
            "AI use cases cannot start because the data foundation is weak.",
        ],
        typicalPainPatternsTR: [
            "SAP ve SAP dışı veriler kolayca birleştirilemiyor.",
            "IT analitik için veri hazırlamaya çok fazla zaman harcıyor.",
            "İş kullanıcıları veri tutarlılığına güvenmiyor.",
            "Aynı veri mantığı farklı analitik çalışmalarında tekrar tekrar kuruluyor.",
            "Tekrar kullanılabilir data product yaklaşımı yok.",
            "Veri temeli zayıf olduğu için AI use case’leri başlatılamıyor.",
        ],

        includedUseCaseIds: [
            "sap_non_sap_data_integration",
            "data_product_reuse",
            "legacy_dwh_modernization",
            "cloud_data_platform_roadmap",
            "management_reporting_automation",
        ],

        useCaseMapping: {
            core: [
                "sap_non_sap_data_integration",
                "data_product_reuse",
                "cloud_data_platform_roadmap",
            ],
            supporting: [
                "legacy_dwh_modernization",
            ],
            future: [
                "management_reporting_automation",
            ],
        },

        solutionStack: [
            "SAP Datasphere",
            "SAP BDC",
            "SAP HANA",
            "Data Products",
            "SAC integration",
            "Microsoft Fabric where Microsoft-first",
        ],

        optionalFutureCapabilities: [
            "AI-ready data foundation",
            "Data product recommendation agent",
            "Data quality monitoring agent",
            "Semantic consistency assistant",
        ],

        expectedBusinessValue: [
            "Reduced data preparation effort",
            "Improved data reuse",
            "Faster analytics delivery",
            "Trusted data foundation for planning and reporting",
            "Reduced duplication across analytics initiatives",
            "Foundation for AI-enabled analytics",
        ],
        expectedBusinessValueTR: [
            "Veri hazırlama eforunun azaltılması",
            "Veri tekrar kullanımının artırılması",
            "Analitik çözümlerin daha hızlı teslim edilmesi",
            "Planlama ve raporlama için güvenilir veri temeli",
            "Analitik çalışmalarında tekrar eden veri mantığının azaltılması",
            "AI destekli analitik için temel oluşturulması",
        ],

        expectedProjectTimeline: {
            summary: "8–14 weeks for first data foundation wave",
            summaryTR: "İlk veri altyapısı wave’i için 8–14 hafta",
            bestStart:
                "Best started before major reporting, planning or AI initiatives that require trusted and reusable data.",
            bestStartTR:
                "Güvenilir ve tekrar kullanılabilir veri gerektiren büyük raporlama, planlama veya AI girişimlerinden önce başlamak idealdir.",
            phases: [
                {
                    title: "Data Landscape Assessment",
                    titleTR: "Veri Ortamı Analizi",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Target Data Foundation Design",
                    titleTR: "Hedef Veri Altyapısı Tasarımı",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
                {
                    title: "Priority Data Products / Integration Wave",
                    titleTR: "Öncelikli Data Product / Entegrasyon Wave’i",
                    duration: "4–6 weeks",
                    durationTR: "4–6 hafta",
                },
                {
                    title: "Consumption in Reporting and Planning",
                    titleTR: "Raporlama ve Planlamada Kullanım",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
                {
                    title: "Governance and Scale-up",
                    titleTR: "Yönetişim ve Ölçekleme",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
            ],
        },

        criticalSuccessFactors: [
            "Do not start with technology selection only; start with business data domains and use cases.",
            "Prioritize high-value data products instead of trying to model everything at once.",
            "Clarify data ownership and governance early.",
            "Validate source system availability and data quality.",
            "Define semantic consistency across reporting and planning scenarios.",
            "Avoid duplicating the same logic in every report or planning model.",
            "Align data foundation roadmap with reporting, planning and AI priorities.",
        ],
        criticalSuccessFactorsTR: [
            "Sadece teknoloji seçimiyle başlanmamalı; iş veri domain’leri ve use case’lerden başlanmalıdır.",
            "Her şeyi aynı anda modellemek yerine yüksek değerli data product’lar önceliklendirilmelidir.",
            "Veri sahipliği ve yönetişim erken netleştirilmelidir.",
            "Kaynak sistem erişimi ve veri kalitesi doğrulanmalıdır.",
            "Raporlama ve planlama senaryolarında semantik tutarlılık tanımlanmalıdır.",
            "Aynı mantığın her rapor veya planlama modelinde tekrar kurulmasından kaçınılmalıdır.",
            "Veri altyapısı roadmap’i raporlama, planlama ve AI öncelikleriyle hizalanmalıdır.",
        ],

        projectApproach: [
            "Phase 1 — Data Landscape Assessment",
            "Phase 2 — Target Data Foundation Design",
            "Phase 3 — Priority Data Products / Integration Wave",
            "Phase 4 — Consumption in Reporting and Planning",
            "Phase 5 — Governance and Scale-up",
        ],
        projectApproachTR: [
            "Phase 1 — Veri Ortamı Analizi",
            "Phase 2 — Hedef Veri Altyapısı Tasarımı",
            "Phase 3 — Öncelikli Data Product / Entegrasyon Wave’i",
            "Phase 4 — Raporlama ve Planlamada Kullanım",
            "Phase 5 — Yönetişim ve Ölçekleme",
        ],

        referencePatterns: [
            "SAP and non-SAP data integration",
            "Reusable data product layer",
            "Datasphere-based analytics foundation",
            "BDC readiness assessment",
            "Reporting and planning data foundation design",
        ],
        referencePatternsTR: [
            "SAP ve SAP dışı veri entegrasyonu",
            "Tekrar kullanılabilir data product katmanı",
            "Datasphere tabanlı analitik veri altyapısı",
            "BDC readiness assessment",
            "Raporlama ve planlama veri altyapısı tasarımı",
        ],

        salesPositioning:
            "This offering helps customers stop rebuilding the same data logic for every analytics initiative and move toward a reusable, governed and AI-ready data foundation. It creates the foundation required for scalable reporting, planning and future intelligent applications.",
        salesPositioningTR:
            "Bu offering, müşterinin her analitik ihtiyacı için aynı veri mantığını tekrar tekrar kurmasını azaltır ve tekrar kullanılabilir, yönetilebilir ve AI’a hazır bir veri temeline geçmesini sağlar. Ölçeklenebilir raporlama, planlama ve gelecekteki intelligent application’lar için gerekli temeli oluşturur.",

        discoveryQuestions: [
            "Which SAP and non-SAP systems are used for analytics?",
            "How much effort is spent on data preparation?",
            "Are the same data definitions reused across reports and planning models?",
            "Which data domains are most important for business users?",
            "Is there a target architecture for data products?",
            "Which AI or planning use cases are blocked by data issues?",
            "Who owns data quality and semantic definitions?",
        ],
        discoveryQuestionsTR: [
            "Analitik için hangi SAP ve SAP dışı sistemler kullanılıyor?",
            "Veri hazırlamaya ne kadar efor harcanıyor?",
            "Aynı veri tanımları raporlar ve planlama modelleri arasında tekrar kullanılıyor mu?",
            "İş kullanıcıları için en kritik veri domain’leri hangileri?",
            "Data product’lar için hedef mimari var mı?",
            "Hangi AI veya planlama use case’leri veri problemleri nedeniyle engelleniyor?",
            "Veri kalitesi ve semantik tanımların sahibi kim?",
        ],

        recommendedNextStep: "Run a Data Foundation Assessment.",
        recommendedNextStepTR: "Data Foundation Assessment yapılması.",
        strategyFit: {
            sap_first: 95,
            microsoft_first: 80,
            technology_neutral: 90,
        },
    },
    {
        id: "profitability_visibility_pack",

        title: "Profitability Visibility Pack",
        titleTR: "Kârlılık Görünürlüğü Paketi",

        category: "Profitability & Performance Management",
        categoryTR: "Kârlılık & Performans Yönetimi",

        pitch:
            "Improves profitability visibility by analyzing product, customer, channel or region profitability and identifying value creation and leakage areas.",
        pitchTR:
            "Ürün, müşteri, kanal veya bölge bazında kârlılığı analiz ederek değer yaratan ve değer kaybettiren alanları görünür hale getirir.",

        customerSituation: [
            "Profitability is not clearly visible by product, customer, channel or region.",
            "Cost allocation logic is manual, complex or disputed.",
            "Margin and cost drivers are not transparent.",
            "Profitability reporting is delayed or inconsistent.",
            "Business users cannot easily simulate profitability scenarios.",
        ],
        customerSituationTR: [
            "Ürün, müşteri, kanal veya bölge bazında kârlılık net görünmüyor.",
            "Maliyet dağıtım mantığı manuel, karmaşık veya tartışmalı.",
            "Marj ve maliyet sürücüleri şeffaf değil.",
            "Kârlılık raporlaması gecikmeli veya tutarsız.",
            "İş kullanıcıları kârlılık senaryolarını kolayca simüle edemiyor.",
        ],

        typicalPainIds: [
            "profitability_not_visible",
            "cost_allocation_manual",
            "margin_drivers_unclear",
            "profitability_reports_late",
            "scenario_simulation_limited",
        ],

        typicalPainPatterns: [
            "Product, customer or channel profitability is not clearly visible.",
            "Cost allocation is manual or disputed.",
            "Margin and cost drivers are unclear.",
            "Profitability reports are delayed or inconsistent.",
            "Scenario simulation is limited.",
            "Business users cannot easily identify value leakage areas.",
        ],
        typicalPainPatternsTR: [
            "Ürün, müşteri veya kanal bazında kârlılık net görünmüyor.",
            "Maliyet dağıtımı manuel veya tartışmalı.",
            "Marj ve maliyet sürücüleri net değil.",
            "Kârlılık raporları gecikmeli veya tutarsız.",
            "Senaryo simülasyonu sınırlı.",
            "İş kullanıcıları değer kaybı olan alanları kolayca belirleyemiyor.",
        ],

        includedUseCaseIds: [
            "product_customer_profitability",
            "margin_cost_driver_analysis",
            "cost_allocation_automation",
            "profitability_simulation",
            "management_reporting_automation",
        ],

        useCaseMapping: {
            core: [
                "product_customer_profitability",
                "margin_cost_driver_analysis",
                "profitability_simulation",
            ],
            supporting: [
                "cost_allocation_automation",
                "management_reporting_automation",
            ],
            future: [],
        },

        solutionStack: [
            "SAC Reporting",
            "SAC Planning",
            "SAP Datasphere",
            "SAP BDC",
            "SAP PaPM",
            "SAP S/4HANA / CO-PA integration",
        ],

        optionalFutureCapabilities: [
            "Profitability explanation agent",
            "Margin anomaly detection",
            "Scenario recommendation agent",
            "AI-assisted management commentary",
        ],

        expectedBusinessValue: [
            "Improved profitability transparency",
            "Better margin management",
            "Automated and governed allocation logic",
            "Faster profitability reporting",
            "Better pricing, customer and portfolio decisions",
            "Improved visibility into value creation and leakage areas",
        ],
        expectedBusinessValueTR: [
            "Daha iyi kârlılık şeffaflığı",
            "Daha iyi marj yönetimi",
            "Otomatik ve yönetilebilir maliyet dağıtım mantığı",
            "Daha hızlı kârlılık raporlaması",
            "Daha iyi fiyatlama, müşteri ve portföy kararları",
            "Değer yaratan ve değer kaybettiren alanlarda daha iyi görünürlük",
        ],

        expectedProjectTimeline: {
            summary: "10–16 weeks for first profitability model",
            summaryTR: "İlk kârlılık modeli için 10–16 hafta",
            bestStart:
                "Best started before pricing, budgeting or portfolio review cycles where profitability insights are needed.",
            bestStartTR:
                "Kârlılık içgörülerinin gerekli olduğu fiyatlama, bütçe veya portföy değerlendirme dönemlerinden önce başlamak idealdir.",
            phases: [
                {
                    title: "Profitability Model Assessment",
                    titleTR: "Kârlılık Modeli Analizi",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Cost Driver and Allocation Design",
                    titleTR: "Maliyet Sürücüleri ve Dağıtım Tasarımı",
                    duration: "3–4 weeks",
                    durationTR: "3–4 hafta",
                },
                {
                    title: "Data Integration and Model Build",
                    titleTR: "Veri Entegrasyonu ve Model Geliştirme",
                    duration: "4–6 weeks",
                    durationTR: "4–6 hafta",
                },
                {
                    title: "Profitability Reporting",
                    titleTR: "Kârlılık Raporlaması",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Simulation and Planning Scenarios",
                    titleTR: "Simülasyon ve Planlama Senaryoları",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
            ],
        },

        criticalSuccessFactors: [
            "Do not start with dashboard design before allocation and profitability logic are aligned.",
            "Clarify profitability dimensions such as product, customer, channel and region.",
            "Define cost drivers and allocation rules with business ownership.",
            "Validate revenue, cost and master data quality early.",
            "Decide whether the focus is reporting, planning, simulation or allocation automation.",
            "Use SAP PaPM where allocation and profitability logic is complex.",
            "Avoid presenting estimated business impact as guaranteed margin improvement.",
        ],
        criticalSuccessFactorsTR: [
            "Dağıtım ve kârlılık mantığı hizalanmadan dashboard tasarımına başlanmamalıdır.",
            "Ürün, müşteri, kanal ve bölge gibi kârlılık boyutları netleştirilmelidir.",
            "Maliyet sürücüleri ve dağıtım kuralları business sahipliği ile tanımlanmalıdır.",
            "Gelir, maliyet ve ana veri kalitesi erken doğrulanmalıdır.",
            "Odağın raporlama, planlama, simülasyon veya dağıtım otomasyonu mu olduğu netleştirilmelidir.",
            "Dağıtım ve kârlılık mantığı karmaşıksa SAP PaPM değerlendirilmelidir.",
            "Tahmini iş etkisi garanti marj iyileşmesi gibi sunulmamalıdır.",
        ],

        projectApproach: [
            "Phase 1 — Profitability Model Assessment",
            "Phase 2 — Cost Driver and Allocation Design",
            "Phase 3 — Data Integration and Model Build",
            "Phase 4 — Profitability Reporting",
            "Phase 5 — Simulation and Planning Scenarios",
        ],
        projectApproachTR: [
            "Phase 1 — Kârlılık Modeli Analizi",
            "Phase 2 — Maliyet Sürücüleri ve Dağıtım Tasarımı",
            "Phase 3 — Veri Entegrasyonu ve Model Geliştirme",
            "Phase 4 — Kârlılık Raporlaması",
            "Phase 5 — Simülasyon ve Planlama Senaryoları",
        ],

        referencePatterns: [
            "Product profitability dashboard",
            "Customer profitability analysis",
            "Cost allocation automation",
            "Margin driver cockpit",
            "Profitability planning simulation",
        ],
        referencePatternsTR: [
            "Ürün kârlılığı dashboard’u",
            "Müşteri kârlılığı analizi",
            "Maliyet dağıtımı otomasyonu",
            "Marj sürücüleri kokpiti",
            "Kârlılık planlama simülasyonu",
        ],

        salesPositioning:
            "This offering helps customers understand where profit is created, where value leakage occurs, and how profitability can be analyzed, reported and simulated across business dimensions. It connects profitability logic, allocation rules and executive reporting into a clearer management view.",
        salesPositioningTR:
            "Bu offering, müşterinin kârın nerede oluştuğunu, değerin nerede kaybolduğunu ve kârlılığın iş boyutları bazında nasıl analiz edilip simüle edilebileceğini anlamasını sağlar. Kârlılık mantığını, dağıtım kurallarını ve yönetici raporlamasını daha net bir yönetim görünümünde birleştirir.",

        discoveryQuestions: [
            "Can you see profitability by product, customer, channel and region?",
            "How is cost allocation currently performed?",
            "Which margin and cost drivers are most important?",
            "Are profitability reports trusted by business users?",
            "Can users simulate price, volume, discount or cost changes?",
            "Which source systems provide revenue and cost data?",
            "Is allocation logic simple enough for reporting, or does it require a dedicated profitability engine?",
        ],
        discoveryQuestionsTR: [
            "Ürün, müşteri, kanal ve bölge bazında kârlılığı görebiliyor musunuz?",
            "Maliyet dağıtımı bugün nasıl yapılıyor?",
            "En kritik marj ve maliyet sürücüleri hangileri?",
            "Kârlılık raporlarına iş kullanıcıları güveniyor mu?",
            "Kullanıcılar fiyat, hacim, indirim veya maliyet değişimlerini simüle edebiliyor mu?",
            "Gelir ve maliyet verileri hangi kaynak sistemlerden geliyor?",
            "Dağıtım mantığı raporlama için yeterince basit mi, yoksa özel bir kârlılık motoru gerekiyor mu?",
        ],

        recommendedNextStep: "Run a Profitability Visibility Assessment.",
        recommendedNextStepTR: "Profitability Visibility Assessment yapılması.",
        strategyFit: {
            sap_first: 90,
            microsoft_first: 65,
            technology_neutral: 85,
        },
    },
    {
        id: "workforce_cost_planning_pack",

        title: "Workforce & Cost Planning Pack",
        titleTR: "İş Gücü & Maliyet Planlama Paketi",

        category: "Planning & Forecasting",
        categoryTR: "Planlama & Tahminleme",

        pitch:
            "Connects workforce, headcount, personnel cost and OPEX planning with finance and HR data to improve cost transparency and planning control.",
        pitchTR:
            "Workforce, headcount, personel maliyeti ve OPEX planlamasını finans ve İK verileriyle bağlayarak maliyet şeffaflığını ve planlama kontrolünü artırır.",

        customerSituation: [
            "HR and finance planning assumptions are not aligned.",
            "Headcount and personnel cost planning are manual or Excel-based.",
            "Position changes, hiring, termination and salary changes are difficult to simulate.",
            "Workforce cost impact is not clearly visible in financial planning.",
            "OPEX and workforce plans are not connected.",
        ],
        customerSituationTR: [
            "İK ve finans planlama varsayımları hizalı değil.",
            "Headcount ve personel maliyeti planlaması manuel veya Excel bazlı yapılıyor.",
            "Pozisyon değişiklikleri, işe alım, işten çıkış ve maaş değişiklikleri kolay simüle edilemiyor.",
            "Workforce maliyet etkisi finansal planlamada net görünmüyor.",
            "OPEX ve workforce planları bağlantılı değil.",
        ],

        typicalPainIds: [
            "planning_excel_files",
            "planning_not_integrated",
            "plan_actual_manual",
            "budget_forecast_long",
            "versions_approvals_hard",
        ],

        typicalPainPatterns: [
            "Workforce planning is managed manually.",
            "Personnel cost planning lacks transparency.",
            "HR and finance use different assumptions.",
            "Scenario simulation for hiring, salary increase or termination is limited.",
            "OPEX and workforce plans are not connected.",
            "Workforce cost impact is not visible in financial planning.",
        ],
        typicalPainPatternsTR: [
            "Workforce planlama manuel yönetiliyor.",
            "Personel maliyeti planlamasında şeffaflık eksik.",
            "İK ve finans farklı varsayımlar kullanıyor.",
            "İşe alım, maaş artışı veya işten çıkış senaryoları sınırlı simüle edilebiliyor.",
            "OPEX ve workforce planları bağlantılı değil.",
            "Workforce maliyet etkisi finansal planlamada görünür değil.",
        ],

        includedUseCaseIds: [
            "workforce_opex_capex_planning",
            "integrated_financial_planning",
            "budget_cycle_optimization",
            "management_reporting_automation",
            "cost_allocation_automation",
        ],

        useCaseMapping: {
            core: [
                "workforce_opex_capex_planning",
                "integrated_financial_planning",
                "budget_cycle_optimization",
            ],
            supporting: [
                "management_reporting_automation",
                "cost_allocation_automation",
            ],
            future: [],
        },

        solutionStack: [
            "SAC Planning",
            "SAC Reporting",
            "SAP Datasphere",
            "SAP SuccessFactors integration",
            "SAP S/4HANA / Payroll integration",
            "SAP BDC",
        ],

        optionalFutureCapabilities: [
            "Workforce scenario recommendation agent",
            "Personnel cost anomaly detection",
            "Planning assumption validation agent",
            "AI-assisted forecast for headcount trends",
        ],

        expectedBusinessValue: [
            "Better workforce cost transparency",
            "Improved HR and finance alignment",
            "Reduced manual personnel cost calculation",
            "Faster scenario simulation",
            "Better visibility of headcount and cost impact",
            "Improved plan vs actual control for workforce cost",
        ],
        expectedBusinessValueTR: [
            "Daha iyi workforce maliyet şeffaflığı",
            "İK ve finans arasında daha iyi hizalanma",
            "Manuel personel maliyeti hesaplamasının azaltılması",
            "Daha hızlı senaryo simülasyonu",
            "Headcount ve maliyet etkisinin daha iyi görünürlüğü",
            "Workforce maliyeti için daha iyi plan-fiili kontrolü",
        ],

        expectedProjectTimeline: {
            summary: "10–16 weeks for first workforce planning model",
            summaryTR: "İlk workforce planlama modeli için 10–16 hafta",
            bestStart:
                "Best started before annual workforce planning, salary increase or budget preparation cycles.",
            bestStartTR:
                "Yıllık workforce planlama, maaş artışı veya bütçe hazırlık dönemlerinden önce başlamak idealdir.",
            phases: [
                {
                    title: "Workforce Planning Assessment",
                    titleTR: "Workforce Planlama Analizi",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Headcount and Personnel Cost Model Design",
                    titleTR: "Headcount ve Personel Maliyeti Model Tasarımı",
                    duration: "3–4 weeks",
                    durationTR: "3–4 hafta",
                },
                {
                    title: "SAC Planning Implementation",
                    titleTR: "SAC Planning Uygulaması",
                    duration: "5–7 weeks",
                    durationTR: "5–7 hafta",
                },
                {
                    title: "HR and Finance Integration",
                    titleTR: "İK ve Finans Entegrasyonu",
                    duration: "3–5 weeks",
                    durationTR: "3–5 hafta",
                },
                {
                    title: "Reporting and Scenario Simulation",
                    titleTR: "Raporlama ve Senaryo Simülasyonu",
                    duration: "2–4 weeks",
                    durationTR: "2–4 hafta",
                },
            ],
        },

        criticalSuccessFactors: [
            "Clarify whether the scope is headcount, personnel cost, OPEX or full workforce planning.",
            "Align HR and finance ownership before model design.",
            "Validate employee, position, salary and payroll data availability.",
            "Define planning granularity such as employee, position, department or cost center.",
            "Keep sensitive HR data access and security rules clear.",
            "Start with a manageable planning scope before adding complex scenarios.",
            "Align the project timeline with salary increase and budget planning cycles.",
        ],
        criticalSuccessFactorsTR: [
            "Kapsamın headcount, personel maliyeti, OPEX veya tam workforce planlama mı olduğu netleştirilmelidir.",
            "Model tasarımından önce İK ve finans sahipliği hizalanmalıdır.",
            "Çalışan, pozisyon, maaş ve bordro verisi hazır oluşu doğrulanmalıdır.",
            "Planlama kırılımı çalışan, pozisyon, departman veya cost center bazında netleştirilmelidir.",
            "Hassas İK verileri için erişim ve güvenlik kuralları net olmalıdır.",
            "Karmaşık senaryolar eklenmeden önce yönetilebilir bir planlama kapsamıyla başlanmalıdır.",
            "Proje takvimi maaş artışı ve bütçe planlama döngüleriyle hizalanmalıdır.",
        ],

        projectApproach: [
            "Phase 1 — Workforce Planning Assessment",
            "Phase 2 — Headcount and Personnel Cost Model Design",
            "Phase 3 — SAC Planning Implementation",
            "Phase 4 — HR and Finance Integration",
            "Phase 5 — Reporting and Scenario Simulation",
        ],
        projectApproachTR: [
            "Phase 1 — Workforce Planlama Analizi",
            "Phase 2 — Headcount ve Personel Maliyeti Model Tasarımı",
            "Phase 3 — SAC Planning Uygulaması",
            "Phase 4 — İK ve Finans Entegrasyonu",
            "Phase 5 — Raporlama ve Senaryo Simülasyonu",
        ],

        referencePatterns: [
            "Action-based headcount planning",
            "Personnel cost simulation",
            "SuccessFactors-integrated workforce planning",
            "Plan vs actual workforce cost reporting",
            "OPEX and workforce planning integration",
        ],
        referencePatternsTR: [
            "Aksiyon bazlı headcount planlama",
            "Personel maliyeti simülasyonu",
            "SuccessFactors entegre workforce planlama",
            "Plan-fiili workforce maliyeti raporlaması",
            "OPEX ve workforce planlama entegrasyonu",
        ],

        salesPositioning:
            "This offering helps customers connect HR and finance planning by turning workforce assumptions into transparent cost simulations and financial planning inputs. It improves visibility into headcount, personnel cost and OPEX impact.",
        salesPositioningTR:
            "Bu offering, workforce varsayımlarını şeffaf maliyet simülasyonlarına ve finansal planlama girdilerine dönüştürerek İK ve finans planlamasını birbirine bağlar. Headcount, personel maliyeti ve OPEX etkisinin görünürlüğünü artırır.",

        discoveryQuestions: [
            "How is headcount currently planned?",
            "Are HR and finance using the same workforce assumptions?",
            "Can users simulate hiring, termination and salary increase impact?",
            "How is personnel cost integrated into financial planning?",
            "Which HR, payroll and finance systems are used?",
            "At which level should workforce planning be performed?",
            "Which workforce cost reports are most important for management?",
        ],
        discoveryQuestionsTR: [
            "Headcount bugün nasıl planlanıyor?",
            "İK ve finans aynı workforce varsayımlarını mı kullanıyor?",
            "Kullanıcılar işe alım, işten çıkış ve maaş artışı etkisini simüle edebiliyor mu?",
            "Personel maliyeti finansal planlamaya nasıl entegre ediliyor?",
            "Hangi İK, bordro ve finans sistemleri kullanılıyor?",
            "Workforce planlama hangi seviyede yapılmalı?",
            "Yönetim için en kritik workforce maliyeti raporları hangileri?",
        ],

        recommendedNextStep: "Run a Workforce Planning Discovery Workshop.",
        recommendedNextStepTR: "Workforce Planning Discovery Workshop yapılması.",
        strategyFit: {
            sap_first: 90,
            microsoft_first: 45,
            technology_neutral: 80,
        },
    },
    {
        id: "sap_bdc_value_discovery",

        title: "SAP BDC Value Discovery",
        titleTR: "SAP BDC Değer Keşfi",

        category: "SAP Business Data Cloud",
        categoryTR: "SAP Business Data Cloud",

        pitch:
            "Identifies how SAP Business Data Cloud can support the customer’s data products, Datasphere, SAC, BW modernization and AI-ready analytics roadmap.",
        pitchTR:
            "SAP Business Data Cloud’un müşterinin data product, Datasphere, SAC, BW modernizasyonu ve AI’a hazır analitik roadmap’ini nasıl destekleyebileceğini belirler.",

        customerSituation: [
            "Customer wants to understand SAP BDC positioning.",
            "SAP data and analytics landscape is fragmented.",
            "There is interest in Datasphere, SAC, BW modernization or SAP-managed Databricks.",
            "Customer wants to understand data products and intelligent applications.",
            "AI use cases are being discussed, but data readiness is unclear.",
        ],
        customerSituationTR: [
            "Müşteri SAP BDC’nin konumlandırmasını anlamak istiyor.",
            "SAP veri ve analitik mimarisi parçalı durumda.",
            "Datasphere, SAC, BW modernizasyonu veya SAP-managed Databricks ilgisi var.",
            "Müşteri data product ve intelligent application kavramlarını anlamak istiyor.",
            "AI use case’leri konuşuluyor ama veri hazırlığı net değil.",
        ],

        typicalPainIds: [
            "sap_non_sap_combine",
            "legacy_dwh_scale",
            "it_data_prep",
            "data_quality_slow",
            "single_source_missing",
        ],

        typicalPainPatterns: [
            "Analytics architecture is fragmented.",
            "SAP data is difficult to reuse across use cases.",
            "BW modernization path is unclear.",
            "AI use cases are blocked by data readiness.",
            "Business content, data products and intelligent applications are not clearly understood.",
            "There is no clear roadmap for BDC adoption.",
        ],
        typicalPainPatternsTR: [
            "Analitik mimarisi parçalı durumda.",
            "SAP verisi use case’ler arasında kolay tekrar kullanılamıyor.",
            "BW modernizasyon yolu net değil.",
            "AI use case’leri veri hazırlığı nedeniyle ilerleyemiyor.",
            "Business content, data product ve intelligent application kavramları net anlaşılmıyor.",
            "BDC geçişi için net roadmap bulunmuyor.",
        ],

        includedUseCaseIds: [
            "cloud_data_platform_roadmap",
            "data_product_reuse",
            "sap_non_sap_data_integration",
            "legacy_dwh_modernization",
            "executive_kpi_cockpit",
            "management_reporting_automation",
        ],

        useCaseMapping: {
            core: [
                "cloud_data_platform_roadmap",
                "data_product_reuse",
                "sap_non_sap_data_integration",
            ],
            supporting: [
                "legacy_dwh_modernization",
                "executive_kpi_cockpit",
            ],
            future: [
                "management_reporting_automation",
            ],
        },

        solutionStack: [
            "SAP BDC",
            "SAP Datasphere",
            "SAP Analytics Cloud",
            "SAP BW / BW/4HANA modernization path",
            "SAP Data Products",
            "SAP Databricks where relevant",
        ],

        optionalFutureCapabilities: [
            "AI-ready data foundation",
            "Intelligent applications roadmap",
            "Data product recommendation agent",
            "AI-assisted analytics use case discovery",
        ],

        expectedBusinessValue: [
            "Clear BDC adoption roadmap",
            "Better reuse of SAP business data",
            "Faster analytics use case delivery",
            "Modern SAP data architecture",
            "Foundation for intelligent applications and AI",
            "Clear positioning of Datasphere, SAC, BW and data products",
        ],
        expectedBusinessValueTR: [
            "Net BDC geçiş roadmap’i",
            "SAP iş verisinin daha iyi tekrar kullanımı",
            "Analitik use case’lerinin daha hızlı teslim edilmesi",
            "Modern SAP veri mimarisi",
            "Intelligent application ve AI için temel oluşturulması",
            "Datasphere, SAC, BW ve data product konumlandırmasının netleşmesi",
        ],

        expectedProjectTimeline: {
            summary: "4–8 weeks for discovery and roadmap",
            summaryTR: "Keşif ve roadmap için 4–8 hafta",
            bestStart:
                "Best started before major SAP analytics, Datasphere, BW modernization or AI roadmap decisions.",
            bestStartTR:
                "Büyük SAP analitik, Datasphere, BW modernizasyonu veya AI roadmap kararlarından önce başlamak idealdir.",
            phases: [
                {
                    title: "BDC Discovery Workshop",
                    titleTR: "BDC Discovery Workshop",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
                {
                    title: "Current Architecture Review",
                    titleTR: "Mevcut Mimari Analizi",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
                {
                    title: "Use Case and Data Product Mapping",
                    titleTR: "Use Case ve Data Product Eşleştirme",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
                {
                    title: "Target Architecture and Roadmap",
                    titleTR: "Hedef Mimari ve Roadmap",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
                {
                    title: "Pilot Use Case Definition",
                    titleTR: "Pilot Use Case Tanımı",
                    duration: "1 week",
                    durationTR: "1 hafta",
                },
            ],
        },

        criticalSuccessFactors: [
            "Do not position BDC as only another data platform.",
            "Clarify the customer’s SAP, BW, Datasphere and SAC landscape first.",
            "Start from business use cases and data products, not only technology features.",
            "Identify whether BW modernization, data product reuse or AI readiness is the main driver.",
            "Avoid overpromising AI before data readiness is assessed.",
            "Define a pilot use case to make the roadmap actionable.",
            "Align BDC positioning with the customer’s broader SAP cloud strategy.",
        ],
        criticalSuccessFactorsTR: [
            "BDC sadece başka bir veri platformu gibi konumlandırılmamalıdır.",
            "Önce müşterinin SAP, BW, Datasphere ve SAC mimarisi netleştirilmelidir.",
            "Sadece teknoloji özelliklerinden değil, iş use case’leri ve data product’lardan başlanmalıdır.",
            "Ana motivasyonun BW modernizasyonu, data product tekrar kullanımı veya AI hazırlığı olup olmadığı belirlenmelidir.",
            "Veri hazırlığı analiz edilmeden AI fazla vaat edilmemelidir.",
            "Roadmap’in aksiyona dönüşmesi için pilot use case tanımlanmalıdır.",
            "BDC konumlandırması müşterinin genel SAP cloud stratejisiyle hizalanmalıdır.",
        ],

        projectApproach: [
            "Phase 1 — BDC Discovery Workshop",
            "Phase 2 — Current Architecture Review",
            "Phase 3 — Use Case and Data Product Mapping",
            "Phase 4 — Target Architecture and Roadmap",
            "Phase 5 — Pilot Use Case Definition",
        ],
        projectApproachTR: [
            "Phase 1 — BDC Discovery Workshop",
            "Phase 2 — Mevcut Mimari Analizi",
            "Phase 3 — Use Case ve Data Product Eşleştirme",
            "Phase 4 — Hedef Mimari ve Roadmap",
            "Phase 5 — Pilot Use Case Tanımı",
        ],

        referencePatterns: [
            "BDC positioning workshop",
            "Datasphere and SAC architecture design",
            "BW modernization roadmap",
            "Data product opportunity assessment",
            "AI-ready analytics roadmap",
        ],
        referencePatternsTR: [
            "BDC konumlandırma workshop’u",
            "Datasphere ve SAC mimari tasarımı",
            "BW modernizasyon roadmap’i",
            "Data product fırsat analizi",
            "AI’a hazır analitik roadmap’i",
        ],

        salesPositioning:
            "This offering helps customers understand where BDC fits into their analytics strategy and how to turn SAP business data into reusable data products, modern analytics architecture and intelligent application opportunities.",
        salesPositioningTR:
            "Bu offering, müşterinin BDC’yi analitik stratejisinde nereye konumlandıracağını ve SAP iş verisini tekrar kullanılabilir data product’lara, modern analitik mimariye ve intelligent application fırsatlarına nasıl dönüştürebileceğini netleştirir.",

        discoveryQuestions: [
            "What is your current SAP data and analytics architecture?",
            "Are you evaluating BDC, Datasphere or SAC?",
            "Is BW modernization part of your roadmap?",
            "Which SAP business data domains are most important?",
            "Which data products would create the most value?",
            "Which AI or intelligent application use cases are being considered?",
            "Do you need a roadmap, pilot use case or architecture recommendation?",
        ],
        discoveryQuestionsTR: [
            "Mevcut SAP veri ve analitik mimariniz nasıl?",
            "BDC, Datasphere veya SAC değerlendiriliyor mu?",
            "BW modernizasyonu roadmap’inizin parçası mı?",
            "En kritik SAP iş veri domain’leri hangileri?",
            "Hangi data product’lar en çok değer yaratır?",
            "Hangi AI veya intelligent application use case’leri değerlendiriliyor?",
            "Roadmap, pilot use case veya mimari öneriye mi ihtiyacınız var?",
        ],

        recommendedNextStep: "Run a BDC Value Discovery Workshop.",
        recommendedNextStepTR: "BDC Value Discovery Workshop yapılması.",
        strategyFit: {
            sap_first: 100,
            microsoft_first: 20,
            technology_neutral: 75,
        },
    },
    {
        id: "process_intelligence_value_discovery",

        title: "Process Intelligence & Value Discovery",
        titleTR: "Süreç Zekâsı & Değer Keşfi",

        category: "Process & Operational Efficiency",
        categoryTR: "Süreç & Operasyonel Verimlilik",

        pitch:
            "Identifies process inefficiencies, manual work and automation opportunities and converts them into measurable value cases.",
        pitchTR:
            "Süreç verimsizliklerini, manuel işleri ve otomasyon fırsatlarını belirleyerek ölçülebilir değer fırsatlarına dönüştürür.",

        customerSituation: [
            "Process inefficiencies are suspected but not quantified.",
            "Manual steps and bottlenecks are not clearly visible.",
            "Management wants fact-based process improvement opportunities.",
            "Automation priorities are unclear.",
            "Process performance differs by team, region or business unit.",
        ],
        customerSituationTR: [
            "Süreç verimsizliklerinden şüpheleniliyor ama ölçülmüş değil.",
            "Manuel adımlar ve darboğazlar net görünmüyor.",
            "Yönetim veri temelli süreç iyileştirme fırsatları görmek istiyor.",
            "Otomasyon öncelikleri net değil.",
            "Süreç performansı ekip, bölge veya iş birimine göre değişiyor.",
        ],

        typicalPainIds: [
            "process_bottlenecks_hidden",
            "manual_process_work",
            "automation_priorities_unclear",
            "process_performance_inconsistent",
            "process_value_not_quantified",
        ],

        typicalPainPatterns: [
            "Process bottlenecks are not visible.",
            "Manual work is high but not measured.",
            "Process performance differs by team or region.",
            "Automation opportunities are unclear.",
            "Improvement initiatives are not value-based.",
            "Process deviations and rework are not transparent.",
        ],
        typicalPainPatternsTR: [
            "Süreç darboğazları görünür değil.",
            "Manuel iş yükü yüksek ama ölçülmüyor.",
            "Süreç performansı ekip veya bölgelere göre değişiyor.",
            "Otomasyon fırsatları net değil.",
            "İyileştirme girişimleri değer bazlı önceliklendirilmiyor.",
            "Süreç sapmaları ve tekrar işler şeffaf değil.",
        ],

        includedUseCaseIds: [
            "process_mining_value_assessment",
            "process_bottleneck_analysis",
            "automation_opportunity_prioritization",
            "process_kpi_cockpit",
            "operational_visibility_dashboard",
        ],

        useCaseMapping: {
            core: [
                "process_mining_value_assessment",
                "process_bottleneck_analysis",
                "automation_opportunity_prioritization",
            ],
            supporting: [
                "process_kpi_cockpit",
                "operational_visibility_dashboard",
            ],
            future: [],
        },

        solutionStack: [
            "Celonis",
            "SAP Signavio",
            "SAC Reporting",
            "SAP Datasphere",
            "SAP BDC",
            "Power Platform where Microsoft automation is relevant",
        ],

        optionalFutureCapabilities: [
            "Process improvement recommendation agent",
            "Automation opportunity scoring agent",
            "Exception explanation agent",
            "AI-assisted process commentary",
        ],

        expectedBusinessValue: [
            "Reduced manual process effort",
            "Better process transparency",
            "Clear automation priorities",
            "Faster process improvement decisions",
            "Measurable process value cases",
            "Improved visibility into bottlenecks, rework and deviations",
        ],
        expectedBusinessValueTR: [
            "Manuel süreç eforunun azaltılması",
            "Daha iyi süreç şeffaflığı",
            "Net otomasyon öncelikleri",
            "Daha hızlı süreç iyileştirme kararları",
            "Ölçülebilir süreç değer fırsatları",
            "Darboğaz, tekrar iş ve sapmalarda daha iyi görünürlük",
        ],

        expectedProjectTimeline: {
            summary: "6–10 weeks for first process value discovery",
            summaryTR: "İlk süreç değer keşfi için 6–10 hafta",
            bestStart:
                "Best started before automation roadmap, process improvement or shared service optimization initiatives.",
            bestStartTR:
                "Otomasyon roadmap’i, süreç iyileştirme veya shared service optimizasyon çalışmalarından önce başlamak idealdir.",
            phases: [
                {
                    title: "Process Value Discovery",
                    titleTR: "Süreç Değer Keşfi",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
                {
                    title: "Data Extraction and Process Mapping",
                    titleTR: "Veri Çıkarma ve Süreç Haritalama",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Bottleneck and Automation Analysis",
                    titleTR: "Darboğaz ve Otomasyon Analizi",
                    duration: "2–3 weeks",
                    durationTR: "2–3 hafta",
                },
                {
                    title: "Value Case Calculation",
                    titleTR: "Değer Fırsatı Hesaplama",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
                {
                    title: "Improvement Roadmap",
                    titleTR: "İyileştirme Roadmap’i",
                    duration: "1–2 weeks",
                    durationTR: "1–2 hafta",
                },
            ],
        },

        criticalSuccessFactors: [
            "Start with a process that has enough event data and business relevance.",
            "Clarify whether the goal is visibility, automation, compliance or efficiency.",
            "Do not promise savings before process data is validated.",
            "Align process owners early.",
            "Define measurable process KPIs such as cycle time, rework, delay and compliance.",
            "Prioritize improvement opportunities by value and feasibility.",
            "Connect process findings with actionable automation or redesign initiatives.",
        ],
        criticalSuccessFactorsTR: [
            "Yeterli event datası ve iş önemi olan bir süreçle başlanmalıdır.",
            "Hedefin görünürlük, otomasyon, uyum veya verimlilik mi olduğu netleştirilmelidir.",
            "Süreç verisi doğrulanmadan tasarruf vaadi verilmemelidir.",
            "Süreç sahipleri erken hizalanmalıdır.",
            "Cycle time, tekrar iş, gecikme ve uyum gibi ölçülebilir süreç KPI’ları tanımlanmalıdır.",
            "İyileştirme fırsatları değer ve uygulanabilirliğe göre önceliklendirilmelidir.",
            "Süreç bulguları aksiyon alınabilir otomasyon veya yeniden tasarım girişimleriyle bağlanmalıdır.",
        ],

        projectApproach: [
            "Phase 1 — Process Value Discovery",
            "Phase 2 — Data Extraction and Process Mapping",
            "Phase 3 — Bottleneck and Automation Analysis",
            "Phase 4 — Value Case Calculation",
            "Phase 5 — Improvement Roadmap",
        ],
        projectApproachTR: [
            "Phase 1 — Süreç Değer Keşfi",
            "Phase 2 — Veri Çıkarma ve Süreç Haritalama",
            "Phase 3 — Darboğaz ve Otomasyon Analizi",
            "Phase 4 — Değer Fırsatı Hesaplama",
            "Phase 5 — İyileştirme Roadmap’i",
        ],

        referencePatterns: [
            "Process discovery and mapping",
            "Manual task analysis",
            "Automation opportunity prioritization",
            "Process mining value case",
            "Process KPI cockpit",
        ],
        referencePatternsTR: [
            "Süreç keşfi ve haritalama",
            "Manuel iş analizi",
            "Otomasyon fırsatlarının önceliklendirilmesi",
            "Process mining değer fırsatı",
            "Süreç KPI kokpiti",
        ],

        salesPositioning:
            "This offering helps customers move from assumed process problems to fact-based improvement opportunities, supported by measurable value calculations and automation prioritization.",
        salesPositioningTR:
            "Bu offering, müşterinin varsayımsal süreç problemlerinden ölçülebilir değer hesapları ve otomasyon önceliklendirmesiyle desteklenen gerçek iyileştirme fırsatlarına geçmesini sağlar.",

        discoveryQuestions: [
            "Which processes are most manual?",
            "Where do delays, rework or bottlenecks occur?",
            "Can you quantify manual process effort today?",
            "Which systems contain the required process data?",
            "Are automation opportunities already identified?",
            "Which process KPIs are currently monitored?",
            "Is the priority efficiency, compliance, visibility or automation?",
        ],
        discoveryQuestionsTR: [
            "En manuel süreçler hangileri?",
            "Gecikme, tekrar iş veya darboğazlar nerede oluşuyor?",
            "Bugün manuel süreç eforunu ölçebiliyor musunuz?",
            "Gerekli süreç verisi hangi sistemlerde bulunuyor?",
            "Otomasyon fırsatları daha önce belirlenmiş mi?",
            "Hangi süreç KPI’ları şu anda takip ediliyor?",
            "Öncelik verimlilik, uyum, görünürlük veya otomasyon mu?",
        ],

        recommendedNextStep: "Run a Process Value Discovery Assessment.",
        recommendedNextStepTR: "Process Value Discovery Assessment yapılması.",
        strategyFit: {
            sap_first: 75,
            microsoft_first: 85,
            technology_neutral: 90,
        },
    },
];

export const maturityAssessmentSections = [
    {
        id: "technology_landscape",
        title: "Current Technology Landscape",
        titleTR: "Mevcut Teknoloji Yapısı",
        description:
            "Understand the customer's existing analytics, data and planning technology landscape before recommending a direction.",
        descriptionTR:
            "Öneri oluşturmadan önce müşterinin mevcut analitik, veri ve planlama teknolojileri yapısını anlamak.",
        questions: [
            {
                id: "primary_platform",
                type: "single",
                question: "What is the customer's primary analytics / data platform direction?",
                questionTR:
                    "Müşterinin ana analitik / veri platformu yönelimi nedir?",
                options: [
                    {
                        id: "sap_first",
                        label: "SAP-first",
                        labelTR: "SAP ağırlıklı",
                    },
                    {
                        id: "microsoft_first",
                        label: "Microsoft-first",
                        labelTR: "Microsoft ağırlıklı",
                    },
                    {
                        id: "mixed",
                        label: "Mixed / multi-platform",
                        labelTR: "Karma / çoklu platform",
                    },
                    {
                        id: "unknown",
                        label: "Not clear yet",
                        labelTR: "Henüz net değil",
                    },
                ],
            },
            {
                id: "sap_landscape",
                type: "multi",
                question: "Which SAP technologies are currently in use?",
                questionTR: "Hangi SAP teknolojileri şu anda kullanılıyor?",
                options: [
                    { id: "s4hana", label: "SAP S/4HANA", labelTR: "SAP S/4HANA" },
                    { id: "bw", label: "SAP BW / BW/4HANA", labelTR: "SAP BW / BW/4HANA" },
                    { id: "bpc", label: "SAP BPC", labelTR: "SAP BPC" },
                    { id: "sac", label: "SAP Analytics Cloud", labelTR: "SAP Analytics Cloud" },
                    { id: "datasphere", label: "SAP Datasphere", labelTR: "SAP Datasphere" },
                    { id: "successfactors", label: "SAP SuccessFactors", labelTR: "SAP SuccessFactors" },
                    { id: "none", label: "No significant SAP landscape", labelTR: "Önemli bir SAP yapısı yok" },
                ],
            },
            {
                id: "microsoft_landscape",
                type: "multi",
                question: "Which Microsoft analytics technologies are currently in use?",
                questionTR:
                    "Hangi Microsoft analitik teknolojileri şu anda kullanılıyor?",
                options: [
                    { id: "powerbi", label: "Power BI", labelTR: "Power BI" },
                    { id: "fabric", label: "Microsoft Fabric", labelTR: "Microsoft Fabric" },
                    { id: "azure_data", label: "Azure Data Platform", labelTR: "Azure Data Platform" },
                    { id: "power_platform", label: "Power Platform", labelTR: "Power Platform" },
                    { id: "none", label: "No significant Microsoft analytics landscape", labelTR: "Önemli bir Microsoft analitik yapısı yok" },
                ],
            },
            {
                id: "planning_landscape",
                type: "multi",
                question: "How is planning currently managed?",
                questionTR: "Planlama şu anda nasıl yönetiliyor?",
                options: [
                    { id: "excel", label: "Mostly Excel-based", labelTR: "Ağırlıklı Excel bazlı" },
                    { id: "bpc", label: "SAP BPC", labelTR: "SAP BPC" },
                    { id: "sac_planning", label: "SAC Planning", labelTR: "SAC Planning" },
                    { id: "other_planning_tool", label: "Other planning tool", labelTR: "Başka bir planlama aracı" },
                    { id: "not_structured", label: "Not structured", labelTR: "Yapılandırılmış değil" },
                ],
            },
            {
                id: "technology_constraints",
                type: "multi",
                question: "Are there any known technology constraints?",
                questionTR: "Bilinen teknoloji kısıtları var mı?",
                options: [
                    { id: "avoid_new_sap", label: "Avoid introducing new SAP tools", labelTR: "Yeni SAP aracı eklemek istenmiyor" },
                    { id: "avoid_new_ms", label: "Avoid introducing new Microsoft tools", labelTR: "Yeni Microsoft aracı eklemek istenmiyor" },
                    { id: "cloud_limited", label: "Cloud adoption is limited", labelTR: "Cloud adaptasyonu sınırlı" },
                    { id: "use_existing_tools", label: "Prefer using existing tools", labelTR: "Mevcut araçların kullanılması tercih ediliyor" },
                    { id: "no_clear_constraint", label: "No clear constraint", labelTR: "Net bir kısıt yok" },
                ],
            },
        ],
    },

    {
        id: "analytics_maturity",
        title: "Analytics Maturity",
        titleTR: "Analitik Olgunluk",
        description:
            "Assess the customer's maturity across data foundation, reporting, planning, governance, automation and AI readiness.",
        descriptionTR:
            "Müşterinin veri altyapısı, raporlama, planlama, yönetişim, otomasyon ve AI hazırlığı alanlarındaki olgunluğunu değerlendirmek.",
        questions: [
            {
                id: "data_foundation_maturity",
                type: "score",
                dimension: "data_foundation",
                question:
                    "How mature is the customer's data foundation across integration, quality and reuse?",
                questionTR:
                    "Müşterinin veri entegrasyonu, veri kalitesi ve tekrar kullanım açısından veri altyapısı ne kadar olgun?",
                lowLabel: "Fragmented and manual",
                lowLabelTR: "Dağınık ve manuel",
                highLabel: "Integrated and reusable",
                highLabelTR: "Entegre ve tekrar kullanılabilir",
                defaultValue: 3,
            },
            {
                id: "reporting_maturity",
                type: "score",
                dimension: "reporting",
                question:
                    "How mature is management reporting and KPI visibility?",
                questionTR:
                    "Yönetim raporlaması ve KPI görünürlüğü ne kadar olgun?",
                lowLabel: "Manual and inconsistent",
                lowLabelTR: "Manuel ve tutarsız",
                highLabel: "Automated and trusted",
                highLabelTR: "Otomatik ve güvenilir",
                defaultValue: 3,
            },
            {
                id: "planning_maturity",
                type: "score",
                dimension: "planning",
                question:
                    "How mature are budgeting, forecasting and planning processes?",
                questionTR:
                    "Bütçe, forecast ve planlama süreçleri ne kadar olgun?",
                lowLabel: "Excel-based and disconnected",
                lowLabelTR: "Excel bazlı ve kopuk",
                highLabel: "Integrated and driver-based",
                highLabelTR: "Entegre ve driver-based",
                defaultValue: 3,
            },
            {
                id: "governance_maturity",
                type: "score",
                dimension: "governance",
                question:
                    "How clear are data ownership, KPI definitions and analytics governance?",
                questionTR:
                    "Veri sahipliği, KPI tanımları ve analitik yönetişimi ne kadar net?",
                lowLabel: "Unclear ownership",
                lowLabelTR: "Sahiplik net değil",
                highLabel: "Governed and standardized",
                highLabelTR: "Yönetilen ve standart",
                defaultValue: 3,
            },
            {
                id: "automation_maturity",
                type: "score",
                dimension: "automation",
                question:
                    "How mature is process automation and operational visibility?",
                questionTR:
                    "Süreç otomasyonu ve operasyonel görünürlük ne kadar olgun?",
                lowLabel: "Manual and reactive",
                lowLabelTR: "Manuel ve reaktif",
                highLabel: "Automated and proactive",
                highLabelTR: "Otomatik ve proaktif",
                defaultValue: 3,
            },
            {
                id: "ai_readiness",
                type: "score",
                dimension: "ai_readiness",
                question:
                    "How ready is the customer for AI and advanced analytics use cases?",
                questionTR:
                    "Müşteri AI ve ileri analitik use case’leri için ne kadar hazır?",
                lowLabel: "Not ready",
                lowLabelTR: "Hazır değil",
                highLabel: "AI-ready foundation",
                highLabelTR: "AI’a hazır altyapı",
                defaultValue: 2,
            },
        ],
    },
    {
        id: "business_priorities",
        title: "Business Priorities & Constraints",
        titleTR: "İş Öncelikleri & Kısıtlar",
        description:
            "Capture the customer's business priorities and constraints so recommendations do not conflict with their current direction.",
        descriptionTR:
            "Önerilerin müşterinin mevcut yönelimiyle çelişmemesi için iş önceliklerini ve kısıtlarını toplamak.",
        questions: [
            {
                id: "business_priorities",
                type: "multi",
                question: "What are the customer's main business priorities?",
                questionTR: "Müşterinin ana iş öncelikleri nelerdir?",
                options: [
                    {
                        id: "cost_efficiency",
                        label: "Cost efficiency / effort reduction",
                        labelTR: "Maliyet verimliliği / efor azaltımı",
                    },
                    {
                        id: "faster_reporting",
                        label: "Faster and trusted reporting",
                        labelTR: "Daha hızlı ve güvenilir raporlama",
                    },
                    {
                        id: "planning_accuracy",
                        label: "Better planning and forecast accuracy",
                        labelTR: "Daha iyi planlama ve forecast doğruluğu",
                    },
                    {
                        id: "data_foundation",
                        label: "Stronger data foundation",
                        labelTR: "Daha güçlü veri altyapısı",
                    },
                    {
                        id: "governance",
                        label: "KPI / data governance",
                        labelTR: "KPI / veri yönetişimi",
                    },
                    {
                        id: "automation",
                        label: "Automation and process efficiency",
                        labelTR: "Otomasyon ve süreç verimliliği",
                    },
                    {
                        id: "ai_readiness",
                        label: "AI and advanced analytics readiness",
                        labelTR: "AI ve ileri analitik hazırlığı",
                    },
                ],
            },
            {
                id: "decision_audience",
                type: "multi",
                question: "Who is the primary decision audience?",
                questionTR: "Ana karar verici hedef kitle kim?",
                options: [
                    { id: "cfo", label: "CFO / Finance", labelTR: "CFO / Finans" },
                    { id: "cio", label: "CIO / IT", labelTR: "CIO / IT" },
                    { id: "coo", label: "COO / Operations", labelTR: "COO / Operasyon" },
                    { id: "chro", label: "CHRO / HR", labelTR: "CHRO / İK" },
                    { id: "business_units", label: "Business units", labelTR: "İş birimleri" },
                ],
            },
            {
                id: "preferred_next_step",
                type: "single",
                question: "What type of next step is most realistic?",
                questionTR: "En gerçekçi sonraki adım hangisi?",
                options: [
                    {
                        id: "discovery_workshop",
                        label: "Discovery workshop",
                        labelTR: "Discovery workshop",
                    },
                    {
                        id: "maturity_assessment",
                        label: "Detailed maturity assessment",
                        labelTR: "Detaylı maturity assessment",
                    },
                    {
                        id: "value_assessment",
                        label: "Value assessment / business case",
                        labelTR: "Value assessment / business case",
                    },
                    {
                        id: "pilot",
                        label: "Pilot / MVP",
                        labelTR: "Pilot / MVP",
                    },
                    {
                        id: "roadmap",
                        label: "Roadmap and target architecture",
                        labelTR: "Roadmap ve hedef mimari",
                    },
                ],
            },
            {
                id: "urgency",
                type: "single",
                question: "How urgent is the initiative?",
                questionTR: "Bu inisiyatif ne kadar acil?",
                options: [
                    { id: "low", label: "Low — exploratory", labelTR: "Düşük — keşif aşaması" },
                    { id: "medium", label: "Medium — planned initiative", labelTR: "Orta — planlanan inisiyatif" },
                    { id: "high", label: "High — active priority", labelTR: "Yüksek — aktif öncelik" },
                ],
            },
        ],
    },
];
export const quickAssessmentQuestions = [
    {
        id: "primary_platform",
        type: "single",
        question: "What is the customer’s primary technology direction?",
        questionTR: "Müşterinin ana teknoloji yönelimi nedir?",
        options: [
            { id: "sap_first", label: "SAP-first", labelTR: "SAP ağırlıklı" },
            { id: "microsoft_first", label: "Microsoft-first", labelTR: "Microsoft ağırlıklı" },
            { id: "mixed", label: "Mixed / multi-platform", labelTR: "Karma / çoklu platform" },
            { id: "unknown", label: "Not clear yet", labelTR: "Henüz net değil" },
        ],
    },
    {
        id: "main_challenge",
        type: "multi",
        question: "What is the main analytics challenge?",
        questionTR: "Ana analitik problemi nedir?",
        options: [
            { id: "data_foundation", label: "Data foundation", labelTR: "Veri altyapısı" },
            { id: "reporting", label: "Reporting & KPI visibility", labelTR: "Raporlama & KPI görünürlüğü" },
            { id: "planning", label: "Planning & forecasting", labelTR: "Planlama & tahminleme" },
            { id: "governance", label: "Governance", labelTR: "Yönetişim" },
            { id: "automation", label: "Automation & process efficiency", labelTR: "Otomasyon & süreç verimliliği" },
            { id: "ai_readiness", label: "AI readiness", labelTR: "AI hazırlığı" },
        ],
    },
    {
        id: "current_setup",
        type: "single",
        question: "How are analytics and planning mostly managed today?",
        questionTR: "Analitik ve planlama bugün ağırlıklı nasıl yönetiliyor?",
        options: [
            { id: "excel_heavy", label: "Excel-heavy", labelTR: "Excel ağırlıklı" },
            { id: "existing_bi", label: "Existing BI tools", labelTR: "Mevcut BI araçları" },
            { id: "existing_planning", label: "Existing planning tool", labelTR: "Mevcut planlama aracı" },
            { id: "not_structured", label: "Not structured", labelTR: "Yapılandırılmış değil" },
        ],
    },
    {
        id: "data_maturity",
        type: "single",
        question: "How mature is the data foundation?",
        questionTR: "Veri altyapısı ne kadar olgun?",
        options: [
            { id: "low", label: "Low", labelTR: "Düşük" },
            { id: "medium", label: "Medium", labelTR: "Orta" },
            { id: "high", label: "High", labelTR: "Yüksek" },
        ],
    },
    {
        id: "business_priority",
        type: "multi",
        question: "What are the key business priority?",
        questionTR: "Ana iş öncelikleri nelerdir?",
        options: [
            { id: "cost_efficiency", label: "Cost efficiency", labelTR: "Maliyet verimliliği" },
            { id: "faster_reporting", label: "Faster reporting", labelTR: "Daha hızlı raporlama" },
            { id: "planning_accuracy", label: "Planning accuracy", labelTR: "Planlama doğruluğu" },
            { id: "governance", label: "Governance", labelTR: "Yönetişim" },
            { id: "ai_readiness", label: "AI readiness", labelTR: "AI hazırlığı" },
        ],
    },
    {
        id: "technology_constraint",
        type: "multi",
        question: "Is there any important technology constraint?",
        questionTR: "Önemli bir teknoloji kısıtı var mı?",
        options: [
            { id: "use_existing_tools", label: "Prefer existing tools", labelTR: "Mevcut araçlar tercih edilir" },
            { id: "cloud_limited", label: "Cloud adoption is limited", labelTR: "Cloud adaptasyonu sınırlı" },
            { id: "avoid_new_sap", label: "Avoid new SAP tools", labelTR: "Yeni SAP aracı istenmiyor" },
            { id: "avoid_new_ms", label: "Avoid new Microsoft tools", labelTR: "Yeni Microsoft aracı istenmiyor" },
            { id: "no_constraint", label: "No clear constraint", labelTR: "Net kısıt yok" },
        ],
    },
];
export const referenceCases = [
    {
        id: "ref_bpc_budget_modernization",
        title: "BPC Budget Planning Modernization",
        titleTR: "BPC Bütçe Planlama Modernizasyonu",
        industry: "Manufacturing",
        industryTR: "Üretim",
        clientName: "Bakioğlu Holding",
  clientNameTR: "Bakioğlu Holding",
        customerType: "SAP-heavy",
        relatedOfferingIds: ["bpc_modernization_journey"],
        relatedUseCaseIds: [
            "budget_cycle_optimization",
            "integrated_financial_planning",
            "management_reporting_automation",
            "legacy_dwh_modernization",
        ],
        technologies: [
            "SAP BPC",
            "SAP BW",
            "SAC Planning",
            "SAC Reporting",
            "SAP Datasphere",
        ],
        scopeOverlap: "Strong",
        scopeOverlapTR: "Güçlü",
        evidenceType: "Delivered Pattern",
        evidenceTypeTR: "Teslimat Deseni",
        valueEvidence: "Qualitative",
        valueEvidenceTR: "Nitel",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Legacy BPC planning landscape assessed and selected planning/reporting scenarios positioned for a phased SAC modernization roadmap.",
        outcomeTR:
            "Legacy BPC planlama yapısı analiz edilerek seçili planlama/raporlama senaryoları fazlı SAC modernizasyon roadmap’i için konumlandırıldı.",
    onePagerImage: "/reference-onepagers/bakioglu-bpc-modernization-onepager.png",
onePagerTitle: "Bakioğlu Holding | BPC Modernization Journey Reference",
onePagerTitleTR: "Bakioğlu Holding | BPC Modernizasyon Yolculuğu Referansı",
        },
    {
        id: "ref_bw_reporting_to_sac",
        title: "BW Reporting to SAC Executive Dashboard Transition",
        titleTR: "BW Raporlamadan SAC Yönetici Dashboard Geçişi",
        industry: "Consumer Goods",
        industryTR: "Tüketim Ürünleri",
        customerType: "SAP-heavy",
        relatedOfferingIds: [
            "bpc_modernization_journey",
            "executive_reporting_kpi_cockpit",
        ],
        relatedUseCaseIds: [
            "management_reporting_automation",
            "executive_kpi_cockpit",
            "operational_visibility_dashboard",
            "kpi_harmonization",
        ],
        technologies: ["SAP BW", "SAC Reporting", "SAP Datasphere"],
        scopeOverlap: "Partial",
        scopeOverlapTR: "Kısmi",
        evidenceType: "Delivered Pattern",
        evidenceTypeTR: "Teslimat Deseni",
        valueEvidence: "Estimated",
        valueEvidenceTR: "Tahmini",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Selected BW reporting content moved toward SAC dashboard experience with improved executive visibility and reporting usability.",
        outcomeTR:
            "Seçili BW raporlama içerikleri SAC dashboard deneyimine taşınarak yönetici görünürlüğü ve raporlama kullanılabilirliği iyileştirildi.",
    },
    {
        id: "ref_sac_planning_pilot",
        title: "SAC Planning Pilot for Finance Planning",
        titleTR: "Finans Planlama için SAC Planning Pilot Çalışması",
        industry: "Retail",
        industryTR: "Perakende",
        customerType: "SAP-heavy",
        relatedOfferingIds: [
            "bpc_modernization_journey",
            "planning_transformation_accelerator",
        ],
        relatedUseCaseIds: [
            "budget_cycle_optimization",
            "integrated_financial_planning",
            "workforce_opex_capex_planning",
            "plan_vs_actual_reporting",
        ],
        technologies: ["SAC Planning", "SAC Reporting", "SAP S/4HANA"],
        scopeOverlap: "Partial",
        scopeOverlapTR: "Kısmi",
        evidenceType: "Comparable Experience",
        evidenceTypeTR: "Benzer Deneyim",
        valueEvidence: "Qualitative",
        valueEvidenceTR: "Nitel",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "A selected finance planning process piloted in SAC to validate planning model design, user adoption and reporting integration.",
        outcomeTR:
            "Seçili finans planlama süreci SAC üzerinde pilotlanarak planlama model tasarımı, kullanıcı adaptasyonu ve raporlama entegrasyonu doğrulandı.",
    },
    {
        id: "ref_workforce_planning_modernization",
        title: "Workforce Planning Modernization",
        titleTR: "İş Gücü Planlama Modernizasyonu",
        industry: "Media",
        industryTR: "Medya",
        customerType: "SAP-heavy",
        relatedOfferingIds: ["workforce_cost_planning_pack"],
        relatedUseCaseIds: [
            "workforce_opex_capex_planning",
            "integrated_financial_planning",
            "budget_cycle_optimization",
            "management_reporting_automation",
        ],
        technologies: [
            "SAC Planning",
            "SAP SuccessFactors",
            "SAP Payroll",
            "SAC Reporting",
        ],
        scopeOverlap: "Strong",
        scopeOverlapTR: "Güçlü",
        evidenceType: "Delivered Pattern",
        evidenceTypeTR: "Teslimat Deseni",
        valueEvidence: "Estimated",
        valueEvidenceTR: "Tahmini",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Workforce and personnel cost planning standardized with HR and finance data integration, enabling scenario-based headcount and cost planning.",
        outcomeTR:
            "İK ve finans veri entegrasyonu ile workforce ve personel maliyeti planlaması standartlaştırılarak senaryo bazlı headcount ve maliyet planlaması sağlandı.",
    },
    {
        id: "ref_datasphere_data_foundation",
        title: "SAP and non-SAP Data Foundation for Analytics",
        titleTR: "Analitik için SAP ve SAP Dışı Veri Altyapısı",
        industry: "Manufacturing",
        industryTR: "Üretim",
        customerType: "Mixed landscape",
        relatedOfferingIds: ["data_foundation_accelerator"],
        relatedUseCaseIds: [
            "sap_non_sap_data_integration",
            "data_product_reuse",
            "legacy_dwh_modernization",
            "cloud_data_platform_roadmap",
        ],
        technologies: ["SAP Datasphere", "SAP BDC", "SAC", "SAP HANA"],
        scopeOverlap: "Strong",
        scopeOverlapTR: "Güçlü",
        evidenceType: "Comparable Experience",
        evidenceTypeTR: "Benzer Deneyim",
        valueEvidence: "Qualitative",
        valueEvidenceTR: "Nitel",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Reusable data foundation designed to combine SAP and non-SAP data for reporting, planning and future AI-related analytics use cases.",
        outcomeTR:
            "Raporlama, planlama ve gelecekteki AI ilişkili analitik use case’leri için SAP ve SAP dışı verileri birleştiren tekrar kullanılabilir veri altyapısı tasarlandı.",
    },
    {
        id: "ref_executive_reporting_cockpit",
        title: "Executive Management Reporting Cockpit",
        titleTR: "Yönetici Yönetim Raporlama Kokpiti",
        industry: "Manufacturing",
        industryTR: "Üretim",
        customerType: "SAP-heavy",
        relatedOfferingIds: ["executive_reporting_kpi_cockpit"],
        relatedUseCaseIds: [
            "management_reporting_automation",
            "executive_kpi_cockpit",
            "kpi_harmonization",
            "operational_visibility_dashboard",
        ],
        technologies: ["SAC Reporting", "SAP Datasphere", "SAP BW", "SAP BDC"],
        scopeOverlap: "Strong",
        scopeOverlapTR: "Güçlü",
        evidenceType: "Comparable Experience",
        evidenceTypeTR: "Benzer Deneyim",
        valueEvidence: "Estimated",
        valueEvidenceTR: "Tahmini",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Executive reporting cockpit designed to improve KPI visibility, reporting consistency and management-level decision support.",
        outcomeTR:
            "KPI görünürlüğünü, raporlama tutarlılığını ve yönetim seviyesinde karar desteğini artırmak için executive reporting cockpit tasarlandı.",
    },
    {
        id: "ref_monthly_reporting_automation",
        title: "Monthly Management Reporting Automation",
        titleTR: "Aylık Yönetim Raporlama Otomasyonu",
        industry: "Retail",
        industryTR: "Perakende",
        customerType: "Mixed landscape",
        relatedOfferingIds: ["executive_reporting_kpi_cockpit"],
        relatedUseCaseIds: [
            "management_reporting_automation",
            "kpi_harmonization",
            "sap_non_sap_data_integration",
        ],
        technologies: ["SAC Reporting", "SAP Datasphere", "Power BI"],
        scopeOverlap: "Partial",
        scopeOverlapTR: "Kısmi",
        evidenceType: "Delivered Pattern",
        evidenceTypeTR: "Teslimat Deseni",
        valueEvidence: "Estimated",
        valueEvidenceTR: "Tahmini",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Recurring monthly reporting process standardized and positioned for automation using a governed reporting and data foundation.",
        outcomeTR:
            "Tekrarlayan aylık yönetim raporlama süreci standartlaştırılarak yönetilen raporlama ve veri altyapısı üzerinden otomasyon için konumlandırıldı.",
    },
    {
        id: "ref_profitability_margin_cockpit",
        title: "Product and Customer Profitability Cockpit",
        titleTR: "Ürün ve Müşteri Kârlılığı Kokpiti",
        industry: "Consumer Goods",
        industryTR: "Tüketim Ürünleri",
        customerType: "SAP-heavy",
        relatedOfferingIds: ["profitability_visibility_pack"],
        relatedUseCaseIds: [
            "product_customer_profitability",
            "margin_cost_driver_analysis",
            "management_reporting_automation",
        ],
        technologies: ["SAC Reporting", "SAP Datasphere", "SAP S/4HANA", "SAP BDC"],
        scopeOverlap: "Strong",
        scopeOverlapTR: "Güçlü",
        evidenceType: "Comparable Experience",
        evidenceTypeTR: "Benzer Deneyim",
        valueEvidence: "Qualitative",
        valueEvidenceTR: "Nitel",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Profitability cockpit concept created to analyze margin visibility by product, customer and channel and identify value leakage areas.",
        outcomeTR:
            "Ürün, müşteri ve kanal bazında marj görünürlüğünü analiz etmek ve değer kaybı alanlarını belirlemek için kârlılık kokpiti konsepti oluşturuldu.",
    },
    {
        id: "ref_cost_allocation_automation",
        title: "Cost Allocation Automation Pattern",
        titleTR: "Maliyet Dağıtımı Otomasyonu Deseni",
        industry: "Shared Services",
        industryTR: "Shared Services",
        customerType: "SAP-heavy",
        relatedOfferingIds: ["profitability_visibility_pack"],
        relatedUseCaseIds: [
            "cost_allocation_automation",
            "margin_cost_driver_analysis",
            "integrated_financial_planning",
        ],
        technologies: ["SAC Planning", "SAP Datasphere", "SAP PaPM", "SAP S/4HANA"],
        scopeOverlap: "Partial",
        scopeOverlapTR: "Kısmi",
        evidenceType: "Comparable Experience",
        evidenceTypeTR: "Benzer Deneyim",
        valueEvidence: "Estimated",
        valueEvidenceTR: "Tahmini",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Cost allocation logic positioned for automation to improve transparency, repeatability and planning/reporting integration.",
        outcomeTR:
            "Maliyet dağıtım mantığı; şeffaflık, tekrar edilebilirlik ve planlama/raporlama entegrasyonunu artırmak için otomasyona konumlandırıldı.",
    },
    {
        id: "ref_bdc_value_roadmap",
        title: "SAP BDC Analytics Roadmap Discovery",
        titleTR: "SAP BDC Analitik Roadmap Keşfi",
        industry: "Manufacturing",
        industryTR: "Üretim",
        customerType: "SAP-heavy",
        relatedOfferingIds: ["sap_bdc_value_discovery"],
        relatedUseCaseIds: [
            "cloud_data_platform_roadmap",
            "data_product_reuse",
            "legacy_dwh_modernization",
            "sap_non_sap_data_integration",
        ],
        technologies: ["SAP BDC", "SAP Datasphere", "SAC", "SAP Data Products"],
        scopeOverlap: "Strong",
        scopeOverlapTR: "Güçlü",
        evidenceType: "Comparable Experience",
        evidenceTypeTR: "Benzer Deneyim",
        valueEvidence: "Qualitative",
        valueEvidenceTR: "Nitel",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "BDC roadmap concept structured around data products, Datasphere, SAC consumption and AI-ready analytics opportunities.",
        outcomeTR:
            "Data product’lar, Datasphere, SAC tüketimi ve AI’a hazır analitik fırsatları etrafında BDC roadmap konsepti yapılandırıldı.",
    },
    {
        id: "ref_process_value_discovery",
        title: "Process Value Discovery and Automation Prioritization",
        titleTR: "Süreç Değer Keşfi ve Otomasyon Önceliklendirme",
        industry: "Operations",
        industryTR: "Operasyon",
        customerType: "Technology-neutral",
        relatedOfferingIds: ["process_intelligence_value_discovery"],
        relatedUseCaseIds: [
            "process_mining_value_assessment",
            "process_bottleneck_analysis",
            "automation_opportunity_prioritization",
            "process_kpi_cockpit",
        ],
        technologies: ["Celonis", "SAP Signavio", "SAC Reporting", "Power Platform"],
        scopeOverlap: "Strong",
        scopeOverlapTR: "Güçlü",
        evidenceType: "Comparable Experience",
        evidenceTypeTR: "Benzer Deneyim",
        valueEvidence: "Estimated",
        valueEvidenceTR: "Tahmini",
        confidence: "Medium",
        confidenceTR: "Orta",
        outcome:
            "Process inefficiencies and automation opportunities identified and prioritized based on estimated value and implementation feasibility.",
        outcomeTR:
            "Süreç verimsizlikleri ve otomasyon fırsatları, tahmini değer ve uygulanabilirliğe göre belirlenip önceliklendirildi.",
    },
];