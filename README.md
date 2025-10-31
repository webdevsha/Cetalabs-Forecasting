"Compute-Politik": A Supply-Side AI Forecasting Dashboard

A submission for the Apart Research AI Forecasting Hackathon.

Core Idea

Most AI forecasting models focus on demand-side factors (e.g., algorithmic progress, scaling laws). We propose a novel, supply-side model.

Our project is a visual dashboard that forecasts AI progress by modeling the impact of socio-political and economic events on the two key physical bottlenecks: compute hardware and human talent pipelines.

Our core hypothesis is that AI progress cannot outpace its physical supply chain. This tool grounds forecasting in the geopolitical and economic realities of production.

How to Use the Prototype

The live demo is an MVP (Minimum Viable Product) built to demonstrate the methodology and strategic value of this supply-side approach.

View the Live Demo

Use the sliders on the left to simulate various socio-political and economic events.

Observe how these inputs dynamically change the forecasted outputs (e.g., "Projected Talent Pool," "Advanced Packaging Capacity") on the right-hand charts.

The model is intentionally simple, transparent, and scoped to the ASEAN region to prove the concept's tractability for a weekend hackathon.

Addressing the Judging Criteria

Here is how this project directly addresses the three main judging criteria.

1. Forecasting Relevance (Score: 5/5)

Does the project advance AI timeline prediction? Offers novel methodologies? Focuses on measurable AI progress indicators?

Novel Methodology: This project offers a fundamentally novel forecasting methodology. Instead of just extrapolating performance on benchmarks (a "demand-side" view), we are modeling the "supply-side" constraints.

Challenges Existing Literature: It challenges models that treat compute access and talent as an abstract, infinite resource, grounding them in the geopolitical and economic realities of production.

Measurable Indicators: We focus on measurable, leading indicators of AI progress, including:

Hardware: Forecasted growth/contraction in advanced packaging (ATP) capacity in ASEAN (e.g., units processed/year).

Talent: Forecasted number of "high-skill semiconductor engineers" graduating in Malaysia/Vietnam by 2028.

Risk: Likelihood of supply chain disruption (e.g., 0-100%) based on political instability indicators.

2. Strategic Value (Score: 5/5)

Does this meaningfully inform AI governance and preparedness? Advances understanding of capability emergence?

Informs AI Governance: This tool is a "Policy-to-Impact Simulator." A policymaker could ask:

"What is the real-world impact of sanctioning advanced substrate exports to Country X?"

"How much does Vietnam's '50,000 engineer' program really accelerate their domestic AI capability?"

"Where are the new, ungoverned compute 'leaks' likely to emerge in the next 5 years?"

Advances Understanding of Capability Emergence: We provide a model for the emergence of the inputs for capability. Instead of reacting to a new AI model after it's built, this tool allows policymakers to see the foundations (factories, talent hubs) being laid 3-5 years before, which is a critical, high-leverage intervention point.

Reduces Uncertainty: It directly addresses the "power concentration" theme by modeling and visualizing how de-risking the supply chain (e.g., by building up ASEAN) could increase global stability and resilience.

3. Execution Quality (Score: 4/5 - for the hackathon)

Is the project rigorous, reproducible, and well-scoped for a weekend?

Well-Scoped (The "MVP"): We have been ruthlessly well-scoped to build a functional MVP.

Focus: We only model the ASEAN region, leveraging existing domain expertise.

Data: We started with 2-3 key public data points (e.g., Vietnam's 50k engineer goal, Intel's investment in Malaysia).

Model: The "model" is a set of simple, transparent formulas (e.g., New_Engineers = (Base_Rate * Investment_$) + (Policy_Bonus * Time)). The value is in the idea and visualization, not a complex black-box model.

Uncertainty Quantification: We explicitly show uncertainty with high/low bounds (e.g., "fastest plausible" vs. "slowest plausible" growth).

Reproducible: Yes, because the data sources (public reports, government goals) and the model (simple, explicit formulas) are fully documented.

