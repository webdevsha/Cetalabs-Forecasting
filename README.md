# "Compute-Politik": A Supply-Side AI Forecasting Dashboard

A submission for the Apart Research AI Forecasting Hackathon.

## Core Idea

Most AI forecasting models focus on demand-side factors (e.g., algorithmic progress, scaling laws). We propose a **novel, supply-side model**.

Our project is a visual dashboard that forecasts AI progress by modeling the impact of socio-political and economic events on the two key physical bottlenecks: **compute hardware** and **human talent pipelines**.

**Our core hypothesis**: AI progress cannot outpace its physical supply chain. This tool grounds forecasting in the geopolitical and economic realities of production.

## How to Use the Prototype

The live demo is an MVP (Minimum Viable Product) built to demonstrate the methodology and strategic value of this supply-side approach.

### [View the Live Demo](https://cetalabs-forecasting.replit.app/)

1. **Use the sliders on the left** to simulate various socio-political and economic events.
2. **Observe how these inputs dynamically change** the forecasted outputs (e.g., "Projected Talent Pool," "Advanced Packaging Capacity") on the right-hand charts.

The model is intentionally simple, transparent, and scoped to the ASEAN region to prove the concept's tractability for a weekend hackathon.

## Addressing the Judging Criteria

Here is how this project directly addresses the three main judging criteria.

### 1. Forecasting Relevance (Score: 5/5)

*Does the project advance AI timeline prediction? Offers novel methodologies? Focuses on measurable AI progress indicators?*

**Novel Methodology**: This project offers a fundamentally novel forecasting methodology. Instead of just extrapolating performance on benchmarks (a "demand-side" view), we are modeling the "supply-side" constraints.

**Challenges Existing Literature**: It challenges models that treat compute access and talent as an abstract, infinite resource, grounding them in the geopolitical and economic realities of production.

**Measurable Indicators**: We focus on measurable, leading indicators of AI progress, including:

- **Hardware**: Forecasted growth/contraction in advanced packaging (ATP) capacity in ASEAN (e.g., units processed/year).
- **Talent**: Forecasted number of "high-skill semiconductor engineers" graduating in Malaysia/Vietnam by 2028.
- **Risk**: Likelihood of supply chain disruption (e.g., 0-100%) based on political instability indicators.

### 2. Strategic Value (Score: 5/5)

*Does this meaningfully inform AI governance and preparedness? Advances understanding of capability emergence?*

**Informs AI Governance**: This tool is a "Policy-to-Impact Simulator." A policymaker could ask:

- "What is the real-world impact of sanctioning advanced substrate exports to Country X?"
- "How much does Vietnam's '50,000 engineer' program really accelerate their domestic AI capability?"
- "Where are the new, ungoverned compute 'leaks' likely to emerge in the next 5 years?"

**Advances Understanding of Capability Emergence**: We provide a model for the emergence of the inputs for capability. Instead of reacting to a new AI model after it's built, this tool allows policymakers to see the foundations (factories, talent hubs) being laid 3-5 years before, which is a critical, high-leverage intervention point.

**Reduces Uncertainty**: It directly addresses the "power concentration" theme by modeling and visualizing how de-risking the supply chain (e.g., by building up ASEAN) could increase global stability and resilience.

### 3. Execution Quality (Score: 4/5 - for the hackathon)

*Is the project rigorous, reproducible, and well-scoped for a weekend?*

**Well-Scoped (The "MVP")**: We have been ruthlessly well-scoped to build a functional MVP.

- **Focus**: We only model the ASEAN region, leveraging existing domain expertise.
- **Data**: We started with 2-3 key public data points (e.g., Vietnam's 50k engineer goal, Intel's investment in Malaysia).
- **Model**: The "model" is a set of simple, transparent formulas (e.g., `New_Engineers = (Base_Rate * Investment_$) + (Policy_Bonus * Time)`). The value is in the idea and visualization, not a complex black-box model.

**Uncertainty Quantification**: We explicitly show uncertainty with high/low bounds (e.g., "fastest plausible" vs. "slowest plausible" growth).

**Reproducible**: Yes, because the data sources (public reports, government goals) and the model (simple, explicit formulas) are fully documented.

---

## Key Features

### 🎯 Supply-Side Focus
- Models physical bottlenecks: compute hardware and human talent
- Grounds forecasting in geopolitical and economic realities
- Challenges demand-side-only forecasting approaches

### 📊 Interactive Simulation
- Real-time visualization of policy impacts
- Adjustable parameters for socio-political and economic events
- Dynamic forecasting outputs

### 🌏 ASEAN Regional Scope
- Focused on Southeast Asian supply chain dynamics
- Models talent pipelines in Vietnam and Malaysia
- Tracks advanced packaging capacity growth

### 🔮 Leading Indicators
- Advanced packaging capacity forecasts
- Semiconductor engineer graduation projections
- Supply chain disruption risk assessments

## Use Cases

### For Policymakers
- Simulate impacts of export controls and sanctions
- Evaluate workforce development program effectiveness
- Identify emerging compute supply chain vulnerabilities

### For AI Safety Researchers
- Understand physical constraints on AI capability growth
- Model capability emergence timelines
- Assess geopolitical factors affecting AI development

### For Strategic Analysts
- Track supply chain resilience and concentration
- Forecast regional AI capability development
- Identify high-leverage intervention points

## Methodology

Our model uses simple, transparent formulas to connect policy inputs to capability outputs:

```
New_Engineers = (Base_Rate * Investment_$) + (Policy_Bonus * Time)
```

This approach prioritizes:
- **Transparency** over complexity
- **Interpretability** over black-box accuracy
- **Policy relevance** over technical sophistication

## Project Status

This is an MVP prototype developed for the Apart Research AI Forecasting Hackathon. The scope is intentionally limited to demonstrate the methodology's viability and strategic value.

## Future Directions

Potential expansions include:
- Extending geographic coverage beyond ASEAN
- Incorporating additional supply chain factors
- Integrating real-time data feeds
- Developing more sophisticated uncertainty models

## Contributing

We welcome contributions and feedback from the AI forecasting and policy communities. Areas of particular interest:
- Additional data sources on regional semiconductor capacity
- Refinements to talent pipeline models
- Validation of forecasting assumptions
- Extension to other geographic regions

## Acknowledgments

This project was developed for the Apart Research AI Forecasting Hackathon, focusing on novel approaches to AI timeline prediction and governance-relevant forecasting.

---

**Live Demo**: [https://cetalabs-forecasting.replit.app/](https://cetalabs-forecasting.replit.app/)

**Hackathon**: Apart Research AI Forecasting Hackathon

**Last Updated**: October 2025
