import { servicesData } from '../servicesData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const slug = 'water-heater-repair'
const data = servicesData[slug]

export const metadata = {
  title: data.metaTitle,
  description: data.metaDesc,
}

export default function Page() {
  return <ServicePageTemplate slug={slug} data={data} />
}
