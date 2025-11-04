'use client'
import { motion } from 'framer-motion'


export function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }){
return (
<motion.section
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.5, delay }}
className="card p-6 md:p-8 shadow-glow"
>
{children}
</motion.section>
)
}