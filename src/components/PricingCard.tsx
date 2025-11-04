import { Check } from 'lucide-react'


type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
}


export function PricingCard({ plan }: { plan: Plan }){
return (
<div className="card p-6 flex flex-col gap-4">
<div>
<h3 className="text-xl font-semibold">{plan.name}</h3>
<p className="text-muted">{plan.blurb}</p>
</div>
<div className="text-3xl font-bold text-electric">{plan.price}</div>
<ul className="text-sm space-y-2">
{plan.features.map((f, i) => (
<li key={i} className="flex items-start gap-2"><Check className="text-electric" size={16}/><span>{f}</span></li>
))}
</ul>
<a href="mailto:contact@tylercobb.dev" className="btn btn-primary mt-auto">Start Project</a>
</div>
)
}