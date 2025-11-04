import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'


export function ProjectCard({ title, desc, href, code }: { title: string; desc: string; href: string; code?: string }){
return (
<div className="card p-5 hover:shadow-glow transition-shadow">
<h3 className="text-lg font-semibold mb-2">{title}</h3>
<p className="text-sm text-muted mb-4">{desc}</p>
<div className="flex gap-3">
<Link href={href} className="btn btn-primary">Live Demo <ArrowUpRight size={16}/></Link>
{code && <Link href={code} className="btn">View Code</Link>}
</div>
</div>
)
}